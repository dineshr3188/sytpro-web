import { useEffect, useState } from "react";

export default function ResetPassword() {
  const params = new URLSearchParams(window.location.search);
  const token = params.get("token");

  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [valid, setValid] = useState(true);

  useEffect(() => {
    if (!token) {
      setValid(false);
      setError("Invalid or missing reset token.");
    }
  }, [token]);

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(
        "https://api.sytpro.in/api/auth/email/reset-password",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token, newPassword: password }),
        }
      );

      const text = await res.text();
      if (!res.ok) throw new Error(text);

      setMessage("✅ Password reset successful. You may close this page.");
    } catch (e) {
      setError("❌ Reset link expired or invalid.");
    } finally {
      setLoading(false);
    }
  };

  if (!valid) {
    return (
      <div style={styles.center}>
        <div style={styles.card}>
          <h2 style={styles.title}>Reset Password</h2>
          <p style={styles.error}>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.center}>
      <div style={styles.card}>
        <h2 style={styles.title}>Reset Password</h2>
        <p style={styles.subtitle}>
          Enter a new password for your account
        </p>

        <form onSubmit={submit}>
          <input
            type="password"
            placeholder="New password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />

          <input
            type="password"
            placeholder="Confirm password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            style={{ ...styles.input, marginTop: 12 }}
            required
          />

          {error && <p style={styles.error}>{error}</p>}
          {message && <p style={styles.success}>{message}</p>}

          <button
            type="submit"
            disabled={loading}
            style={{
              ...styles.button,
              opacity: loading ? 0.7 : 1,
            }}
          >
            {loading ? "Resetting..." : "Reset Password"}
          </button>
        </form>
      </div>
    </div>
  );
}
