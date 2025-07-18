export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).end();
    const { userMsg } = req.body;
    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
    const GEMINI_ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;
    const FARETRADE_KB = `
  Company: Fare Trade Capital LLC (since 2022)
  Location: 300 Carnegie Center, Suite 150, Princeton, NJ 08540
  Email: info@faretradecapital.com
  Website: faretradecapital.com
  Main activities:
  - Acquisition of residential and commercial properties
  - Fix & Flip (renovation + resale)
  - Redevelopment of distressed assets
  - Multi-family development
  - Private Equity Real Estate
  Clients: Individual and institutional investors
  Values:
  - Transparency in all investment processes
  - Professional mentorship for new investors
  - Award-winning service
  - Innovation & accessibility
  - Sustainable urban development
  Leadership:
  - James Charlot – Chief Visionary Officer (CVO)
  - Adisa Bakari – Director, Private Equity
  - Chasity Bascoe – Director of Project Management
  - Asiyah Kurtz – Director of Communications
  - Cheryna Williams – Director of Acquisitions
  Recent projects:
  - Sheffield Street, Orange NJ: Multi-family rehab
  - North Fifth Street, Newark NJ: Acquisition & resale after renovation
  - Whittier Place, East Orange NJ: Modernization & repositioning
  - Main Street, East Orange NJ: Residential transformation into 2 modern units
  Blog topics:
  - Due diligence importance
  - How to spot a good real estate opportunity
  - Fix & Flip vs. Multi-family
  - Sustainability in real estate
  - Smart financing for beginners
  Contact form fields:
  - First/Last name, Email, Phone, Profile type (Beginner, Experienced, Accredited), Consent for marketing
  Sample Q&A:
  Q: What does Fare Trade Capital do?
  A: Fare Trade Capital is a real estate investment company based in Princeton, NJ, specializing in buying, renovating, and reselling residential and commercial properties.
  Q: Who are your services for?
  A: Our services are for beginner, experienced, or accredited investors seeking returns through real estate.
  Q: Who leads the company?
  A: Our founder and CVO is James Charlot, supported by a team of specialists in project management, acquisitions, private equity, and communications.
  Q: Any project examples?
  A: Yes, recent projects include Sheffield Street (Orange), North Fifth (Newark), and Main Street (East Orange), NJ.
  Q: How can I contact you?
  A: Use the contact form on our website or email info@faretradecapital.com.
    `;
    const prompt = `You are Fare Trade Assistant, a helpful, professional real estate investment assistant for Fare Trade Capital. Use only the following company knowledge to answer.\n\nKnowledge base:\n${FARETRADE_KB}\n\nUser question: ${userMsg}\n\nAnswer as a helpful assistant, in English, in a clear and friendly tone.`;
    const body = { contents: [{ parts: [{ text: prompt }] }] };
    const geminiRes = await fetch(GEMINI_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });
    const data = await geminiRes.json();
    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't find an answer.";
    res.status(200).json({ reply });
  }