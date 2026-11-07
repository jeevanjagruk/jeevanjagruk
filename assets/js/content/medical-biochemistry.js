/* =========================================================
   JEEVAN JAGRUK
   DIVISION 04 — MEDICAL BIOCHEMISTRY
   Educational content dataset
   ========================================================= */

"use strict";

const MEDICAL_BIOCHEMISTRY_CONTENT = {

    divisionId: "medical-biochemistry",
    divisionNumber: 4,
    title: "Medical Biochemistry",
    subtitle: "Explore the chemistry of life, metabolism and human health.",

    introduction: {
        heading: "Introduction to Medical Biochemistry",
        paragraphs: [
            "Medical biochemistry is the branch of biomedical science that studies the chemical substances, molecular processes and biochemical reactions occurring in living organisms.",
            "It explains how nutrients are converted into energy, how cells produce and use molecules, how enzymes regulate reactions and how biochemical processes support normal body functions.",
            "Medical biochemistry also provides a scientific foundation for understanding metabolic disorders, laboratory investigations, nutritional health and disease mechanisms."
        ]
    },

    overview: {
        heading: "Understanding Medical Biochemistry",
        sections: [
            {
                title: "What Is Biochemistry?",
                content: "Biochemistry studies the chemical composition of living organisms and the molecular reactions that sustain life."
            },
            {
                title: "What Is Medical Biochemistry?",
                content: "Medical biochemistry applies biochemical principles to human health, disease mechanisms, nutrition and laboratory medicine."
            },
            {
                title: "Why Is It Important?",
                content: "It helps explain cellular metabolism, energy production, molecular regulation and biochemical changes associated with disease."
            },
            {
                title: "Biochemistry and Medicine",
                content: "Biochemical knowledge supports clinical interpretation of laboratory investigations and understanding of physiological and pathological processes."
            }
        ]
    },

    foundations: {
        heading: "Foundations of Biochemistry",

        topics: [
            {
                title: "Atoms and Molecules",
                description: "Atoms are the basic units of chemical elements, while molecules consist of atoms chemically bonded together."
            },
            {
                title: "Chemical Bonds",
                description: "Covalent, ionic and hydrogen bonds contribute to the structure and properties of biological molecules."
            },
            {
                title: "Water",
                description: "Water acts as a solvent, participates in chemical reactions and supports temperature regulation."
            },
            {
                title: "Acids and Bases",
                description: "Acids and bases influence chemical reactions and the ionisation of biological molecules."
            },
            {
                title: "pH",
                description: "pH is a measure related to hydrogen ion activity and is important in maintaining suitable conditions for biological processes."
            },
            {
                title: "Buffers",
                description: "Buffer systems help resist changes in pH when small quantities of acids or bases are added."
            },
            {
                title: "Oxidation and Reduction",
                description: "Redox reactions involve electron transfer and are central to cellular energy metabolism."
            },
            {
                title: "Biological Energy",
                description: "Cells transform energy through metabolic reactions to support cellular activities."
            }
        ]
    },

    biomolecules: {
        heading: "Major Biomolecules",

        categories: [
            {
                name: "Carbohydrates",
                description: "Organic molecules that serve as important energy sources and structural components.",
                examples: [
                    "Glucose",
                    "Fructose",
                    "Galactose",
                    "Sucrose",
                    "Lactose",
                    "Glycogen"
                ],
                functions: [
                    "Provide energy",
                    "Store energy in the form of glycogen",
                    "Participate in cellular recognition",
                    "Contribute to molecular structures"
                ]
            },
            {
                name: "Proteins",
                description: "Large biological molecules made from amino acids linked by peptide bonds.",
                examples: [
                    "Haemoglobin",
                    "Collagen",
                    "Albumin",
                    "Insulin",
                    "Antibodies",
                    "Actin and myosin"
                ],
                functions: [
                    "Enzymatic catalysis",
                    "Structural support",
                    "Transport of substances",
                    "Immune defence",
                    "Cell signalling",
                    "Movement"
                ]
            },
            {
                name: "Lipids",
                description: "A diverse group of molecules that are generally poorly soluble in water.",
                examples: [
                    "Triglycerides",
                    "Phospholipids",
                    "Cholesterol",
                    "Fatty acids",
                    "Steroid molecules"
                ],
                functions: [
                    "Long-term energy storage",
                    "Cell membrane formation",
                    "Insulation and protection",
                    "Hormone synthesis",
                    "Cell signalling"
                ]
            },
            {
                name: "Nucleic Acids",
                description: "Molecules responsible for storing, transmitting and expressing genetic information.",
                examples: [
                    "DNA",
                    "RNA",
                    "Messenger RNA",
                    "Transfer RNA",
                    "Ribosomal RNA"
                ],
                functions: [
                    "Genetic information storage",
                    "Genetic information transmission",
                    "Protein synthesis",
                    "Regulation of gene expression"
                ]
            },
            {
                name: "Vitamins",
                description: "Organic micronutrients required in small quantities for normal metabolic functions.",
                examples: [
                    "Vitamin A",
                    "Vitamin B complex",
                    "Vitamin C",
                    "Vitamin D",
                    "Vitamin E",
                    "Vitamin K"
                ],
                functions: [
                    "Support enzyme activity",
                    "Maintain normal tissue functions",
                    "Support immunity",
                    "Contribute to blood formation and coagulation",
                    "Support bone health"
                ]
            },
            {
                name: "Minerals",
                description: "Inorganic elements required for structural, regulatory and metabolic functions.",
                examples: [
                    "Calcium",
                    "Iron",
                    "Sodium",
                    "Potassium",
                    "Magnesium",
                    "Zinc",
                    "Iodine"
                ],
                functions: [
                    "Bone and teeth formation",
                    "Nerve and muscle function",
                    "Oxygen transport",
                    "Enzyme activity",
                    "Hormone synthesis",
                    "Fluid balance"
                ]
            }
        ]
    },

    carbohydrates: {
        heading: "Carbohydrate Biochemistry",

        topics: [
            {
                title: "Monosaccharides",
                description: "Simple sugars such as glucose, fructose and galactose."
            },
            {
                title: "Disaccharides",
                description: "Carbohydrates formed by two monosaccharide units, including sucrose, lactose and maltose."
            },
            {
                title: "Polysaccharides",
                description: "Complex carbohydrates containing many sugar units, such as glycogen."
            },
            {
                title: "Glycolysis",
                description: "A metabolic pathway in which glucose is converted into pyruvate, generating ATP and NADH."
            },
            {
                title: "Glycogenesis",
                description: "The process of synthesising glycogen from glucose."
            },
            {
                title: "Glycogenolysis",
                description: "The breakdown of glycogen to provide glucose-related metabolic substrates."
            },
            {
                title: "Gluconeogenesis",
                description: "Formation of glucose from non-carbohydrate precursors."
            },
            {
                title: "Pentose Phosphate Pathway",
                description: "A pathway that produces NADPH and ribose-5-phosphate."
            },
            {
                title: "Blood Glucose Regulation",
                description: "Glucose metabolism is regulated through hormones including insulin and glucagon."
            }
        ]
    },

    proteinBiochemistry: {
        heading: "Protein and Amino Acid Biochemistry",

        topics: [
            {
                title: "Amino Acids",
                description: "Amino acids are the building blocks of proteins."
            },
            {
                title: "Essential Amino Acids",
                description: "Amino acids that must be obtained through the diet because the body cannot synthesise sufficient amounts."
            },
            {
                title: "Peptide Bonds",
                description: "Chemical bonds linking amino acids in proteins."
            },
            {
                title: "Primary Structure",
                description: "The linear sequence of amino acids in a polypeptide chain."
            },
            {
                title: "Secondary Structure",
                description: "Local folding patterns such as alpha helices and beta sheets."
            },
            {
                title: "Tertiary Structure",
                description: "The overall three-dimensional structure of an individual polypeptide chain."
            },
            {
                title: "Quaternary Structure",
                description: "The arrangement of multiple polypeptide subunits within a functional protein."
            },
            {
                title: "Protein Denaturation",
                description: "Disruption of a protein's structural organisation, which may affect its function."
            },
            {
                title: "Protein Metabolism",
                description: "Processes involved in protein synthesis, breakdown and amino acid utilisation."
            },
            {
                title: "Urea Cycle",
                description: "A series of biochemical reactions that convert toxic ammonia into urea for elimination."
            }
        ]
    },

    lipidBiochemistry: {
        heading: "Lipid Biochemistry",

        topics: [
            {
                title: "Fatty Acids",
                description: "Carboxylic acids that are important components of many lipids."
            },
            {
                title: "Saturated Fatty Acids",
                description: "Fatty acids without carbon-carbon double bonds."
            },
            {
                title: "Unsaturated Fatty Acids",
                description: "Fatty acids containing one or more carbon-carbon double bonds."
            },
            {
                title: "Triglycerides",
                description: "Molecules consisting of glycerol esterified with three fatty acids."
            },
            {
                title: "Phospholipids",
                description: "Amphipathic lipids that form major structural components of cell membranes."
            },
            {
                title: "Cholesterol",
                description: "A sterol important for membrane structure and as a precursor of steroid hormones, bile acids and vitamin D."
            },
            {
                title: "Beta-Oxidation",
                description: "A metabolic pathway that breaks down fatty acids into acetyl-CoA units."
            },
            {
                title: "Ketone Bodies",
                description: "Water-soluble molecules produced mainly in the liver during particular metabolic conditions."
            },
            {
                title: "Lipoproteins",
                description: "Particles that transport lipids through the bloodstream."
            },
            {
                title: "Lipid Metabolism",
                description: "The processes through which the body synthesises, stores, transports and breaks down lipids."
            }
        ]
    },

    enzymeBiochemistry: {
        heading: "Enzymes and Biochemical Regulation",

        topics: [
            {
                title: "What Are Enzymes?",
                description: "Enzymes are biological catalysts that increase reaction rates without being consumed in the overall reaction."
            },
            {
                title: "Active Site",
                description: "The region of an enzyme where substrate binding and catalysis occur."
            },
            {
                title: "Substrate Specificity",
                description: "The ability of an enzyme to act on particular substrates or groups of substrates."
            },
            {
                title: "Factors Affecting Enzyme Activity",
                description: "Temperature, pH, substrate concentration, enzyme concentration and regulatory molecules can influence enzyme activity."
            },
            {
                title: "Enzyme Inhibition",
                description: "Certain molecules reduce enzyme activity through different inhibitory mechanisms."
            },
            {
                title: "Competitive Inhibition",
                description: "An inhibitor competes with the substrate for binding to the enzyme's active site."
            },
            {
                title: "Non-Competitive Inhibition",
                description: "An inhibitor reduces enzyme activity through binding at a site other than the active site in the classical model."
            },
            {
                title: "Cofactors",
                description: "Non-protein components required by some enzymes for proper catalytic activity."
            },
            {
                title: "Coenzymes",
                description: "Organic molecules that assist enzymes in biochemical reactions."
            },
            {
                title: "Isoenzymes",
                description: "Different molecular forms of an enzyme that catalyse the same reaction."
            }
        ]
    },

    bioenergetics: {
        heading: "Bioenergetics and Energy Production",

        topics: [
            {
                title: "ATP",
                description: "Adenosine triphosphate is a central energy-transfer molecule in cells."
            },
            {
                title: "ATP Hydrolysis",
                description: "The hydrolysis of ATP can be coupled to cellular processes requiring energy."
            },
            {
                title: "Mitochondria",
                description: "Organelles that carry out several important metabolic processes, including oxidative phosphorylation."
            },
            {
                title: "Citric Acid Cycle",
                description: "A metabolic pathway that oxidises acetyl-CoA and generates reduced electron carriers."
            },
            {
                title: "Electron Transport Chain",
                description: "A series of protein complexes and carriers involved in transferring electrons."
            },
            {
                title: "Oxidative Phosphorylation",
                description: "The process through which ATP synthesis is coupled to electron transport and a proton gradient."
            },
            {
                title: "Anaerobic Metabolism",
                description: "Metabolic processes that generate ATP without relying directly on oxygen as the final electron acceptor."
            },
            {
                title: "Energy Balance",
                description: "The relationship between energy intake, energy expenditure and energy storage."
            }
        ]
    },

    metabolism: {
        heading: "Integrated Metabolism",

        pathways: [
            {
                title: "Carbohydrate Metabolism",
                description: "The synthesis, breakdown and utilisation of carbohydrates."
            },
            {
                title: "Protein Metabolism",
                description: "The synthesis and breakdown of proteins and the metabolism of amino acids."
            },
            {
                title: "Lipid Metabolism",
                description: "The synthesis, storage, transport and utilisation of fats."
            },
            {
                title: "Fed State",
                description: "The metabolic state following nutrient intake, when nutrient processing and storage pathways are active."
            },
            {
                title: "Fasting State",
                description: "A metabolic state in which stored nutrients contribute more substantially to energy requirements."
            },
            {
                title: "Hormonal Integration",
                description: "Hormones coordinate metabolic pathways according to nutritional and physiological conditions."
            },
            {
                title: "Metabolic Adaptation",
                description: "The body adjusts metabolic activity in response to changing energy and nutrient availability."
            }
        ]
    },

    vitamins: {
        heading: "Vitamins and Their Functions",

        categories: [
            {
                name: "Vitamin A",
                type: "Fat-soluble",
                functions: "Vision, epithelial health and immune function.",
                sources: "Dairy products, eggs and orange or dark-green vegetables."
            },
            {
                name: "Vitamin B1 — Thiamine",
                type: "Water-soluble",
                functions: "Carbohydrate metabolism and nervous system function.",
                sources: "Whole grains, legumes, nuts and seeds."
            },
            {
                name: "Vitamin B2 — Riboflavin",
                type: "Water-soluble",
                functions: "Energy metabolism and redox reactions.",
                sources: "Milk, eggs and green vegetables."
            },
            {
                name: "Vitamin B3 — Niacin",
                type: "Water-soluble",
                functions: "Cellular energy metabolism through NAD and NADP.",
                sources: "Meat, fish, peanuts and whole grains."
            },
            {
                name: "Vitamin B6",
                type: "Water-soluble",
                functions: "Amino acid metabolism and neurotransmitter synthesis.",
                sources: "Fish, poultry, potatoes and bananas."
            },
            {
                name: "Vitamin B9 — Folate",
                type: "Water-soluble",
                functions: "DNA synthesis and cell division.",
                sources: "Leafy vegetables, legumes and fortified foods."
            },
            {
                name: "Vitamin B12",
                type: "Water-soluble",
                functions: "Red blood cell formation and nervous system function.",
                sources: "Animal-derived foods and fortified foods."
            },
            {
                name: "Vitamin C",
                type: "Water-soluble",
                functions: "Collagen synthesis, antioxidant activity and iron absorption.",
                sources: "Citrus fruits, guava, amla and vegetables."
            },
            {
                name: "Vitamin D",
                type: "Fat-soluble",
                functions: "Calcium and phosphate regulation and bone health.",
                sources: "Sunlight-related skin synthesis, fortified foods and selected animal foods."
            },
            {
                name: "Vitamin E",
                type: "Fat-soluble",
                functions: "Antioxidant protection of cell membranes.",
                sources: "Nuts, seeds and vegetable oils."
            },
            {
                name: "Vitamin K",
                type: "Fat-soluble",
                functions: "Activation of proteins involved in blood coagulation and bone metabolism.",
                sources: "Green leafy vegetables and selected other foods."
            }
        ],

        note: "Nutritional requirements and deficiency risks vary by age, health status, diet and other factors. This information is educational and does not recommend self-prescribing supplements."
    },

    minerals: {
        heading: "Minerals and Trace Elements",

        categories: [
            {
                name: "Calcium",
                functions: "Bone structure, muscle contraction, nerve signalling and blood coagulation.",
                sources: "Dairy products, selected leafy vegetables and fortified foods."
            },
            {
                name: "Iron",
                functions: "Oxygen transport and several cellular metabolic processes.",
                sources: "Meat, legumes, leafy vegetables and fortified foods."
            },
            {
                name: "Sodium",
                functions: "Extracellular fluid balance and nerve and muscle function.",
                sources: "Commonly obtained from dietary salt and foods."
            },
            {
                name: "Potassium",
                functions: "Intracellular fluid balance, nerve signalling and muscle function.",
                sources: "Fruits, vegetables, legumes and other foods."
            },
            {
                name: "Magnesium",
                functions: "Enzyme activity, energy metabolism and neuromuscular function.",
                sources: "Nuts, seeds, whole grains and legumes."
            },
            {
                name: "Zinc",
                functions: "Immune function, enzyme activity and tissue growth.",
                sources: "Meat, seafood, legumes and nuts."
            },
            {
                name: "Iodine",
                functions: "Synthesis of thyroid hormones.",
                sources: "Iodised salt and selected seafood and dairy foods."
            },
            {
                name: "Phosphorus",
                functions: "Bone structure, ATP, nucleic acids and cell membranes.",
                sources: "Dairy products, meat, legumes and nuts."
            },
            {
                name: "Selenium",
                functions: "Antioxidant enzyme systems and thyroid hormone metabolism.",
                sources: "Seafood, meat, grains and other foods."
            }
        ]
    },

    molecularBiochemistry: {
        heading: "Molecular Biochemistry",

        topics: [
            {
                title: "DNA Structure",
                description: "DNA stores genetic information in a double-stranded molecular structure."
            },
            {
                title: "DNA Replication",
                description: "The process by which DNA is copied before cell division."
            },
            {
                title: "Transcription",
                description: "The process of producing RNA from a DNA template."
            },
            {
                title: "Translation",
                description: "The process through which ribosomes use messenger RNA information to synthesise proteins."
            },
            {
                title: "Gene Expression",
                description: "The processes through which information encoded in genes contributes to functional products."
            },
            {
                title: "Mutations",
                description: "Changes in genetic material that can have different biological effects."
            },
            {
                title: "Epigenetics",
                description: "Study of changes in gene activity that do not involve alterations in the underlying DNA sequence."
            },
            {
                title: "Cellular Regulation",
                description: "Molecular mechanisms controlling cellular activity, growth and responses."
            }
        ]
    },

    clinicalBiochemistry: {
        heading: "Clinical Biochemistry",

        description: "Clinical biochemistry uses laboratory analysis of biological samples to provide information about physiological processes and support clinical assessment.",

        investigations: [
            {
                name: "Blood Glucose",
                purpose: "Measures glucose concentration in blood."
            },
            {
                name: "Glycated Haemoglobin",
                purpose: "Provides information about average blood glucose exposure over approximately the preceding two to three months."
            },
            {
                name: "Lipid Profile",
                purpose: "Measures selected blood lipids and lipoprotein-related parameters."
            },
            {
                name: "Liver Function Tests",
                purpose: "Includes biochemical measurements used to assess liver-related processes and patterns of injury."
            },
            {
                name: "Kidney Function Tests",
                purpose: "Includes measurements such as creatinine and other parameters used to assess renal function."
            },
            {
                name: "Serum Electrolytes",
                purpose: "Measures electrolytes such as sodium and potassium."
            },
            {
                name: "Thyroid Function Tests",
                purpose: "Measures selected hormones and related markers involved in thyroid assessment."
            },
            {
                name: "Serum Calcium",
                purpose: "Measures calcium concentration in blood."
            },
            {
                name: "Serum Uric Acid",
                purpose: "Measures uric acid concentration in blood."
            },
            {
                name: "Enzyme Investigations",
                purpose: "Measures selected enzymes that may provide information about tissue and organ processes."
            }
        ],

        laboratoryPrinciples: [
            "Specimen collection and correct identification",
            "Appropriate sample handling and storage",
            "Quality control and quality assurance",
            "Calibration of laboratory instruments",
            "Reference intervals and biological variation",
            "Analytical accuracy and precision",
            "Interpretation in clinical context"
        ],

        note: "Laboratory results should be interpreted by qualified healthcare professionals using the patient's clinical context, laboratory method and applicable reference intervals."
    },

    biochemicalDisorders: {
        heading: "Introduction to Biochemical Disorders",

        topics: [
            {
                title: "Diabetes Mellitus",
                description: "A group of metabolic disorders characterised by persistent disturbances in blood glucose regulation."
            },
            {
                title: "Dyslipidaemia",
                description: "Abnormalities in blood lipid or lipoprotein levels."
            },
            {
                title: "Inherited Metabolic Disorders",
                description: "Conditions caused by genetic changes affecting particular metabolic pathways."
            },
            {
                title: "Phenylketonuria",
                description: "An inherited metabolic condition associated with impaired phenylalanine metabolism."
            },
            {
                title: "Glycogen Storage Disorders",
                description: "A group of inherited conditions affecting glycogen metabolism."
            },
            {
                title: "Vitamin Deficiencies",
                description: "Conditions arising when vitamin availability is insufficient for normal physiological functions."
            },
            {
                title: "Electrolyte Imbalances",
                description: "Alterations in electrolyte concentrations that can affect cellular and organ function."
            },
            {
                title: "Acid-Base Disorders",
                description: "Conditions involving disturbances in the body's regulation of pH."
            }
        ]
    },

    nutritionAndBiochemistry: {
        heading: "Nutrition and Biochemistry",

        topics: [
            {
                title: "Macronutrients",
                description: "Carbohydrates, proteins and fats are nutrients required in relatively large quantities."
            },
            {
                title: "Micronutrients",
                description: "Vitamins and minerals are required in smaller quantities but are essential for normal body functions."
            },
            {
                title: "Energy Balance",
                description: "The relationship between dietary energy intake and energy expenditure."
            },
            {
                title: "Nutrient Absorption",
                description: "The processes through which digested nutrients enter the body."
            },
            {
                title: "Nutrient Metabolism",
                description: "The biochemical utilisation, transformation and storage of nutrients."
            },
            {
                title: "Antioxidants",
                description: "Substances that can help limit oxidative reactions through different mechanisms."
            },
            {
                title: "Dietary Fibre",
                description: "Components of plant foods that influence gastrointestinal function and other aspects of health."
            }
        ]
    },

    visualLearning: {
        heading: "Biochemistry Visual Learning Centre",

        resources: [
            {
                title: "Major Biomolecules",
                description: "Visual comparison of carbohydrates, proteins, lipids and nucleic acids.",
                plannedAsset: "major-biomolecules"
            },
            {
                title: "Amino Acid Structure",
                description: "Basic structure and components of an amino acid.",
                plannedAsset: "amino-acid-structure"
            },
            {
                title: "Protein Structure",
                description: "Four levels of protein structural organisation.",
                plannedAsset: "protein-structure"
            },
            {
                title: "Enzyme Action",
                description: "Illustration of enzyme-substrate interaction.",
                plannedAsset: "enzyme-action"
            },
            {
                title: "Glycolysis",
                description: "Overview of glucose breakdown.",
                plannedAsset: "glycolysis"
            },
            {
                title: "Citric Acid Cycle",
                description: "Major stages of the citric acid cycle.",
                plannedAsset: "citric-acid-cycle"
            },
            {
                title: "Electron Transport Chain",
                description: "Overview of oxidative phosphorylation.",
                plannedAsset: "electron-transport-chain"
            },
            {
                title: "Urea Cycle",
                description: "Overview of ammonia conversion into urea.",
                plannedAsset: "urea-cycle"
            },
            {
                title: "Vitamin Classification",
                description: "Comparison of water-soluble and fat-soluble vitamins.",
                plannedAsset: "vitamin-classification"
            },
            {
                title: "Lipoprotein Structure",
                description: "Visual explanation of lipid transport particles.",
                plannedAsset: "lipoprotein-structure"
            }
        ]
    },

    learningObjectives: [
        "Define medical biochemistry and explain its importance.",
        "Understand the chemical foundations of living systems.",
        "Identify major classes of biomolecules.",
        "Explain the structure and functions of carbohydrates.",
        "Understand amino acids and protein organisation.",
        "Describe the major classes of lipids.",
        "Explain enzyme function and regulation.",
        "Understand ATP and cellular energy production.",
        "Describe major metabolic pathways.",
        "Recognise the functions of vitamins and minerals.",
        "Understand basic molecular biology processes.",
        "Identify common clinical biochemistry investigations.",
        "Recognise introductory concepts related to metabolic disorders.",
        "Understand the biochemical foundations of nutrition."
    ],

    faqs: [
        {
            question: "What is medical biochemistry?",
            answer: "Medical biochemistry studies the chemical substances and molecular processes involved in human health and disease."
        },
        {
            question: "What are biomolecules?",
            answer: "Biomolecules are molecules produced by or found in living organisms, including carbohydrates, proteins, lipids and nucleic acids."
        },
        {
            question: "What is the main function of ATP?",
            answer: "ATP is a central molecule involved in transferring usable chemical energy within cells."
        },
        {
            question: "What are enzymes?",
            answer: "Enzymes are biological catalysts that increase the rate of biochemical reactions."
        },
        {
            question: "What is glycolysis?",
            answer: "Glycolysis is a metabolic pathway that converts glucose into pyruvate while generating ATP and NADH."
        },
        {
            question: "What is the function of haemoglobin?",
            answer: "Haemoglobin is a protein in red blood cells that binds and transports oxygen."
        },
        {
            question: "What are essential amino acids?",
            answer: "They are amino acids that must be obtained through the diet because the body cannot produce sufficient quantities."
        },
        {
            question: "What is clinical biochemistry?",
            answer: "Clinical biochemistry involves laboratory analysis of biological samples to provide information useful in healthcare assessment."
        },
        {
            question: "What is the difference between vitamins and minerals?",
            answer: "Vitamins are organic compounds, while minerals are inorganic elements required for normal physiological functions."
        },
        {
            question: "Why is pH important in the human body?",
            answer: "Many biochemical reactions and protein functions depend on an appropriate pH environment."
        }
    ],

    quiz: [
        {
            question: "Which molecule is considered a central energy-transfer molecule in cells?",
            options: [
                "DNA",
                "ATP",
                "Collagen",
                "Cholesterol"
            ],
            answer: 1,
            explanation: "ATP transfers usable chemical energy to many cellular processes."
        },
        {
            question: "What are the building blocks of proteins?",
            options: [
                "Fatty acids",
                "Nucleotides",
                "Amino acids",
                "Monosaccharides"
            ],
            answer: 2,
            explanation: "Proteins are composed of amino acids linked by peptide bonds."
        },
        {
            question: "Which organelle is especially important in oxidative phosphorylation?",
            options: [
                "Ribosome",
                "Mitochondrion",
                "Lysosome",
                "Golgi apparatus"
            ],
            answer: 1,
            explanation: "The mitochondrial inner membrane contains the electron transport chain and ATP synthase."
        },
        {
            question: "Which vitamin is important for collagen synthesis?",
            options: [
                "Vitamin C",
                "Vitamin D",
                "Vitamin K",
                "Vitamin B12"
            ],
            answer: 0,
            explanation: "Vitamin C is required for hydroxylation reactions involved in collagen formation."
        },
        {
            question: "Which enzyme-related term describes a biological catalyst?",
            options: [
                "Substrate",
                "Enzyme",
                "Lipid",
                "Electrolyte"
            ],
            answer: 1,
            explanation: "Enzymes accelerate biochemical reactions without being consumed overall."
        },
        {
            question: "Which pathway converts glucose into pyruvate?",
            options: [
                "Glycolysis",
                "Glycogenesis",
                "Urea cycle",
                "Beta-oxidation"
            ],
            answer: 0,
            explanation: "Glycolysis is the pathway responsible for converting glucose into pyruvate."
        },
        {
            question: "Which molecule stores genetic information in most human cells?",
            options: [
                "ATP",
                "DNA",
                "Triglyceride",
                "Glycogen"
            ],
            answer: 1,
            explanation: "DNA carries the genetic information of human cells."
        },
        {
            question: "Which mineral is an essential component of haemoglobin?",
            options: [
                "Iodine",
                "Calcium",
                "Iron",
                "Sodium"
            ],
            answer: 2,
            explanation: "Iron is present in the haem group of haemoglobin and is essential for oxygen binding."
        },
        {
            question: "Which process converts ammonia into urea?",
            options: [
                "Glycolysis",
                "Urea cycle",
                "Citric acid cycle",
                "Pentose phosphate pathway"
            ],
            answer: 1,
            explanation: "The urea cycle converts ammonia into urea, which can be eliminated through urine."
        },
        {
            question: "Which of the following is a fat-soluble vitamin?",
            options: [
                "Vitamin C",
                "Vitamin B1",
                "Vitamin B12",
                "Vitamin D"
            ],
            answer: 3,
            explanation: "Vitamins A, D, E and K are fat-soluble vitamins."
        }
    ],

    references: [
        {
            name: "NCBI Bookshelf",
            url: "https://www.ncbi.nlm.nih.gov/books/"
        },
        {
            name: "OpenStax Biology 2e",
            url: "https://openstax.org/details/books/biology-2e"
        },
        {
            name: "OpenStax Anatomy and Physiology 2e",
            url: "https://openstax.org/details/books/anatomy-and-physiology-2e"
        },
        {
            name: "National Institute of General Medical Sciences",
            url: "https://www.nigms.nih.gov/"
        },
        {
            name: "MedlinePlus",
            url: "https://medlineplus.gov/"
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

    const content = MEDICAL_BIOCHEMISTRY_CONTENT;

    const requiredFields = [
        "introduction",
        "overview",
        "foundations",
        "biomolecules",
        "carbohydrates",
        "proteinBiochemistry",
        "lipidBiochemistry",
        "enzymeBiochemistry",
        "bioenergetics",
        "metabolism",
        "vitamins",
        "minerals",
        "molecularBiochemistry",
        "clinicalBiochemistry",
        "biochemicalDisorders",
        "nutritionAndBiochemistry",
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
            "Medical Biochemistry content validation failed:",
            missingFields
        );

    } else {

        console.log(
            "Medical Biochemistry educational dataset loaded."
        );

    }

})();
