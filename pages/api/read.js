let submissions = []; // stored in memory temporarily

export default async function handler(req, res) {
  if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      submissions.push({
        time: new Date().toISOString(),
        body,
      });

      res.status(200).send('Saved!');
    });
  } else if (req.method === 'GET') {
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(`
      <h2>📋 Form Submissions</h2>
      <ul>
        ${submissions.map(s => `<li><strong>${s.time}</strong>: ${s.body}</li>`).join('')}
      </ul>
    `);
  } else {
    res.status(405).send('Method not allowed');
  }
}
