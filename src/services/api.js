export async function postJson(path, data) {
  const res = await fetch(process.env.REACT_APP_API_BASE + path, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "include"
  });
  return res.json();
}

export async function getJson(path) {
  const res = await fetch(process.env.REACT_APP_API_BASE + path, {
    credentials: "include",
  });
  return res.json();
}
