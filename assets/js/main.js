/* =========================================================
   JEEVAN JAGRUK
   Complete Homepage JavaScript
   Health Awareness. Informed Choices. Safer Lives.
========================================================= */

"use strict";


/* =========================================================
   01. WEBSITE CONFIGURATION
========================================================= */

const SITE_CONFIG = {
    name: "Jeevan Jagruk",
    tagline: "Health Awareness. Informed Choices. Safer Lives.",
    email: "jeevanjagruk@gmail.com",
    blogUrl: "",
    announcement: "Welcome to Jeevan Jagruk — Explore healthcare knowledge and make informed choices.",
    copyrightYear: new Date().getFullYear()
};


/* =========================================================
   02. HEALTHCARE DIVISIONS — 68 DIVISIONS
========================================================= */

const healthcareDivisions = [

    {
        group: "Basic Medical and Biomedical Sciences",
        icon: "🔬",
        divisions: [
            "Healthcare Fundamentals",
            "Human Anatomy",
            "Human Physiology",
            "Medical Biochemistry",
            "Cell Biology and Molecular Biology",
            "Medical Genetics and Genomics",
            "Medical Microbiology",
            "Immunology",
            "General and Systemic Pathology",
            "Medical Pharmacology",
            "Medical Toxicology"
        ]
    },

    {
        group: "Clinical Medicine and Specialties",
        icon: "🩺",
        divisions: [
            "General Medicine and Internal Medicine",
            "General Surgery and Surgical Sciences",
            "Cardiovascular Medicine",
            "Neurology and Neurosciences",
            "Respiratory Medicine and Pulmonology",
            "Gastroenterology and Hepatology",
            "Endocrinology and Metabolic Medicine",
            "Nephrology and Renal Medicine",
            "Oncology and Cancer Sciences",
            "Dermatology and Skin Sciences",
            "Paediatrics and Child Health",
            "Obstetrics and Gynaecology",
            "Psychiatry and Behavioural Medicine",
            "Orthopaedics and Musculoskeletal Medicine",
            "Ophthalmology and Vision Sciences",
            "Otorhinolaryngology (ENT)",
            "Emergency Medicine and Critical Care"
        ]
    },

    {
        group: "Diagnostic and Allied Health Sciences",
        icon: "🧪",
        divisions: [
            "Medical Laboratory Sciences",
            "Radiology and Medical Imaging",
            "Anaesthesiology and Perioperative Sciences",
            "Nursing Sciences",
            "Physiotherapy and Rehabilitation Sciences",
            "Occupational Therapy",
            "Nutrition and Dietetics",
            "Pharmacy and Pharmaceutical Sciences",
            "Optometry and Ophthalmic Sciences",
            "Dental Sciences and Oral Healthcare",
            "Respiratory Therapy and Pulmonary Technology",
            "Dialysis and Renal Technology"
        ]
    },

    {
        group: "Specialised Healthcare Disciplines",
        icon: "🏥",
        divisions: [
            "Blood Transfusion and Transfusion Medicine",
            "Rehabilitation Medicine",
            "Pain Medicine and Palliative Care",
            "Geriatrics and Ageing Sciences",
            "Infectious Disease Medicine",
            "Forensic Medicine and Medical Jurisprudence",
            "Physical and Environmental Health",
            "Sports and Exercise Medicine",
            "Sleep Medicine",
            "Pain, Musculoskeletal and Movement Sciences"
        ]
    },

    {
        group: "Public Health and Population Sciences",
        icon: "🌍",
        divisions: [
            "Public Health and Community Medicine",
            "Epidemiology and Biostatistics",
            "Maternal, Reproductive and Sexual Health",
            "Child Development and Adolescent Health",
            "Global Health and International Health",
            "Health Economics and Health Policy"
        ]
    },

    {
        group: "Healthcare Management and Technology",
        icon: "💻",
        divisions: [
            "Hospital and Healthcare Administration",
            "Healthcare Technology and Medical Devices",
            "Health Informatics and Digital Health",
            "Medical Research and Evidence-Based Healthcare"
        ]
    },

    {
        group: "Health Education and Knowledge Systems",
        icon: "📚",
        divisions: [
            "Medical Education and Student Learning",
            "Medical Communication and Health Literacy",
            "Medical Illustration and Visual Learning",
            "Medical Glossary and Terminology"
        ]
    },

    {
        group: "Healthcare Awareness and Social Initiatives",
        icon: "🤝",
        divisions: [
            "Preventive Healthcare and Wellness",
            "Emergency Preparedness and Disaster Health",
            "Healthcare Awareness Campaigns",
            "Disability, Inclusion and Accessibility"
        ]
    }

];


/* =========================================================
   03. REUSABLE CONTENT DATA
========================================================= */

const quickAccessData = [
    {
        icon: "🫀",
        title: "Human Anatomy",
        description: "Explore the structure of the human body.",
        target: "anatomy-physiology"
    },
    {
        icon: "🦠",
        title: "Diseases and Disorders",
        description: "Understand diseases, conditions and disorders.",
        target: "disease-awareness"
    },
    {
        icon: "💊",
        title: "Medicines",
        description: "Explore pharmacology and medicine safety.",
        target: "medicines"
    },
    {
        icon: "🧪",
        title: "Medical Diagnostics",
        description: "Learn about tests and diagnostic methods.",
        target: "healthcare-divisions"
    },
    {
        icon: "🛡️",
        title: "Preventive Healthcare",
        description: "Understand prevention and healthy living.",
        target: "preventive-healthcare"
    }
];


const knowledgeData = [
    {
        icon: "🧬",
        title: "Medical Concepts",
        description: "Understand essential concepts from medical and biomedical sciences."
    },
    {
        icon: "🔍",
        title: "Medical Discoveries",
        description: "Explore important discoveries and developments in healthcare."
    },
    {
        icon: "📖",
        title: "Medical Terminology",
        description: "Learn medical words, definitions and commonly used terms."
    },
    {
        icon: "📊",
        title: "Medical Classifications",
        description: "Understand healthcare classifications, systems and categories."
    }
];


const scienceData = [
    ["🫀", "Human Anatomy"],
    ["🫁", "Human Physiology"],
    ["🧪", "Medical Biochemistry"],
    ["🧬", "Genetics and Genomics"],
    ["🔬", "Cell Biology"],
    ["🦠", "Microbiology"],
    ["🛡️", "Immunology"],
    ["🔍", "Pathology"]
];


const diseaseData = [
    {
        title: "Cardiovascular Diseases",
        description: "Conditions affecting the heart and blood vessels."
    },
    {
        title: "Respiratory Diseases",
        description: "Conditions involving the lungs and respiratory system."
    },
    {
        title: "Neurological Disorders",
        description: "Disorders affecting the brain, spinal cord and nerves."
    },
    {
        title: "Digestive Disorders",
        description: "Conditions involving the digestive system."
    },
    {
        title: "Endocrine Disorders",
        description: "Conditions affecting hormones and endocrine glands."
    },
    {
        title: "Kidney Diseases",
        description: "Disorders affecting kidney structure and function."
    },
    {
        title: "Infectious Diseases",
        description: "Diseases caused by infectious microorganisms."
    },
    {
        title: "Mental Health Conditions",
        description: "Conditions affecting emotional and psychological wellbeing."
    }
];


const medicineData = [
    {
        icon: "💊",
        title: "Medicine Classification",
        description: "Learn how medicines are classified into different therapeutic and pharmacological groups."
    },
    {
        icon: "⚙️",
        title: "Mechanisms of Action",
        description: "Understand how medicines interact with biological systems."
    },
    {
        icon: "⚠️",
        title: "Medicine Safety",
        description: "Explore adverse effects, precautions and medicine safety principles."
    }
];


const preventionData = [
    {
        icon: "🥗",
        title: "Nutrition",
        description: "Understand balanced nutrition and healthy dietary practices."
    },
    {
        icon: "🏃",
        title: "Physical Activity",
        description: "Learn about regular movement and physical wellbeing."
    },
    {
        icon: "😴",
        title: "Sleep Health",
        description: "Explore sleep, recovery and healthy sleep habits."
    },
    {
        icon: "🧼",
        title: "Personal Hygiene",
        description: "Understand hygiene and infection prevention."
    },
    {
        icon: "💉",
        title: "Vaccination Awareness",
        description: "Learn about vaccines and immunisation."
    },
    {
        icon: "🧠",
        title: "Mental Wellbeing",
        description: "Explore emotional wellbeing and mental health awareness."
    },
    {
        icon: "🩺",
        title: "Health Screening",
        description: "Understand preventive screening and early detection."
    },
    {
        icon: "🌿",
        title: "Healthy Lifestyle",
        description: "Explore everyday habits that support health."
    }
];


const emergencyData = [
    {
        title: "Basic Life Support",
        description: "Understand basic life support principles and the importance of timely emergency response."
    },
    {
        title: "CPR and AED Awareness",
        description: "Explore CPR and automated external defibrillator awareness through educational resources."
    },
    {
        title: "First Aid Awareness",
        description: "Learn about first aid principles and recognising situations that require emergency help."
    },
    {
        title: "Emergency Recognition",
        description: "Understand warning signs that may require immediate medical attention."
    },
    {
        title: "Disaster Preparedness",
        description: "Explore emergency preparedness and community safety."
    },
    {
        title: "Public Emergency Awareness",
        description: "Understand how communities can improve emergency readiness."
    }
];


const learningData = [
    {
        icon: "📘",
        title: "Structured Learning Modules",
        description: "Study healthcare subjects through organised learning modules."
    },
    {
        icon: "❓",
        title: "Quizzes and MCQs",
        description: "Test your understanding through educational questions."
    },
    {
        icon: "🧠",
        title: "Flashcards",
        description: "Revise important medical concepts and terminology."
    },
    {
        icon: "🖼️",
        title: "Visual Learning",
        description: "Explore diagrams, illustrations and image-based learning."
    },
    {
        icon: "📋",
        title: "Revision Notes",
        description: "Access organised summaries and learning material."
    },
    {
        icon: "🎯",
        title: "Learning Paths",
        description: "Follow topic-based learning journeys."
    }
];


const libraryData = [
    "Medical Terminology",
    "Anatomical Diagrams",
    "Medical Equipment",
    "Diagnostic Tests",
    "Medical Procedures",
    "Microorganisms",
    "Medical Abbreviations",
    "Healthcare Classifications"
];


const resourceData = [
    {
        title: "World Health Organization",
        description: "International public health information.",
        url: "https://www.who.int/"
    },
    {
        title: "Ministry of Health and Family Welfare",
        description: "Government of India health information.",
        url: "https://mohfw.gov.in/"
    },
    {
        title: "Indian Council of Medical Research",
        description: "Medical research and scientific information.",
        url: "https://www.icmr.gov.in/"
    },
    {
        title: "National Health Mission",
        description: "Public healthcare programmes and initiatives.",
        url: "https://nhm.gov.in/"
    },
    {
        title: "Centers for Disease Control and Prevention",
        description: "Disease prevention and public health information.",
        url: "https://www.cdc.gov/"
    },
    {
        title: "MedlinePlus",
        description: "Health information and educational resources.",
        url: "https://medlineplus.gov/"
    }
];


const projectData = [
    ["🩸", "Blood Donation Awareness", "Understand voluntary blood donation and blood safety."],
    ["❤️", "Heart Health Awareness", "Explore cardiovascular health and risk awareness."],
    ["🎗️", "Cancer Awareness", "Learn about cancer awareness and early detection."],
    ["🧠", "Mental Health Awareness", "Promote understanding of mental wellbeing."],
    ["🫶", "Organ Donation Awareness", "Explore organ donation and transplantation awareness."],
    ["🥗", "Nutrition Awareness", "Encourage informed nutritional choices."],
    ["💉", "Vaccination Awareness", "Understand immunisation and vaccine awareness."],
    ["👶", "Maternal and Child Health", "Explore maternal and child health awareness."],
    ["🚦", "Road Safety Awareness", "Understand injury prevention and road safety."]
];


/* =========================================================
   04. HELPER FUNCTIONS
========================================================= */

function getElement(id) {
    return document.getElementById(id);
}


function renderSectionHeading(label, title, description) {

    return `
        <div class="section-heading">
            <span class="section-label">${label}</span>
            <h2>${title}</h2>
            <p>${description}</p>
        </div>
    `;

}


function renderCards(data, className, iconEnabled = false) {

    return data.map(item => {

        if (Array.isArray(item)) {

            return `
                <article class="${className}">
                    <div class="icon">${item[0]}</div>
                    <h3>${item[1]}</h3>
                    <p>${item[2]}</p>
                </article>
            `;

        }

        return `
            <article class="${className}">
                ${iconEnabled ? `<div class="icon">${item.icon}</div>` : ""}
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </article>
        `;

    }).join("");

}


/* =========================================================
   05. ANNOUNCEMENT BAR
========================================================= */

function renderAnnouncement() {

    const element = getElement("announcement-bar");

    if (!element) return;

    element.innerHTML = `
        <div class="container">
            <span>✦ ${SITE_CONFIG.announcement}</span>
        </div>
    `;

}


/* =========================================================
   06. MAIN NAVIGATION
========================================================= */

function renderHeader() {

    const header = getElement("site-header");

    if (!header) return;

    header.innerHTML = `

        <div class="header-container">

            <a href="index.html" class="logo" aria-label="Jeevan Jagruk Home">

                <span class="logo-icon">✚</span>

                <span>Jeevan <span>Jagruk</span></span>

            </a>


            <button
                class="menu-toggle"
                id="menu-toggle"
                aria-label="Open navigation menu"
                aria-expanded="false"
                aria-controls="main-navigation">

                ☰

            </button>


            <nav class="main-navigation" id="main-navigation">

                <a href="index.html">Home</a>


                <div class="nav-dropdown">

                    <button type="button">Explore Healthcare ▾</button>

                    <div class="dropdown-menu">

                        <a href="#healthcare-divisions">All Healthcare Divisions</a>

                        <a href="#anatomy-physiology">Medical Sciences</a>

                        <a href="#disease-awareness">Diseases and Disorders</a>

                        <a href="#medicines">Medicines</a>

                        <a href="#preventive-healthcare">Preventive Healthcare</a>

                    </div>

                </div>


                <a href="#learning-centre">Learning Centre</a>

                <a href="#knowledge-library">Knowledge Library</a>

                <a href="#health-resources">Resources</a>

                <a href="#awareness-projects">Projects</a>

                <a href="#latest-articles">Blog</a>

                <a href="#community">Community</a>

                <a href="#about-platform">About</a>

                <a href="#contact-section">Contact</a>

            </nav>

        </div>

    `;

}


/* =========================================================
   07. HERO SECTION
========================================================= */

function renderHero() {

    const element = getElement("hero");

    if (!element) return;

    element.innerHTML = `

        <div class="hero-container">

            <div class="hero-content">

                <span class="section-label">
                    A Healthcare Knowledge Platform
                </span>

                <h1>
                    Understand Health.
                    Explore Knowledge.
                    <span>Make Informed Choices.</span>
                </h1>

                <p>
                    Discover healthcare knowledge, medical sciences,
                    diseases, preventive healthcare and educational
                    resources through one organised platform.
                </p>


                <div class="hero-actions">

                    <a href="#healthcare-divisions" class="btn btn-primary">
                        Explore Healthcare →
                    </a>

                    <a href="#learning-centre" class="btn btn-outline">
                        Start Learning
                    </a>

                </div>


                <form class="hero-search" id="hero-search-form">

                    <input
                        type="search"
                        id="hero-search-input"
                        placeholder="Search healthcare topics..."
                        aria-label="Search healthcare topics">

                    <button type="submit" class="btn btn-primary">
                        Search
                    </button>

                </form>

            </div>


            <div class="hero-visual">

                <div class="hero-illustration" aria-hidden="true">
                    🩺
                </div>

            </div>

        </div>

    `;

}


/* =========================================================
   08. QUICK ACCESS
========================================================= */

function renderQuickAccess() {

    const element = getElement("quick-access");

    if (!element) return;

    element.innerHTML = `

        <div class="container">

            ${renderSectionHeading(
                "Quick Healthcare Access",
                "Explore What Matters to You",
                "Access important healthcare knowledge through organised categories."
            )}

            <div class="quick-access-grid">

                ${quickAccessData.map(item => `

                    <a href="#${item.target}" class="quick-card">

                        <div class="icon">${item.icon}</div>

                        <h3>${item.title}</h3>

                        <p>${item.description}</p>

                    </a>

                `).join("")}

            </div>

        </div>

    `;

}


/* =========================================================
   09. HEALTHCARE DIVISIONS
========================================================= */

function renderHealthcareDivisions() {

    const element = getElement("healthcare-divisions");

    if (!element) return;

    let divisionNumber = 0;

    element.innerHTML = `

        <div class="container">

            ${renderSectionHeading(
                "Explore Healthcare",
                "68 Healthcare Divisions",
                "Explore a broad range of medical, clinical, diagnostic, public health and healthcare knowledge disciplines."
            )}

            <div class="division-groups">

                ${healthcareDivisions.map(group => `

                    <article class="division-group">

                        <h3>
                            ${group.icon}
                            ${group.group}
                        </h3>

                        <div class="division-list">

                            ${group.divisions.map(division => {

                                divisionNumber++;

                                return `
                                    <a
                                        href="#"
                                        class="division-link"
                                        data-division="${divisionNumber}">

                                        <span>${String(divisionNumber).padStart(2, "0")}.</span>
                                        ${division}

                                    </a>
                                `;

                            }).join("")}

                        </div>

                    </article>

                `).join("")}

            </div>

            <p class="text-muted text-center" style="margin-top:25px;">
                68 organised healthcare divisions covering multiple disciplines.
            </p>

        </div>

    `;

}


/* =========================================================
   10. FEATURED MEDICAL KNOWLEDGE
========================================================= */

function renderFeaturedKnowledge() {

    const element = getElement("featured-knowledge");

    if (!element) return;

    element.innerHTML = `

        <div class="container">

            ${renderSectionHeading(
                "Medical Knowledge",
                "Explore the World of Medical Sciences",
                "Build an understanding of important medical concepts and scientific principles."
            )}

            <div class="knowledge-grid">

                ${renderCards(knowledgeData, "knowledge-card", true)}

            </div>

        </div>

    `;

}


/* =========================================================
   11. ANATOMY AND PHYSIOLOGY
========================================================= */

function renderAnatomyPhysiology() {

    const element = getElement("anatomy-physiology");

    if (!element) return;

    element.innerHTML = `

        <div class="container">

            ${renderSectionHeading(
                "Human Body and Medical Sciences",
                "Explore the Human Body",
                "Understand the structures, functions and biological processes that support human life."
            )}

            <div class="science-grid">

                ${scienceData.map(item => `

                    <article class="science-card">

                        <div class="icon">${item[0]}</div>

                        <h3>${item[1]}</h3>

                    </article>

                `).join("")}

            </div>

        </div>

    `;

}


/* =========================================================
   12. DISEASE DIRECTORY
========================================================= */

function renderDiseaseDirectory() {

    const element = getElement("disease-awareness");

    if (!element) return;

    element.innerHTML = `

        <div class="container">

            ${renderSectionHeading(
                "Disease and Disorder Directory",
                "Understand Diseases and Health Conditions",
                "Explore health conditions through organised body systems and medical specialties."
            )}

            <div class="disease-grid">

                ${renderCards(diseaseData, "disease-card")}

            </div>

        </div>

    `;

}


/* =========================================================
   13. MEDICINES AND PHARMACOLOGY
========================================================= */

function renderMedicines() {

    const element = getElement("medicines");

    if (!element) return;

    element.innerHTML = `

        <div class="container">

            ${renderSectionHeading(
                "Medicines and Pharmacology",
                "Understand Medicines and Their Safety",
                "Explore medicine classifications, pharmacological principles and responsible medicine awareness."
            )}

            <div class="medicine-grid">

                ${renderCards(medicineData, "knowledge-card", true)}

            </div>


            <div class="medicine-notice">

                <strong>Educational Notice:</strong>

                Information in this section is intended for
                educational awareness only. It does not replace
                professional medical advice, diagnosis or treatment.
                Never start, stop or change a medicine based only
                on information presented on this platform.

            </div>

        </div>

    `;

}


/* =========================================================
   14. PREVENTIVE HEALTHCARE
========================================================= */

function renderPreventiveHealthcare() {

    const element = getElement("preventive-healthcare");

    if (!element) return;

    element.innerHTML = `

        <div class="container">

            ${renderSectionHeading(
                "Preventive Healthcare and Wellness",
                "Health Awareness Starts with Prevention",
                "Explore everyday health practices and preventive healthcare principles."
            )}

            <div class="prevention-grid">

                ${renderCards(preventionData, "prevention-card", true)}

            </div>

        </div>

    `;

}


/* =========================================================
   15. EMERGENCY AWARENESS
========================================================= */

function renderEmergencyAwareness() {

    const element = getElement("emergency-awareness");

    if (!element) return;

    element.classList.add("emergency-section");

    element.innerHTML = `

        <div class="container">

            ${renderSectionHeading(
                "Emergency and First Aid Awareness",
                "Knowledge Can Make a Difference",
                "Explore emergency preparedness and public awareness of essential first aid and life-saving concepts."
            )}

            <div class="emergency-grid">

                ${emergencyData.map(item => `

                    <article class="emergency-card">

                        <h3>${item.title}</h3>

                        <p>${item.description}</p>

                    </article>

                `).join("")}

            </div>

            <p class="text-center" style="margin-top:30px;color:#FECACA;font-size:12px;">

                Educational awareness does not replace certified
                training or emergency medical services.

            </p>

        </div>

    `;

}


/* =========================================================
   16. MEDICAL LEARNING CENTRE
========================================================= */

function renderLearningCentre() {

    const element = getElement("learning-centre");

    if (!element) return;

    element.innerHTML = `

        <div class="container">

            ${renderSectionHeading(
                "Medical Learning Centre",
                "Learn. Practise. Revise. Understand.",
                "An organised learning environment for exploring healthcare knowledge."
            )}

            <div class="learning-grid">

                ${renderCards(learningData, "learning-card", true)}

            </div>

            <p class="text-muted text-center" style="margin-top:25px;font-size:12px;">

                Educational activities and participation certificates,
                where offered, do not represent professional qualifications
                or clinical competency certification.

            </p>

        </div>

    `;

}


/* =========================================================
   17. MEDICAL KNOWLEDGE LIBRARY
========================================================= */

function renderKnowledgeLibrary() {

    const element = getElement("knowledge-library");

    if (!element) return;

    element.innerHTML = `

        <div class="container">

            ${renderSectionHeading(
                "Medical Knowledge Library",
                "A Library of Healthcare Knowledge",
                "Explore organised reference material, terminology and educational resources."
            )}

            <div class="library-grid">

                ${libraryData.map(item => `

                    <article class="library-card">

                        <h3>📚 ${item}</h3>

                        <p class="text-muted">
                            Educational reference material and organised learning content.
                        </p>

                    </article>

                `).join("")}

            </div>

        </div>

    `;

}


/* =========================================================
   18. HEALTHCARE RESOURCES
========================================================= */

function renderHealthResources() {

    const element = getElement("health-resources");

    if (!element) return;

    element.innerHTML = `

        <div class="container">

            ${renderSectionHeading(
                "Healthcare Resources",
                "Explore Trusted Health Information Sources",
                "Discover external healthcare organisations and public health information portals."
            )}

            <div class="resource-list">

                ${resourceData.map(item => `

                    <article class="resource-item">

                        <div>

                            <h3>${item.title}</h3>

                            <p>${item.description}</p>

                        </div>

                        <a
                            href="${item.url}"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="card-link">

                            Visit ↗

                        </a>

                    </article>

                `).join("")}

            </div>

        </div>

    `;

}


/* =========================================================
   19. AWARENESS PROJECTS
========================================================= */

function renderAwarenessProjects() {

    const element = getElement("awareness-projects");

    if (!element) return;

    element.innerHTML = `

        <div class="container">

            ${renderSectionHeading(
                "Awareness Projects",
                "Healthcare Awareness for Everyone",
                "Explore educational initiatives focused on important public health topics."
            )}

            <div class="project-grid">

                ${projectData.map(item => `

                    <article class="project-card">

                        <div style="font-size:32px;margin-bottom:15px;">
                            ${item[0]}
                        </div>

                        <h3>${item[1]}</h3>

                        <p class="text-muted">${item[2]}</p>

                    </article>

                `).join("")}

            </div>

        </div>

    `;

}


/* =========================================================
   20. LATEST ARTICLES
========================================================= */

function renderLatestArticles() {

    const element = getElement("latest-articles");

    if (!element) return;

    element.innerHTML = `

        <div class="container">

            ${renderSectionHeading(
                "Knowledge and Insights",
                "Latest Healthcare Articles",
                "Read educational articles, healthcare explanations and awareness resources."
            )}

            <div id="blog-articles-container">

                <div class="text-center">

                    <p class="text-muted">
                        New educational articles will appear here.
                    </p>

                    <p class="text-muted" style="font-size:12px;margin-top:8px;">
                        Blog integration will be configured in a later development stage.
                    </p>

                </div>

            </div>

        </div>

    `;

}


/* =========================================================
   21. COMMUNITY
========================================================= */

function renderCommunity() {

    const element = getElement("community");

    if (!element) return;

    element.classList.add("community-section");

    element.innerHTML = `

        <div class="container">

            <div class="community-content">

                <span class="section-label">
                    Healthcare Community
                </span>

                <h2 style="font-size:36px;margin-bottom:18px;">
                    Knowledge Grows When We Share It
                </h2>

                <p>
                    Jeevan Jagruk aims to encourage healthcare awareness,
                    medical learning and responsible sharing of reliable
                    educational information.
                </p>

                <a href="#contact-section" class="btn btn-primary">
                    Connect With Us →
                </a>

            </div>

        </div>

    `;

}


/* =========================================================
   22. PLATFORM HIGHLIGHTS
========================================================= */

function renderPlatformHighlights() {

    const element = getElement("platform-highlights");

    if (!element) return;

    const highlights = [
        ["📚", "Organised Knowledge", "Healthcare information arranged into structured divisions."],
        ["🎓", "Educational Learning", "Learning resources for understanding medical concepts."],
        ["🌍", "Public Awareness", "Healthcare awareness for individuals and communities."],
        ["🔎", "Reliable Resources", "Access to external health information organisations."]
    ];

    element.innerHTML = `

        <div class="container">

            ${renderSectionHeading(
                "Our Platform",
                "A Connected Healthcare Knowledge Space",
                "Bringing different areas of healthcare knowledge together."
            )}

            <div class="highlight-grid">

                ${renderCards(highlights, "highlight-card", true)}

            </div>

        </div>

    `;

}


/* =========================================================
   23. ABOUT PLATFORM
========================================================= */

function renderAboutPlatform() {

    const element = getElement("about-platform");

    if (!element) return;

    element.innerHTML = `

        <div class="container">

            <div class="about-content">

                <span class="section-label">
                    About Jeevan Jagruk
                </span>

                <h2 style="font-size:36px;margin-bottom:20px;">
                    Making Healthcare Knowledge More Accessible
                </h2>

                <p>
                    Jeevan Jagruk is a healthcare knowledge and public
                    awareness initiative designed to make medical
                    information easier to explore and understand.
                </p>

                <p>
                    The platform brings together medical sciences,
                    healthcare specialties, educational resources,
                    preventive healthcare and public awareness initiatives.
                </p>

                <p>
                    Our purpose is to encourage informed choices,
                    responsible health awareness and continuous learning.
                </p>

            </div>

        </div>

    `;

}


/* =========================================================
   24. CONTACT SECTION
========================================================= */

function renderContactSection() {

    const element = getElement("contact-section");

    if (!element) return;

    element.innerHTML = `

        <div class="container">

            <div class="contact-box">

                <span class="section-label">
                    Connect With Us
                </span>

                <h2>Be Part of the Awareness Journey</h2>

                <p>
                    Share suggestions, educational resources,
                    collaboration ideas or corrections.
                </p>

                <a
                    href="mailto:${SITE_CONFIG.email}"
                    class="btn btn-primary">

                    Contact Jeevan Jagruk →

                </a>

            </div>

        </div>

    `;

}


/* =========================================================
   25. MEDICAL DISCLAIMER
========================================================= */

function renderMedicalDisclaimer() {

    const element = getElement("medical-disclaimer");

    if (!element) return;

    element.innerHTML = `

        <div class="container">

            <strong>Medical Information Disclaimer:</strong>

            Jeevan Jagruk provides general healthcare education
            and public awareness information. Content is not a
            substitute for professional medical advice, diagnosis
            or treatment. Always consult a qualified healthcare
            professional for personal medical concerns.
            In an emergency, contact local emergency services.

        </div>

    `;

}


/* =========================================================
   26. FOOTER
========================================================= */

function renderFooter() {

    const footer = getElement("site-footer");

    if (!footer) return;

    footer.innerHTML = `

        <div class="footer-container">


            <div class="footer-column">

                <a href="index.html" class="logo">

                    <span class="logo-icon">✚</span>

                    <span>Jeevan <span>Jagruk</span></span>

                </a>

                <p style="margin-top:20px;">
                    ${SITE_CONFIG.tagline}
                </p>

                <p style="margin-top:15px;">
                    A healthcare knowledge and public awareness platform.
                </p>

            </div>


            <div class="footer-column">

                <h3>Explore Healthcare</h3>

                <a href="#healthcare-divisions">Healthcare Divisions</a>

                <a href="#anatomy-physiology">Medical Sciences</a>

                <a href="#disease-awareness">Diseases and Disorders</a>

                <a href="#medicines">Medicines</a>

                <a href="#preventive-healthcare">Preventive Healthcare</a>

            </div>


            <div class="footer-column">

                <h3>Learning and Resources</h3>

                <a href="#learning-centre">Learning Centre</a>

                <a href="#knowledge-library">Knowledge Library</a>

                <a href="#health-resources">Healthcare Resources</a>

                <a href="#awareness-projects">Awareness Projects</a>

                <a href="#latest-articles">Articles</a>

            </div>


            <div class="footer-column">

                <h3>Information</h3>

                <a href="#about-platform">About Us</a>

                <a href="#community">Community</a>

                <a href="#contact-section">Contact</a>

                <a href="#medical-disclaimer">Medical Disclaimer</a>

                <a href="mailto:${SITE_CONFIG.email}">Email Us</a>

            </div>


        </div>


        <div class="footer-bottom">

            <p>
                © ${SITE_CONFIG.copyrightYear} Jeevan Jagruk.
                All rights reserved.
            </p>

            <p style="margin-top:8px;">
                Health Awareness. Informed Choices. Safer Lives.
            </p>

        </div>

    `;

}


/* =========================================================
   27. MOBILE NAVIGATION
========================================================= */

function initializeNavigation() {

    const toggle = getElement("menu-toggle");

    const navigation = getElement("main-navigation");

    if (!toggle || !navigation) return;


    toggle.addEventListener("click", () => {

        const isOpen = navigation.classList.toggle("active");

        toggle.setAttribute("aria-expanded", String(isOpen));

        toggle.textContent = isOpen ? "✕" : "☰";

    });


    navigation.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navigation.classList.remove("active");

            toggle.setAttribute("aria-expanded", "false");

            toggle.textContent = "☰";

        });

    });


    navigation.querySelectorAll(".nav-dropdown > button").forEach(button => {

        button.addEventListener("click", () => {

            const parent = button.closest(".nav-dropdown");

            parent.classList.toggle("open");

        });

    });

}


/* =========================================================
   28. WEBSITE SEARCH
========================================================= */

function initializeSearch() {

    const form = getElement("hero-search-form");

    const input = getElement("hero-search-input");

    if (!form || !input) return;


    form.addEventListener("submit", event => {

        event.preventDefault();

        const query = input.value.trim().toLowerCase();

        if (!query) {

            input.focus();

            return;

        }


        const searchableElements = document.querySelectorAll(
            "main h2, main h3, main p, main a"
        );


        let matchingElement = null;


        for (const element of searchableElements) {

            if (element.textContent.toLowerCase().includes(query)) {

                if (element.closest("section")) {

                    matchingElement = element.closest("section");

                    break;

                }

            }

        }


        if (matchingElement) {

            matchingElement.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

            matchingElement.classList.add("fade-in");

        } else {

            alert(
                "No matching topic was found on this homepage. Try another keyword."
            );

        }

    });

}


/* =========================================================
   29. DIVISION LINK HANDLING
========================================================= */

function initializeDivisionLinks() {

    document.querySelectorAll(".division-link").forEach(link => {

        link.addEventListener("click", event => {

            event.preventDefault();

            const number = Number(link.dataset.division);

            const allDivisions = healthcareDivisions.flatMap(
                group => group.divisions
            );

            const division = allDivisions[number - 1];

            if (!division) return;

            alert(
                `${division}\n\nDetailed educational content for this division will be developed in a later stage.`
            );

        });

    });

}


/* =========================================================
   30. INITIALISE ALL HOMEPAGE SECTIONS
========================================================= */

function renderHomepage() {

    renderAnnouncement();

    renderHeader();

    renderHero();

    renderQuickAccess();

    renderHealthcareDivisions();

    renderFeaturedKnowledge();

    renderAnatomyPhysiology();

    renderDiseaseDirectory();

    renderMedicines();

    renderPreventiveHealthcare();

    renderEmergencyAwareness();

    renderLearningCentre();

    renderKnowledgeLibrary();

    renderHealthResources();

    renderAwarenessProjects();

    renderLatestArticles();

    renderCommunity();

    renderPlatformHighlights();

    renderAboutPlatform();

    renderContactSection();

    renderMedicalDisclaimer();

    renderFooter();

}


/* =========================================================
   31. INITIALISE INTERACTIONS
========================================================= */

function initializeWebsite() {

    initializeNavigation();

    initializeSearch();

    initializeDivisionLinks();

}


/* =========================================================
   32. WEBSITE STARTUP
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    renderHomepage();

    initializeWebsite();

    console.log("Jeevan Jagruk homepage loaded successfully.");

});
