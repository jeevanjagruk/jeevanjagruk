/* =========================================================
   JEEVAN JAGRUK
   DIVISION 03 — HUMAN PHYSIOLOGY
   Educational content dataset
   ========================================================= */

"use strict";

const HUMAN_PHYSIOLOGY_CONTENT = {

    divisionId: "human-physiology",
    divisionNumber: 3,
    title: "Human Physiology",
    subtitle: "Understand how the human body functions and maintains life.",

    introduction: {
        heading: "Introduction to Human Physiology",
        paragraphs: [
            "Human physiology is the scientific study of the normal functions of the human body and its component structures.",
            "It explains how cells, tissues, organs and organ systems perform their activities and interact to maintain life.",
            "Physiology connects biological processes with everyday functions such as breathing, circulation, digestion, movement, sleep and temperature regulation."
        ]
    },

    overview: {
        heading: "Understanding Human Physiology",
        sections: [
            {
                title: "What Is Physiology?",
                content: "Physiology studies how living organisms and their component structures function."
            },
            {
                title: "Why Is Physiology Important?",
                content: "It provides a foundation for understanding normal body functions, disease mechanisms and the effects of medical interventions."
            },
            {
                title: "Anatomy and Physiology",
                content: "Anatomy explains the structure of the body, while physiology explains how those structures work."
            },
            {
                title: "Integrated Body Functions",
                content: "The human body depends on coordinated activity between different organ systems rather than isolated organ functions."
            }
        ]
    },

    branches: {
        heading: "Branches of Human Physiology",
        topics: [
            {
                title: "Cell Physiology",
                description: "Study of cellular activities, membrane transport and cellular communication."
            },
            {
                title: "Neurophysiology",
                description: "Study of nervous system functions and electrical and chemical signalling."
            },
            {
                title: "Cardiovascular Physiology",
                description: "Study of heart function, blood circulation and vascular regulation."
            },
            {
                title: "Respiratory Physiology",
                description: "Study of ventilation, gas exchange and regulation of breathing."
            },
            {
                title: "Renal Physiology",
                description: "Study of kidney function, filtration and fluid and electrolyte regulation."
            },
            {
                title: "Gastrointestinal Physiology",
                description: "Study of digestion, absorption and gastrointestinal regulation."
            },
            {
                title: "Endocrine Physiology",
                description: "Study of hormones and their effects on body functions."
            },
            {
                title: "Reproductive Physiology",
                description: "Study of reproductive processes and hormonal regulation."
            },
            {
                title: "Exercise Physiology",
                description: "Study of body responses and adaptations to physical activity."
            },
            {
                title: "Environmental Physiology",
                description: "Study of how the body responds to environmental conditions."
            }
        ]
    },

    homeostasis: {
        heading: "Homeostasis",

        description: "Homeostasis refers to the processes through which the body maintains a relatively stable internal environment despite changing internal and external conditions.",

        components: [
            {
                title: "Receptor",
                description: "Detects a change or stimulus in the internal or external environment."
            },
            {
                title: "Control Centre",
                description: "Processes information and coordinates an appropriate response."
            },
            {
                title: "Effector",
                description: "Produces a response that influences the regulated condition."
            }
        ],

        mechanisms: [
            {
                title: "Negative Feedback",
                description: "A response that opposes the initial change and helps bring a regulated variable toward its normal range."
            },
            {
                title: "Positive Feedback",
                description: "A response that amplifies an initial change until a particular outcome or endpoint is reached."
            }
        ],

        examples: [
            "Regulation of body temperature",
            "Regulation of blood glucose",
            "Control of blood pressure",
            "Regulation of blood pH",
            "Maintenance of fluid and electrolyte balance"
        ]
    },

    cellularPhysiology: {
        heading: "Cellular Physiology",

        topics: [
            {
                title: "Cell Membrane",
                description: "A selectively permeable boundary that separates the intracellular and extracellular environments."
            },
            {
                title: "Diffusion",
                description: "Movement of particles down their concentration gradient."
            },
            {
                title: "Osmosis",
                description: "Movement of water across a selectively permeable membrane in response to differences in water potential."
            },
            {
                title: "Facilitated Diffusion",
                description: "Passive movement of substances through membrane transport proteins."
            },
            {
                title: "Active Transport",
                description: "Movement of substances using energy, often against an electrochemical gradient."
            },
            {
                title: "Membrane Potential",
                description: "The electrical potential difference across a cell membrane."
            },
            {
                title: "Cell Signalling",
                description: "Communication between cells through chemical messengers and signalling pathways."
            },
            {
                title: "Cellular Respiration",
                description: "Metabolic processes through which cells obtain usable energy from nutrients."
            }
        ]
    },

    bloodPhysiology: {
        heading: "Blood Physiology",

        topics: [
            {
                title: "Plasma",
                description: "The liquid component of blood that carries proteins, nutrients, hormones and waste products."
            },
            {
                title: "Red Blood Cells",
                description: "Cells specialised for transporting oxygen and contributing to carbon dioxide transport."
            },
            {
                title: "White Blood Cells",
                description: "Cells involved in immune defence and protection against infection."
            },
            {
                title: "Platelets",
                description: "Cell fragments that play an important role in haemostasis and blood clot formation."
            },
            {
                title: "Haemoglobin",
                description: "An oxygen-binding protein found in red blood cells."
            },
            {
                title: "Haemostasis",
                description: "The physiological process that helps prevent and stop bleeding."
            },
            {
                title: "Blood Groups",
                description: "Blood classification systems, including ABO and Rh, which are important in transfusion compatibility."
            }
        ]
    },

    cardiovascularPhysiology: {
        heading: "Cardiovascular Physiology",

        topics: [
            {
                title: "Heart as a Pump",
                description: "The heart generates pressure to move blood through the pulmonary and systemic circulations."
            },
            {
                title: "Cardiac Cycle",
                description: "The sequence of events occurring during one heartbeat, including contraction and relaxation."
            },
            {
                title: "Heart Rate",
                description: "The number of heartbeats occurring in a given period."
            },
            {
                title: "Stroke Volume",
                description: "The volume of blood ejected by a ventricle during one contraction."
            },
            {
                title: "Cardiac Output",
                description: "The volume of blood pumped by one ventricle per minute."
            },
            {
                title: "Blood Pressure",
                description: "The pressure exerted by circulating blood against blood vessel walls."
            },
            {
                title: "Circulation",
                description: "The movement of blood through the pulmonary and systemic circulatory pathways."
            },
            {
                title: "Microcirculation",
                description: "Exchange of substances between blood and tissues through small vessels."
            }
        ]
    },

    respiratoryPhysiology: {
        heading: "Respiratory Physiology",

        topics: [
            {
                title: "Pulmonary Ventilation",
                description: "Movement of air into and out of the lungs."
            },
            {
                title: "Inspiration",
                description: "The process of drawing air into the lungs."
            },
            {
                title: "Expiration",
                description: "The process of moving air out of the lungs."
            },
            {
                title: "Alveolar Gas Exchange",
                description: "Exchange of oxygen and carbon dioxide between alveolar air and pulmonary capillary blood."
            },
            {
                title: "Oxygen Transport",
                description: "Transport of oxygen in blood, primarily bound to haemoglobin."
            },
            {
                title: "Carbon Dioxide Transport",
                description: "Transport of carbon dioxide in blood in dissolved, bicarbonate and carbamino forms."
            },
            {
                title: "Respiratory Regulation",
                description: "Control of breathing through neural and chemical mechanisms."
            },
            {
                title: "Acid-Base Balance",
                description: "The respiratory system contributes to regulation of blood pH by controlling carbon dioxide elimination."
            }
        ]
    },

    digestivePhysiology: {
        heading: "Gastrointestinal Physiology",

        topics: [
            {
                title: "Ingestion",
                description: "Taking food and fluids into the digestive tract."
            },
            {
                title: "Mechanical Digestion",
                description: "Physical breakdown and mixing of food during digestion."
            },
            {
                title: "Chemical Digestion",
                description: "Enzymatic breakdown of nutrients into smaller absorbable components."
            },
            {
                title: "Gastrointestinal Motility",
                description: "Movement of contents through the digestive tract."
            },
            {
                title: "Secretion",
                description: "Release of digestive fluids, enzymes and other substances."
            },
            {
                title: "Absorption",
                description: "Movement of digested nutrients, water and electrolytes into the body."
            },
            {
                title: "Defecation",
                description: "Elimination of faecal material from the digestive tract."
            }
        ]
    },

    renalPhysiology: {
        heading: "Renal Physiology",

        topics: [
            {
                title: "Glomerular Filtration",
                description: "Movement of water and small solutes from glomerular blood into the nephron."
            },
            {
                title: "Tubular Reabsorption",
                description: "Movement of selected substances from tubular fluid back into the blood."
            },
            {
                title: "Tubular Secretion",
                description: "Movement of selected substances from blood into tubular fluid."
            },
            {
                title: "Urine Formation",
                description: "The combined result of filtration, reabsorption and secretion."
            },
            {
                title: "Fluid Balance",
                description: "Kidneys regulate body water through changes in water excretion."
            },
            {
                title: "Electrolyte Balance",
                description: "Kidneys contribute to regulation of sodium, potassium and other electrolytes."
            },
            {
                title: "Acid-Base Regulation",
                description: "Kidneys help regulate pH through hydrogen ion secretion and bicarbonate handling."
            },
            {
                title: "Hormonal Regulation",
                description: "Renal functions interact with hormones such as aldosterone and antidiuretic hormone."
            }
        ]
    },

    nervousPhysiology: {
        heading: "Nervous System Physiology",

        topics: [
            {
                title: "Neuron Structure and Function",
                description: "Neurons receive, process and transmit information."
            },
            {
                title: "Resting Membrane Potential",
                description: "The electrical potential difference across the membrane of a resting cell."
            },
            {
                title: "Action Potential",
                description: "A rapid change in membrane potential that enables electrical signalling."
            },
            {
                title: "Synaptic Transmission",
                description: "Communication between neurons or between neurons and target cells."
            },
            {
                title: "Sensory Processing",
                description: "Reception and interpretation of sensory information."
            },
            {
                title: "Motor Control",
                description: "Neural mechanisms that regulate muscle activity and movement."
            },
            {
                title: "Autonomic Regulation",
                description: "Control of involuntary functions through sympathetic and parasympathetic pathways."
            },
            {
                title: "Reflex Activity",
                description: "Rapid, organised responses to particular stimuli."
            }
        ]
    },

    endocrinePhysiology: {
        heading: "Endocrine Physiology",

        topics: [
            {
                title: "Hormones",
                description: "Chemical messengers released by endocrine cells that influence target tissues."
            },
            {
                title: "Pituitary Gland",
                description: "An endocrine gland that produces or releases hormones involved in several regulatory processes."
            },
            {
                title: "Thyroid Gland",
                description: "Produces hormones important in metabolic regulation."
            },
            {
                title: "Adrenal Glands",
                description: "Produce hormones involved in stress responses, metabolism and electrolyte regulation."
            },
            {
                title: "Pancreatic Hormones",
                description: "Insulin and glucagon contribute to blood glucose regulation."
            },
            {
                title: "Calcium Regulation",
                description: "Hormones including parathyroid hormone help regulate calcium balance."
            },
            {
                title: "Hormonal Feedback",
                description: "Feedback mechanisms regulate hormone production and secretion."
            }
        ]
    },

    reproductivePhysiology: {
        heading: "Reproductive Physiology",

        topics: [
            {
                title: "Male Reproductive Physiology",
                description: "Study of sperm production and hormonal regulation of male reproductive functions."
            },
            {
                title: "Female Reproductive Physiology",
                description: "Study of ovarian function, reproductive hormones and menstrual cycle physiology."
            },
            {
                title: "Menstrual Cycle",
                description: "Cyclical changes involving ovarian and uterine function."
            },
            {
                title: "Fertilisation",
                description: "The union of sperm and oocyte to form a zygote."
            },
            {
                title: "Pregnancy Physiology",
                description: "Physiological changes occurring during pregnancy."
            },
            {
                title: "Lactation",
                description: "Production and secretion of breast milk."
            }
        ]
    },

    musculoskeletalPhysiology: {
        heading: "Musculoskeletal Physiology",

        topics: [
            {
                title: "Muscle Contraction",
                description: "The cellular processes through which muscle fibres generate force."
            },
            {
                title: "Neuromuscular Junction",
                description: "The specialised connection through which a motor neuron communicates with skeletal muscle."
            },
            {
                title: "Muscle Energy Metabolism",
                description: "Energy pathways supporting muscle activity."
            },
            {
                title: "Joint Movement",
                description: "Movement produced through coordinated actions of muscles and joints."
            },
            {
                title: "Bone Remodelling",
                description: "The ongoing process of bone formation and resorption."
            },
            {
                title: "Posture and Balance",
                description: "Coordination of sensory, nervous and musculoskeletal mechanisms."
            }
        ]
    },

    temperatureRegulation: {
        heading: "Thermoregulation",

        topics: [
            {
                title: "Body Temperature",
                description: "The balance between heat production and heat loss."
            },
            {
                title: "Heat Production",
                description: "Metabolic activity and muscle activity contribute to heat production."
            },
            {
                title: "Heat Loss",
                description: "Heat can be lost through radiation, conduction, convection and evaporation."
            },
            {
                title: "Hypothalamic Regulation",
                description: "The hypothalamus plays a central role in coordinating temperature regulation."
            },
            {
                title: "Environmental Responses",
                description: "The body responds to hot and cold environments through physiological and behavioural mechanisms."
            }
        ]
    },

    exercisePhysiology: {
        heading: "Exercise Physiology",

        topics: [
            {
                title: "Acute Exercise Responses",
                description: "Immediate cardiovascular, respiratory and metabolic responses to exercise."
            },
            {
                title: "Cardiovascular Adaptations",
                description: "Changes in cardiovascular function associated with regular physical training."
            },
            {
                title: "Respiratory Adaptations",
                description: "Changes in respiratory responses associated with exercise and training."
            },
            {
                title: "Muscular Adaptations",
                description: "Structural and functional changes in muscle associated with training."
            },
            {
                title: "Energy Systems",
                description: "The phosphagen, glycolytic and oxidative systems contribute to ATP production during physical activity."
            }
        ]
    },

    integrativePhysiology: {
        heading: "Integration of Organ Systems",

        examples: [
            {
                title: "Exercise",
                description: "The cardiovascular, respiratory, muscular, nervous and endocrine systems coordinate during physical activity."
            },
            {
                title: "Digestion",
                description: "The digestive, nervous, cardiovascular and endocrine systems contribute to nutrient processing and absorption."
            },
            {
                title: "Fluid Balance",
                description: "The kidneys, cardiovascular system and endocrine system interact to maintain body fluid balance."
            },
            {
                title: "Temperature Regulation",
                description: "The nervous, cardiovascular, muscular and integumentary systems contribute to temperature control."
            },
            {
                title: "Stress Response",
                description: "The nervous and endocrine systems coordinate responses to challenging conditions."
            }
        ]
    },

    physiologicalMeasurements: {
        heading: "Introduction to Physiological Measurements",

        measurements: [
            {
                name: "Heart Rate",
                description: "Number of heartbeats per minute."
            },
            {
                name: "Blood Pressure",
                description: "Pressure exerted by blood against arterial walls."
            },
            {
                name: "Respiratory Rate",
                description: "Number of breathing cycles per minute."
            },
            {
                name: "Body Temperature",
                description: "A measure of the body's thermal state."
            },
            {
                name: "Oxygen Saturation",
                description: "An estimate of the percentage of haemoglobin binding sites occupied by oxygen."
            },
            {
                name: "Blood Glucose",
                description: "Measurement of glucose concentration in blood."
            },
            {
                name: "Electrocardiogram",
                description: "A recording of the electrical activity of the heart."
            }
        ],

        note: "Physiological measurements must be interpreted in context. Normal ranges vary with age, circumstances, measurement methods and individual health."
    },

    visualLearning: {
        heading: "Physiology Visual Learning Centre",

        resources: [
            {
                title: "Homeostasis Feedback Loop",
                description: "A visual explanation of receptors, control centres and effectors.",
                plannedAsset: "homeostasis-feedback"
            },
            {
                title: "Cell Membrane Transport",
                description: "Illustration of diffusion, osmosis and active transport.",
                plannedAsset: "cell-membrane-transport"
            },
            {
                title: "Cardiac Cycle",
                description: "A visual explanation of the phases of the cardiac cycle.",
                plannedAsset: "cardiac-cycle"
            },
            {
                title: "Blood Circulation",
                description: "Pulmonary and systemic circulation.",
                plannedAsset: "blood-circulation"
            },
            {
                title: "Gas Exchange",
                description: "Illustration of gas exchange at the alveoli.",
                plannedAsset: "alveolar-gas-exchange"
            },
            {
                title: "Nephron Function",
                description: "Filtration, reabsorption and secretion.",
                plannedAsset: "nephron-function"
            },
            {
                title: "Nerve Impulse",
                description: "An illustration of action potential and synaptic transmission.",
                plannedAsset: "nerve-impulse"
            },
            {
                title: "Hormonal Feedback",
                description: "Examples of endocrine feedback mechanisms.",
                plannedAsset: "endocrine-feedback"
            }
        ]
    },

    learningObjectives: [
        "Define human physiology and explain its importance.",
        "Explain the concept of homeostasis.",
        "Differentiate negative and positive feedback mechanisms.",
        "Understand basic cellular transport processes.",
        "Describe the major functions of blood.",
        "Explain fundamental cardiovascular functions.",
        "Understand ventilation and gas exchange.",
        "Describe digestion and nutrient absorption.",
        "Explain kidney functions and urine formation.",
        "Understand basic nervous system signalling.",
        "Describe endocrine regulation.",
        "Recognise reproductive physiological processes.",
        "Understand muscle function and exercise responses.",
        "Explain the integration of organ systems."
    ],

    faqs: [
        {
            question: "What is human physiology?",
            answer: "Human physiology is the scientific study of how the human body and its component structures function."
        },
        {
            question: "What is homeostasis?",
            answer: "Homeostasis refers to processes that maintain a relatively stable internal environment."
        },
        {
            question: "What is negative feedback?",
            answer: "Negative feedback opposes an initial change and helps bring a regulated variable toward its normal range."
        },
        {
            question: "What is positive feedback?",
            answer: "Positive feedback amplifies an initial change until a specific outcome or endpoint is achieved."
        },
        {
            question: "What is cardiac output?",
            answer: "Cardiac output is the volume of blood pumped by one ventricle per minute."
        },
        {
            question: "What is gas exchange?",
            answer: "Gas exchange is the movement of oxygen and carbon dioxide between respiratory surfaces and blood."
        },
        {
            question: "What is the main functional unit of the kidney?",
            answer: "The nephron is the functional unit of the kidney."
        },
        {
            question: "What are hormones?",
            answer: "Hormones are chemical messengers that influence the activities of target cells and tissues."
        },
        {
            question: "How do organ systems work together?",
            answer: "Different organ systems communicate and coordinate their functions to maintain the body's internal balance and support life."
        }
    ],

    quiz: [
        {
            question: "What is the main subject of human physiology?",
            options: [
                "Body structure",
                "Body function",
                "Medical history",
                "Disease classification"
            ],
            answer: 1,
            explanation: "Physiology studies how the body and its structures function."
        },
        {
            question: "Which mechanism generally opposes an initial change?",
            options: [
                "Positive feedback",
                "Negative feedback",
                "Feed-forward only",
                "No feedback"
            ],
            answer: 1,
            explanation: "Negative feedback acts to oppose changes in a regulated variable."
        },
        {
            question: "Which blood component primarily transports oxygen?",
            options: [
                "Platelets",
                "Plasma proteins",
                "Red blood cells",
                "White blood cells"
            ],
            answer: 2,
            explanation: "Red blood cells contain haemoglobin, which binds and transports most oxygen in blood."
        },
        {
            question: "What is the functional unit of the kidney?",
            options: [
                "Alveolus",
                "Neuron",
                "Nephron",
                "Sarcomere"
            ],
            answer: 2,
            explanation: "The nephron performs filtration and processes tubular fluid to form urine."
        },
        {
            question: "Which hormone helps lower blood glucose?",
            options: [
                "Insulin",
                "Glucagon",
                "Adrenaline",
                "Thyroxine"
            ],
            answer: 0,
            explanation: "Insulin generally lowers blood glucose by promoting glucose uptake and storage."
        },
        {
            question: "Where does pulmonary gas exchange primarily occur?",
            options: [
                "Trachea",
                "Alveoli",
                "Larynx",
                "Pharynx"
            ],
            answer: 1,
            explanation: "Gas exchange occurs across the thin alveolar-capillary membrane."
        },
        {
            question: "Which organ system primarily coordinates rapid electrical communication?",
            options: [
                "Digestive system",
                "Nervous system",
                "Urinary system",
                "Integumentary system"
            ],
            answer: 1,
            explanation: "The nervous system uses electrical and chemical signalling to coordinate many body functions."
        },
        {
            question: "Which organ helps regulate body temperature through heat-loss responses?",
            options: [
                "Skin",
                "Spleen",
                "Pancreas",
                "Gallbladder"
            ],
            answer: 0,
            explanation: "The skin contributes to temperature regulation through mechanisms including sweating and changes in skin blood flow."
        }
    ],

    references: [
        {
            name: "OpenStax — Anatomy and Physiology 2e",
            url: "https://openstax.org/details/books/anatomy-and-physiology-2e"
        },
        {
            name: "NCBI Bookshelf",
            url: "https://www.ncbi.nlm.nih.gov/books/"
        },
        {
            name: "MedlinePlus",
            url: "https://medlineplus.gov/"
        },
        {
            name: "National Institute of General Medical Sciences",
            url: "https://www.nigms.nih.gov/"
        }
    ],

    review: {
        status: "Awaiting medical and academic review",
        reviewedBy: null,
        reviewedOn: null,
        nextReview: null
    }

};


/* =========================================================
   CONTENT VALIDATION
   ========================================================= */

(function () {

    const content = HUMAN_PHYSIOLOGY_CONTENT;

    const requiredFields = [
        "introduction",
        "overview",
        "branches",
        "homeostasis",
        "cellularPhysiology",
        "bloodPhysiology",
        "cardiovascularPhysiology",
        "respiratoryPhysiology",
        "digestivePhysiology",
        "renalPhysiology",
        "nervousPhysiology",
        "endocrinePhysiology",
        "reproductivePhysiology",
        "visualLearning",
        "learningObjectives",
        "faqs",
        "quiz",
        "references"
    ];

    const missingFields = requiredFields.filter(
        field => !Object.prototype.hasOwnProperty.call(content, field)
    );

    if (missingFields.length > 0) {

        console.error(
            "Human Physiology content validation failed:",
            missingFields
        );

    } else {

        console.log(
            "Human Physiology educational dataset loaded."
        );

    }

})();
