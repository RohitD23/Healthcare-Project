const API_URL = "http://localhost:8000/api";

async function httpSubmitFeedback(data) {
  const response = await fetch(`${API_URL}/feedback`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return await response.json();
}

export { httpSubmitFeedback };
