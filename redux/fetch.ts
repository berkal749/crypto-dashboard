let coin:any[]=[];

async function fetchData() {
  try {
    // Fixed: Complete URL in one line, no extra "GET" method
    const response = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1"
    );

    if (!response.ok) {
      throw new Error("Fetch failed");
    }

    const data = await response.json(); // Added 'await'
    coin=data;
  } catch (error) {
    console.error("Error:", error);
  }
}
