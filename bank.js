const schemes = [
    // Central Government Schemes
    {
        name: "Pradhan Mantri Jan Dhan Yojana (PMJDY)",
        description: "Universal access to banking services, financial inclusion, and direct benefit transfers.",
        link: "https://pmjdy.gov.in/",
        type: "central"
    },
    {
        name: "Pradhan Mantri Jeevan Jyoti Bima Yojana (PMJJBY)",
        description: "Life insurance coverage of ₹2 lakh for death due to any cause.",
        link: "https://financialservices.gov.in/beta/en/pmjjby",
        type: "central"
    },
    {
        name: "Pradhan Mantri Suraksha Bima Yojana (PMSBY)",
        description: "Accidental death and disability insurance coverage of up to ₹2 lakh.",
        link: "https://financialservices.gov.in/beta/en/pmsby",
        type: "central"
    },
    {
        name: "Kisan Credit Card (KCC)",
        description: "Provides credit support for farmers to meet agricultural and related expenses.",
        link: "https://fasalrin.gov.in/",
        type: "central"
    },
    {
        name: "Pradhan Mantri Mudra Yojana (PMMY)",
        description: "Financial support for microenterprises under Shishu, Kishore, and Tarun categories.",
        link: "https://www.mudra.org.in/",
        type: "central"
    },
    {
        name: "Mahila Samman Savings Certificate",
        description: "Encourages women to save with a maturity period of 2 years and a 7.5% interest rate.",
        link: "https://bankofindia.co.in/mahila-samman-savings-certificate",
        type: "central"
    },

    // Karnataka State Schemes
    {
        name: "Rajiv Gandhi Loan Subsidy Scheme",
        description: "Provides subsidized loans to rural self-employed individuals.",
        link: "https://ashraya.karnataka.gov.in/index.aspx",
        type: "state"
    },
    {
        name: "Vidya Nidhi Education Loan Scheme",
        description: "Financial aid for higher education with low-interest loans.",
        link: "https://www.vidyalakshmi.co.in/Students/",
        type: "state"
    },
    {
        name: "Karnataka Minority Loan Scheme",
        description: "Financial support to minority communities for entrepreneurial initiatives.",
        link: "https://kmdc.karnataka.gov.in/en",
        type: "state"
    },
    {
        name: "Krishi Bhagya Scheme",
        description: "Offers loans and subsidies for irrigation and agricultural improvements.",
        link: "https://raitamitra.karnataka.gov.in/info-2/krushi+Bhagya/en",
        type: "state"
    },
    {
        name: "SC/ST Entrepreneur Subsidy Scheme",
        description: "Encourages entrepreneurship among SC/ST individuals through loans and subsidies.",
        link: "https://www.scsthub.in/",
        type: "state"
    },
    {
        name: "Women Entrepreneurs Loan Scheme",
        description: "Provides loans at concessional rates for women-led enterprises.",
        link: "https://www.startupindia.gov.in/content/sih/en/women_entrepreneurs.html",
        type: "state"
    }
];

function populateSchemes() {
    const schemesContainer = document.getElementById('schemes');
    schemesContainer.innerHTML = ""; // Clear existing content
    schemes.forEach(scheme => {
        const schemeItem = document.createElement('div');
        schemeItem.classList.add('scheme-item');
        schemeItem.innerHTML = `
            <h3>${scheme.name}</h3>
            <p>${scheme.description}</p>
            <a href="${scheme.link}" target="_blank">Learn More</a>
        `;
        schemesContainer.appendChild(schemeItem);
    });
}

function filterSchemes() {
    const filterValue = document.getElementById('schemeType').value;
    const schemesContainer = document.getElementById('schemes');
    schemesContainer.innerHTML = ""; // Clear content for filtering
    schemes
        .filter(scheme => filterValue === 'all' || scheme.type === filterValue)
        .forEach(scheme => {
            const schemeItem = document.createElement('div');
            schemeItem.classList.add('scheme-item');
            schemeItem.innerHTML = `
                <h3>${scheme.name}</h3>
                <p>${scheme.description}</p>
                <a href="${scheme.link}" target="_blank">Learn More</a>
            `;
            schemesContainer.appendChild(schemeItem);
        });
}

window.onload = populateSchemes;

function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
}
