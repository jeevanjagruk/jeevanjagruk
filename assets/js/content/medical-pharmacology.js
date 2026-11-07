/* =========================================================
   JEEVAN JAGRUK
   DIVISION 10 — MEDICAL PHARMACOLOGY
   Educational content dataset
   ========================================================= */

"use strict";

const MEDICAL_PHARMACOLOGY_CONTENT = {

    divisionId: "medical-pharmacology",
    divisionNumber: 10,
    title: "Medical Pharmacology",
    subtitle: "Understand how medicines interact with the human body, how they produce effects and how medication safety is maintained.",

    introduction: {
        heading: "Introduction to Medical Pharmacology",
        paragraphs: [
            "Medical pharmacology is the branch of biomedical science concerned with drugs and their interactions with living systems.",
            "It examines how medicines produce therapeutic effects, how the body absorbs and processes them, and how unwanted effects may occur.",
            "Pharmacology provides the scientific foundation for understanding medication use, drug safety, interactions and rational therapeutics.",
            "The information in this division is educational and does not replace advice from qualified healthcare professionals."
        ]
    },

    overview: {
        heading: "Understanding Pharmacology",
        sections: [
            {
                title: "What Is a Drug?",
                content: "A drug is a substance that can modify biological functions when introduced into a living organism."
            },
            {
                title: "What Is a Medicine?",
                content: "A medicine is a substance or preparation used for the prevention, diagnosis, treatment or management of health conditions."
            },
            {
                title: "Pharmacodynamics",
                content: "The study of what a drug does to the body, including its mechanisms and effects."
            },
            {
                title: "Pharmacokinetics",
                content: "The study of what the body does to a drug, including absorption, distribution, metabolism and excretion."
            },
            {
                title: "Clinical Pharmacology",
                content: "The study of medicines in humans, including their therapeutic use, effectiveness and safety."
            },
            {
                title: "Toxicology",
                content: "The study of harmful effects caused by chemicals and other substances on living organisms."
            }
        ]
    },

    branches: {
        heading: "Major Branches of Pharmacology",

        items: [
            {
                name: "Pharmacodynamics",
                description: "Studies drug effects, mechanisms of action and relationships between drug concentration and response."
            },
            {
                name: "Pharmacokinetics",
                description: "Studies drug absorption, distribution, metabolism and excretion."
            },
            {
                name: "Clinical Pharmacology",
                description: "Studies the use and effects of medicines in human populations."
            },
            {
                name: "Pharmacotherapeutics",
                description: "Studies the application of medicines in disease prevention and management."
            },
            {
                name: "Pharmacogenetics",
                description: "Studies how inherited genetic variations influence responses to medicines."
            },
            {
                name: "Pharmacogenomics",
                description: "Studies how genome-wide genetic variation influences drug response."
            },
            {
                name: "Pharmacovigilance",
                description: "Focuses on detecting, assessing, understanding and preventing adverse effects and other medicine-related problems."
            },
            {
                name: "Toxicology",
                description: "Studies harmful effects of drugs, chemicals and toxins."
            },
            {
                name: "Experimental Pharmacology",
                description: "Investigates drug actions using appropriate scientific research models."
            },
            {
                name: "Pharmacoepidemiology",
                description: "Studies the use and effects of medicines in large populations."
            },
            {
                name: "Pharmacoeconomics",
                description: "Evaluates the economic aspects of pharmaceutical products and healthcare interventions."
            }
        ]
    },

    drugSources: {
        heading: "Sources of Drugs",

        categories: [
            {
                name: "Plant Sources",
                description: "Some medicines and drug compounds originate from plants.",
                examples: [
                    "Morphine",
                    "Atropine",
                    "Digoxin",
                    "Quinine"
                ]
            },
            {
                name: "Animal Sources",
                description: "Some pharmaceutical substances have historically been obtained from animal sources.",
                examples: [
                    "Selected biological products",
                    "Certain animal-derived therapeutic substances"
                ]
            },
            {
                name: "Microorganisms",
                description: "Microorganisms have contributed to the discovery and production of several medicines.",
                examples: [
                    "Penicillin",
                    "Streptomycin",
                    "Selected antibiotic compounds"
                ]
            },
            {
                name: "Mineral Sources",
                description: "Certain medicinal substances originate from naturally occurring minerals or inorganic compounds.",
                examples: [
                    "Lithium salts",
                    "Selected iron compounds",
                    "Magnesium compounds"
                ]
            },
            {
                name: "Synthetic Sources",
                description: "Chemically manufactured substances designed to produce particular biological effects.",
                examples: [
                    "Many modern pharmaceutical compounds",
                    "Selected synthetic analgesics"
                ]
            },
            {
                name: "Biotechnology",
                description: "Biological systems and genetic engineering are used to produce modern therapeutic products.",
                examples: [
                    "Recombinant insulin",
                    "Selected monoclonal antibodies",
                    "Some therapeutic proteins"
                ]
            }
        ]
    },

    drugClassification: {
        heading: "Classification of Drugs",

        categories: [
            {
                name: "Analgesics",
                description: "Medicines used to relieve pain.",
                examples: ["Paracetamol", "Ibuprofen"]
            },
            {
                name: "Antipyretics",
                description: "Medicines used to reduce fever.",
                examples: ["Paracetamol"]
            },
            {
                name: "Antibiotics",
                description: "Medicines used against susceptible bacterial infections.",
                examples: ["Amoxicillin", "Azithromycin"]
            },
            {
                name: "Antiviral Agents",
                description: "Medicines that act against viral infections.",
                examples: ["Acyclovir", "Selected antiviral medicines"]
            },
            {
                name: "Antifungal Agents",
                description: "Medicines used against fungal infections.",
                examples: ["Fluconazole", "Clotrimazole"]
            },
            {
                name: "Antiparasitic Agents",
                description: "Medicines used against selected parasitic infections.",
                examples: ["Albendazole", "Selected antimalarial medicines"]
            },
            {
                name: "Antihypertensives",
                description: "Medicines used in the management of high blood pressure.",
                examples: ["Amlodipine", "Losartan"]
            },
            {
                name: "Antidiabetic Agents",
                description: "Medicines used in diabetes management.",
                examples: ["Metformin", "Insulin"]
            },
            {
                name: "Anticoagulants",
                description: "Medicines that reduce blood clot formation.",
                examples: ["Heparin", "Warfarin"]
            },
            {
                name: "Bronchodilators",
                description: "Medicines that help widen the airways.",
                examples: ["Salbutamol"]
            },
            {
                name: "Antihistamines",
                description: "Medicines that block selected histamine-mediated effects.",
                examples: ["Cetirizine", "Loratadine"]
            },
            {
                name: "Antidepressants",
                description: "Medicines used in the management of selected depressive and other mental health conditions.",
                examples: ["Fluoxetine", "Sertraline"]
            },
            {
                name: "Antiepileptic Medicines",
                description: "Medicines used to control selected seizure disorders.",
                examples: ["Levetiracetam", "Valproate"]
            },
            {
                name: "Anaesthetic Agents",
                description: "Medicines used to produce local or general anaesthesia.",
                examples: ["Lidocaine", "Propofol"]
            },
            {
                name: "Hormonal Agents",
                description: "Medicines that replace, modify or block hormonal activity.",
                examples: ["Levothyroxine", "Selected corticosteroids"]
            }
        ],

        note: "These examples are for educational identification only. Drug selection, dose and suitability depend on the individual patient and must be determined by qualified healthcare professionals."
    },

    pharmacokinetics: {
        heading: "Pharmacokinetics: ADME",

        introduction: "Pharmacokinetics describes the movement of a drug through the body. It is commonly organised into four major processes called ADME.",

        stages: [
            {
                name: "Absorption",
                abbreviation: "A",
                description: "The movement of a drug from its administration site into the bloodstream.",
                factors: [
                    "Route of administration",
                    "Drug formulation",
                    "Drug solubility",
                    "Gastrointestinal conditions",
                    "Blood flow at the absorption site",
                    "First-pass metabolism"
                ]
            },
            {
                name: "Distribution",
                abbreviation: "D",
                description: "The movement of a drug from the bloodstream into body tissues and fluids.",
                factors: [
                    "Blood flow",
                    "Plasma protein binding",
                    "Tissue permeability",
                    "Body composition",
                    "Blood-brain barrier",
                    "Placental transfer"
                ]
            },
            {
                name: "Metabolism",
                abbreviation: "M",
                description: "The chemical modification of drugs within the body, commonly involving liver enzymes.",
                concepts: [
                    "Phase I reactions",
                    "Phase II reactions",
                    "Drug-metabolising enzymes",
                    "First-pass metabolism",
                    "Active metabolites",
                    "Enzyme induction",
                    "Enzyme inhibition"
                ]
            },
            {
                name: "Excretion",
                abbreviation: "E",
                description: "The removal of drugs and their metabolites from the body.",
                routes: [
                    "Kidneys and urine",
                    "Bile and faeces",
                    "Lungs",
                    "Sweat",
                    "Saliva",
                    "Breast milk"
                ]
            }
        ],

        additionalConcepts: [
            {
                name: "Bioavailability",
                description: "The fraction of an administered drug that reaches systemic circulation in an unchanged form."
            },
            {
                name: "Half-Life",
                description: "The time required for the concentration of a drug in the body or plasma to decrease by approximately half under defined conditions."
            },
            {
                name: "Clearance",
                description: "A measure of the volume of plasma from which a drug is completely removed per unit time."
            },
            {
                name: "Volume of Distribution",
                description: "A theoretical volume relating the amount of drug in the body to its measured plasma concentration."
            },
            {
                name: "Steady State",
                description: "A condition in which the rate of drug administration and elimination are balanced over time."
            }
        ]
    },

    pharmacodynamics: {
        heading: "Pharmacodynamics: How Drugs Work",

        concepts: [
            {
                name: "Drug Receptors",
                description: "Cellular molecules with which drugs interact to produce biological effects."
            },
            {
                name: "Agonist",
                description: "A substance that binds to a receptor and activates it."
            },
            {
                name: "Antagonist",
                description: "A substance that binds to a receptor and blocks or reduces activation by another substance."
            },
            {
                name: "Partial Agonist",
                description: "A substance that activates a receptor but produces a lower maximum response than a full agonist in the same system."
            },
            {
                name: "Inverse Agonist",
                description: "A substance that reduces the constitutive activity of a receptor."
            },
            {
                name: "Enzyme Inhibition",
                description: "Reduction or prevention of enzyme activity by a drug or other substance."
            },
            {
                name: "Ion Channel Modulation",
                description: "Modification of ion movement through membrane channels."
            },
            {
                name: "Transporter Modulation",
                description: "Modification of transport proteins that move substances across cell membranes."
            }
        ],

        responseConcepts: [
            {
                name: "Potency",
                description: "The amount of a drug required to produce a specified effect."
            },
            {
                name: "Efficacy",
                description: "The maximum effect a drug can produce in a particular biological system."
            },
            {
                name: "Therapeutic Index",
                description: "A measure comparing toxic and therapeutic drug exposure."
            },
            {
                name: "Dose-Response Relationship",
                description: "The relationship between drug exposure and the magnitude of its biological effect."
            },
            {
                name: "Tolerance",
                description: "A reduced response to a drug following repeated exposure."
            },
            {
                name: "Desensitisation",
                description: "A reduction in receptor or cellular responsiveness after continued stimulation."
            }
        ]
    },

    routesOfAdministration: {
        heading: "Routes of Drug Administration",

        routes: [
            {
                name: "Oral",
                description: "Administration through the mouth, usually involving absorption from the gastrointestinal tract.",
                forms: ["Tablets", "Capsules", "Solutions", "Suspensions"]
            },
            {
                name: "Sublingual",
                description: "Administration beneath the tongue for absorption through oral mucosa."
            },
            {
                name: "Buccal",
                description: "Administration between the cheek and gum."
            },
            {
                name: "Intravenous",
                description: "Administration directly into a vein."
            },
            {
                name: "Intramuscular",
                description: "Administration into muscle tissue."
            },
            {
                name: "Subcutaneous",
                description: "Administration into the tissue beneath the skin."
            },
            {
                name: "Intradermal",
                description: "Administration into the dermal layer of the skin."
            },
            {
                name: "Inhalational",
                description: "Administration through the respiratory tract."
            },
            {
                name: "Topical",
                description: "Application to the skin or another local surface."
            },
            {
                name: "Transdermal",
                description: "Delivery across the skin, often through a medicated patch."
            },
            {
                name: "Rectal",
                description: "Administration through the rectum."
            },
            {
                name: "Vaginal",
                description: "Administration through the vaginal route."
            },
            {
                name: "Ophthalmic",
                description: "Administration to the eye."
            },
            {
                name: "Otic",
                description: "Administration into the ear."
            },
            {
                name: "Nasal",
                description: "Administration through the nasal passages."
            }
        ]
    },

    dosageForms: {
        heading: "Pharmaceutical Dosage Forms",

        categories: [
            {
                name: "Solid Dosage Forms",
                examples: [
                    "Tablets",
                    "Capsules",
                    "Powders",
                    "Granules",
                    "Lozenges"
                ]
            },
            {
                name: "Liquid Dosage Forms",
                examples: [
                    "Solutions",
                    "Suspensions",
                    "Emulsions",
                    "Syrups",
                    "Drops"
                ]
            },
            {
                name: "Semi-Solid Dosage Forms",
                examples: [
                    "Creams",
                    "Ointments",
                    "Gels",
                    "Pastes"
                ]
            },
            {
                name: "Inhaled Dosage Forms",
                examples: [
                    "Metered-dose inhalers",
                    "Dry-powder inhalers",
                    "Nebulised preparations"
                ]
            },
            {
                name: "Parenteral Dosage Forms",
                examples: [
                    "Injections",
                    "Infusions"
                ]
            },
            {
                name: "Modified-Release Forms",
                examples: [
                    "Extended-release preparations",
                    "Delayed-release preparations",
                    "Controlled-release preparations"
                ]
            }
        ]
    },

    adverseDrugReactions: {
        heading: "Adverse Drug Reactions and Medication Safety",

        introduction: "An adverse drug reaction is an unwanted or harmful response associated with the use of a medicine. Adverse reactions vary in severity and may require clinical assessment.",

        classifications: [
            {
                name: "Type A",
                description: "Dose-related reactions that are generally predictable from the known pharmacological properties of a medicine."
            },
            {
                name: "Type B",
                description: "Unusual or unpredictable reactions that are not readily explained by the usual pharmacological action."
            },
            {
                name: "Type C",
                description: "Reactions associated with prolonged use."
            },
            {
                name: "Type D",
                description: "Reactions that appear after a delay."
            },
            {
                name: "Type E",
                description: "Reactions associated with withdrawal or stopping a medicine."
            },
            {
                name: "Type F",
                description: "Unexpected therapeutic failure."
            }
        ],

        safetyConcepts: [
            {
                name: "Side Effect",
                description: "An additional effect of a medicine beyond its intended therapeutic effect."
            },
            {
                name: "Drug Allergy",
                description: "An immune-mediated reaction to a medicine."
            },
            {
                name: "Drug Toxicity",
                description: "Harmful effects resulting from exposure to a substance."
            },
            {
                name: "Drug Intolerance",
                description: "An unusually low threshold for experiencing an unwanted effect."
            },
            {
                name: "Medication Error",
                description: "A preventable event that may lead to inappropriate medication use or patient harm."
            }
        ],

        warning: "Severe allergic symptoms, breathing difficulty, collapse, severe bleeding or other serious reactions require urgent medical assessment. Do not independently change or stop prescribed medicines without appropriate professional guidance."
    },

    drugInteractions: {
        heading: "Drug Interactions",

        types: [
            {
                name: "Drug-Drug Interaction",
                description: "An interaction between two or more medicines."
            },
            {
                name: "Drug-Food Interaction",
                description: "An interaction between a medicine and food or nutrients."
            },
            {
                name: "Drug-Alcohol Interaction",
                description: "An interaction that may alter the effects or risks of a medicine."
            },
            {
                name: "Drug-Disease Interaction",
                description: "A situation in which a medicine may worsen an existing health condition or a disease may alter drug effects."
            },
            {
                name: "Drug-Supplement Interaction",
                description: "An interaction between a medicine and a dietary supplement or herbal product."
            }
        ],

        mechanisms: [
            {
                name: "Pharmacokinetic Interaction",
                description: "An interaction that changes absorption, distribution, metabolism or excretion."
            },
            {
                name: "Pharmacodynamic Interaction",
                description: "An interaction in which drugs influence the same or related physiological systems."
            }
        ],

        prevention: [
            "Maintain an accurate list of medicines and supplements.",
            "Inform healthcare professionals about allergies and previous reactions.",
            "Check with a pharmacist or prescriber before combining medicines.",
            "Avoid sharing prescription medicines.",
            "Follow medicine labels and professional instructions.",
            "Report unexpected or harmful reactions."
        ]
    },

    specialPopulations: {
        heading: "Pharmacology in Special Populations",

        groups: [
            {
                name: "Children",
                description: "Drug handling and responses change during growth and development. Medication decisions require age-appropriate professional assessment."
            },
            {
                name: "Older Adults",
                description: "Age-related changes, multiple medicines and coexisting conditions may affect medication safety."
            },
            {
                name: "Pregnancy",
                description: "Medicines may affect the pregnant person and developing fetus. Risk assessment must consider the specific medicine and stage of pregnancy."
            },
            {
                name: "Breastfeeding",
                description: "Some medicines may enter breast milk. Individual assessment is needed when considering medication use."
            },
            {
                name: "Renal Impairment",
                description: "Reduced kidney function may alter the elimination of certain medicines."
            },
            {
                name: "Hepatic Impairment",
                description: "Liver dysfunction may change the metabolism of certain medicines."
            },
            {
                name: "Genetic Variation",
                description: "Inherited differences in drug-metabolising enzymes and other biological pathways may influence medication responses."
            }
        ]
    },

    antimicrobialPharmacology: {
        heading: "Introduction to Antimicrobial Pharmacology",

        classes: [
            {
                name: "Antibacterial Agents",
                description: "Act against susceptible bacteria through different mechanisms."
            },
            {
                name: "Antiviral Agents",
                description: "Interfere with selected stages of viral replication or other viral processes."
            },
            {
                name: "Antifungal Agents",
                description: "Target fungal structures or biological processes."
            },
            {
                name: "Antiparasitic Agents",
                description: "Act against selected protozoa, helminths or other parasites."
            },
            {
                name: "Antimycobacterial Agents",
                description: "Used against susceptible mycobacterial organisms."
            }
        ],

        resistance: {
            heading: "Antimicrobial Resistance",
            description: "Antimicrobial resistance occurs when microorganisms develop the ability to survive exposure to medicines that previously inhibited or killed them.",
            contributingFactors: [
                "Inappropriate antimicrobial use",
                "Unnecessary antibiotic use",
                "Incorrect use of prescribed medicines",
                "Poor infection prevention and control",
                "Transmission of resistant organisms",
                "Inadequate surveillance and stewardship"
            ],
            prevention: [
                "Use antimicrobials only when appropriately prescribed.",
                "Do not use leftover antibiotics for a new illness.",
                "Do not share medicines.",
                "Follow the treatment instructions provided by the prescriber.",
                "Support vaccination and infection prevention.",
                "Promote antimicrobial stewardship."
            ]
        },

        stewardship: {
            heading: "Antimicrobial Stewardship",
            description: "A coordinated approach to promote appropriate antimicrobial selection, use and monitoring while reducing avoidable harm and resistance."
        }
    },

    pharmacogenomics: {
        heading: "Pharmacogenetics and Pharmacogenomics",

        topics: [
            {
                name: "Genetic Variation",
                description: "Differences in genes may influence how individuals respond to particular medicines."
            },
            {
                name: "Drug-Metabolising Enzymes",
                description: "Genetic differences in metabolic enzymes can affect drug exposure."
            },
            {
                name: "Drug Transporters",
                description: "Genetic variation in transport proteins can influence the movement of medicines."
            },
            {
                name: "Drug Targets",
                description: "Genetic differences in receptors and other targets may alter drug response."
            },
            {
                name: "Personalised Medicine",
                description: "The use of relevant individual characteristics, including genetic information, to support treatment decisions."
            }
        ],

        note: "Genetic testing is relevant only in selected clinical situations and must be interpreted by appropriately trained professionals."
    },

    medicationSafety: {
        heading: "Safe Medication Practices",

        principles: [
            {
                name: "Correct Patient",
                description: "Ensure that the medicine is intended for the correct individual."
            },
            {
                name: "Correct Medicine",
                description: "Verify the medicine against the authorised prescription or instruction."
            },
            {
                name: "Correct Dose",
                description: "Use only the dose specified by the authorised prescriber."
            },
            {
                name: "Correct Route",
                description: "Use the route specified for the medicine."
            },
            {
                name: "Correct Time",
                description: "Follow the prescribed timing and schedule."
            },
            {
                name: "Correct Documentation",
                description: "Maintain appropriate medication records."
            },
            {
                name: "Correct Reason",
                description: "Understand the intended purpose of the medicine."
            },
            {
                name: "Correct Response",
                description: "Monitor and communicate relevant therapeutic effects and unwanted reactions."
            }
        ],

        publicGuidance: [
            "Read medicine labels carefully.",
            "Check expiry dates and packaging integrity.",
            "Store medicines according to their labelled requirements.",
            "Keep medicines away from children.",
            "Avoid using another person's prescription.",
            "Do not crush or split modified-release medicines unless a qualified professional confirms it is appropriate.",
            "Seek professional advice when instructions are unclear.",
            "Dispose of unused medicines responsibly according to local guidance."
        ]
    },

    pharmacovigilance: {
        heading: "Pharmacovigilance",

        definition: "Pharmacovigilance is the science and activity concerned with detecting, assessing, understanding and preventing adverse effects and other medicine-related problems.",

        activities: [
            {
                name: "Adverse Reaction Reporting",
                description: "Collection of information about suspected unwanted medicine reactions."
            },
            {
                name: "Signal Detection",
                description: "Identification of potential new medicine safety concerns."
            },
            {
                name: "Safety Assessment",
                description: "Evaluation of evidence relating to medicine risks."
            },
            {
                name: "Risk Management",
                description: "Actions intended to reduce medicine-related harm."
            },
            {
                name: "Post-Marketing Surveillance",
                description: "Monitoring medicines after they become available for wider use."
            }
        ],

        india: {
            programme: "Pharmacovigilance Programme of India",
            organisation: "Indian Pharmacopoeia Commission",
            url: "https://ipc.gov.in/",
            description: "India's pharmacovigilance system supports the collection and assessment of suspected adverse drug reaction reports."
        }
    },

    drugDevelopment: {
        heading: "Drug Discovery and Development",

        stages: [
            {
                name: "Drug Discovery",
                description: "Identification and investigation of potential therapeutic compounds."
            },
            {
                name: "Preclinical Research",
                description: "Laboratory and other appropriate studies that evaluate biological activity and safety before human testing."
            },
            {
                name: "Phase I Clinical Trials",
                description: "Early human studies that primarily examine safety, tolerability and pharmacological characteristics."
            },
            {
                name: "Phase II Clinical Trials",
                description: "Studies that explore therapeutic activity and further evaluate safety in selected patient populations."
            },
            {
                name: "Phase III Clinical Trials",
                description: "Larger studies that evaluate effectiveness and safety in comparison with appropriate control or existing treatment approaches."
            },
            {
                name: "Regulatory Review",
                description: "Assessment of submitted evidence by relevant regulatory authorities."
            },
            {
                name: "Phase IV Studies",
                description: "Post-marketing studies that investigate medicines after approval and wider use."
            }
        ],

        note: "Clinical trial phases may overlap, and the design and sequence of studies depend on the product and regulatory requirements."
    },

    pharmaceuticalRegulation: {
        heading: "Pharmaceutical Regulation and Quality",

        concepts: [
            {
                name: "Drug Approval",
                description: "Regulatory evaluation of a medicine's quality, safety and effectiveness before authorisation."
            },
            {
                name: "Good Manufacturing Practices",
                description: "Quality systems intended to ensure pharmaceutical products are consistently manufactured and controlled."
            },
            {
                name: "Quality Control",
                description: "Testing and procedures used to assess whether products meet specified quality requirements."
            },
            {
                name: "Good Clinical Practice",
                description: "Ethical and scientific standards for designing and conducting clinical trials."
            },
            {
                name: "Prescription Medicines",
                description: "Medicines that require authorised prescribing under applicable regulations."
            },
            {
                name: "Non-Prescription Medicines",
                description: "Medicines available without a prescription under applicable regulatory conditions."
            }
        ],

        india: [
            {
                name: "Central Drugs Standard Control Organisation",
                abbreviation: "CDSCO",
                url: "https://cdsco.gov.in/"
            },
            {
                name: "Indian Pharmacopoeia Commission",
                abbreviation: "IPC",
                url: "https://ipc.gov.in/"
            },
            {
                name: "Ministry of Health and Family Welfare",
                abbreviation: "MoHFW",
                url: "https://mohfw.gov.in/"
            }
        ]
    },

    indianContext: {
        heading: "Medical Pharmacology in India",

        organisations: [
            {
                name: "Central Drugs Standard Control Organisation",
                url: "https://cdsco.gov.in/"
            },
            {
                name: "Indian Pharmacopoeia Commission",
                url: "https://ipc.gov.in/"
            },
            {
                name: "Indian Council of Medical Research",
                url: "https://www.icmr.gov.in/"
            },
            {
                name: "Ministry of Health and Family Welfare",
                url: "https://mohfw.gov.in/"
            },
            {
                name: "National Health Mission",
                url: "https://nhm.gov.in/"
            }
        ],

        focusAreas: [
            {
                title: "Medicine Quality",
                description: "Ensuring medicines meet appropriate standards of quality and safety."
            },
            {
                title: "Rational Medicine Use",
                description: "Promoting appropriate, evidence-based and safe medication practices."
            },
            {
                title: "Pharmacovigilance",
                description: "Encouraging the identification and reporting of suspected adverse drug reactions."
            },
            {
                title: "Antimicrobial Resistance",
                description: "Supporting national efforts to promote responsible antimicrobial use."
            },
            {
                title: "Affordable Healthcare",
                description: "Understanding the importance of medicine availability, accessibility and affordability."
            }
        ]
    },

    visualLearning: {
        heading: "Pharmacology Visual Learning Centre",

        resources: [
            {
                title: "Branches of Pharmacology",
                description: "Visual overview of the major branches of pharmacology.",
                plannedAsset: "branches-of-pharmacology"
            },
            {
                title: "ADME Process",
                description: "Illustration of absorption, distribution, metabolism and excretion.",
                plannedAsset: "adme-process"
            },
            {
                title: "Pharmacokinetic Curve",
                description: "Educational illustration of drug concentration over time.",
                plannedAsset: "pharmacokinetic-curve"
            },
            {
                title: "Drug-Receptor Interaction",
                description: "Illustration of agonist and antagonist interactions.",
                plannedAsset: "drug-receptor-interaction"
            },
            {
                title: "Dose-Response Curve",
                description: "Visual explanation of potency and efficacy.",
                plannedAsset: "dose-response-curve"
            },
            {
                title: "Routes of Administration",
                description: "Overview of major medication administration routes.",
                plannedAsset: "administration-routes"
            },
            {
                title: "Dosage Forms",
                description: "Illustration of common pharmaceutical dosage forms.",
                plannedAsset: "dosage-forms"
            },
            {
                title: "Drug Metabolism",
                description: "Educational overview of drug metabolism.",
                plannedAsset: "drug-metabolism"
            },
            {
                title: "Drug Excretion",
                description: "Illustration of major routes of drug elimination.",
                plannedAsset: "drug-excretion"
            },
            {
                title: "Adverse Drug Reactions",
                description: "Classification of adverse drug reactions.",
                plannedAsset: "adverse-drug-reactions"
            },
            {
                title: "Drug Interactions",
                description: "Illustration of common types of drug interactions.",
                plannedAsset: "drug-interactions"
            },
            {
                title: "Antimicrobial Resistance",
                description: "Educational overview of how antimicrobial resistance develops and spreads.",
                plannedAsset: "antimicrobial-resistance"
            },
            {
                title: "Clinical Trial Phases",
                description: "Visual representation of drug development stages.",
                plannedAsset: "clinical-trial-phases"
            },
            {
                title: "Pharmacovigilance",
                description: "Overview of medicine safety monitoring and reporting.",
                plannedAsset: "pharmacovigilance"
            }
        ]
    },

    learningObjectives: [
        "Define pharmacology and explain its importance in healthcare.",
        "Differentiate pharmacodynamics and pharmacokinetics.",
        "Identify major branches of pharmacology.",
        "Understand common sources of medicines.",
        "Recognise broad classifications of drugs.",
        "Explain absorption, distribution, metabolism and excretion.",
        "Understand bioavailability, half-life and clearance.",
        "Explain drug-receptor interactions.",
        "Differentiate agonists and antagonists.",
        "Understand potency, efficacy and dose-response relationships.",
        "Identify common routes of administration.",
        "Recognise different pharmaceutical dosage forms.",
        "Understand adverse drug reactions.",
        "Identify major types of drug interactions.",
        "Understand medication safety principles.",
        "Explain pharmacogenetics and personalised medicine.",
        "Understand antimicrobial resistance and stewardship.",
        "Explain the importance of pharmacovigilance.",
        "Describe the major stages of drug development.",
        "Identify major pharmaceutical regulatory organisations in India."
    ],

    faqs: [
        {
            question: "What is medical pharmacology?",
            answer: "Medical pharmacology is the study of drugs and their interactions with living systems."
        },
        {
            question: "What is the difference between pharmacodynamics and pharmacokinetics?",
            answer: "Pharmacodynamics studies what drugs do to the body, while pharmacokinetics studies what the body does to drugs."
        },
        {
            question: "What does ADME stand for?",
            answer: "ADME stands for absorption, distribution, metabolism and excretion."
        },
        {
            question: "What is drug absorption?",
            answer: "Drug absorption is the movement of a drug from its administration site into the bloodstream."
        },
        {
            question: "What is bioavailability?",
            answer: "Bioavailability is the fraction of an administered drug that reaches systemic circulation unchanged."
        },
        {
            question: "What is a drug receptor?",
            answer: "A drug receptor is a cellular molecule with which a drug interacts to produce a biological response."
        },
        {
            question: "What is an agonist?",
            answer: "An agonist binds to and activates a receptor."
        },
        {
            question: "What is an antagonist?",
            answer: "An antagonist binds to a receptor and blocks or reduces its activation."
        },
        {
            question: "What is a drug half-life?",
            answer: "It is the time required for the drug concentration in the body or plasma to decrease by approximately half under defined conditions."
        },
        {
            question: "What is an adverse drug reaction?",
            answer: "It is an unwanted or harmful response associated with the use of a medicine."
        },
        {
            question: "What is pharmacovigilance?",
            answer: "Pharmacovigilance involves monitoring, assessing and preventing adverse effects and other medicine-related problems."
        },
        {
            question: "What is antimicrobial resistance?",
            answer: "It occurs when microorganisms develop the ability to survive exposure to medicines that previously inhibited or killed them."
        },
        {
            question: "What is pharmacogenomics?",
            answer: "Pharmacogenomics studies how genetic variation influences responses to medicines."
        },
        {
            question: "What is a drug interaction?",
            answer: "A drug interaction occurs when a medicine's effects or handling are altered by another medicine, food, supplement or health condition."
        },
        {
            question: "What is therapeutic efficacy?",
            answer: "Efficacy refers to the maximum effect a drug can produce in a particular biological system."
        },
        {
            question: "Why are clinical trials conducted?",
            answer: "Clinical trials evaluate the safety, effectiveness and other characteristics of medicines in human participants."
        },
        {
            question: "Which organisation regulates medicines in India?",
            answer: "The Central Drugs Standard Control Organisation is India's national regulatory authority for drugs and related products."
        },
        {
            question: "Can pharmacology knowledge replace a doctor's prescription?",
            answer: "No. Educational pharmacology knowledge cannot replace individual assessment and advice from a qualified healthcare professional."
        }
    ],

    quiz: [
        {
            question: "What does pharmacology study?",
            options: [
                "Only human anatomy",
                "Drugs and their interactions with living systems",
                "Only infectious diseases",
                "Only surgical procedures"
            ],
            answer: 1,
            explanation: "Pharmacology studies drugs and their interactions with living organisms."
        },
        {
            question: "What does pharmacodynamics describe?",
            options: [
                "What the body does to a drug",
                "What a drug does to the body",
                "Drug manufacturing only",
                "Medicine storage only"
            ],
            answer: 1,
            explanation: "Pharmacodynamics examines drug actions and biological effects."
        },
        {
            question: "Which is the correct expansion of ADME?",
            options: [
                "Absorption, Distribution, Metabolism, Excretion",
                "Action, Digestion, Movement, Elimination",
                "Absorption, Digestion, Metabolism, Evaluation",
                "Administration, Distribution, Monitoring, Effect"
            ],
            answer: 0,
            explanation: "ADME represents the four major pharmacokinetic processes."
        },
        {
            question: "Which organ is particularly important in the metabolism of many medicines?",
            options: [
                "Liver",
                "Skin",
                "Spleen",
                "Outer ear"
            ],
            answer: 0,
            explanation: "The liver plays a major role in the metabolism of many drugs."
        },
        {
            question: "What is an agonist?",
            options: [
                "A substance that activates a receptor",
                "A substance that destroys all receptors",
                "A substance that always causes toxicity",
                "A substance that prevents absorption"
            ],
            answer: 0,
            explanation: "An agonist binds to and activates a receptor."
        },
        {
            question: "What is bioavailability?",
            options: [
                "The colour of a medicine",
                "The fraction reaching systemic circulation unchanged",
                "The medicine's expiry date",
                "The size of a tablet"
            ],
            answer: 1,
            explanation: "Bioavailability describes the fraction of an administered drug reaching systemic circulation unchanged."
        },
        {
            question: "Which route involves administration directly into a vein?",
            options: [
                "Oral",
                "Topical",
                "Intravenous",
                "Rectal"
            ],
            answer: 2,
            explanation: "Intravenous administration delivers a drug directly into a vein."
        },
        {
            question: "What does pharmacovigilance focus on?",
            options: [
                "Medicine packaging design",
                "Monitoring medicine safety",
                "Hospital construction",
                "Human anatomy"
            ],
            answer: 1,
            explanation: "Pharmacovigilance monitors and evaluates medicine-related safety concerns."
        },
        {
            question: "What does antimicrobial resistance mean?",
            options: [
                "The body becomes resistant to all medicines",
                "Microorganisms survive medicines that previously inhibited or killed them",
                "Medicines become stronger automatically",
                "All infections become viral"
            ],
            answer: 1,
            explanation: "Antimicrobial resistance is the ability of microorganisms to survive exposure to previously effective antimicrobial medicines."
        },
        {
            question: "Which organisation is India's national drug regulatory authority?",
            options: [
                "CDSCO",
                "WHO",
                "UNICEF",
                "UNESCO"
            ],
            answer: 0,
            explanation: "The Central Drugs Standard Control Organisation is India's national drug regulatory authority."
        },
        {
            question: "Which term describes the maximum effect a drug can produce?",
            options: [
                "Potency",
                "Efficacy",
                "Clearance",
                "Absorption"
            ],
            answer: 1,
            explanation: "Efficacy refers to the maximum effect a drug can produce in a particular system."
        },
        {
            question: "Which of the following is an example of a pharmacokinetic process?",
            options: [
                "Receptor activation",
                "Absorption",
                "Receptor antagonism",
                "Cell signalling"
            ],
            answer: 1,
            explanation: "Absorption is one of the four major pharmacokinetic processes."
        },
        {
            question: "What is a drug-drug interaction?",
            options: [
                "Interaction between two or more medicines",
                "Interaction between two organs",
                "Interaction between two bacteria",
                "Interaction between two vitamins only"
            ],
            answer: 0,
            explanation: "A drug-drug interaction occurs when one medicine influences another."
        },
        {
            question: "What is the main purpose of clinical trials?",
            options: [
                "To advertise medicines",
                "To evaluate safety and effectiveness in humans",
                "To manufacture packaging",
                "To replace all laboratory research"
            ],
            answer: 1,
            explanation: "Clinical trials investigate the safety, effectiveness and other characteristics of medical interventions."
        },
        {
            question: "Which statement about prescription medicines is correct?",
            options: [
                "They can always be shared with others",
                "They should be used according to authorised professional instructions",
                "They never cause adverse reactions",
                "Their expiry dates are unimportant"
            ],
            answer: 1,
            explanation: "Prescription medicines should be used according to authorised professional instructions."
        }
    ],

    references: [
        {
            name: "World Health Organization — Medicines",
            url: "https://www.who.int/health-topics/medicines"
        },
        {
            name: "NCBI Bookshelf",
            url: "https://www.ncbi.nlm.nih.gov/books/"
        },
        {
            name: "National Library of Medicine",
            url: "https://www.nlm.nih.gov/"
        },
        {
            name: "Central Drugs Standard Control Organisation",
            url: "https://cdsco.gov.in/"
        },
        {
            name: "Indian Pharmacopoeia Commission",
            url: "https://ipc.gov.in/"
        },
        {
            name: "Indian Council of Medical Research",
            url: "https://www.icmr.gov.in/"
        },
        {
            name: "Uppsala Monitoring Centre",
            url: "https://who-umc.org/"
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

    const content = MEDICAL_PHARMACOLOGY_CONTENT;

    const requiredFields = [
        "introduction",
        "overview",
        "branches",
        "drugSources",
        "drugClassification",
        "pharmacokinetics",
        "pharmacodynamics",
        "routesOfAdministration",
        "dosageForms",
        "adverseDrugReactions",
        "drugInteractions",
        "specialPopulations",
        "antimicrobialPharmacology",
        "pharmacogenomics",
        "medicationSafety",
        "pharmacovigilance",
        "drugDevelopment",
        "pharmaceuticalRegulation",
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
            "Medical Pharmacology validation failed:",
            missingFields
        );

    } else {

        console.log(
            "Medical Pharmacology educational dataset loaded."
        );

    }

})();
