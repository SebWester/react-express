const API_URL = "http://localhost:3000/api/test";

export const fetchData = async () => {
  try {
    const response = await fetch(`${API_URL}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (err) {
    console.error("Failed to fetch message:", err);
    throw err; // Vid fel, kasta felet vidare
  }
};
