/* =========================================================
   JEEVAN JAGRUK
   DIVISION 08 — IMMUNOLOGY
   Educational content dataset
   ========================================================= */

"use strict";

const IMMUNOLOGY_CONTENT = {

    divisionId: "immunology",
    divisionNumber: 8,
    title: "Immunology",
    subtitle: "Understand the immune system and how the human body protects itself.",

    introduction: {
        heading: "Introduction to Immunology",
        paragraphs: [
            "Immunology is the branch of biomedical science that studies the immune system and its responses to foreign substances, microorganisms and abnormal cells.",
            "The immune system protects the body against infections and contributes to the recognition and removal of damaged or abnormal cells.",
            "It consists of specialised cells, tissues, organs, molecules and biological processes that work together.",
            "Immunology is important in understanding infections, allergies, autoimmune diseases, immunodeficiency, transplantation and vaccination."
        ]
    },

    overview: {
        heading: "Understanding the Immune System",
        sections: [
            {
                title: "What Is Immunity?",
                content: "Immunity is the ability of the body to resist or respond to harmful biological agents and other potentially damaging substances."
            },
            {
                title: "What Is the Immune System?",
                content: "The immune system is a coordinated network of cells, organs, tissues and molecules responsible for immune defence."
            },
            {
                title: "Why Is Immunology Important?",
                content: "It helps explain how infections are controlled, vaccines work, allergies develop and autoimmune conditions affect the body."
            },
            {
                title: "Immunology in Healthcare",
                content: "Immunology contributes to disease diagnosis, vaccine development, transplantation medicine, cancer treatment research and clinical care."
            }
        ]
    },

    majorBranches: {
        heading: "Major Branches of Immunology",
        branches: [
            {
                name: "Basic Immunology",
                description: "Study of fundamental immune mechanisms and immune system components."
            },
            {
                name: "Clinical Immunology",
                description: "Application of immunological knowledge to the diagnosis and management of immune-related conditions."
            },
            {
                name: "Cellular Immunology",
                description: "Study of immune cells and their functions."
            },
            {
                name: "Humoral Immunology",
                description: "Study of antibody-mediated immune responses and soluble immune factors."
            },
            {
                name: "Immunopathology",
                description: "Study of tissue and organ damage associated with abnormal immune responses."
            },
            {
                name: "Autoimmunity",
                description: "Study of immune responses directed against the body's own components."
            },
            {
                name: "Transplantation Immunology",
                description: "Study of immune responses involving transplanted organs, tissues and cells."
            },
            {
                name: "Tumour Immunology",
                description: "Study of interactions between the immune system and cancer cells."
            },
            {
                name: "Mucosal Immunology",
                description: "Study of immune defence at mucosal surfaces such as the respiratory and gastrointestinal tracts."
            },
            {
                name: "Immunogenetics",
                description: "Study of genetic factors influencing immune responses and immune-related conditions."
            }
        ]
    },

    immuneSystemOrgans: {
        heading: "Organs and Tissues of the Immune System",

        primaryOrgans: [
            {
                name: "Bone Marrow",
                description: "The primary site of blood cell production and development of B lymphocytes."
            },
            {
                name: "Thymus",
                description: "An organ where T lymphocytes undergo maturation and selection."
            }
        ],

        secondaryOrgans: [
            {
                name: "Lymph Nodes",
                description: "Small immune structures that filter lymph and provide sites for immune cell interactions."
            },
            {
                name: "Spleen",
                description: "An organ that filters blood and contributes to immune responses against blood-borne antigens."
            },
            {
                name: "Tonsils",
                description: "Lymphoid tissues that participate in immune surveillance around the throat."
            },
            {
                name: "Peyer's Patches",
                description: "Aggregated lymphoid tissues in the small intestine."
            },
            {
                name: "Mucosa-Associated Lymphoid Tissue",
                description: "Immune tissues associated with mucosal surfaces."
            }
        ],

        lymphaticSystem: {
            description: "The lymphatic system transports lymph, supports immune cell circulation and connects several immune organs and tissues.",
            components: [
                "Lymph",
                "Lymphatic vessels",
                "Lymph nodes",
                "Lymphoid organs",
                "Lymphatic tissues"
            ]
        }
    },

    immunityClassification: {
        heading: "Classification of Immunity",

        innateImmunity: {
            title: "Innate Immunity",
            description: "Innate immunity is the body's immediate, broadly acting defence system. It recognises common patterns associated with infection or tissue damage.",
            characteristics: [
                "Present from birth",
                "Acts rapidly",
                "Recognises broad patterns",
                "Includes physical and chemical barriers",
                "Involves innate immune cells",
                "Does not rely on antigen-specific memory in the same way as conventional adaptive immunity"
            ],
            components: [
                {
                    name: "Physical Barriers",
                    description: "Skin and mucosal surfaces help prevent the entry of infectious agents."
                },
                {
                    name: "Chemical Barriers",
                    description: "Substances such as stomach acid and antimicrobial molecules contribute to defence."
                },
                {
                    name: "Phagocytes",
                    description: "Cells such as neutrophils and macrophages that engulf and help eliminate particles and microorganisms."
                },
                {
                    name: "Natural Killer Cells",
                    description: "Immune cells that recognise and eliminate certain infected or abnormal cells."
                },
                {
                    name: "Complement System",
                    description: "A group of blood proteins that contribute to microbial defence and inflammation."
                },
                {
                    name: "Inflammation",
                    description: "A coordinated response to infection or tissue injury."
                }
            ]
        },

        adaptiveImmunity: {
            title: "Adaptive Immunity",
            description: "Adaptive immunity involves antigen-specific responses mediated primarily by B and T lymphocytes.",
            characteristics: [
                "Highly specific recognition",
                "Involves lymphocytes",
                "Develops following antigen exposure",
                "Can generate immunological memory",
                "Can produce faster and stronger responses upon subsequent exposure to the same antigen"
            ],
            types: [
                {
                    name: "Humoral Immunity",
                    description: "Antibody-mediated immunity involving B lymphocytes and plasma cells."
                },
                {
                    name: "Cell-Mediated Immunity",
                    description: "Immune responses primarily mediated by T lymphocytes and their interactions with other immune cells."
                }
            ]
        }
    },

    cellsOfImmuneSystem: {
        heading: "Cells of the Immune System",

        cells: [
            {
                name: "Neutrophils",
                type: "Innate immune cells",
                description: "Important phagocytic white blood cells that rapidly respond to many bacterial and fungal infections."
            },
            {
                name: "Eosinophils",
                type: "Innate immune cells",
                description: "Cells involved in responses to certain parasites and allergic inflammation."
            },
            {
                name: "Basophils",
                type: "Innate immune cells",
                description: "Cells that participate in allergic and inflammatory responses."
            },
            {
                name: "Mast Cells",
                type: "Innate immune cells",
                description: "Tissue-resident cells that release mediators involved in inflammation and allergic reactions."
            },
            {
                name: "Monocytes",
                type: "Innate immune cells",
                description: "Circulating white blood cells that can differentiate into macrophages or certain dendritic cells."
            },
            {
                name: "Macrophages",
                type: "Innate immune cells",
                description: "Cells that engulf particles, remove cellular debris and contribute to antigen presentation."
            },
            {
                name: "Dendritic Cells",
                type: "Antigen-presenting cells",
                description: "Important cells that capture antigens and activate T lymphocytes."
            },
            {
                name: "Natural Killer Cells",
                type: "Innate lymphocytes",
                description: "Cells involved in the recognition and destruction of certain virus-infected and abnormal cells."
            },
            {
                name: "B Lymphocytes",
                type: "Adaptive immune cells",
                description: "Cells that can differentiate into antibody-producing plasma cells and memory B cells."
            },
            {
                name: "T Helper Cells",
                type: "Adaptive immune cells",
                description: "CD4-positive T lymphocytes that coordinate immune responses through interactions and signalling molecules."
            },
            {
                name: "Cytotoxic T Cells",
                type: "Adaptive immune cells",
                description: "CD8-positive T lymphocytes that can destroy certain infected or abnormal cells."
            },
            {
                name: "Regulatory T Cells",
                type: "Adaptive immune cells",
                description: "Cells that help regulate immune responses and maintain immune tolerance."
            },
            {
                name: "Memory B Cells",
                type: "Adaptive immune cells",
                description: "Long-lived cells that support faster antibody responses following subsequent exposure to an antigen."
            },
            {
                name: "Memory T Cells",
                type: "Adaptive immune cells",
                description: "Long-lived T lymphocytes that contribute to faster responses after previous antigen exposure."
            }
        ]
    },

    immuneMolecules: {
        heading: "Important Molecules of the Immune System",

        molecules: [
            {
                name: "Antigens",
                description: "Substances or molecular structures that can be specifically recognised by antibodies or immune receptors."
            },
            {
                name: "Antibodies",
                description: "Proteins produced by plasma cells that specifically bind to antigens."
            },
            {
                name: "Cytokines",
                description: "Signalling proteins that regulate immune cell communication and activity."
            },
            {
                name: "Chemokines",
                description: "Signalling molecules that help direct the movement of immune cells."
            },
            {
                name: "Complement Proteins",
                description: "Proteins that contribute to inflammation, opsonisation and elimination of microorganisms."
            },
            {
                name: "Major Histocompatibility Complex",
                description: "A group of molecules involved in presenting peptide antigens to T lymphocytes."
            },
            {
                name: "Interferons",
                description: "Signalling proteins that play important roles in antiviral defence and immune regulation."
            },
            {
                name: "Immunoglobulins",
                description: "Antibody proteins classified into different major types."
            }
        ]
    },

    antibodies: {
        heading: "Antibodies and Immunoglobulins",

        structure: {
            description: "An antibody generally consists of two heavy chains and two light chains arranged in a characteristic structure.",
            components: [
                {
                    name: "Variable Region",
                    description: "The region responsible for antigen recognition and binding specificity."
                },
                {
                    name: "Constant Region",
                    description: "The region that contributes to antibody class and interactions with immune components."
                },
                {
                    name: "Fab Region",
                    description: "The antigen-binding portion of an antibody."
                },
                {
                    name: "Fc Region",
                    description: "The portion involved in interactions with immune cells and other immune components."
                },
                {
                    name: "Disulphide Bonds",
                    description: "Chemical bonds that help maintain antibody structure."
                }
            ]
        },

        classes: [
            {
                name: "IgG",
                description: "The most abundant antibody class in blood; involved in long-term systemic immune protection and can cross the placenta."
            },
            {
                name: "IgA",
                description: "Important in mucosal immunity and commonly found in secretions such as saliva, tears and breast milk."
            },
            {
                name: "IgM",
                description: "Often the first major antibody class produced during a primary immune response."
            },
            {
                name: "IgE",
                description: "Associated with allergic responses and defence against certain parasites."
            },
            {
                name: "IgD",
                description: "Found mainly on the surface of certain mature B lymphocytes and involved in B-cell function."
            }
        ]
    },

    antigenRecognition: {
        heading: "Antigen Recognition and Presentation",

        topics: [
            {
                title: "Antigen Recognition",
                description: "The process through which antibodies and immune-cell receptors recognise particular antigens."
            },
            {
                title: "Antigen-Presenting Cells",
                description: "Cells such as dendritic cells, macrophages and B lymphocytes that can present antigen-derived peptides to T cells."
            },
            {
                title: "MHC Class I",
                description: "Molecules that generally present intracellularly derived peptides to CD8-positive T cells."
            },
            {
                title: "MHC Class II",
                description: "Molecules that generally present extracellularly derived peptides to CD4-positive T cells."
            },
            {
                title: "T-Cell Receptors",
                description: "Receptors on T lymphocytes that recognise specific peptide antigens presented by MHC molecules."
            },
            {
                title: "B-Cell Receptors",
                description: "Surface immunoglobulins that recognise specific antigens."
            },
            {
                title: "Clonal Selection",
                description: "The process through which antigen recognition activates and expands specific lymphocyte populations."
            }
        ]
    },

    immuneResponse: {
        heading: "Immune Response",

        stages: [
            {
                name: "Recognition",
                description: "The immune system detects an antigen or signs of infection or tissue damage."
            },
            {
                name: "Activation",
                description: "Appropriate immune cells receive signals that initiate an immune response."
            },
            {
                name: "Clonal Expansion",
                description: "Activated antigen-specific lymphocytes multiply."
            },
            {
                name: "Effector Response",
                description: "Immune cells and molecules work together to control or eliminate the threat."
            },
            {
                name: "Contraction",
                description: "Following control of the threat, many activated immune cells decline in number."
            },
            {
                name: "Memory Formation",
                description: "Some immune cells persist and contribute to future responses."
            }
        ],

        responseTypes: [
            {
                name: "Primary Immune Response",
                description: "The response following the first exposure to a particular antigen."
            },
            {
                name: "Secondary Immune Response",
                description: "A subsequent response that is often faster and stronger because of immunological memory."
            }
        ]
    },

    inflammation: {
        heading: "Inflammation and Immune Defence",

        topics: [
            {
                title: "Acute Inflammation",
                description: "A rapid, usually short-term response to infection or tissue injury."
            },
            {
                title: "Chronic Inflammation",
                description: "A prolonged inflammatory response that may persist and contribute to tissue damage."
            },
            {
                title: "Redness",
                description: "An observable sign associated with increased blood flow in inflamed tissue."
            },
            {
                title: "Heat",
                description: "A local increase in temperature associated with inflammation."
            },
            {
                title: "Swelling",
                description: "An increase in tissue volume associated with fluid accumulation and cellular changes."
            },
            {
                title: "Pain",
                description: "A symptom that may occur due to inflammatory mediators and tissue changes."
            },
            {
                title: "Loss of Function",
                description: "Reduced normal function may occur in affected tissues."
            }
        ]
    },

    immuneTolerance: {
        heading: "Immune Tolerance",

        topics: [
            {
                title: "Self-Tolerance",
                description: "The immune system's ability to avoid inappropriate immune responses against the body's own components."
            },
            {
                title: "Central Tolerance",
                description: "Mechanisms that remove or alter strongly self-reactive lymphocytes during development in primary lymphoid organs."
            },
            {
                title: "Peripheral Tolerance",
                description: "Mechanisms that control self-reactive immune cells outside primary lymphoid organs."
            },
            {
                title: "Regulatory T Cells",
                description: "Cells that contribute to immune regulation and suppression of inappropriate responses."
            },
            {
                title: "Immune Checkpoints",
                description: "Regulatory pathways that control immune cell activity and help maintain immune balance."
            }
        ]
    },

    hypersensitivity: {
        heading: "Hypersensitivity Reactions",

        types: [
            {
                name: "Type I",
                description: "Immediate hypersensitivity involving IgE antibodies and mast-cell activation.",
                examples: [
                    "Allergic rhinitis",
                    "Some forms of asthma",
                    "Anaphylaxis",
                    "Certain food allergies"
                ]
            },
            {
                name: "Type II",
                description: "Antibody-mediated reactions directed against cell-surface or tissue antigens.",
                examples: [
                    "Autoimmune haemolytic anaemia",
                    "Certain drug-associated immune reactions"
                ]
            },
            {
                name: "Type III",
                description: "Reactions associated with deposition of antigen-antibody immune complexes.",
                examples: [
                    "Serum sickness",
                    "Certain forms of immune-complex disease"
                ]
            },
            {
                name: "Type IV",
                description: "Delayed hypersensitivity mediated primarily by T lymphocytes.",
                examples: [
                    "Contact dermatitis",
                    "Tuberculin skin test reaction"
                ]
            }
        ],

        note: "Hypersensitivity classifications are educational categories. Actual allergic and immune conditions require clinical assessment."
    },

    allergies: {
        heading: "Allergies and Allergic Disorders",

        topics: [
            {
                title: "Allergy",
                description: "An inappropriate or exaggerated immune response to a substance that is usually harmless to most people."
            },
            {
                title: "Allergen",
                description: "A substance capable of triggering an allergic response in a sensitised individual."
            },
            {
                title: "Allergic Rhinitis",
                description: "An allergic condition affecting the nasal passages."
            },
            {
                title: "Food Allergy",
                description: "An immune-mediated reaction to particular food proteins."
            },
            {
                title: "Drug Allergy",
                description: "An immune-mediated reaction associated with a medication."
            },
            {
                title: "Anaphylaxis",
                description: "A serious, rapidly developing systemic allergic reaction that requires immediate emergency medical attention."
            },
            {
                title: "Atopic Dermatitis",
                description: "A chronic inflammatory skin condition associated with complex skin-barrier and immune factors."
            }
        ]
    },

    autoimmuneDiseases: {
        heading: "Autoimmune Diseases",

        introduction: "Autoimmune diseases develop when immune responses target the body's own cells, tissues or molecules.",

        diseases: [
            {
                name: "Rheumatoid Arthritis",
                description: "An autoimmune inflammatory disease that commonly affects joints."
            },
            {
                name: "Systemic Lupus Erythematosus",
                description: "A systemic autoimmune condition that can affect multiple organs."
            },
            {
                name: "Type 1 Diabetes",
                description: "An autoimmune condition involving destruction of insulin-producing pancreatic beta cells."
            },
            {
                name: "Multiple Sclerosis",
                description: "An immune-mediated disease affecting the central nervous system."
            },
            {
                name: "Hashimoto Thyroiditis",
                description: "An autoimmune condition affecting the thyroid gland."
            },
            {
                name: "Graves Disease",
                description: "An autoimmune condition that commonly causes increased thyroid hormone production."
            },
            {
                name: "Coeliac Disease",
                description: "An immune-mediated condition triggered by gluten exposure in genetically susceptible individuals."
            },
            {
                name: "Myasthenia Gravis",
                description: "An autoimmune disorder affecting communication between nerves and muscles."
            },
            {
                name: "Psoriasis",
                description: "A chronic immune-mediated inflammatory skin disease."
            },
            {
                name: "Vitiligo",
                description: "A condition involving loss of pigment-producing cells, commonly associated with autoimmune mechanisms."
            }
        ]
    },

    immunodeficiency: {
        heading: "Immunodeficiency Disorders",

        introduction: "Immunodeficiency refers to impaired immune function that can increase susceptibility to infections and certain other conditions.",

        classifications: [
            {
                name: "Primary Immunodeficiency",
                description: "Immune disorders arising from inherited or genetic abnormalities."
            },
            {
                name: "Secondary Immunodeficiency",
                description: "Immune impairment acquired due to other conditions, infections, medicines or treatments."
            }
        ],

        examples: [
            {
                name: "Severe Combined Immunodeficiency",
                description: "A group of inherited disorders involving major defects in adaptive immune function."
            },
            {
                name: "Common Variable Immunodeficiency",
                description: "An immune disorder characterised by impaired antibody production."
            },
            {
                name: "Selective IgA Deficiency",
                description: "A condition involving low or absent IgA with variable clinical effects."
            },
            {
                name: "HIV-Associated Immunodeficiency",
                description: "Immune impairment caused by HIV infection, particularly through effects on CD4-positive T lymphocytes."
            }
        ]
    },

    transplantationImmunology: {
        heading: "Transplantation Immunology",

        topics: [
            {
                title: "Transplantation",
                description: "Transfer of cells, tissues or organs from one site or individual to another."
            },
            {
                title: "Autograft",
                description: "A graft transferred from one part of an individual's body to another."
            },
            {
                title: "Isograft",
                description: "A graft transferred between genetically identical individuals."
            },
            {
                title: "Allograft",
                description: "A graft transferred between genetically different individuals of the same species."
            },
            {
                title: "Xenograft",
                description: "A graft transferred between individuals of different species."
            },
            {
                title: "HLA Matching",
                description: "Assessment of human leukocyte antigen compatibility in transplantation."
            },
            {
                title: "Graft Rejection",
                description: "An immune response directed against transplanted tissue or an organ."
            },
            {
                title: "Graft-versus-Host Disease",
                description: "A complication in which donor immune cells attack recipient tissues, particularly following certain stem-cell transplants."
            },
            {
                title: "Immunosuppression",
                description: "Reduction of immune activity, sometimes required to help prevent transplant rejection."
            }
        ]
    },

    tumourImmunology: {
        heading: "Tumour Immunology",

        topics: [
            {
                title: "Immune Surveillance",
                description: "The role of immune mechanisms in recognising and responding to abnormal cells."
            },
            {
                title: "Tumour Antigens",
                description: "Molecules associated with tumour cells that may be recognised by the immune system."
            },
            {
                title: "Tumour Microenvironment",
                description: "The collection of cells, molecules and structures surrounding and interacting with tumour cells."
            },
            {
                title: "Immune Evasion",
                description: "Mechanisms through which cancer cells may avoid or suppress immune responses."
            },
            {
                title: "Immune Checkpoint Inhibitors",
                description: "Treatments that target selected immune regulatory pathways to enhance anti-tumour immune activity."
            },
            {
                title: "CAR T-Cell Therapy",
                description: "A form of cellular therapy using genetically modified T lymphocytes designed to recognise selected targets."
            },
            {
                title: "Cancer Vaccines",
                description: "Vaccines designed to prevent certain cancer-associated infections or stimulate immune responses against cancer targets."
            }
        ]
    },

    vaccinationAndImmunisation: {
        heading: "Vaccination and Immunological Memory",

        typesOfImmunity: [
            {
                name: "Active Natural Immunity",
                description: "Immunity developed after exposure to an infectious agent."
            },
            {
                name: "Active Artificial Immunity",
                description: "Immunity developed following vaccination."
            },
            {
                name: "Passive Natural Immunity",
                description: "Temporary protection provided through naturally transferred antibodies, such as maternal antibodies."
            },
            {
                name: "Passive Artificial Immunity",
                description: "Temporary protection provided through administration of prepared antibodies or antibody-containing products."
            }
        ],

        concepts: [
            {
                title: "Immunological Memory",
                description: "The ability of the adaptive immune system to respond more effectively following previous antigen exposure."
            },
            {
                title: "Booster Dose",
                description: "An additional vaccine dose intended to strengthen or restore protection when recommended."
            },
            {
                title: "Vaccine Effectiveness",
                description: "A measure of how well a vaccine protects people under real-world conditions."
            },
            {
                title: "Vaccine Safety Monitoring",
                description: "Ongoing assessment of vaccine safety and possible adverse events following immunisation."
            }
        ]
    },

    immunologicalTests: {
        heading: "Immunological Laboratory Tests",

        tests: [
            {
                name: "ELISA",
                fullForm: "Enzyme-Linked Immunosorbent Assay",
                description: "A laboratory method used to detect or measure selected antigens or antibodies."
            },
            {
                name: "Immunofluorescence",
                description: "A method using fluorescent labels to identify specific antigens or antibodies."
            },
            {
                name: "Western Blot",
                description: "A technique used to detect specific proteins using antibody-based recognition."
            },
            {
                name: "Flow Cytometry",
                description: "A method used to analyse physical and molecular characteristics of cells."
            },
            {
                name: "Immunohistochemistry",
                description: "A technique that uses antibodies to identify specific antigens in tissue sections."
            },
            {
                name: "Agglutination Tests",
                description: "Tests based on visible clumping caused by antigen-antibody interactions."
            },
            {
                name: "Nephelometry",
                description: "A method that measures light scattered by particles in a sample."
            },
            {
                name: "Complement Tests",
                description: "Tests used to assess selected components or activity of the complement system."
            },
            {
                name: "Autoantibody Tests",
                description: "Tests that detect antibodies directed against the body's own components."
            },
            {
                name: "Immunoglobulin Quantification",
                description: "Measurement of selected antibody classes in biological samples."
            }
        ],

        note: "Laboratory results must be interpreted alongside symptoms, examination findings and other relevant investigations by qualified healthcare professionals."
    },

    immunologyAndPublicHealth: {
        heading: "Immunology and Public Health",

        topics: [
            {
                title: "Population Immunisation",
                description: "Vaccination programmes that protect individuals and reduce disease burden across communities."
            },
            {
                title: "Vaccine-Preventable Diseases",
                description: "Diseases for which effective vaccines are available."
            },
            {
                title: "Immunisation Awareness",
                description: "Public education about vaccine benefits, safety monitoring and recommended schedules."
            },
            {
                title: "Immune Health Literacy",
                description: "Understanding immunity without relying on misleading claims or unsupported immune-boosting products."
            },
            {
                title: "One Health",
                description: "Recognition of connections between human, animal and environmental health."
            }
        ],

        indianContext: [
            {
                title: "Universal Immunisation Programme",
                description: "India's public immunisation programme supports protection against selected vaccine-preventable diseases."
            },
            {
                title: "Mission Indradhanush",
                description: "An initiative aimed at improving immunisation coverage among children and pregnant women."
            },
            {
                title: "National Health Mission",
                description: "Supports public health services and related health initiatives."
            },
            {
                title: "Vaccine Research",
                description: "Indian research institutions contribute to vaccine development, evaluation and immunological research."
            }
        ]
    },

    mythsAndFacts: {
        heading: "Immunity: Myths and Facts",

        statements: [
            {
                myth: "A person can never get sick if they have a strong immune system.",
                fact: "No immune system provides complete protection against every infection."
            },
            {
                myth: "Antibiotics strengthen the immune system.",
                fact: "Antibiotics act against susceptible bacteria; they do not directly strengthen immunity."
            },
            {
                myth: "All inflammation is harmful.",
                fact: "Inflammation is an important protective response, although excessive or persistent inflammation can cause damage."
            },
            {
                myth: "Vaccines always prevent every infection completely.",
                fact: "Vaccine effectiveness varies, but vaccination can substantially reduce the risk of disease and severe outcomes."
            },
            {
                myth: "All allergies are minor.",
                fact: "Some allergic reactions, including anaphylaxis, are medical emergencies."
            },
            {
                myth: "Autoimmune diseases are contagious.",
                fact: "Autoimmune diseases are not transmitted from one person to another like infectious diseases."
            },
            {
                myth: "One supplement can boost everyone's immunity.",
                fact: "Immune function is complex, and supplements are not universal immune boosters."
            }
        ]
    },

    visualLearning: {
        heading: "Immunology Visual Learning Centre",

        resources: [
            {
                title: "Human Immune System Overview",
                description: "A visual introduction to immune organs, tissues and major components.",
                plannedAsset: "immune-system-overview"
            },
            {
                title: "Primary and Secondary Lymphoid Organs",
                description: "Diagram showing the major immune organs.",
                plannedAsset: "lymphoid-organs"
            },
            {
                title: "Innate and Adaptive Immunity",
                description: "Comparison of the two major immune defence systems.",
                plannedAsset: "innate-adaptive-immunity"
            },
            {
                title: "Immune Cell Identification",
                description: "Educational chart of major immune cells.",
                plannedAsset: "immune-cells"
            },
            {
                title: "Antibody Structure",
                description: "Diagram showing antibody chains and major regions.",
                plannedAsset: "antibody-structure"
            },
            {
                title: "Immunoglobulin Classes",
                description: "Comparison of IgG, IgA, IgM, IgE and IgD.",
                plannedAsset: "immunoglobulin-classes"
            },
            {
                title: "Antigen Presentation",
                description: "Overview of MHC-mediated antigen presentation.",
                plannedAsset: "antigen-presentation"
            },
            {
                title: "Immune Response",
                description: "Stages of an adaptive immune response.",
                plannedAsset: "immune-response"
            },
            {
                title: "Inflammation",
                description: "Illustration of the inflammatory response.",
                plannedAsset: "inflammation"
            },
            {
                title: "Hypersensitivity Types",
                description: "Comparison of the four major hypersensitivity categories.",
                plannedAsset: "hypersensitivity-types"
            },
            {
                title: "Autoimmune Diseases",
                description: "Educational overview of selected autoimmune conditions.",
                plannedAsset: "autoimmune-diseases"
            },
            {
                title: "Immunological Memory",
                description: "Illustration of primary and secondary immune responses.",
                plannedAsset: "immunological-memory"
            },
            {
                title: "Vaccination and Immunity",
                description: "Overview of vaccine-induced immune responses.",
                plannedAsset: "vaccination-immunity"
            },
            {
                title: "Immunological Testing",
                description: "Visual introduction to major laboratory testing methods.",
                plannedAsset: "immunological-tests"
            }
        ]
    },

    learningObjectives: [
        "Define immunology and explain its importance.",
        "Identify primary and secondary lymphoid organs.",
        "Differentiate innate and adaptive immunity.",
        "Identify major immune cells and their functions.",
        "Understand important immune molecules.",
        "Explain antigen and antibody interactions.",
        "Describe the five major immunoglobulin classes.",
        "Understand antigen presentation and MHC molecules.",
        "Explain the stages of an immune response.",
        "Understand inflammation and immune regulation.",
        "Classify hypersensitivity reactions.",
        "Differentiate allergies and autoimmune diseases.",
        "Understand primary and secondary immunodeficiency.",
        "Explain basic transplantation immunology.",
        "Understand the immune system's relationship with cancer.",
        "Describe the immunological basis of vaccination.",
        "Identify major immunological laboratory tests.",
        "Understand the importance of immunisation in public health."
    ],

    faqs: [
        {
            question: "What is immunology?",
            answer: "Immunology is the study of the immune system and its responses."
        },
        {
            question: "What are the two major types of immunity?",
            answer: "The two major types are innate immunity and adaptive immunity."
        },
        {
            question: "Where are immune cells produced?",
            answer: "Most blood cells develop from stem cells in the bone marrow."
        },
        {
            question: "What is the function of the thymus?",
            answer: "The thymus is an important site for T-lymphocyte maturation and selection."
        },
        {
            question: "What is an antigen?",
            answer: "An antigen is a substance or molecular structure that can be specifically recognised by antibodies or immune receptors."
        },
        {
            question: "What is an antibody?",
            answer: "An antibody is an immunoglobulin protein produced by plasma cells that binds specific antigens."
        },
        {
            question: "Which antibody is commonly found in mucosal secretions?",
            answer: "IgA is an important antibody class in mucosal secretions."
        },
        {
            question: "Which antibody class commonly appears early in a primary immune response?",
            answer: "IgM is commonly the first major antibody class produced in a primary response."
        },
        {
            question: "What is immunological memory?",
            answer: "It is the ability of the adaptive immune system to respond more effectively following previous exposure to an antigen."
        },
        {
            question: "What is an autoimmune disease?",
            answer: "It is a condition in which immune responses are directed against the body's own components."
        },
        {
            question: "What is an allergy?",
            answer: "An allergy is an immune-mediated response to a substance that is usually harmless to most people."
        },
        {
            question: "What is immunodeficiency?",
            answer: "Immunodeficiency refers to impaired immune function."
        },
        {
            question: "What is a vaccine?",
            answer: "A vaccine stimulates an immune response that can help protect against a particular disease."
        },
        {
            question: "What is ELISA?",
            answer: "ELISA is a laboratory technique used to detect or measure selected antigens or antibodies."
        },
        {
            question: "What is transplantation rejection?",
            answer: "It is an immune response directed against transplanted cells, tissues or organs."
        }
    ],

    quiz: [
        {
            question: "Which organ is important for T-cell maturation?",
            options: [
                "Liver",
                "Thymus",
                "Kidney",
                "Pancreas"
            ],
            answer: 1,
            explanation: "The thymus is a primary lymphoid organ where T lymphocytes mature."
        },
        {
            question: "Which cells produce antibodies?",
            options: [
                "Red blood cells",
                "Plasma cells",
                "Platelets",
                "Neutrophils"
            ],
            answer: 1,
            explanation: "Plasma cells are differentiated B lymphocytes that produce antibodies."
        },
        {
            question: "Which antibody class is especially important in mucosal immunity?",
            options: [
                "IgA",
                "IgE",
                "IgD",
                "IgM"
            ],
            answer: 0,
            explanation: "IgA plays an important role in protecting mucosal surfaces."
        },
        {
            question: "Which cells are important antigen-presenting cells?",
            options: [
                "Dendritic cells",
                "Red blood cells",
                "Platelets",
                "Muscle cells"
            ],
            answer: 0,
            explanation: "Dendritic cells are important antigen-presenting cells that activate T lymphocytes."
        },
        {
            question: "Which type of immunity is present from birth?",
            options: [
                "Innate immunity",
                "Artificial passive immunity",
                "Vaccine-induced immunity",
                "Secondary adaptive immunity"
            ],
            answer: 0,
            explanation: "Innate immunity provides immediate, broadly acting defence."
        },
        {
            question: "Which antibody class is associated with many allergic reactions?",
            options: [
                "IgG",
                "IgE",
                "IgD",
                "IgA"
            ],
            answer: 1,
            explanation: "IgE plays an important role in many immediate allergic reactions."
        },
        {
            question: "What is the main function of regulatory T cells?",
            options: [
                "Produce red blood cells",
                "Regulate immune responses",
                "Transport oxygen",
                "Digest food"
            ],
            answer: 1,
            explanation: "Regulatory T cells help control immune activity and maintain immune tolerance."
        },
        {
            question: "Which condition is an autoimmune disease?",
            options: [
                "Rheumatoid arthritis",
                "Malaria",
                "Cholera",
                "Influenza"
            ],
            answer: 0,
            explanation: "Rheumatoid arthritis is an autoimmune inflammatory disease."
        },
        {
            question: "What does ELISA commonly detect?",
            options: [
                "Bone density",
                "Antigens or antibodies",
                "Blood pressure",
                "Lung volume"
            ],
            answer: 1,
            explanation: "ELISA can detect or measure selected antigens or antibodies."
        },
        {
            question: "Which antibody class commonly appears early in a primary immune response?",
            options: [
                "IgM",
                "IgE",
                "IgD",
                "IgA"
            ],
            answer: 0,
            explanation: "IgM is commonly the first major antibody class produced in a primary immune response."
        },
        {
            question: "What is immunological memory?",
            options: [
                "The ability to digest proteins",
                "The ability to respond more effectively after previous antigen exposure",
                "The production of red blood cells",
                "The movement of lymph"
            ],
            answer: 1,
            explanation: "Memory lymphocytes support faster responses after previous antigen exposure."
        },
        {
            question: "Which organ filters blood and contributes to immune defence?",
            options: [
                "Spleen",
                "Thymus",
                "Thyroid",
                "Pancreas"
            ],
            answer: 0,
            explanation: "The spleen filters blood and supports immune responses against blood-borne antigens."
        }
    ],

    references: [
        {
            name: "National Institute of Allergy and Infectious Diseases",
            url: "https://www.niaid.nih.gov/"
        },
        {
            name: "National Institutes of Health",
            url: "https://www.nih.gov/"
        },
        {
            name: "World Health Organization",
            url: "https://www.who.int/"
        },
        {
            name: "Centers for Disease Control and Prevention",
            url: "https://www.cdc.gov/"
        },
        {
            name: "NCBI Bookshelf",
            url: "https://www.ncbi.nlm.nih.gov/books/"
        },
        {
            name: "British Society for Immunology",
            url: "https://www.immunology.org/"
        },
        {
            name: "Indian Council of Medical Research",
            url: "https://www.icmr.gov.in/"
        },
        {
            name: "Ministry of Health and Family Welfare, India",
            url: "https://mohfw.gov.in/"
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

    const content = IMMUNOLOGY_CONTENT;

    const requiredFields = [
        "introduction",
        "overview",
        "majorBranches",
        "immuneSystemOrgans",
        "immunityClassification",
        "cellsOfImmuneSystem",
        "immuneMolecules",
        "antibodies",
        "antigenRecognition",
        "immuneResponse",
        "inflammation",
        "immuneTolerance",
        "hypersensitivity",
        "allergies",
        "autoimmuneDiseases",
        "immunodeficiency",
        "transplantationImmunology",
        "tumourImmunology",
        "vaccinationAndImmunisation",
        "immunologicalTests",
        "immunologyAndPublicHealth",
        "mythsAndFacts",
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
            "Immunology content validation failed:",
            missingFields
        );

    } else {

        console.log(
            "Immunology educational dataset loaded."
        );

    }

})();
