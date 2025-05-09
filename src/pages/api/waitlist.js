export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { email } = req.body;

    if (!email || !email.includes('@')) {
      return res.status(400).json({ message: 'Valid email is required' });
    }

    // Here you would typically:
    // 1. Store the email in a database
    // 2. Or send it to a mailing list provider like Mailchimp
    
    // This is a placeholder for your actual implementation
    console.log('New waitlist signup:', email);
    
    // For now, we'll just send back a success response
    return res.status(200).json({ 
      message: 'Success! You have been added to the waitlist.' 
    });
    
  } catch (error) {
    console.error('Waitlist error:', error);
    return res.status(500).json({ message: 'Something went wrong' });
  }
}