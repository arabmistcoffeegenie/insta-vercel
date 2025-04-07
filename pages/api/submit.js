export default async function handler(req, res) {
  if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      console.log('Form submitted:', body);
      res.status(200).send('Submission received!');
    });
  } else {
    res.status(405).send('Method not allowed');
  }
}
