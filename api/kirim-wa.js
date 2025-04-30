export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Metode tidak diizinkan" });
  }

  const { nama, kelas } = req.body;

  const nomorWhatsApp = "6285736486023"; // Ganti dengan nomor Anda
  const pesan = `Absen Baru:\nNama: ${nama}\nKelas: ${kelas}`;
  const encodedPesan = encodeURIComponent(pesan);
  const waLink = `https://wa.me/${nomorWhatsApp}?text=${encodedPesan}`;

  res.status(200).json({
    message: "Absen berhasil, klik OK untuk buka WhatsApp.",
    waLink
  });
}
