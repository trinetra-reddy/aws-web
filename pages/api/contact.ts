// /pages/api/contact.ts
import { Resend } from 'resend';
import type { NextApiRequest, NextApiResponse } from 'next';

const resend = new Resend(process.env.RESEND_API_KEY); // Get from https://resend.com/api-keys

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method Not Allowed' });

  const { name, email, phone, requirement } = req.body;

  if (!name || !email || !requirement) {
    return res.status(400).json({ message: 'Name, email, and requirement are required.' });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev', // Must match domain setup
      to: ['trinethraalamur@gmail.com'],
      subject: `Contact Inquiry from ${name}`,
      html: `
        <h2>New Contact Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Requirement:</strong> ${requirement}</p>
      `
    });

    if (error) return res.status(500).json({ message: 'Failed to send email.', error });

    return res.status(200).json({ message: 'Email sent successfully.' });
  } catch (err) {
    return res.status(500).json({ message: 'Failed to send email.', error: err });
  }
}
