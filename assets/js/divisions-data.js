/* =========================================================
   JEEVAN JAGRUK
   CENTRAL HEALTHCARE DIVISION DATABASE
   68 DIVISIONS | 8 CATEGORIES
   ========================================================= */

"use strict";

const JEEVAN_DIVISION_DATABASE = [

    /* ================================================
       PART I — BASIC MEDICAL AND BIOMEDICAL SCIENCES
       ================================================ */

    {
        id: "healthcare-fundamentals",
        number: 1,
        name: "Healthcare Fundamentals",
        category: 1,
        introduction: "Explore the foundations of healthcare, health systems and medical knowledge.",
        description: "Introduction to healthcare systems, health concepts and medical foundations.",
        related: ["human-anatomy", "human-physiology", "public-health"]
    },
    {
        id: "human-anatomy",
        number: 2,
        name: "Human Anatomy",
        category: 1,
        introduction: "Discover the structure and organisation of the human body.",
        description: "Study the structure of the human body, organs, tissues and anatomical systems.",
        related: ["human-physiology", "cell-biology", "medical-illustration"]
    },
    {
        id: "human-physiology",
        number: 3,
        name: "Human Physiology",
        category: 1,
        introduction: "Understand how the human body and its organ systems function.",
        description: "Study normal body functions and the mechanisms that maintain life.",
        related: ["human-anatomy", "medical-biochemistry", "pathology"]
    },
    {
        id: "medical-biochemistry",
        number: 4,
        name: "Medical Biochemistry",
        category: 1,
        introduction: "Explore the chemical processes essential for human life.",
        description: "Study biomolecules, metabolism, enzymes and biochemical processes.",
        related: ["human-physiology", "cell-biology", "medical-genetics"]
    },
    {
        id: "cell-biology",
        number: 5,
        name: "Cell Biology and Molecular Biology",
        category: 1,
        introduction: "Explore cells, cellular structures and molecular processes.",
        description: "Study cellular organisation, DNA, RNA, proteins and molecular mechanisms.",
        related: ["medical-biochemistry", "medical-genetics", "pathology"]
    },
    {
        id: "medical-genetics",
        number: 6,
        name: "Medical Genetics and Genomics",
        category: 1,
        introduction: "Understand genes, inheritance and genetic variation.",
        description: "Explore genetic inheritance, genomic science and genetic disorders.",
        related: ["cell-biology", "medical-biochemistry", "pathology"]
    },
    {
        id: "medical-microbiology",
        number: 7,
        name: "Medical Microbiology",
        category: 1,
        introduction: "Discover microorganisms and their relationship with human health.",
        description: "Study bacteria, viruses, fungi, parasites and infectious processes.",
        related: ["immunology", "infectious-disease", "pathology"]
    },
    {
        id: "immunology",
        number: 8,
        name: "Immunology",
        category: 1,
        introduction: "Understand the immune system and the body's defence mechanisms.",
        description: "Study immune cells, antibodies, immune responses and immune disorders.",
        related: ["medical-microbiology", "pathology", "infectious-disease"]
    },
    {
        id: "pathology",
        number: 9,
        name: "General and Systemic Pathology",
        category: 1,
        introduction: "Explore the mechanisms and effects of disease in the human body.",
        description: "Study disease processes, tissue changes and pathological mechanisms.",
        related: ["medical-microbiology", "immunology", "human-physiology"]
    },
    {
        id: "medical-pharmacology",
        number: 10,
        name: "Medical Pharmacology",
        category: 1,
        introduction: "Explore medicines, their actions and their effects on the body.",
        description: "Study drug actions, pharmacokinetics, pharmacodynamics and medicine safety.",
        related: ["medical-toxicology", "pharmacy", "medical-biochemistry"]
    },
    {
        id: "medical-toxicology",
        number: 11,
        name: "Medical Toxicology",
        category: 1,
        introduction: "Understand harmful substances and their effects on human health.",
        description: "Study poisoning, toxic substances and mechanisms of toxicity.",
        related: ["medical-pharmacology", "emergency-medicine", "pathology"]
    },


    /* ================================================
       PART II — CLINICAL MEDICINE AND SPECIALTIES
       ================================================ */

    {
        id: "general-medicine",
        number: 12,
        name: "General Medicine and Internal Medicine",
        category: 2,
        introduction: "Explore adult medicine and the prevention and management of medical conditions.",
        description: "Study adult medical conditions, clinical assessment and internal medicine.",
        related: ["cardiovascular-medicine", "respiratory-medicine", "endocrinology"]
    },
    {
        id: "general-surgery",
        number: 13,
        name: "General Surgery and Surgical Sciences",
        category: 2,
        introduction: "Discover surgical principles and the science behind operative care.",
        description: "Explore surgical sciences, operative principles and surgical conditions.",
        related: ["anaesthesiology", "emergency-medicine", "anatomy"]
    },
    {
        id: "cardiovascular-medicine",
        number: 14,
        name: "Cardiovascular Medicine",
        category: 2,
        introduction: "Understand the heart, blood vessels and cardiovascular health.",
        description: "Study cardiovascular structure, function and related disorders.",
        related: ["human-anatomy", "human-physiology", "general-medicine"]
    },
    {
        id: "neurology",
        number: 15,
        name: "Neurology and Neurosciences",
        category: 2,
        introduction: "Explore the brain, spinal cord, nerves and nervous system.",
        description: "Study neurological structures, functions and nervous system disorders.",
        related: ["human-anatomy", "human-physiology", "psychiatry"]
    },
    {
        id: "respiratory-medicine",
        number: 16,
        name: "Respiratory Medicine and Pulmonology",
        category: 2,
        introduction: "Understand the lungs, respiratory system and breathing.",
        description: "Study respiratory physiology, lung conditions and pulmonary health.",
        related: ["human-physiology", "emergency-medicine", "respiratory-therapy"]
    },
    {
        id: "gastroenterology",
        number: 17,
        name: "Gastroenterology and Hepatology",
        category: 2,
        introduction: "Explore the digestive system, liver and gastrointestinal health.",
        description: "Study digestive organs, liver function and gastrointestinal conditions.",
        related: ["human-anatomy", "medical-biochemistry", "nutrition"]
    },
    {
        id: "endocrinology",
        number: 18,
        name: "Endocrinology and Metabolic Medicine",
        category: 2,
        introduction: "Discover hormones, endocrine glands and metabolism.",
        description: "Study hormonal regulation, endocrine organs and metabolic conditions.",
        related: ["human-physiology", "medical-biochemistry", "general-medicine"]
    },
    {
        id: "nephrology",
        number: 19,
        name: "Nephrology and Renal Medicine",
        category: 2,
        introduction: "Understand kidney function and renal health.",
        description: "Study kidney structure, renal physiology and kidney-related disorders.",
        related: ["human-physiology", "dialysis-technology", "medical-biochemistry"]
    },
    {
        id: "oncology",
        number: 20,
        name: "Oncology and Cancer Sciences",
        category: 2,
        introduction: "Explore cancer biology, prevention and cancer sciences.",
        description: "Study cancer development, diagnosis, prevention and treatment approaches.",
        related: ["pathology", "medical-genetics", "radiology"]
    },
    {
        id: "dermatology",
        number: 21,
        name: "Dermatology and Skin Sciences",
        category: 2,
        introduction: "Explore the skin, hair, nails and their related conditions.",
        description: "Study skin structure, skin health and dermatological disorders.",
        related: ["human-anatomy", "immunology", "pathology"]
    },
    {
        id: "paediatrics",
        number: 22,
        name: "Paediatrics and Child Health",
        category: 2,
        introduction: "Understand children's health, development and medical care.",
        description: "Study childhood development, paediatric conditions and child healthcare.",
        related: ["child-development", "nutrition", "public-health"]
    },
    {
        id: "obstetrics-gynaecology",
        number: 23,
        name: "Obstetrics and Gynaecology",
        category: 2,
        introduction: "Explore pregnancy, childbirth and reproductive health.",
        description: "Study maternal health, pregnancy and female reproductive systems.",
        related: ["maternal-health", "human-anatomy", "human-physiology"]
    },
    {
        id: "psychiatry",
        number: 24,
        name: "Psychiatry and Behavioural Medicine",
        category: 2,
        introduction: "Explore mental health, behaviour and psychiatric sciences.",
        description: "Study mental health conditions, behaviour and psychiatric knowledge.",
        related: ["neurology", "sleep-medicine", "public-health"]
    },
    {
        id: "orthopaedics",
        number: 25,
        name: "Orthopaedics and Musculoskeletal Medicine",
        category: 2,
        introduction: "Understand bones, joints, muscles and movement systems.",
        description: "Study musculoskeletal structure, injuries and related disorders.",
        related: ["human-anatomy", "physiotherapy", "sports-medicine"]
    },
    {
        id: "ophthalmology",
        number: 26,
        name: "Ophthalmology and Vision Sciences",
        category: 2,
        introduction: "Explore eye health, vision and eye-related conditions.",
        description: "Study eye anatomy, visual function and ophthalmic disorders.",
        related: ["optometry", "human-anatomy", "medical-genetics"]
    },
    {
        id: "ent",
        number: 27,
        name: "Otorhinolaryngology (ENT)",
        category: 2,
        introduction: "Discover the ear, nose, throat and related structures.",
        description: "Study ear, nose and throat anatomy, function and disorders.",
        related: ["human-anatomy", "human-physiology", "audiology"]
    },
    {
        id: "emergency-medicine",
        number: 28,
        name: "Emergency Medicine and Critical Care",
        category: 2,
        introduction: "Explore emergency assessment and care of critically ill patients.",
        description: "Study emergency medicine, urgent assessment and critical care principles.",
        related: ["general-surgery", "anaesthesiology", "emergency-preparedness"]
    },


    /* ================================================
       PART III — DIAGNOSTIC AND ALLIED HEALTH SCIENCES
       ================================================ */

    {
        id: "medical-laboratory-sciences",
        number: 29,
        name: "Medical Laboratory Sciences",
        category: 3,
        introduction: "Understand laboratory investigations and diagnostic testing.",
        description: "Study laboratory methods, specimen analysis and diagnostic sciences.",
        related: ["pathology", "medical-microbiology", "medical-biochemistry"]
    },
    {
        id: "radiology",
        number: 30,
        name: "Radiology and Medical Imaging",
        category: 3,
        introduction: "Explore medical imaging and diagnostic radiological techniques.",
        description: "Study X-rays, CT, MRI, ultrasound and other imaging technologies.",
        related: ["anatomy", "oncology", "medical-devices"]
    },
    {
        id: "anaesthesiology",
        number: 31,
        name: "Anaesthesiology and Perioperative Sciences",
        category: 3,
        introduction: "Explore anaesthesia, patient monitoring and perioperative care.",
        description: "Study anaesthetic principles, perioperative sciences and patient safety.",
        related: ["physiology", "general-surgery", "emergency-medicine"]
    },
    {
        id: "nursing-sciences",
        number: 32,
        name: "Nursing Sciences",
        category: 3,
        introduction: "Discover nursing knowledge and patient-centred healthcare.",
        description: "Study nursing principles, patient care and nursing practice.",
        related: ["general-medicine", "public-health", "medical-education"]
    },
    {
        id: "physiotherapy",
        number: 33,
        name: "Physiotherapy and Rehabilitation Sciences",
        category: 3,
        introduction: "Understand physical rehabilitation, movement and functional recovery.",
        description: "Study movement science, therapeutic exercise and rehabilitation.",
        related: ["orthopaedics", "rehabilitation-medicine", "sports-medicine"]
    },
    {
        id: "occupational-therapy",
        number: 34,
        name: "Occupational Therapy",
        category: 3,
        introduction: "Explore healthcare approaches supporting everyday activities.",
        description: "Study occupational performance, independence and functional rehabilitation.",
        related: ["rehabilitation-medicine", "disability-inclusion", "physiotherapy"]
    },
    {
        id: "nutrition",
        number: 35,
        name: "Nutrition and Dietetics",
        category: 3,
        introduction: "Explore nutrition, dietary science and nutritional wellbeing.",
        description: "Study nutrients, dietary requirements and nutrition-related health.",
        related: ["medical-biochemistry", "gastroenterology", "preventive-healthcare"]
    },
    {
        id: "pharmacy",
        number: 36,
        name: "Pharmacy and Pharmaceutical Sciences",
        category: 3,
        introduction: "Discover medicines and pharmaceutical sciences.",
        description: "Study pharmaceutical development, medication safety and pharmacy practice.",
        related: ["medical-pharmacology", "medical-toxicology", "medical-biochemistry"]
    },
    {
        id: "optometry",
        number: 37,
        name: "Optometry and Ophthalmic Sciences",
        category: 3,
        introduction: "Understand vision assessment and primary eye care.",
        description: "Study visual function, refraction and optometric sciences.",
        related: ["ophthalmology", "human-anatomy", "medical-devices"]
    },
    {
        id: "dental-sciences",
        number: 38,
        name: "Dental Sciences and Oral Healthcare",
        category: 3,
        introduction: "Explore oral health, teeth, gums and dental sciences.",
        description: "Study oral anatomy, dental conditions and oral healthcare.",
        related: ["human-anatomy", "microbiology", "preventive-healthcare"]
    },
    {
        id: "respiratory-therapy",
        number: 39,
        name: "Respiratory Therapy and Pulmonary Technology",
        category: 3,
        introduction: "Explore respiratory assessment and pulmonary support technologies.",
        description: "Study respiratory care, pulmonary technology and respiratory support.",
        related: ["respiratory-medicine", "physiology", "emergency-medicine"]
    },
    {
        id: "dialysis-technology",
        number: 40,
        name: "Dialysis and Renal Technology",
        category: 3,
        introduction: "Understand dialysis principles and renal care technologies.",
        description: "Study dialysis processes, renal replacement technologies and related equipment.",
        related: ["nephrology", "medical-devices", "nursing-sciences"]
    },


    /* ================================================
       PART IV — SPECIALISED HEALTHCARE DISCIPLINES
       ================================================ */

    {
        id: "transfusion-medicine",
        number: 41,
        name: "Blood Transfusion and Transfusion Medicine",
        category: 4,
        introduction: "Explore blood groups, blood components and transfusion science.",
        description: "Study transfusion practices, blood compatibility and blood component science.",
        related: ["medical-laboratory-sciences", "immunology", "pathology"]
    },
    {
        id: "rehabilitation-medicine",
        number: 42,
        name: "Rehabilitation Medicine",
        category: 4,
        introduction: "Understand multidisciplinary rehabilitation and functional recovery.",
        description: "Study rehabilitation approaches that support independence and participation.",
        related: ["physiotherapy", "occupational-therapy", "disability-inclusion"]
    },
    {
        id: "pain-palliative-care",
        number: 43,
        name: "Pain Medicine and Palliative Care",
        category: 4,
        introduction: "Explore pain science and supportive care for serious illness.",
        description: "Study pain mechanisms, symptom management and palliative care principles.",
        related: ["oncology", "anaesthesiology", "rehabilitation-medicine"]
    },
    {
        id: "geriatrics",
        number: 44,
        name: "Geriatrics and Ageing Sciences",
        category: 4,
        introduction: "Understand ageing and healthcare needs of older adults.",
        description: "Study ageing processes, geriatric health and age-related conditions.",
        related: ["general-medicine", "nutrition", "public-health"]
    },
    {
        id: "infectious-disease",
        number: 45,
        name: "Infectious Disease Medicine",
        category: 4,
        introduction: "Explore infectious diseases and their prevention and management.",
        description: "Study infectious agents, transmission, prevention and disease management.",
        related: ["medical-microbiology", "immunology", "epidemiology"]
    },
    {
        id: "forensic-medicine",
        number: 46,
        name: "Forensic Medicine and Medical Jurisprudence",
        category: 4,
        introduction: "Explore the relationship between medicine, law and forensic science.",
        description: "Study forensic medical science, medical ethics and legal principles.",
        related: ["pathology", "medical-toxicology", "healthcare-policy"]
    },
    {
        id: "environmental-health",
        number: 47,
        name: "Physical and Environmental Health",
        category: 4,
        introduction: "Understand how physical and environmental conditions influence health.",
        description: "Study environmental exposures, physical environments and human health.",
        related: ["public-health", "epidemiology", "global-health"]
    },
    {
        id: "sports-medicine",
        number: 48,
        name: "Sports and Exercise Medicine",
        category: 4,
        introduction: "Explore physical activity, exercise science and sports-related health.",
        description: "Study sports injuries, exercise physiology and physical activity.",
        related: ["orthopaedics", "physiotherapy", "human-physiology"]
    },
    {
        id: "sleep-medicine",
        number: 49,
        name: "Sleep Medicine",
        category: 4,
        introduction: "Understand sleep science, sleep health and sleep disorders.",
        description: "Study sleep physiology, sleep patterns and sleep-related conditions.",
        related: ["neurology", "psychiatry", "human-physiology"]
    },
    {
        id: "movement-sciences",
        number: 50,
        name: "Pain, Musculoskeletal and Movement Sciences",
        category: 4,
        introduction: "Explore pain, musculoskeletal systems and human movement.",
        description: "Study movement mechanics, musculoskeletal function and pain science.",
        related: ["orthopaedics", "physiotherapy", "sports-medicine"]
    },


    /* ================================================
       PART V — PUBLIC HEALTH AND POPULATION SCIENCES
       ================================================ */

    {
        id: "public-health",
        number: 51,
        name: "Public Health and Community Medicine",
        category: 5,
        introduction: "Discover population health and community-based healthcare.",
        description: "Study community health, health promotion and disease prevention.",
        related: ["epidemiology", "global-health", "preventive-healthcare"]
    },
    {
        id: "epidemiology",
        number: 52,
        name: "Epidemiology and Biostatistics",
        category: 5,
        introduction: "Explore disease patterns, health statistics and population data.",
        description: "Study disease distribution, research methods and statistical analysis.",
        related: ["public-health", "infectious-disease", "medical-research"]
    },
    {
        id: "maternal-health",
        number: 53,
        name: "Maternal, Reproductive and Sexual Health",
        category: 5,
        introduction: "Understand maternal health and reproductive wellbeing.",
        description: "Study reproductive health, maternal wellbeing and related public health topics.",
        related: ["obstetrics-gynaecology", "public-health", "child-development"]
    },
    {
        id: "child-development",
        number: 54,
        name: "Child Development and Adolescent Health",
        category: 5,
        introduction: "Explore childhood development and adolescent wellbeing.",
        description: "Study physical, cognitive and social development across childhood and adolescence.",
        related: ["paediatrics", "nutrition", "public-health"]
    },
    {
        id: "global-health",
        number: 55,
        name: "Global Health and International Health",
        category: 5,
        introduction: "Explore health challenges and initiatives across countries.",
        description: "Study international health systems, global health challenges and cooperation.",
        related: ["public-health", "epidemiology", "healthcare-policy"]
    },
    {
        id: "healthcare-policy",
        number: 56,
        name: "Health Economics and Health Policy",
        category: 5,
        introduction: "Understand healthcare financing, economics and policy development.",
        description: "Study healthcare systems, economic evaluation and health policy.",
        related: ["public-health", "healthcare-administration", "global-health"]
    },


    /* ================================================
       PART VI — HEALTHCARE MANAGEMENT AND TECHNOLOGY
       ================================================ */

    {
        id: "healthcare-administration",
        number: 57,
        name: "Hospital and Healthcare Administration",
        category: 6,
        introduction: "Explore healthcare management and hospital administration.",
        description: "Study healthcare organisation, administration and hospital operations.",
        related: ["healthcare-policy", "health-informatics", "public-health"]
    },
    {
        id: "medical-devices",
        number: 58,
        name: "Healthcare Technology and Medical Devices",
        category: 6,
        introduction: "Discover medical devices and healthcare technologies.",
        description: "Study medical equipment, healthcare engineering and device technologies.",
        related: ["radiology", "dialysis-technology", "health-informatics"]
    },
    {
        id: "health-informatics",
        number: 59,
        name: "Health Informatics and Digital Health",
        category: 6,
        introduction: "Explore digital healthcare systems and medical information technology.",
        description: "Study digital health, electronic records and healthcare information systems.",
        related: ["healthcare-administration", "medical-research", "medical-devices"]
    },
    {
        id: "medical-research",
        number: 60,
        name: "Medical Research and Evidence-Based Healthcare",
        category: 6,
        introduction: "Understand scientific research and evidence-based healthcare.",
        description: "Study research methods, evidence evaluation and scientific investigation.",
        related: ["epidemiology", "medical-education", "public-health"]
    },


    /* ================================================
       PART VII — HEALTH EDUCATION AND KNOWLEDGE SYSTEMS
       ================================================ */

    {
        id: "medical-education",
        number: 61,
        name: "Medical Education and Student Learning",
        category: 7,
        introduction: "Explore medical teaching, learning methods and educational science.",
        description: "Study medical curricula, learning methods and educational approaches.",
        related: ["medical-research", "medical-communication", "medical-illustration"]
    },
    {
        id: "medical-communication",
        number: 62,
        name: "Medical Communication and Health Literacy",
        category: 7,
        introduction: "Understand healthcare communication and public health literacy.",
        description: "Study clear health communication, patient education and health literacy.",
        related: ["public-health", "medical-education", "awareness-campaigns"]
    },
    {
        id: "medical-illustration",
        number: 63,
        name: "Medical Illustration and Visual Learning",
        category: 7,
        introduction: "Explore visual explanations of medical and biological concepts.",
        description: "Study medical diagrams, scientific illustrations and visual education.",
        related: ["human-anatomy", "medical-education", "medical-communication"]
    },
    {
        id: "medical-glossary",
        number: 64,
        name: "Medical Glossary and Terminology",
        category: 7,
        introduction: "Discover medical vocabulary, terminology and definitions.",
        description: "Study medical language, terminology and healthcare definitions.",
        related: ["medical-education", "healthcare-fundamentals", "medical-communication"]
    },


    /* ================================================
       PART VIII — HEALTHCARE AWARENESS AND SOCIAL INITIATIVES
       ================================================ */

    {
        id: "preventive-healthcare",
        number: 65,
        name: "Preventive Healthcare and Wellness",
        category: 8,
        introduction: "Explore disease prevention and healthy lifestyle practices.",
        description: "Study prevention, health promotion and general wellbeing.",
        related: ["public-health", "nutrition", "epidemiology"]
    },
    {
        id: "emergency-preparedness",
        number: 66,
        name: "Emergency Preparedness and Disaster Health",
        category: 8,
        introduction: "Understand health preparedness and medical response during emergencies.",
        description: "Study disaster health, emergency preparedness and community response.",
        related: ["emergency-medicine", "public-health", "nursing-sciences"]
    },
    {
        id: "awareness-campaigns",
        number: 67,
        name: "Healthcare Awareness Campaigns",
        category: 8,
        introduction: "Explore public health education and awareness initiatives.",
        description: "Study health campaigns, awareness strategies and community engagement.",
        related: ["medical-communication", "public-health", "preventive-healthcare"]
    },
    {
        id: "disability-inclusion",
        number: 68,
        name: "Disability, Inclusion and Accessibility",
        category: 8,
        introduction: "Understand inclusive healthcare and accessibility.",
        description: "Study disability inclusion, accessibility and equitable healthcare.",
        related: ["rehabilitation-medicine", "occupational-therapy", "public-health"]
    }

];


/* =========================================================
   CATEGORY DATABASE
   ========================================================= */

const JEEVAN_DIVISION_CATEGORIES = [

    {
        id: 1,
        name: "Basic Medical and Biomedical Sciences",
        shortName: "Basic Medical Sciences",
        description: "The scientific foundations of human health, biology and disease."
    },

    {
        id: 2,
        name: "Clinical Medicine and Specialties",
        shortName: "Clinical Medicine",
        description: "Medical and surgical specialties involved in patient care."
    },

    {
        id: 3,
        name: "Diagnostic and Allied Health Sciences",
        shortName: "Diagnostic and Allied Sciences",
        description: "Diagnostic technologies and allied healthcare disciplines."
    },

    {
        id: 4,
        name: "Specialised Healthcare Disciplines",
        shortName: "Specialised Healthcare",
        description: "Specialised fields of medicine and healthcare practice."
    },

    {
        id: 5,
        name: "Public Health and Population Sciences",
        shortName: "Public Health",
        description: "Community health, epidemiology and population wellbeing."
    },

    {
        id: 6,
        name: "Healthcare Management and Technology",
        shortName: "Healthcare Technology",
        description: "Healthcare administration, digital innovation and medical research."
    },

    {
        id: 7,
        name: "Health Education and Knowledge Systems",
        shortName: "Medical Education",
        description: "Medical education, health communication and knowledge systems."
    },

    {
        id: 8,
        name: "Healthcare Awareness and Social Initiatives",
        shortName: "Health Awareness",
        description: "Preventive healthcare, awareness and inclusive health initiatives."
    }

];


/* =========================================================
   DATABASE HELPER FUNCTIONS
   ========================================================= */

const JeevanDivisionDB = {

    getAll() {
        return JEEVAN_DIVISION_DATABASE;
    },

    getById(id) {
        return JEEVAN_DIVISION_DATABASE.find(
            division => division.id === id
        ) || null;
    },

    getByNumber(number) {
        return JEEVAN_DIVISION_DATABASE.find(
            division => division.number === Number(number)
        ) || null;
    },

    getByCategory(categoryId) {
        return JEEVAN_DIVISION_DATABASE.filter(
            division => division.category === Number(categoryId)
        );
    },

    getCategory(categoryId) {
        return JEEVAN_DIVISION_CATEGORIES.find(
            category => category.id === Number(categoryId)
        ) || null;
    },

    getRelated(division) {
        if (!division || !Array.isArray(division.related)) {
            return [];
        }

        return division.related.map(id =>
            this.getById(id)
        ).filter(Boolean);
    },

    search(query) {
        const term = String(query || "").trim().toLowerCase();

        if (!term) {
            return [];
        }

        return JEEVAN_DIVISION_DATABASE.filter(division => {

            const category = this.getCategory(division.category);

            return (
                division.name.toLowerCase().includes(term) ||
                division.description.toLowerCase().includes(term) ||
                division.introduction.toLowerCase().includes(term) ||
                (category && category.name.toLowerCase().includes(term))
            );

        });
    },

    getStatistics() {
        return {
            totalDivisions: JEEVAN_DIVISION_DATABASE.length,
            totalCategories: JEEVAN_DIVISION_CATEGORIES.length
        };
    }

};


/* =========================================================
   DATABASE VALIDATION
   ========================================================= */

(function validateDivisionDatabase() {

    const statistics = JeevanDivisionDB.getStatistics();

    console.log("Jeevan Jagruk Division Database Loaded");

    console.log("Total divisions:", statistics.totalDivisions);

    console.log("Total categories:", statistics.totalCategories);

    if (statistics.totalDivisions !== 68) {
        console.error("Division database validation failed.");
    }

    if (statistics.totalCategories !== 8) {
        console.error("Category database validation failed.");
    }

})();
