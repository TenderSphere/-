// script.js
    // 1. Dynamic Navbar Scroll Logic
    const nav = document.getElementById('mainNav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // 2. YOUR GOOGLE CREDENTIALS 
// 1. YOUR GOOGLE CREDENTIALS
const API_KEY = "AIzaSyCmu4s_7eAYxgBXJKvRQcLNOqBVHznZOSY";
const CX_ID = "576c8c11804ec4b57";

async function simulateSearch() {
    const query = document.getElementById('tenderSearch').value;
    const btnText = document.getElementById('btnText');
    const resultsList = document.getElementById('resultsList');
    
    if (!query) {
        alert("Please enter a keyword to scan the engine.");
        return;
    }

    // UI State: Show scanning animation
    btnText.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i> Analyzing Portals...';
    document.getElementById('searchBtn').disabled = true;
    
    // Clear previous results
    if(resultsList) resultsList.innerHTML = "";

    try {
        // FETCH DATA FROM GOOGLE
        const url = `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CX_ID}&q=${query}`;
        const response = await fetch(url);
        const data = await response.json();

        console.log("Search Results:", data);

        if (data.items) {
            displayResults(data.items);
        } else {
            if(resultsList) resultsList.innerHTML = "<p style='color: #ff4d4d;'>No live tenders found for this query.</p>";
            alert("No results found. Try broader keywords.");
        }

    } catch (error) {
        console.error("Search Error:", error);
        alert("Engine failed to scan. Check your API connection.");
    } finally {
        // Restore Button State
        btnText.innerHTML = 'Scan Engine';
        document.getElementById('searchBtn').disabled = false;
    }
}

function displayResults(items) {
    const resultsList = document.getElementById('resultsList');
    if (!resultsList) return;

    // Build the HTML for the results
    resultsList.innerHTML = items.map(item => `
        <div style="background: rgba(255,255,255,0.05); border: 1px solid rgba(0,242,255,0.2); padding: 20px; border-radius: 12px; margin-bottom: 15px; backdrop-filter: blur(10px);">
            <h3 style="margin-top: 0;"><a href="${item.link}" target="_blank" style="color: #00f2ff; text-decoration: none;">${item.title}</a></h3>
            <p style="color: #ccc; font-size: 0.9rem;">${item.snippet}</p>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 15px;">
                <span style="font-size: 0.8rem; color: #888;">Source: ${item.displayLink}</span>
                <a href="${item.link}" target="_blank" style="background: #00f2ff; color: #000; padding: 8px 16px; border-radius: 6px; text-decoration: none; font-weight: bold; font-size: 0.8rem;">VIEW DETAILS</a>
            </div>
        </div>
    `).join('');
}

    // 3. Chatbot Trigger Logic
    document.getElementById('chatbotTrigger').addEventListener('click', () => {
        const chatContainer = document.getElementById('chatContainer');
    });

    // 4. Form Submission Logic
    document.getElementById('demoForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const submitBtn = e.target.querySelector('button');
        const originalText = submitBtn.innerText;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing Request...';
        
        setTimeout(() => {
            alert("Success! Your private demo request has been prioritized. A specialist will contact you on your corporate email shortly.");
            submitBtn.innerText = originalText;
            e.target.reset();
        }, 1200);
    });


function portalRouter(state) {
    const urls = {
        // States
        "Andhra Pradesh": "https://tender.apeprocurement.gov.in/",
        "Arunachal Pradesh": "https://arunachaletenders.gov.in/",
        "Assam": "https://assamtenders.gov.in/",
        "Bihar": "https://eproc2.bihar.gov.in/",
        "Chhattisgarh": "https://eproc.cgstate.gov.in/",
        "Goa": "https://eprocure.goa.gov.in/",
        "Gujarat": "https://www.nprocure.com/",
        "Haryana": "https://etenders.hry.nic.in/",
        "Himachal Pradesh": "https://hptenders.gov.in/",
        "Jharkhand": "https://jharkhandtenders.gov.in/",
        "Karnataka": "https://kppp.karnataka.gov.in/",
        "Kerala": "https://etenders.kerala.gov.in/",
        "Madhya Pradesh": "https://mptenders.gov.in/",
        "Maharashtra": "https://mahatenders.gov.in/",
        "Manipur": "https://manipurtenders.gov.in/",
        "Meghalaya": "https://meghalayatenders.gov.in/",
        "Mizoram": "https://mizoramtenders.gov.in/",
        "Nagaland": "https://nagalandtenders.gov.in/",
        "Odisha": "https://tendersodisha.gov.in/",
        "Punjab": "https://eproc.punjab.gov.in/",
        "Rajasthan": "https://eproc.rajasthan.gov.in/",
        "Sikkim": "https://sikkimtender.gov.in/",
        "Tamil Nadu": "https://tntenders.gov.in/",
        "Telangana": "https://tender.telangana.gov.in/",
        "Tripura": "https://tripuratenders.gov.in/",
        "Uttar Pradesh": "https://etender.up.nic.in/",
        "Uttarakhand": "https://uktenders.gov.in/",
        "West Bengal": "https://wbtenders.gov.in/",
        
        // Union Territories
        "Andaman & Nicobar": "https://eprocure.gov.in/epublish/app",
        "Chandigarh": "https://etenders.chd.nic.in/",
        "D&N Haveli & Daman": "https://dnhtenders.gov.in/",
        "Delhi (NCT)": "https://govtprocurement.delhi.gov.in/",
        "Jammu & Kashmir": "https://jktenders.gov.in/",
        "Ladakh": "https://eprocure.gov.in/eprocure/app",
        "Lakshadweep": "https://tendersutl.gov.in/",
        "Puducherry": "https://pudutenders.gov.in/"
    };

    const targetUrl = urls[state];

    if (targetUrl) {
        // Elite Transition Effect
        const loadingDiv = document.createElement('div');
        loadingDiv.style.cssText = `
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(3, 3, 11, 0.95); backdrop-filter: blur(15px);
            display: flex; flex-direction: column; align-items: center; justify-content: center;
            z-index: 10000; color: white; transition: 0.5s;
        `;
        loadingDiv.innerHTML = `
            <div style="font-size: 2rem; font-weight: 800; margin-bottom: 20px;">
                Tender<span style="color: #00f2ff;">Sphere</span>
            </div>
            <div style="width: 50px; height: 50px; border: 3px solid #7000ff; border-top-color: #00f2ff; border-radius: 50%; animation: spin 0.8s linear infinite;"></div>
            <p style="margin-top: 20px; letter-spacing: 2px; color: #a0a0b5;">REDIRECTING TO ${state.toUpperCase()} PORTAL</p>
        `;
        
        // Add animation keyframes
        if (!document.getElementById('spinStyle')) {
            const style = document.createElement('style');
            style.id = 'spinStyle';
            style.innerHTML = "@keyframes spin { to { transform: rotate(360deg); } }";
            document.head.appendChild(style);
        }

        document.body.appendChild(loadingDiv);

        // Open portal in new tab and remove loader
        setTimeout(() => {
            window.open(targetUrl, '_blank');
            loadingDiv.style.opacity = '0';
            setTimeout(() => document.body.removeChild(loadingDiv), 500);
        }, 1500);
    }
}

// 1. Toggle Chat Visibility
function toggleChat() {
    const chat = document.getElementById('chatContainer');
    chat.style.display = (chat.style.display === 'flex') ? 'none' : 'flex';
}

// Attach to your existing chatbot button
document.getElementById('chatbotTrigger').onclick = toggleChat;

// 2. Chat Logic & Knowledge Base
const botKnowledge = {
    "pricing": "We offer Basic, Professional, and Enterprise plans. Enterprise includes 1-on-1 consultancy and API access.",
    "coverage": "TenderSphere covers all 28 Indian States, 8 UTs, GeM, CPPP, and Global tenders.",
    "company": "TenderSphere is India's premier AI-driven procurement intelligence platform, founded to simplify bidding.",
    "contact": "You can reach our support team at support@tendersphere.in or via the 'Request Demo' form.",
    "alerts": "Yes! We provide real-time alerts via WhatsApp and Email based on your keywords.",
    "hello": "Hello! I am the Sphere AI. How can I help you navigate Indian tenders today?"
};

function handleChat() {
    const input = document.getElementById('chatInput');
    const body = document.getElementById('chatBody');
    const text = input.value.toLowerCase().trim();

    if (!text) return;

    // Add User Message
    body.innerHTML += `<div class="user-msg">${input.value}</div>`;
    input.value = "";

    // Scroll to bottom
    body.scrollTop = body.scrollHeight;

    // AI Response Simulation
    setTimeout(() => {
        let response = "I'm sorry, I don't have information on that specific topic. Would you like to speak with a human expert?";
        
        // Keyword matching logic
        for (let key in botKnowledge) {
            if (text.includes(key)) {
                response = botKnowledge[key];
                break;
            }
        }

        body.innerHTML += `<div class="bot-msg"><b>Sphere AI:</b> ${response}</div>`;
        body.scrollTop = body.scrollHeight;
    }, 800);
}

// Allow "Enter" key to send message
document.getElementById('chatInput').addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        handleChat();
    }
});

// Track Contact Clicks
document.querySelectorAll('.action-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const type = btn.classList.contains('btn-call') ? 'Phone' : 'WhatsApp';
        console.log(`User initiated ${type} contact.`);
        // You can later connect this to Google Analytics
    });
});
