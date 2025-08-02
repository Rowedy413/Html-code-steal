export default async function handler(req, res) {
  const url = req.body?.url;
  if (!url) return res.status(400).send("Missing URL");

  try {
    const response = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0' }
    });
    const html = await response.text();
    res.status(200).send(html);
  } catch (err) {
    res.status(500).send("❌ Error fetching the URL.");
  }
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '50mb',
    },
  },
};
