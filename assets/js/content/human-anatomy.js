/* =========================================================
   JEEVAN JAGRUK
   DIVISION 02 — HUMAN ANATOMY
   Educational content dataset
   ========================================================= */

"use strict";

const HUMAN_ANATOMY_CONTENT = {

    divisionId: "human-anatomy",
    divisionNumber: 2,
    title: "Human Anatomy",
    subtitle: "Explore the structure, organisation and systems of the human body.",

    introduction: {
        heading: "Introduction to Human Anatomy",
        paragraphs: [
            "Human anatomy is the scientific study of the structure of the human body and the relationships between its different parts.",
            "It examines the organisation of the body from microscopic structures such as cells and tissues to organs, organ systems and the whole organism.",
            "Anatomical knowledge provides an important foundation for understanding physiology, pathology, medical imaging and clinical healthcare."
        ]
    },

    overview: {
        heading: "Understanding Human Anatomy",
        sections: [
            {
                title: "What Is Anatomy?",
                content: "Anatomy is the study of body structures, their locations, shapes, relationships and organisation."
            },
            {
                title: "Why Is Anatomy Important?",
                content: "Anatomical knowledge helps learners understand normal body structure and provides a foundation for studying disease, injury, medical procedures and healthcare."
            },
            {
                title: "Anatomy and Physiology",
                content: "Anatomy studies body structure, while physiology studies how body parts function. These subjects are closely connected."
            },
            {
                title: "Anatomical Organisation",
                content: "The human body is organised into levels, beginning with chemical components and cells, progressing through tissues, organs and organ systems."
            }
        ]
    },

    branches: {
        heading: "Branches of Human Anatomy",
        topics: [
            {
                title: "Gross Anatomy",
                description: "Study of body structures visible to the unaided eye."
            },
            {
                title: "Microscopic Anatomy",
                description: "Study of structures that require a microscope, including cells and tissues."
            },
            {
                title: "Regional Anatomy",
                description: "Study of all structures within a particular body region and their relationships."
            },
            {
                title: "Systemic Anatomy",
                description: "Study of the body by organ systems, such as the nervous, cardiovascular and respiratory systems."
            },
            {
                title: "Surface Anatomy",
                description: "Study of external body landmarks and their relationship to deeper structures."
            },
            {
                title: "Developmental Anatomy",
                description: "Study of structural changes throughout human development."
            },
            {
                title: "Embryology",
                description: "Study of development from fertilisation through the embryonic period."
            },
            {
                title: "Radiological Anatomy",
                description: "Study of body structures as visualised through medical imaging."
            },
            {
                title: "Clinical Anatomy",
                description: "Application of anatomical knowledge to clinical assessment and healthcare."
            },
            {
                title: "Comparative Anatomy",
                description: "Study of anatomical similarities and differences between different organisms."
            }
        ]
    },

    organisation: {
        heading: "Levels of Structural Organisation",
        levels: [
            {
                number: 1,
                title: "Chemical Level",
                description: "Atoms and molecules form the chemical building blocks of the body."
            },
            {
                number: 2,
                title: "Cellular Level",
                description: "Cells are the basic structural and functional units of living organisms."
            },
            {
                number: 3,
                title: "Tissue Level",
                description: "Groups of similar cells and their surrounding materials form tissues."
            },
            {
                number: 4,
                title: "Organ Level",
                description: "Different tissues combine to form organs with specialised functions."
            },
            {
                number: 5,
                title: "Organ System Level",
                description: "Related organs work together as organ systems."
            },
            {
                number: 6,
                title: "Organism Level",
                description: "All organ systems work together to support the complete human organism."
            }
        ]
    },

    anatomicalPosition: {
        heading: "Standard Anatomical Position",
        description: "The standard anatomical position provides a consistent reference for describing the location and relationships of body structures.",
        features: [
            "The body stands upright.",
            "The head and eyes face forward.",
            "The upper limbs are positioned beside the body.",
            "The palms face forward.",
            "The lower limbs are positioned together or slightly apart.",
            "The feet point forward."
        ],
        note: "Anatomical right and left always refer to the person's right and left, not the observer's."
    },

    directionalTerms: {
        heading: "Anatomical Directional Terms",
        terms: [
            {
                term: "Superior",
                meaning: "Toward the head or upper part of a structure."
            },
            {
                term: "Inferior",
                meaning: "Toward the feet or lower part of a structure."
            },
            {
                term: "Anterior",
                meaning: "Toward the front of the body."
            },
            {
                term: "Posterior",
                meaning: "Toward the back of the body."
            },
            {
                term: "Medial",
                meaning: "Closer to the body's midline."
            },
            {
                term: "Lateral",
                meaning: "Farther from the body's midline."
            },
            {
                term: "Proximal",
                meaning: "Closer to the point of attachment or origin of a structure."
            },
            {
                term: "Distal",
                meaning: "Farther from the point of attachment or origin."
            },
            {
                term: "Superficial",
                meaning: "Closer to the surface of the body."
            },
            {
                term: "Deep",
                meaning: "Farther from the body surface."
            },
            {
                term: "Ipsilateral",
                meaning: "Located on the same side of the body."
            },
            {
                term: "Contralateral",
                meaning: "Located on the opposite side of the body."
            },
            {
                term: "Bilateral",
                meaning: "Present on or involving both sides."
            },
            {
                term: "Unilateral",
                meaning: "Present on or involving one side."
            }
        ]
    },

    anatomicalPlanes: {
        heading: "Anatomical Planes",
        description: "Anatomical planes are imaginary flat surfaces used to describe sections through the body.",
        planes: [
            {
                title: "Sagittal Plane",
                description: "Divides the body into right and left portions."
            },
            {
                title: "Midsagittal Plane",
                description: "A sagittal plane that divides the body into equal right and left halves."
            },
            {
                title: "Coronal or Frontal Plane",
                description: "Divides the body into anterior and posterior portions."
            },
            {
                title: "Transverse or Horizontal Plane",
                description: "Divides the body into superior and inferior portions."
            },
            {
                title: "Oblique Plane",
                description: "Passes through the body or an organ at an angle."
            }
        ]
    },

    bodyRegions: {
        heading: "Major Anatomical Regions",
        regions: [
            {
                title: "Head",
                description: "Contains the brain, sensory organs and structures of the face."
            },
            {
                title: "Neck",
                description: "Connects the head and trunk and contains important structures such as the airway, oesophagus and major vessels."
            },
            {
                title: "Thorax",
                description: "The chest region, containing the heart, lungs and other important structures."
            },
            {
                title: "Abdomen",
                description: "Contains many digestive organs and other abdominal structures."
            },
            {
                title: "Pelvis",
                description: "Contains the urinary bladder, reproductive organs and portions of the digestive tract."
            },
            {
                title: "Back",
                description: "Includes the vertebral column and associated muscles and structures."
            },
            {
                title: "Upper Limb",
                description: "Includes the shoulder, arm, forearm, wrist and hand."
            },
            {
                title: "Lower Limb",
                description: "Includes the hip, thigh, leg, ankle and foot."
            }
        ]
    },

    bodyCavities: {
        heading: "Major Body Cavities",
        description: "Body cavities are spaces that contain and protect internal organs.",
        cavities: [
            {
                title: "Cranial Cavity",
                description: "Contains and protects the brain."
            },
            {
                title: "Vertebral or Spinal Cavity",
                description: "Contains and protects the spinal cord."
            },
            {
                title: "Thoracic Cavity",
                description: "Contains the lungs and mediastinal structures, including the heart."
            },
            {
                title: "Pleural Cavities",
                description: "The spaces surrounding the lungs within the thorax."
            },
            {
                title: "Pericardial Cavity",
                description: "The potential space surrounding the heart within the pericardial sac."
            },
            {
                title: "Abdominal Cavity",
                description: "Contains many abdominal organs, including the stomach, liver and intestines."
            },
            {
                title: "Pelvic Cavity",
                description: "Contains pelvic organs, including the urinary bladder and internal reproductive structures."
            }
        ]
    },

    tissueTypes: {
        heading: "Four Basic Types of Human Tissue",
        tissues: [
            {
                title: "Epithelial Tissue",
                description: "Covers body surfaces, lines internal spaces and forms glands."
            },
            {
                title: "Connective Tissue",
                description: "Supports, connects, protects and binds other tissues and structures. Examples include bone, cartilage, blood and adipose tissue."
            },
            {
                title: "Muscle Tissue",
                description: "Specialised tissue capable of contraction. It includes skeletal, cardiac and smooth muscle."
            },
            {
                title: "Nervous Tissue",
                description: "Contains neurons and supporting cells that receive, process and transmit information."
            }
        ]
    },

    organSystems: {
        heading: "The Eleven Organ Systems",
        systems: [
            {
                title: "Integumentary System",
                organs: "Skin, hair, nails and associated glands.",
                function: "Provides a protective barrier and contributes to temperature regulation and sensation."
            },
            {
                title: "Skeletal System",
                organs: "Bones, cartilage, joints and ligaments.",
                function: "Provides support, protects organs and contributes to movement and blood cell production."
            },
            {
                title: "Muscular System",
                organs: "Skeletal muscles and associated structures.",
                function: "Supports movement, posture and heat production."
            },
            {
                title: "Nervous System",
                organs: "Brain, spinal cord, nerves and sensory structures.",
                function: "Receives information, processes signals and coordinates body activities."
            },
            {
                title: "Endocrine System",
                organs: "Hormone-producing glands and tissues.",
                function: "Regulates body processes through hormones."
            },
            {
                title: "Cardiovascular System",
                organs: "Heart, blood and blood vessels.",
                function: "Transports oxygen, nutrients, hormones and waste products."
            },
            {
                title: "Lymphatic and Immune System",
                organs: "Lymphatic vessels, lymph nodes, spleen, thymus and immune tissues.",
                function: "Supports fluid balance and immune defence."
            },
            {
                title: "Respiratory System",
                organs: "Nose, pharynx, larynx, trachea, bronchi and lungs.",
                function: "Supports gas exchange between the body and the environment."
            },
            {
                title: "Digestive System",
                organs: "Mouth, oesophagus, stomach, intestines, liver, pancreas and gallbladder.",
                function: "Processes food, absorbs nutrients and eliminates solid waste."
            },
            {
                title: "Urinary System",
                organs: "Kidneys, ureters, urinary bladder and urethra.",
                function: "Produces and eliminates urine and helps regulate fluid and electrolyte balance."
            },
            {
                title: "Reproductive System",
                organs: "Male and female reproductive organs.",
                function: "Supports reproductive processes and production of reproductive cells."
            }
        ]
    },

    majorOrgans: {
        heading: "Important Human Organs",
        organs: [
            {
                name: "Brain",
                system: "Nervous System",
                function: "Coordinates and regulates many body functions, behaviour and cognition."
            },
            {
                name: "Heart",
                system: "Cardiovascular System",
                function: "Pumps blood through the circulatory system."
            },
            {
                name: "Lungs",
                system: "Respiratory System",
                function: "Enable oxygen and carbon dioxide exchange."
            },
            {
                name: "Liver",
                system: "Digestive System",
                function: "Performs metabolic, synthetic, storage and detoxification-related functions."
            },
            {
                name: "Kidneys",
                system: "Urinary System",
                function: "Filter blood, produce urine and regulate several aspects of internal balance."
            },
            {
                name: "Stomach",
                system: "Digestive System",
                function: "Stores and mechanically and chemically processes food."
            },
            {
                name: "Pancreas",
                system: "Digestive and Endocrine Systems",
                function: "Produces digestive secretions and hormones including insulin and glucagon."
            },
            {
                name: "Spleen",
                system: "Lymphatic and Immune System",
                function: "Filters blood and contributes to immune functions."
            },
            {
                name: "Skin",
                system: "Integumentary System",
                function: "Provides a protective barrier and contributes to sensation and temperature regulation."
            }
        ]
    },

    skeletalFramework: {
        heading: "Introduction to the Human Skeleton",
        topics: [
            {
                title: "Axial Skeleton",
                description: "Includes the skull, vertebral column, ribs and sternum."
            },
            {
                title: "Appendicular Skeleton",
                description: "Includes the bones of the upper and lower limbs and their supporting girdles."
            },
            {
                title: "Bone Functions",
                description: "Bones provide support, protect organs, assist movement, store minerals and contain marrow involved in blood cell production."
            },
            {
                title: "Bone Classification",
                description: "Bones are commonly classified as long, short, flat, irregular and sesamoid."
            }
        ]
    },

    muscularFramework: {
        heading: "Introduction to the Muscular System",
        types: [
            {
                title: "Skeletal Muscle",
                description: "Usually voluntary muscle attached to bones and involved in movement."
            },
            {
                title: "Cardiac Muscle",
                description: "Involuntary muscle tissue forming the muscular wall of the heart."
            },
            {
                title: "Smooth Muscle",
                description: "Involuntary muscle found in the walls of many hollow organs and blood vessels."
            }
        ]
    },

    anatomicalMovements: {
        heading: "Basic Anatomical Movements",
        movements: [
            {
                name: "Flexion",
                description: "Usually decreases the angle between bones at a joint."
            },
            {
                name: "Extension",
                description: "Usually increases the angle between bones at a joint."
            },
            {
                name: "Abduction",
                description: "Movement away from the body's midline."
            },
            {
                name: "Adduction",
                description: "Movement toward the body's midline."
            },
            {
                name: "Rotation",
                description: "Movement of a body part around its longitudinal axis."
            },
            {
                name: "Circumduction",
                description: "Circular movement combining flexion, extension, abduction and adduction."
            },
            {
                name: "Pronation",
                description: "Rotation of the forearm that turns the palm posteriorly in anatomical position or downward in the usual flexed position."
            },
            {
                name: "Supination",
                description: "Rotation of the forearm that turns the palm anteriorly in anatomical position or upward in the usual flexed position."
            },
            {
                name: "Dorsiflexion",
                description: "Movement of the foot upward toward the shin."
            },
            {
                name: "Plantar Flexion",
                description: "Movement of the foot downward, away from the shin."
            }
        ]
    },

    embryologyIntroduction: {
        heading: "Introduction to Human Development",
        topics: [
            {
                title: "Fertilisation",
                description: "The process in which a sperm cell and an oocyte unite to form a zygote."
            },
            {
                title: "Cleavage",
                description: "A series of early cell divisions following fertilisation."
            },
            {
                title: "Blastocyst",
                description: "An early developmental stage that forms before implantation."
            },
            {
                title: "Gastrulation",
                description: "The developmental process that establishes the three primary germ layers."
            },
            {
                title: "Organogenesis",
                description: "The formation and early development of organs."
            }
        ]
    },

    visualLearning: {
        heading: "Anatomy Visual Learning Centre",
        resources: [
            {
                title: "Human Body Overview",
                description: "A labelled overview of the major regions of the human body.",
                plannedAsset: "human-body-overview"
            },
            {
                title: "Anatomical Position",
                description: "A visual explanation of the standard anatomical position.",
                plannedAsset: "anatomical-position"
            },
            {
                title: "Anatomical Planes",
                description: "Sagittal, coronal, transverse and oblique planes.",
                plannedAsset: "anatomical-planes"
            },
            {
                title: "Body Cavities",
                description: "A labelled overview of the major body cavities.",
                plannedAsset: "body-cavities"
            },
            {
                title: "Four Tissue Types",
                description: "Illustrations of epithelial, connective, muscle and nervous tissues.",
                plannedAsset: "four-tissue-types"
            },
            {
                title: "Eleven Organ Systems",
                description: "An overview of the major human organ systems.",
                plannedAsset: "eleven-organ-systems"
            },
            {
                title: "Human Skeleton",
                description: "An overview of axial and appendicular skeleton structures.",
                plannedAsset: "human-skeleton"
            },
            {
                title: "Human Musculature",
                description: "An overview of major skeletal muscle groups.",
                plannedAsset: "human-musculature"
            }
        ]
    },

    learningObjectives: [
        "Define human anatomy and explain its importance.",
        "Identify the major branches of anatomy.",
        "Describe the levels of structural organisation.",
        "Explain the standard anatomical position.",
        "Use common anatomical directional terms.",
        "Identify anatomical planes and body regions.",
        "Describe major body cavities.",
        "Identify the four basic tissue types.",
        "Name the eleven major organ systems.",
        "Recognise important human organs and their systems.",
        "Explain the basic organisation of the skeleton and muscular system.",
        "Identify common anatomical movements.",
        "Describe the earliest stages of human development."
    ],

    faqs: [
        {
            question: "What is human anatomy?",
            answer: "Human anatomy is the scientific study of the structures of the human body and their relationships."
        },
        {
            question: "What is the difference between anatomy and physiology?",
            answer: "Anatomy studies body structures, while physiology studies how those structures function."
        },
        {
            question: "What is the standard anatomical position?",
            answer: "It is a standard reference position in which a person stands upright, faces forward, keeps the upper limbs beside the body and faces the palms forward."
        },
        {
            question: "How many basic tissue types are there?",
            answer: "There are four basic tissue types: epithelial, connective, muscle and nervous tissue."
        },
        {
            question: "How many major organ systems are commonly described?",
            answer: "Eleven major organ systems are commonly described in introductory human anatomy."
        },
        {
            question: "What is the difference between proximal and distal?",
            answer: "Proximal means closer to a structure's point of attachment or origin, while distal means farther away."
        },
        {
            question: "What are anatomical planes?",
            answer: "They are imaginary reference planes used to describe sections through the body."
        },
        {
            question: "Why are anatomical diagrams important?",
            answer: "They help learners visualise structures, understand spatial relationships and connect anatomical names with physical locations."
        }
    ],

    quiz: [
        {
            question: "What does human anatomy primarily study?",
            options: [
                "Body structure",
                "Body functions only",
                "Medicines",
                "Disease statistics"
            ],
            answer: 0,
            explanation: "Anatomy studies the structures of the human body and their relationships."
        },
        {
            question: "Which tissue type is specialised for contraction?",
            options: [
                "Epithelial tissue",
                "Connective tissue",
                "Muscle tissue",
                "Nervous tissue"
            ],
            answer: 2,
            explanation: "Muscle tissue is specialised for contraction and movement."
        },
        {
            question: "Which anatomical plane divides the body into anterior and posterior portions?",
            options: [
                "Sagittal",
                "Coronal",
                "Transverse",
                "Oblique"
            ],
            answer: 1,
            explanation: "The coronal or frontal plane divides the body into anterior and posterior portions."
        },
        {
            question: "Which organ belongs primarily to the cardiovascular system?",
            options: [
                "Kidney",
                "Liver",
                "Heart",
                "Stomach"
            ],
            answer: 2,
            explanation: "The heart is the central pumping organ of the cardiovascular system."
        },
        {
            question: "What does medial mean?",
            options: [
                "Closer to the midline",
                "Farther from the midline",
                "Closer to the skin",
                "Farther from the point of attachment"
            ],
            answer: 0,
            explanation: "Medial describes a structure closer to the body's midline."
        },
        {
            question: "Which cavity contains the brain?",
            options: [
                "Thoracic cavity",
                "Cranial cavity",
                "Abdominal cavity",
                "Pelvic cavity"
            ],
            answer: 1,
            explanation: "The cranial cavity surrounds and protects the brain."
        },
        {
            question: "Which tissue type includes blood and bone?",
            options: [
                "Muscle tissue",
                "Nervous tissue",
                "Connective tissue",
                "Epithelial tissue"
            ],
            answer: 2,
            explanation: "Blood and bone are specialised forms of connective tissue."
        },
        {
            question: "What does abduction generally mean?",
            options: [
                "Movement toward the midline",
                "Movement away from the midline",
                "Bending a joint",
                "Straightening a joint"
            ],
            answer: 1,
            explanation: "Abduction is movement away from the body's midline."
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
            name: "MedlinePlus — Body Location and Systems",
            url: "https://medlineplus.gov/"
        },
        {
            name: "TeachMeAnatomy",
            url: "https://teachmeanatomy.info/"
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

    const content = HUMAN_ANATOMY_CONTENT;

    const requiredFields = [
        "introduction",
        "overview",
        "branches",
        "organisation",
        "anatomicalPosition",
        "directionalTerms",
        "anatomicalPlanes",
        "bodyRegions",
        "bodyCavities",
        "tissueTypes",
        "organSystems",
        "majorOrgans",
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
            "Human Anatomy content validation failed:",
            missingFields
        );

    } else {

        console.log(
            "Human Anatomy educational dataset loaded."
        );

    }

})();
