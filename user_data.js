const userData = {
    // 1. BASIC DETAILS
    name: "Arjun",
    role: "Visual Storyteller",
    location: "Hyderabad, India",
    email: "arjun@example.com",
    profile_image_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",

    // 2. THE AI BRAIN (THEORY)
    ai_knowledge_base: "I am an expert in Candid Wedding Photography with 7 years of experience in South Indian traditions. My style is cinematic and natural, strictly avoiding artificial poses. I use Sony Alpha A7IV and G-Master lenses. I am available for destination weddings in Hyderabad, Bangalore, and Goa. My pricing starts from 1 Lakh per day.",

    // 3. SOCIAL LINKS
    social_links: {
        instagram: "https://instagram.com",
        youtube: "https://youtube.com",
        linkedin: "https://linkedin.com"
    },

    // 4. ATTACHMENTS
    attachments: [
        { name: "Download Pricing PDF", url: "#" },
        { name: "View Best Shots", url: "#" }
    ],

    // 5. AI AGENT INSTRUCTIONS (NEW)
    // This controls how your Widget talks to visitors
    ai_agent_instructions: {
        enabled: true,
        agent_name: "Arjun's AI",
        welcome_msg: "Hi! I handle Arjun's bookings. Ask me about dates or pricing.",
        system_prompt: "You are a helpful assistant for a photographer. Use the 'ai_knowledge_base' to answer questions. Be polite and professional."
    }
};