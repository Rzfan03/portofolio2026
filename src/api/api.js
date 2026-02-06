export default async function handler(req, res) {
  const response = await fetch("https://api.wakatime.com/api/v1/users/rzfan/stats");
  const data = await response.json();
  
  // Tambahkan Header CORS di sini agar React kamu bisa baca
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).json(data);
}