// pages/api/submit.js
import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const response = await axios.post(
        'https://script.google.com/macros/s/AKfycbzSbkgsDTFPwb2YLdX13ObsUb9Vx4KEJvyxAU1X2ocucN0UEhKoAJSsP4FR_HmmKEek/exec',
        req.body, // Ensure req.body contains countryCode
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return res.status(response.status).json(response.data);
    } catch (error) {
      return res.status(500).json({ error: 'Error submitting data' });
    }
  } else {
    return res.setHeader('Allow', ['POST']).status(405).end(`Method ${req.method} Not Allowed`);
  }
}
