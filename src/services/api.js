export async function postJson(path, data) {
  const res = await fetch(`${import.meta.env.VITE_API_BASE}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error(`POST ${path} failed with status ${res.status}`);
  }

  return res.json();
}

export async function getJson(path) {
  const res = await fetch(`${import.meta.env.VITE_API_BASE}${path}`);

  if (!res.ok) {
    throw new Error(`GET ${path} failed with status ${res.status}`);
  }

  return res.json();
}
