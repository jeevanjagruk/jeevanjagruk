/* =========================================================
   JEEVAN JAGRUK
   DIVISION 09 — GENERAL AND SYSTEMIC PATHOLOGY
   Educational content dataset
   ========================================================= */

"use strict";

const GENERAL_SYSTEMIC_PATHOLOGY_CONTENT = {

    divisionId: "general-systemic-pathology",
    divisionNumber: 9,
    title: "General and Systemic Pathology",
    subtitle: "Understand the mechanisms of disease and the pathological changes affecting human tissues and organs.",

    introduction: {
        heading: "Introduction to General and Systemic Pathology",
        paragraphs: [
            "Pathology is the branch of medical science concerned with the study of disease, including its causes, mechanisms, structural changes and effects on the body.",
            "General pathology examines fundamental disease processes that can affect different organs and tissues.",
            "Systemic pathology studies how these disease processes affect specific organ systems.",
            "Pathology connects basic biomedical sciences with clinical medicine and supports disease diagnosis, prognosis and research."
        ]
    },

    overview: {
        heading: "Understanding Pathology",
        sections: [
            {
                title: "What Is Pathology?",
                content: "Pathology is the scientific study of disease and the structural, functional and molecular changes associated with it."
            },
            {
                title: "General Pathology",
                content: "General pathology studies common mechanisms of disease, such as cellular injury, inflammation, tissue repair and neoplasia."
            },
            {
                title: "Systemic Pathology",
                content: "Systemic pathology examines diseases according to the organs and body systems affected."
            },
            {
                title: "Clinical Importance",
                content: "Pathological investigations help healthcare professionals identify diseases, assess tissue changes and support clinical decisions."
            }
        ]
    },

    majorBranches: {
        heading: "Major Branches of Pathology",
        branches: [
            {
                name: "General Pathology",
                description: "Study of fundamental mechanisms and patterns of disease."
            },
            {
                name: "Systemic Pathology",
                description: "Study of diseases affecting individual organs and body systems."
            },
            {
                name: "Histopathology",
                description: "Examination of tissue samples to identify structural changes associated with disease."
            },
            {
                name: "Cytopathology",
                description: "Study of individual cells and small groups of cells for diagnostic purposes."
            },
            {
                name: "Haematopathology",
                description: "Study of diseases affecting blood, bone marrow and lymphoid tissues."
            },
            {
                name: "Molecular Pathology",
                description: "Study of disease-related molecular and genetic alterations."
            },
            {
                name: "Immunopathology",
                description: "Study of diseases associated with abnormal immune responses."
            },
            {
                name: "Chemical Pathology",
                description: "Study of biochemical changes associated with diseases."
            },
            {
                name: "Forensic Pathology",
                description: "Application of pathological knowledge to medico-legal investigations."
            },
            {
                name: "Neuropathology",
                description: "Study of diseases affecting the nervous system."
            }
        ]
    },

    diseaseFundamentals: {
        heading: "Fundamentals of Disease",

        concepts: [
            {
                name: "Aetiology",
                description: "The cause or origin of a disease."
            },
            {
                name: "Pathogenesis",
                description: "The sequence of biological mechanisms through which a disease develops."
            },
            {
                name: "Morphological Changes",
                description: "Structural alterations in cells, tissues and organs associated with disease."
            },
            {
                name: "Clinical Manifestations",
                description: "The signs, symptoms and other observable features associated with a disease."
            },
            {
                name: "Diagnosis",
                description: "Identification of a disease or health condition using clinical and investigative information."
            },
            {
                name: "Prognosis",
                description: "The expected course and likely outcome of a disease."
            },
            {
                name: "Complications",
                description: "Additional health problems that develop as a consequence of a disease or its management."
            },
            {
                name: "Sequelae",
                description: "Long-term effects or consequences that remain after a disease or injury."
            }
        ],

        causes: [
            "Genetic abnormalities",
            "Infectious agents",
            "Immune system dysfunction",
            "Nutritional deficiencies",
            "Physical agents",
            "Chemical agents",
            "Metabolic disturbances",
            "Environmental factors",
            "Age-related changes",
            "Multifactorial influences"
        ]
    },

    cellularAdaptation: {
        heading: "Cellular Adaptation",

        concepts: [
            {
                name: "Hypertrophy",
                description: "An increase in cell size that may result in enlargement of an organ or tissue."
            },
            {
                name: "Hyperplasia",
                description: "An increase in the number of cells within a tissue or organ."
            },
            {
                name: "Atrophy",
                description: "A reduction in cell size and sometimes cell number, resulting in reduced tissue or organ size."
            },
            {
                name: "Metaplasia",
                description: "A reversible change in which one differentiated cell type is replaced by another differentiated cell type."
            },
            {
                name: "Dysplasia",
                description: "Disordered cellular growth and maturation, often involving abnormalities in cell size, shape and organisation."
            }
        ],

        examples: [
            {
                title: "Physiological Hypertrophy",
                description: "Enlargement of skeletal muscle cells in response to increased workload."
            },
            {
                title: "Pathological Hypertrophy",
                description: "Enlargement of cardiac muscle cells in response to persistent increased workload."
            },
            {
                title: "Physiological Hyperplasia",
                description: "Increased cell proliferation in certain tissues during normal hormonal or regenerative responses."
            },
            {
                title: "Pathological Hyperplasia",
                description: "Excessive cell proliferation associated with particular hormonal or growth-factor influences."
            }
        ]
    },

    cellularInjury: {
        heading: "Cellular Injury",

        causes: [
            {
                name: "Hypoxia and Ischaemia",
                description: "Reduced oxygen availability or inadequate blood supply can impair cellular energy production."
            },
            {
                name: "Physical Agents",
                description: "Heat, cold, radiation, pressure and mechanical trauma can damage cells."
            },
            {
                name: "Chemical Agents",
                description: "Toxic substances and harmful chemicals may interfere with cellular functions."
            },
            {
                name: "Infectious Agents",
                description: "Bacteria, viruses, fungi and parasites can cause cellular damage."
            },
            {
                name: "Immune Reactions",
                description: "Abnormal or excessive immune responses can damage tissues."
            },
            {
                name: "Genetic Abnormalities",
                description: "Inherited or acquired genetic changes may disrupt normal cellular functions."
            },
            {
                name: "Nutritional Imbalances",
                description: "Deficiencies or excesses of nutrients may contribute to cellular injury."
            }
        ],

        mechanisms: [
            {
                title: "ATP Depletion",
                description: "Reduced cellular energy availability interferes with essential processes."
            },
            {
                title: "Mitochondrial Dysfunction",
                description: "Mitochondrial damage can disrupt energy production and influence cell death pathways."
            },
            {
                title: "Calcium Imbalance",
                description: "Abnormal intracellular calcium regulation can activate damaging cellular processes."
            },
            {
                title: "Oxidative Stress",
                description: "Excess reactive oxygen species can damage proteins, lipids and nucleic acids."
            },
            {
                title: "Membrane Damage",
                description: "Cell membrane injury disrupts normal transport and cellular integrity."
            },
            {
                title: "DNA Damage",
                description: "Genetic material may be damaged by radiation, chemicals, oxidative stress and other factors."
            }
        ]
    },

    cellDeath: {
        heading: "Cell Death",

        types: [
            {
                name: "Necrosis",
                description: "A form of cell death commonly associated with severe cellular injury and inflammation."
            },
            {
                name: "Apoptosis",
                description: "A regulated form of cell death that removes unwanted or damaged cells."
            },
            {
                name: "Autophagy",
                description: "A cellular recycling process involving the breakdown and reuse of cellular components. It can have different effects depending on the context."
            },
            {
                name: "Necroptosis",
                description: "A regulated form of cell death with features resembling necrosis."
            },
            {
                name: "Pyroptosis",
                description: "An inflammatory form of regulated cell death associated with immune responses."
            },
            {
                name: "Ferroptosis",
                description: "A regulated form of cell death associated with iron-dependent lipid peroxidation."
            }
        ],

        necrosisPatterns: [
            {
                name: "Coagulative Necrosis",
                description: "A pattern commonly associated with ischaemic injury in many solid organs."
            },
            {
                name: "Liquefactive Necrosis",
                description: "A pattern involving tissue digestion and liquefaction, often seen in certain infections and brain infarction."
            },
            {
                name: "Caseous Necrosis",
                description: "A characteristic granular, cheese-like pattern associated with certain granulomatous diseases."
            },
            {
                name: "Fat Necrosis",
                description: "Destruction of adipose tissue, which may occur in particular inflammatory or traumatic conditions."
            },
            {
                name: "Fibrinoid Necrosis",
                description: "A microscopic pattern of vascular wall injury associated with immune-mediated and other pathological processes."
            },
            {
                name: "Gangrenous Necrosis",
                description: "A clinical description of extensive tissue death, often involving limbs or bowel."
            }
        ]
    },

    inflammation: {
        heading: "Inflammation",

        introduction: "Inflammation is a protective biological response to infection, tissue injury or harmful stimuli. It helps eliminate the cause of injury and initiate repair.",

        cardinalSigns: [
            {
                name: "Redness",
                description: "Associated with increased blood flow."
            },
            {
                name: "Heat",
                description: "Associated with increased local blood flow and inflammatory activity."
            },
            {
                name: "Swelling",
                description: "Associated with fluid accumulation and changes in vascular permeability."
            },
            {
                name: "Pain",
                description: "Associated with inflammatory mediators and tissue changes."
            },
            {
                name: "Loss of Function",
                description: "Reduced function may occur in affected tissues."
            }
        ],

        types: [
            {
                name: "Acute Inflammation",
                description: "A rapid, usually short-term response characterised by vascular changes and recruitment of inflammatory cells."
            },
            {
                name: "Chronic Inflammation",
                description: "A prolonged response involving immune cells, tissue injury and attempts at repair."
            },
            {
                name: "Granulomatous Inflammation",
                description: "A distinctive form of chronic inflammation characterised by organised collections of activated macrophages."
            }
        ],

        cells: [
            {
                name: "Neutrophils",
                description: "Important cells in many acute inflammatory responses."
            },
            {
                name: "Macrophages",
                description: "Cells involved in phagocytosis, inflammatory signalling and tissue repair."
            },
            {
                name: "Lymphocytes",
                description: "Cells involved in adaptive immunity and chronic inflammatory responses."
            },
            {
                name: "Eosinophils",
                description: "Cells involved in selected allergic and parasitic responses."
            },
            {
                name: "Mast Cells",
                description: "Cells that release inflammatory mediators."
            }
        ],

        mediators: [
            "Histamine",
            "Prostaglandins",
            "Leukotrienes",
            "Cytokines",
            "Chemokines",
            "Complement proteins",
            "Nitric oxide"
        ]
    },

    tissueRepair: {
        heading: "Tissue Repair and Wound Healing",

        processes: [
            {
                name: "Haemostasis",
                description: "Initial processes that help stop bleeding after tissue injury."
            },
            {
                name: "Inflammation",
                description: "Removal of damaged tissue and protection against potential infection."
            },
            {
                name: "Proliferation",
                description: "Formation of new tissue, blood vessels and extracellular matrix."
            },
            {
                name: "Remodelling",
                description: "Reorganisation and maturation of repaired tissue."
            }
        ],

        concepts: [
            {
                name: "Regeneration",
                description: "Replacement of damaged cells by the same type of cells, restoring tissue structure and function where possible."
            },
            {
                name: "Fibrosis",
                description: "Excessive accumulation of connective tissue that may interfere with normal organ function."
            },
            {
                name: "Scar Formation",
                description: "Replacement of damaged tissue with connective tissue."
            },
            {
                name: "Primary Intention Healing",
                description: "Healing of a clean wound with closely approximated edges."
            },
            {
                name: "Secondary Intention Healing",
                description: "Healing of a wound with tissue loss through granulation tissue formation and contraction."
            }
        ]
    },

    haemodynamicDisorders: {
        heading: "Haemodynamic Disorders",

        conditions: [
            {
                name: "Oedema",
                description: "Abnormal accumulation of fluid in interstitial tissues or body cavities."
            },
            {
                name: "Hyperemia",
                description: "An active increase in blood flow to a tissue."
            },
            {
                name: "Congestion",
                description: "Passive accumulation of blood due to impaired venous outflow."
            },
            {
                name: "Haemorrhage",
                description: "Escape of blood from blood vessels into tissues or body spaces."
            },
            {
                name: "Thrombosis",
                description: "Formation of a blood clot within the cardiovascular system."
            },
            {
                name: "Embolism",
                description: "Obstruction of a blood vessel by material transported through the bloodstream."
            },
            {
                name: "Infarction",
                description: "An area of tissue necrosis caused by inadequate blood supply."
            },
            {
                name: "Shock",
                description: "A life-threatening state of circulatory failure resulting in inadequate tissue perfusion."
            },
            {
                name: "Disseminated Intravascular Coagulation",
                description: "A complex disorder involving widespread activation of coagulation with consumption of clotting components."
            }
        ],

        thrombosisConcepts: [
            {
                name: "Endothelial Injury",
                description: "Damage or dysfunction of the vessel lining can contribute to clot formation."
            },
            {
                name: "Abnormal Blood Flow",
                description: "Stasis or turbulence can promote thrombosis."
            },
            {
                name: "Hypercoagulability",
                description: "An increased tendency of blood to form clots."
            }
        ]
    },

    geneticAndDevelopmentalPathology: {
        heading: "Genetic and Developmental Pathology",

        concepts: [
            {
                name: "Inherited Disorders",
                description: "Conditions caused by genetic changes passed from parents to offspring."
            },
            {
                name: "Chromosomal Abnormalities",
                description: "Conditions associated with changes in chromosome number or structure."
            },
            {
                name: "Congenital Disorders",
                description: "Conditions present at birth, which may arise from genetic or non-genetic causes."
            },
            {
                name: "Multifactorial Disorders",
                description: "Conditions influenced by interactions between genetic and environmental factors."
            },
            {
                name: "Developmental Abnormalities",
                description: "Structural or functional abnormalities arising during development."
            },
            {
                name: "Teratogenic Effects",
                description: "Abnormal developmental outcomes associated with exposure to particular harmful influences during pregnancy."
            }
        ]
    },

    immunopathology: {
        heading: "Immunopathology",

        topics: [
            {
                name: "Hypersensitivity",
                description: "Excessive or inappropriate immune responses that cause tissue injury."
            },
            {
                name: "Autoimmune Injury",
                description: "Tissue damage caused by immune responses directed against the body's own components."
            },
            {
                name: "Immunodeficiency",
                description: "Impaired immune function that may increase susceptibility to infections and other complications."
            },
            {
                name: "Immune Complex Injury",
                description: "Tissue damage associated with deposition of antigen-antibody complexes."
            },
            {
                name: "Transplant Rejection",
                description: "Immune responses directed against transplanted tissues or organs."
            }
        ]
    },

    neoplasia: {
        heading: "Neoplasia and Tumours",

        introduction: "Neoplasia refers to abnormal, relatively autonomous proliferation of cells. Neoplasms may be benign or malignant.",

        concepts: [
            {
                name: "Neoplasm",
                description: "An abnormal mass of tissue resulting from uncontrolled or excessive cellular proliferation."
            },
            {
                name: "Benign Tumour",
                description: "A neoplasm that does not invade surrounding tissues or metastasise, although it may still cause harm depending on its location or effects."
            },
            {
                name: "Malignant Tumour",
                description: "A neoplasm capable of invading surrounding tissues and potentially spreading to distant sites."
            },
            {
                name: "Differentiation",
                description: "The degree to which tumour cells resemble their normal tissue counterparts."
            },
            {
                name: "Anaplasia",
                description: "A loss of cellular differentiation commonly associated with aggressive malignant tumours."
            },
            {
                name: "Metastasis",
                description: "Spread of malignant cells from the original tumour to distant sites."
            },
            {
                name: "Carcinoma",
                description: "A malignant tumour arising from epithelial cells."
            },
            {
                name: "Sarcoma",
                description: "A malignant tumour arising from mesenchymal or connective tissue-related cells."
            },
            {
                name: "Leukaemia",
                description: "A group of malignant disorders involving blood-forming tissues."
            },
            {
                name: "Lymphoma",
                description: "A group of malignant disorders involving lymphocytes and lymphoid tissues."
            }
        ],

        hallmarks: [
            "Sustained proliferative signalling",
            "Evading growth suppressors",
            "Resisting cell death",
            "Enabling replicative immortality",
            "Inducing angiogenesis",
            "Activating invasion and metastasis",
            "Reprogramming cellular metabolism",
            "Avoiding immune destruction"
        ],

        gradingAndStaging: [
            {
                name: "Tumour Grading",
                description: "Assessment of microscopic features that indicate how abnormal tumour cells appear and how differentiated they are."
            },
            {
                name: "Tumour Staging",
                description: "Assessment of the anatomical extent of cancer, including primary tumour size, lymph node involvement and distant spread."
            },
            {
                name: "TNM Classification",
                description: "A widely used system describing primary tumour, regional lymph nodes and distant metastasis."
            }
        ]
    },

    systemicPathology: {
        heading: "Introduction to Systemic Pathology",

        systems: [
            {
                name: "Cardiovascular Pathology",
                description: "Study of diseases affecting the heart, blood vessels and circulatory system.",
                topics: [
                    "Atherosclerosis",
                    "Myocardial infarction",
                    "Hypertension-related changes",
                    "Heart failure",
                    "Valvular heart disease",
                    "Vascular inflammation"
                ]
            },
            {
                name: "Respiratory Pathology",
                description: "Study of diseases affecting the lungs and respiratory tract.",
                topics: [
                    "Pneumonia",
                    "Tuberculosis",
                    "Asthma",
                    "Chronic obstructive pulmonary disease",
                    "Pulmonary fibrosis",
                    "Lung cancer"
                ]
            },
            {
                name: "Gastrointestinal Pathology",
                description: "Study of diseases involving the digestive tract.",
                topics: [
                    "Gastritis",
                    "Peptic ulcer disease",
                    "Inflammatory bowel disease",
                    "Coeliac disease",
                    "Colorectal cancer",
                    "Hepatobiliary disorders"
                ]
            },
            {
                name: "Hepatic Pathology",
                description: "Study of liver diseases and associated tissue changes.",
                topics: [
                    "Hepatitis",
                    "Fatty liver disease",
                    "Cirrhosis",
                    "Liver fibrosis",
                    "Liver tumours"
                ]
            },
            {
                name: "Renal Pathology",
                description: "Study of diseases affecting the kidneys.",
                topics: [
                    "Glomerulonephritis",
                    "Acute kidney injury",
                    "Chronic kidney disease",
                    "Pyelonephritis",
                    "Diabetic kidney disease"
                ]
            },
            {
                name: "Endocrine Pathology",
                description: "Study of disorders involving hormone-producing glands.",
                topics: [
                    "Diabetes mellitus",
                    "Thyroiditis",
                    "Thyroid tumours",
                    "Adrenal disorders",
                    "Pituitary disorders"
                ]
            },
            {
                name: "Haematological Pathology",
                description: "Study of diseases involving blood and bone marrow.",
                topics: [
                    "Anaemia",
                    "Leukaemia",
                    "Lymphoma",
                    "Bleeding disorders",
                    "Clotting disorders"
                ]
            },
            {
                name: "Neuropathology",
                description: "Study of diseases affecting the brain, spinal cord and peripheral nerves.",
                topics: [
                    "Stroke",
                    "Neurodegenerative diseases",
                    "Meningitis",
                    "Brain tumours",
                    "Demyelinating disorders"
                ]
            },
            {
                name: "Musculoskeletal Pathology",
                description: "Study of disorders affecting bones, joints, muscles and connective tissues.",
                topics: [
                    "Osteoporosis",
                    "Osteomyelitis",
                    "Osteoarthritis",
                    "Rheumatoid arthritis",
                    "Bone tumours"
                ]
            },
            {
                name: "Reproductive Pathology",
                description: "Study of diseases affecting male and female reproductive systems.",
                topics: [
                    "Endometriosis",
                    "Ovarian disorders",
                    "Cervical pathology",
                    "Prostate disorders",
                    "Reproductive system tumours"
                ]
            },
            {
                name: "Dermatopathology",
                description: "Study of diseases affecting the skin and associated structures.",
                topics: [
                    "Psoriasis",
                    "Eczema",
                    "Skin infections",
                    "Melanocytic lesions",
                    "Skin cancers"
                ]
            },
            {
                name: "Ophthalmic Pathology",
                description: "Study of diseases affecting the eye and associated structures.",
                topics: [
                    "Cataract-related changes",
                    "Glaucoma",
                    "Retinal disorders",
                    "Ocular inflammation",
                    "Eye tumours"
                ]
            }
        ]
    },

    pathologyInvestigations: {
        heading: "Pathological Investigations",

        methods: [
            {
                name: "Histopathology",
                description: "Microscopic examination of tissue specimens."
            },
            {
                name: "Cytology",
                description: "Examination of individual cells or cell groups."
            },
            {
                name: "Biopsy",
                description: "Removal of tissue for pathological examination."
            },
            {
                name: "Fine Needle Aspiration Cytology",
                description: "Collection of cells using a fine needle for cytological assessment."
            },
            {
                name: "Haematological Testing",
                description: "Laboratory examination of blood cells and related parameters."
            },
            {
                name: "Immunohistochemistry",
                description: "Use of antibody-based techniques to identify selected tissue antigens."
            },
            {
                name: "Molecular Diagnostics",
                description: "Analysis of genetic and molecular changes associated with disease."
            },
            {
                name: "Special Stains",
                description: "Staining methods used to demonstrate particular tissue components or microorganisms."
            },
            {
                name: "Frozen Section",
                description: "A rapid tissue examination method used in selected surgical settings."
            },
            {
                name: "Autopsy",
                description: "Systematic examination of a deceased person to investigate disease and cause of death."
            }
        ],

        specimenTypes: [
            "Blood",
            "Bone marrow",
            "Urine",
            "Tissue biopsies",
            "Cytology samples",
            "Body fluids",
            "Surgical specimens",
            "Post-mortem specimens"
        ]
    },

    pathologyAndPublicHealth: {
        heading: "Pathology and Public Health",

        topics: [
            {
                title: "Disease Surveillance",
                description: "Pathological and laboratory data contribute to monitoring disease patterns."
            },
            {
                title: "Cancer Registration",
                description: "Pathology supports accurate classification and reporting of cancer cases."
            },
            {
                title: "Infectious Disease Diagnosis",
                description: "Laboratory pathology contributes to identification of infectious diseases."
            },
            {
                title: "Screening Programmes",
                description: "Pathological methods support selected population screening initiatives."
            },
            {
                title: "Quality Assurance",
                description: "Laboratory quality systems support reliable and reproducible test results."
            },
            {
                title: "Evidence-Based Medicine",
                description: "Pathological findings contribute to clinical research and evidence-based decisions."
            }
        ]
    },

    indianContext: {
        heading: "Pathology in the Indian Healthcare System",

        organisations: [
            {
                name: "Indian Council of Medical Research",
                url: "https://www.icmr.gov.in/"
            },
            {
                name: "National Centre for Disease Control",
                url: "https://ncdc.mohfw.gov.in/"
            },
            {
                name: "Ministry of Health and Family Welfare",
                url: "https://mohfw.gov.in/"
            },
            {
                name: "National Health Mission",
                url: "https://nhm.gov.in/"
            },
            {
                name: "National Cancer Registry Programme",
                url: "https://ncdirindia.org/"
            }
        ],

        areas: [
            {
                title: "Cancer Diagnosis",
                description: "Pathology services contribute to cancer detection, classification and monitoring."
            },
            {
                title: "Infectious Disease Control",
                description: "Laboratory diagnosis supports the identification and surveillance of infectious diseases."
            },
            {
                title: "Non-Communicable Diseases",
                description: "Pathological investigations help assess diabetes-related, cardiovascular and other chronic conditions."
            },
            {
                title: "Laboratory Standards",
                description: "Quality assurance and laboratory accreditation are important for reliable diagnostic services."
            }
        ]
    },

    visualLearning: {
        heading: "Pathology Visual Learning Centre",

        resources: [
            {
                title: "Cellular Adaptation",
                description: "Comparison of hypertrophy, hyperplasia, atrophy and metaplasia.",
                plannedAsset: "cellular-adaptation"
            },
            {
                title: "Cellular Injury",
                description: "Overview of major mechanisms of cellular damage.",
                plannedAsset: "cellular-injury"
            },
            {
                title: "Necrosis and Apoptosis",
                description: "Comparison of major forms of cell death.",
                plannedAsset: "necrosis-apoptosis"
            },
            {
                title: "Necrosis Patterns",
                description: "Illustration of major patterns of necrosis.",
                plannedAsset: "necrosis-patterns"
            },
            {
                title: "Acute and Chronic Inflammation",
                description: "Comparison of inflammatory responses.",
                plannedAsset: "inflammation-types"
            },
            {
                title: "Wound Healing",
                description: "Overview of the major stages of tissue repair.",
                plannedAsset: "wound-healing"
            },
            {
                title: "Thrombosis and Embolism",
                description: "Educational illustration of blood clot formation and embolism.",
                plannedAsset: "thrombosis-embolism"
            },
            {
                title: "Oedema",
                description: "Illustration of fluid accumulation in tissues.",
                plannedAsset: "oedema"
            },
            {
                title: "Benign and Malignant Tumours",
                description: "Comparison of tumour behaviour.",
                plannedAsset: "benign-malignant"
            },
            {
                title: "Cancer Metastasis",
                description: "Overview of the process of tumour spread.",
                plannedAsset: "cancer-metastasis"
            },
            {
                title: "Tumour Grading and Staging",
                description: "Educational overview of cancer classification.",
                plannedAsset: "tumour-grading-staging"
            },
            {
                title: "Systemic Pathology Map",
                description: "Overview of pathology across major organ systems.",
                plannedAsset: "systemic-pathology-map"
            },
            {
                title: "Pathology Laboratory",
                description: "Introduction to histopathology and cytology investigations.",
                plannedAsset: "pathology-laboratory"
            }
        ]
    },

    learningObjectives: [
        "Define pathology and explain its importance in medicine.",
        "Differentiate general and systemic pathology.",
        "Understand major branches of pathology.",
        "Explain basic concepts of disease.",
        "Identify common causes of cellular injury.",
        "Describe cellular adaptations.",
        "Differentiate necrosis and apoptosis.",
        "Understand acute and chronic inflammation.",
        "Identify important inflammatory cells and mediators.",
        "Explain the stages of tissue repair.",
        "Understand oedema, thrombosis, embolism and infarction.",
        "Understand genetic and developmental pathology.",
        "Explain immunopathological processes.",
        "Differentiate benign and malignant neoplasms.",
        "Understand basic tumour grading and staging.",
        "Recognise major organ-system diseases.",
        "Identify common pathological investigations.",
        "Understand the role of pathology in public health."
    ],

    faqs: [
        {
            question: "What is pathology?",
            answer: "Pathology is the study of disease, including its causes, mechanisms and structural changes."
        },
        {
            question: "What is the difference between general and systemic pathology?",
            answer: "General pathology studies common mechanisms of disease, while systemic pathology studies diseases affecting individual organs and systems."
        },
        {
            question: "What is aetiology?",
            answer: "Aetiology refers to the cause or origin of a disease."
        },
        {
            question: "What is pathogenesis?",
            answer: "Pathogenesis describes the biological mechanisms through which a disease develops."
        },
        {
            question: "What is hypertrophy?",
            answer: "Hypertrophy is an increase in the size of individual cells."
        },
        {
            question: "What is hyperplasia?",
            answer: "Hyperplasia is an increase in the number of cells in a tissue or organ."
        },
        {
            question: "What is apoptosis?",
            answer: "Apoptosis is a regulated form of cell death."
        },
        {
            question: "What is necrosis?",
            answer: "Necrosis is a form of cell death commonly associated with severe cellular injury."
        },
        {
            question: "What is inflammation?",
            answer: "Inflammation is a protective response to infection, tissue injury or harmful stimuli."
        },
        {
            question: "What is fibrosis?",
            answer: "Fibrosis is excessive accumulation of connective tissue that may affect organ function."
        },
        {
            question: "What is thrombosis?",
            answer: "Thrombosis is the formation of a blood clot within the cardiovascular system."
        },
        {
            question: "What is infarction?",
            answer: "Infarction is tissue necrosis caused by inadequate blood supply."
        },
        {
            question: "What is a neoplasm?",
            answer: "A neoplasm is an abnormal mass of tissue resulting from excessive or uncontrolled cellular proliferation."
        },
        {
            question: "What is metastasis?",
            answer: "Metastasis is the spread of malignant cells from an original tumour to distant sites."
        },
        {
            question: "What is histopathology?",
            answer: "Histopathology is the microscopic examination of tissues to identify disease-related changes."
        },
        {
            question: "What is a biopsy?",
            answer: "A biopsy is the removal of tissue for examination."
        }
    ],

    quiz: [
        {
            question: "What does aetiology describe?",
            options: [
                "Disease treatment",
                "Cause of disease",
                "Disease recovery",
                "Tissue repair"
            ],
            answer: 1,
            explanation: "Aetiology refers to the cause or origin of a disease."
        },
        {
            question: "Which term describes an increase in cell size?",
            options: [
                "Hyperplasia",
                "Atrophy",
                "Hypertrophy",
                "Metaplasia"
            ],
            answer: 2,
            explanation: "Hypertrophy refers to an increase in the size of individual cells."
        },
        {
            question: "Which process is a regulated form of cell death?",
            options: [
                "Apoptosis",
                "Hyperplasia",
                "Hypertrophy",
                "Metaplasia"
            ],
            answer: 0,
            explanation: "Apoptosis is a regulated form of cell death."
        },
        {
            question: "Which cells are particularly important in many acute inflammatory responses?",
            options: [
                "Neutrophils",
                "Red blood cells",
                "Platelets only",
                "Osteocytes"
            ],
            answer: 0,
            explanation: "Neutrophils are important early inflammatory cells in many acute responses."
        },
        {
            question: "What is the formation of a blood clot inside a vessel called?",
            options: [
                "Embolism",
                "Thrombosis",
                "Oedema",
                "Infarction"
            ],
            answer: 1,
            explanation: "Thrombosis refers to clot formation within the cardiovascular system."
        },
        {
            question: "What is tissue necrosis caused by inadequate blood supply called?",
            options: [
                "Metaplasia",
                "Infarction",
                "Hyperplasia",
                "Hypertrophy"
            ],
            answer: 1,
            explanation: "Infarction is tissue necrosis caused by inadequate blood supply."
        },
        {
            question: "Which term describes excessive connective tissue accumulation?",
            options: [
                "Fibrosis",
                "Apoptosis",
                "Hyperemia",
                "Atrophy"
            ],
            answer: 0,
            explanation: "Fibrosis involves excessive accumulation of connective tissue."
        },
        {
            question: "Which pathology branch examines tissue samples microscopically?",
            options: [
                "Histopathology",
                "Virology",
                "Pharmacology",
                "Physiology"
            ],
            answer: 0,
            explanation: "Histopathology involves microscopic examination of tissues."
        },
        {
            question: "Which term describes the spread of malignant cells to distant sites?",
            options: [
                "Dysplasia",
                "Metastasis",
                "Atrophy",
                "Regeneration"
            ],
            answer: 1,
            explanation: "Metastasis is the spread of malignant cells to distant sites."
        },
        {
            question: "What is the replacement of one differentiated cell type by another called?",
            options: [
                "Metaplasia",
                "Necrosis",
                "Apoptosis",
                "Infarction"
            ],
            answer: 0,
            explanation: "Metaplasia is the replacement of one differentiated cell type by another."
        },
        {
            question: "Which process helps restore damaged tissue?",
            options: [
                "Tissue repair",
                "Metastasis",
                "Embolism",
                "Thrombosis"
            ],
            answer: 0,
            explanation: "Tissue repair involves regeneration and/or scar formation following injury."
        },
        {
            question: "What does systemic pathology primarily study?",
            options: [
                "Diseases affecting individual organ systems",
                "Only microorganisms",
                "Only medicines",
                "Only genetic inheritance"
            ],
            answer: 0,
            explanation: "Systemic pathology studies diseases affecting specific organs and body systems."
        }
    ],

    references: [
        {
            name: "NCBI Bookshelf",
            url: "https://www.ncbi.nlm.nih.gov/books/"
        },
        {
            name: "OpenStax Anatomy and Physiology",
            url: "https://openstax.org/details/books/anatomy-and-physiology-2e"
        },
        {
            name: "National Cancer Institute",
            url: "https://www.cancer.gov/"
        },
        {
            name: "World Health Organization",
            url: "https://www.who.int/"
        },
        {
            name: "Indian Council of Medical Research",
            url: "https://www.icmr.gov.in/"
        },
        {
            name: "National Centre for Disease Control",
            url: "https://ncdc.mohfw.gov.in/"
        },
        {
            name: "National Cancer Registry Programme, India",
            url: "https://ncdirindia.org/"
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

    const content = GENERAL_SYSTEMIC_PATHOLOGY_CONTENT;

    const requiredFields = [
        "introduction",
        "overview",
        "majorBranches",
        "diseaseFundamentals",
        "cellularAdaptation",
        "cellularInjury",
        "cellDeath",
        "inflammation",
        "tissueRepair",
        "haemodynamicDisorders",
        "geneticAndDevelopmentalPathology",
        "immunopathology",
        "neoplasia",
        "systemicPathology",
        "pathologyInvestigations",
        "pathologyAndPublicHealth",
        "indianContext",
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
            "General and Systemic Pathology validation failed:",
            missingFields
        );

    } else {

        console.log(
            "General and Systemic Pathology educational dataset loaded."
        );

    }

})();
