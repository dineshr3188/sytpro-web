import { useEffect, useState } from "react";

export default function ResetPassword() {
  const params = new URLSearchParams(window.location.search);
  const token = params.get("token");

  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [valid, setValid] = useState(true);

  // Optional: validate token on load
  useEffect(() => {
    if (!token) {
      setValid(false);
      setMessage("Invalid or missing reset token.");
    }
  }, [token]);

  const submit = async (e) => {
    e.preventDefault();

    if (password.length < 8) {
      setMessage("Password must be at least 8 characters.");
      return;
    }

    if (password !== confirm) {
      setMessage("Passwords do not match.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const res = await fetch(
        "https://api.sytpro.in/api/auth/email/reset-password",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            token,
            newPassword: password,
          }),
        }
      );

      const text = await res.text();

      if (!res.ok) throw new Error(text);

      setMessage("✅ Password reset successful. You may close this page.");
    } catch (e) {
      setMessage("❌ Reset link expired or invalid.");
    } finally {
      setLoading(false);
    }
  };

  if (!valid) {
    return <p style={{ padding: 20 }}>{message}</p>;
  }

  return (
    <div style={{ maxWidth: 400, margin: "80px auto" }}>
      <h2>Reset Password</h2>

      <form onSubmit={submit}>
        <input
          type="password"
          placeholder="New password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Confirm password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          required
          style={{ marginTop: 10 }}
        />

        <button disabled={loading} style={{ marginTop: 20 }}>
          {loading ? "Resetting..." : "Reset Password"}
        </button>
      </form>

      {message && <p style={{ marginTop: 20 }}>{message}</p>}
    </div>
  );
}
