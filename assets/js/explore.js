/* =====================================================
   JEEVAN JAGRUK — EXPLORE HEALTHCARE
   Complete directory: 68 divisions, 8 categories
   ===================================================== */

"use strict";

/* -----------------------------------------------------
   1. HEALTHCARE DIRECTORY DATA
   ----------------------------------------------------- */

const healthcareCategories = [
    {
        id: 1,
        name: "Basic Medical and Biomedical Sciences",
        description: "Understand the scientific foundations of human health, biology and disease.",
        icon: "🧬",
        divisions: [
            ["Healthcare Fundamentals", "Introduction to healthcare systems, health concepts and medical foundations."],
            ["Human Anatomy", "Study the structure of the human body, organs, tissues and anatomical systems."],
            ["Human Physiology", "Understand how the human body and its organ systems function."],
            ["Medical Biochemistry", "Explore the chemical processes and molecules essential for human life."],
            ["Cell Biology and Molecular Biology", "Study cells, cellular structures, DNA, RNA and molecular processes."],
            ["Medical Genetics and Genomics", "Explore genes, inheritance, genetic variation and genomic science."],
            ["Medical Microbiology", "Study microorganisms, infections and their relationship with human health."],
            ["Immunology", "Understand the immune system and the body's defence mechanisms."],
            ["General and Systemic Pathology", "Study disease mechanisms, tissue changes and pathological processes."],
            ["Medical Pharmacology", "Explore medicines, their actions, effects and interactions."],
            ["Medical Toxicology", "Understand poisoning, harmful substances and toxic effects on the body."]
        ]
    },

    {
        id: 2,
        name: "Clinical Medicine and Specialties",
        description: "Explore medical and surgical specialties involved in patient care.",
        icon: "🩺",
        divisions: [
            ["General Medicine and Internal Medicine", "Study the prevention, diagnosis and management of adult medical conditions."],
            ["General Surgery and Surgical Sciences", "Explore surgical principles, procedures and operative sciences."],
            ["Cardiovascular Medicine", "Study the heart, blood vessels and cardiovascular disorders."],
            ["Neurology and Neurosciences", "Explore the brain, spinal cord, nerves and neurological conditions."],
            ["Respiratory Medicine and Pulmonology", "Study the lungs, respiratory system and breathing disorders."],
            ["Gastroenterology and Hepatology", "Explore the digestive system, liver and related diseases."],
            ["Endocrinology and Metabolic Medicine", "Study hormones, endocrine glands and metabolic disorders."],
            ["Nephrology and Renal Medicine", "Understand kidney function, renal diseases and kidney health."],
            ["Oncology and Cancer Sciences", "Explore cancer biology, prevention, diagnosis and treatment approaches."],
            ["Dermatology and Skin Sciences", "Study the skin, hair, nails and related conditions."],
            ["Paediatrics and Child Health", "Explore child development, childhood diseases and children's healthcare."],
            ["Obstetrics and Gynaecology", "Study pregnancy, childbirth and reproductive health."],
            ["Psychiatry and Behavioural Medicine", "Explore mental health, behaviour and psychiatric conditions."],
            ["Orthopaedics and Musculoskeletal Medicine", "Study bones, joints, muscles and musculoskeletal conditions."],
            ["Ophthalmology and Vision Sciences", "Explore eye health, vision and eye-related conditions."],
            ["Otorhinolaryngology (ENT)", "Study the ear, nose, throat and related disorders."],
            ["Emergency Medicine and Critical Care", "Understand emergency assessment, urgent care and critical illness."]
        ]
    },

    {
        id: 3,
        name: "Diagnostic and Allied Health Sciences",
        description: "Discover diagnostic technologies and healthcare support professions.",
        icon: "🔬",
        divisions: [
            ["Medical Laboratory Sciences", "Explore laboratory testing, specimen analysis and diagnostic investigations."],
            ["Radiology and Medical Imaging", "Study X-rays, CT, MRI, ultrasound and medical imaging."],
            ["Anaesthesiology and Perioperative Sciences", "Understand anaesthesia, patient monitoring and perioperative care."],
            ["Nursing Sciences", "Explore nursing knowledge, patient care and clinical nursing practice."],
            ["Physiotherapy and Rehabilitation Sciences", "Study movement, physical rehabilitation and functional recovery."],
            ["Occupational Therapy", "Explore activities and interventions that support everyday functioning."],
            ["Nutrition and Dietetics", "Study nutrients, dietary patterns and nutritional health."],
            ["Pharmacy and Pharmaceutical Sciences", "Explore medicines, pharmaceutical development and safe medication use."],
            ["Optometry and Ophthalmic Sciences", "Study vision assessment, eye care and optical science."],
            ["Dental Sciences and Oral Healthcare", "Explore oral health, teeth, gums and dental sciences."],
            ["Respiratory Therapy and Pulmonary Technology", "Study respiratory assessment and respiratory support technologies."],
            ["Dialysis and Renal Technology", "Explore dialysis principles and technologies used in renal care."]
        ]
    },

    {
        id: 4,
        name: "Specialised Healthcare Disciplines",
        description: "Explore specialised areas of medicine and healthcare practice.",
        icon: "🏥",
        divisions: [
            ["Blood Transfusion and Transfusion Medicine", "Study blood groups, blood components and transfusion science."],
            ["Rehabilitation Medicine", "Explore multidisciplinary approaches to improving functional ability."],
            ["Pain Medicine and Palliative Care", "Understand pain management and supportive care for serious illness."],
            ["Geriatrics and Ageing Sciences", "Study ageing, older adults' health and age-related conditions."],
            ["Infectious Disease Medicine", "Explore infectious diseases, their prevention and clinical management."],
            ["Forensic Medicine and Medical Jurisprudence", "Study the relationship between medicine, law and forensic investigation."],
            ["Physical and Environmental Health", "Explore how physical environments influence human health."],
            ["Sports and Exercise Medicine", "Study exercise, sports injuries and physical activity-related health."],
            ["Sleep Medicine", "Explore sleep science, sleep disorders and sleep health."],
            ["Pain, Musculoskeletal and Movement Sciences", "Study pain, movement systems and musculoskeletal function."]
        ]
    },

    {
        id: 5,
        name: "Public Health and Population Sciences",
        description: "Understand community health, disease patterns and population wellbeing.",
        icon: "🌍",
        divisions: [
            ["Public Health and Community Medicine", "Explore population health, community healthcare and disease prevention."],
            ["Epidemiology and Biostatistics", "Study disease distribution, health data and statistical methods."],
            ["Maternal, Reproductive and Sexual Health", "Explore reproductive wellbeing and maternal health."],
            ["Child Development and Adolescent Health", "Study childhood development and adolescent wellbeing."],
            ["Global Health and International Health", "Explore health challenges and initiatives across countries."],
            ["Health Economics and Health Policy", "Understand healthcare financing, policy and resource allocation."]
        ]
    },

    {
        id: 6,
        name: "Healthcare Management and Technology",
        description: "Discover healthcare systems, digital innovation and medical research.",
        icon: "💻",
        divisions: [
            ["Hospital and Healthcare Administration", "Study hospital operations, management and healthcare organisation."],
            ["Healthcare Technology and Medical Devices", "Explore medical equipment, devices and healthcare technologies."],
            ["Health Informatics and Digital Health", "Understand digital health systems, electronic records and health information."],
            ["Medical Research and Evidence-Based Healthcare", "Explore research methods, scientific evidence and clinical decision-making."]
        ]
    },

    {
        id: 7,
        name: "Health Education and Knowledge Systems",
        description: "Explore medical education, communication and healthcare knowledge.",
        icon: "📚",
        divisions: [
            ["Medical Education and Student Learning", "Study medical teaching, learning methods and educational approaches."],
            ["Medical Communication and Health Literacy", "Explore effective health communication and public understanding."],
            ["Medical Illustration and Visual Learning", "Understand visual explanations of anatomy, diseases and medical concepts."],
            ["Medical Glossary and Terminology", "Explore medical vocabulary, terminology and definitions."]
        ]
    },

    {
        id: 8,
        name: "Healthcare Awareness and Social Initiatives",
        description: "Learn about preventive healthcare, awareness and inclusive health initiatives.",
        icon: "💚",
        divisions: [
            ["Preventive Healthcare and Wellness", "Explore disease prevention, healthy habits and wellbeing."],
            ["Emergency Preparedness and Disaster Health", "Understand health preparedness and medical response during disasters."],
            ["Healthcare Awareness Campaigns", "Explore health education campaigns and public awareness initiatives."],
            ["Disability, Inclusion and Accessibility", "Study inclusive healthcare and accessibility for people with disabilities."]
        ]
    }
];


/* -----------------------------------------------------
   2. PREPARE THE COMPLETE DIRECTORY
   ----------------------------------------------------- */

const allDivisions = [];

healthcareCategories.forEach(category => {

    category.divisions.forEach((division, index) => {

        allDivisions.push({
            number: allDivisions.length + 1,
            name: division[0],
            description: division[1],
            categoryId: category.id,
            categoryName: category.name,
            icon: category.icon,
            categoryPosition: index + 1
        });

    });

});


/* -----------------------------------------------------
   3. FEATURED DIVISIONS
   ----------------------------------------------------- */

const featuredNames = [
    "Human Anatomy",
    "Human Physiology",
    "Medical Pharmacology",
    "General Medicine and Internal Medicine",
    "Public Health and Community Medicine",
    "Medical Microbiology"
];


/* -----------------------------------------------------
   4. HTML ELEMENTS
   ----------------------------------------------------- */

const categoryGrid = document.getElementById("categoryGrid");

const featuredGrid = document.getElementById("featuredDivisionsGrid");

const divisionResults = document.getElementById("divisionResults");

const divisionFilters = document.getElementById("divisionFilters");

const searchInput = document.getElementById("divisionSearch");

const searchButton = document.getElementById("divisionSearchButton");

const noResults = document.getElementById("noDivisionResults");


/* -----------------------------------------------------
   5. CATEGORY CARDS
   ----------------------------------------------------- */

function renderCategories() {

    if (!categoryGrid) return;

    categoryGrid.innerHTML = healthcareCategories.map(category => `

        <article class="category-card">

            <span class="category-number">
                ${String(category.id).padStart(2, "0")}
            </span>

            <h3>${category.icon} ${category.name}</h3>

            <p>${category.description}</p>

            <span class="category-count">
                ${category.divisions.length} Healthcare Divisions
            </span>

        </article>

    `).join("");

}


/* -----------------------------------------------------
   6. FEATURED DIVISION CARDS
   ----------------------------------------------------- */

function renderFeaturedDivisions() {

    if (!featuredGrid) return;

    const featured = allDivisions.filter(division =>
        featuredNames.includes(division.name)
    );

    featuredGrid.innerHTML = featured.map(division => `

        <article class="division-card featured">

            <span class="division-number">
                DIVISION ${String(division.number).padStart(2, "0")}
            </span>

            <h3>${division.name}</h3>

            <p>${division.description}</p>

            <span class="division-category">
                ${division.categoryName}
            </span>

        </article>

    `).join("");

}


/* -----------------------------------------------------
   7. CATEGORY FILTER BUTTONS
   ----------------------------------------------------- */

function renderFilters() {

    if (!divisionFilters) return;

    const buttons = healthcareCategories.map(category => `

        <button
            type="button"
            data-filter="${category.id}"
        >
            ${category.id}. ${category.name}
        </button>

    `).join("");

    divisionFilters.innerHTML = `
        <button type="button" class="active" data-filter="all">
            All Divisions (68)
        </button>
        ${buttons}
    `;

    divisionFilters.addEventListener("click", event => {

        const button = event.target.closest("button[data-filter]");

        if (!button) return;

        divisionFilters.querySelectorAll("button").forEach(item => {
            item.classList.remove("active");
        });

        button.classList.add("active");

        const selected = button.dataset.filter;

        if (selected === "all") {

            renderDivisions(allDivisions);

        } else {

            const filtered = allDivisions.filter(division =>
                String(division.categoryId) === selected
            );

            renderDivisions(filtered);

        }

    });

}


/* -----------------------------------------------------
   8. DIVISION CARDS
   ----------------------------------------------------- */

function renderDivisions(divisions) {

    if (!divisionResults) return;

    divisionResults.innerHTML = divisions.map(division => `

        <article class="division-card">

            <span class="division-number">
                DIVISION ${String(division.number).padStart(2, "0")}
            </span>

            <h3>${division.name}</h3>

            <p>${division.description}</p>

            <span class="division-category">
                ${division.categoryName}
            </span>

        </article>

    `).join("");

    if (noResults) {
        noResults.hidden = divisions.length !== 0;
    }

}


/* -----------------------------------------------------
   9. SEARCH FUNCTIONALITY
   ----------------------------------------------------- */

function searchDivisions() {

    if (!searchInput) return;

    const query = searchInput.value.trim().toLowerCase();

    const filtered = allDivisions.filter(division => {

        return (
            division.name.toLowerCase().includes(query) ||
            division.description.toLowerCase().includes(query) ||
            division.categoryName.toLowerCase().includes(query)
        );

    });

    // Reset category filter when searching.

    if (divisionFilters) {

        divisionFilters.querySelectorAll("button").forEach(button => {
            button.classList.remove("active");
        });

        const allButton = divisionFilters.querySelector('[data-filter="all"]');

        if (allButton) {
            allButton.classList.add("active");
        }

    }

    renderDivisions(filtered);

    if (divisionResults) {
        divisionResults.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }

}


/* -----------------------------------------------------
   10. SEARCH EVENTS
   ----------------------------------------------------- */

if (searchButton) {

    searchButton.addEventListener("click", searchDivisions);

}

if (searchInput) {

    searchInput.addEventListener("input", searchDivisions);

    searchInput.addEventListener("keydown", event => {

        if (event.key === "Enter") {
            searchDivisions();
        }

    });

}


/* -----------------------------------------------------
   11. INITIALISE PAGE
   ----------------------------------------------------- */

function initialiseExplorePage() {

    renderCategories();

    renderFeaturedDivisions();

    renderFilters();

    renderDivisions(allDivisions);

    console.log(
        `Jeevan Jagruk: ${allDivisions.length} healthcare divisions loaded.`
    );

}

initialiseExplorePage();
