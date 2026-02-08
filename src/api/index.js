import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

// Route API untuk WakaTime
app.get('/api/wakatime', async (req, res) => {
  try {
    // Log awal untuk debug di Vercel Functions
    console.log('Request masuk ke /api/wakatime');

    const wakaResponse = await fetch("https://api.wakatime.com/api/v1/users/rzfan/stats", {
      // Tambahkan timeout agar tidak hang selamanya
      signal: AbortSignal.timeout(10000), // 10 detik timeout
    });

    console.log('Status dari WakaTime:', wakaResponse.status);

    if (!wakaResponse.ok) {
      const errorText = await wakaResponse.text();
      console.error('WakaTime gagal:', wakaResponse.status, errorText);
      return res.status(wakaResponse.status).json({
        error: 'Gagal mengambil data dari WakaTime',
        status: wakaResponse.status,
        detail: errorText || 'Tidak ada detail error',
      });
    }

    const data = await wakaResponse.json();

    console.log('Data berhasil di-parse');

    // Kirim data ke frontend
    res.json(data);
  } catch (error) {
    console.error('Error di server:', error.message, error.stack);
    res.status(500).json({
      error: 'Internal server error',
      message: error.message || 'Terjadi kesalahan tidak diketahui',
    });
  }
});

// Route tes sederhana (untuk cek apakah function hidup)
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend Vercel hidup dan siap!' });
});

// Optional: redirect root ke tes atau API
app.get('/', (req, res) => {
  res.redirect('/api/test');
});

export default app;