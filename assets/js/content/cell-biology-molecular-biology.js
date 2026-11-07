/* =========================================================
   JEEVAN JAGRUK
   DIVISION 05 — CELL BIOLOGY AND MOLECULAR BIOLOGY
   Educational content dataset
   ========================================================= */

"use strict";

const CELL_BIOLOGY_MOLECULAR_BIOLOGY_CONTENT = {

    divisionId: "cell-biology-molecular-biology",
    divisionNumber: 5,
    title: "Cell Biology and Molecular Biology",
    subtitle: "Explore the microscopic structures and molecular mechanisms of life.",

    introduction: {
        heading: "Introduction to Cell Biology and Molecular Biology",
        paragraphs: [
            "Cell biology is the scientific study of cells, their structures, functions, activities and interactions.",
            "Molecular biology investigates the molecular mechanisms underlying biological processes, particularly those involving DNA, RNA and proteins.",
            "Together, these disciplines explain how cells maintain life, grow, communicate, divide, respond to their surroundings and transmit genetic information."
        ]
    },

    overview: {
        heading: "Understanding Cell and Molecular Biology",
        sections: [
            {
                title: "What Is Cell Biology?",
                content: "Cell biology studies the structure, organisation and functions of cells, which are the basic structural and functional units of living organisms."
            },
            {
                title: "What Is Molecular Biology?",
                content: "Molecular biology examines biological processes at the molecular level, including genetic information storage and expression."
            },
            {
                title: "Why Are These Subjects Important?",
                content: "They provide the foundation for understanding genetics, development, immunity, cancer biology, inherited conditions and modern biomedical research."
            },
            {
                title: "Connection with Medicine",
                content: "Cellular and molecular mechanisms help explain how tissues function, how diseases develop and how many diagnostic and therapeutic technologies work."
            }
        ]
    },

    cellTheory: {
        heading: "Cell Theory",

        principles: [
            "All known living organisms are composed of one or more cells.",
            "The cell is the basic structural and functional unit of life.",
            "New cells arise from pre-existing cells through cell division."
        ],

        importance: "Cell theory provides a fundamental framework for understanding the organisation and continuity of life."
    },

    cellClassification: {
        heading: "Types of Cells",

        types: [
            {
                title: "Prokaryotic Cells",
                description: "Cells that lack a membrane-bound nucleus and membrane-bound organelles.",
                features: [
                    "Genetic material is located in a nucleoid region.",
                    "Usually smaller and structurally simpler than eukaryotic cells.",
                    "Include bacteria and archaea."
                ]
            },
            {
                title: "Eukaryotic Cells",
                description: "Cells that contain a membrane-bound nucleus and specialised membrane-bound organelles.",
                features: [
                    "DNA is primarily organised within the nucleus.",
                    "Contain specialised cellular compartments.",
                    "Include animal, plant, fungal and protist cells."
                ]
            }
        ]
    },

    cellStructure: {
        heading: "Structure of a Typical Human Cell",

        components: [
            {
                name: "Plasma Membrane",
                description: "A selectively permeable boundary that separates the cell from its external environment."
            },
            {
                name: "Cytoplasm",
                description: "The cellular region between the plasma membrane and nucleus, containing cytosol and organelles."
            },
            {
                name: "Nucleus",
                description: "A membrane-bound compartment that contains most of the cell's genetic material."
            },
            {
                name: "Nucleolus",
                description: "A nuclear region involved in ribosomal RNA production and ribosome subunit assembly."
            },
            {
                name: "Mitochondria",
                description: "Organelles involved in energy metabolism and several other cellular processes."
            },
            {
                name: "Ribosomes",
                description: "Molecular structures responsible for protein synthesis."
            },
            {
                name: "Rough Endoplasmic Reticulum",
                description: "A membrane network associated with ribosomes and involved in synthesis and processing of many proteins."
            },
            {
                name: "Smooth Endoplasmic Reticulum",
                description: "A membrane network involved in lipid synthesis, detoxification and calcium storage in certain cells."
            },
            {
                name: "Golgi Apparatus",
                description: "Processes, modifies and sorts proteins and lipids for delivery to different destinations."
            },
            {
                name: "Lysosomes",
                description: "Membrane-bound compartments containing enzymes that break down selected cellular materials."
            },
            {
                name: "Peroxisomes",
                description: "Organelles involved in selected oxidative reactions and fatty acid metabolism."
            },
            {
                name: "Cytoskeleton",
                description: "A network of protein filaments that supports cell shape, organisation, movement and intracellular transport."
            },
            {
                name: "Centrosome",
                description: "An important microtubule-organising centre in many animal cells."
            },
            {
                name: "Vesicles",
                description: "Small membrane-bound compartments involved in transport and storage."
            }
        ]
    },

    cellMembrane: {
        heading: "Cell Membrane and Transport",

        topics: [
            {
                title: "Fluid Mosaic Model",
                description: "Describes the plasma membrane as a dynamic lipid bilayer containing proteins and other components."
            },
            {
                title: "Phospholipid Bilayer",
                description: "A double layer of phospholipids forming the basic structural framework of biological membranes."
            },
            {
                title: "Membrane Proteins",
                description: "Proteins involved in transport, signalling, cell recognition and structural interactions."
            },
            {
                title: "Simple Diffusion",
                description: "Movement of substances down their concentration gradient without direct energy expenditure."
            },
            {
                title: "Facilitated Diffusion",
                description: "Passive transport through membrane proteins."
            },
            {
                title: "Active Transport",
                description: "Transport that uses energy to move substances against an electrochemical gradient."
            },
            {
                title: "Osmosis",
                description: "Movement of water across a selectively permeable membrane in response to differences in water potential."
            },
            {
                title: "Endocytosis",
                description: "Uptake of materials into a cell through membrane-bound vesicles."
            },
            {
                title: "Exocytosis",
                description: "Release of cellular materials through fusion of vesicles with the plasma membrane."
            },
            {
                title: "Cell Membrane Receptors",
                description: "Proteins that recognise signalling molecules and initiate cellular responses."
            }
        ]
    },

    cytoskeleton: {
        heading: "Cytoskeleton and Cellular Organisation",

        components: [
            {
                name: "Microfilaments",
                description: "Actin-based filaments involved in cell shape, contraction and movement."
            },
            {
                name: "Intermediate Filaments",
                description: "Fibrous structures that provide mechanical strength and stability."
            },
            {
                name: "Microtubules",
                description: "Tubular structures involved in intracellular transport, chromosome movement and cilia organisation."
            }
        ],

        functions: [
            "Maintain cell shape.",
            "Support intracellular organisation.",
            "Assist movement of cellular components.",
            "Participate in cell division.",
            "Contribute to cellular motility."
        ]
    },

    cellCommunication: {
        heading: "Cell Signalling and Communication",

        topics: [
            {
                title: "Autocrine Signalling",
                description: "A cell releases a signal that acts on itself or similar nearby cells."
            },
            {
                title: "Paracrine Signalling",
                description: "Chemical signals act on nearby cells."
            },
            {
                title: "Endocrine Signalling",
                description: "Hormones travel through circulation to influence distant target cells."
            },
            {
                title: "Synaptic Signalling",
                description: "Neurons communicate with target cells through specialised synapses."
            },
            {
                title: "Receptor Activation",
                description: "Binding of a signalling molecule can initiate changes in receptor activity."
            },
            {
                title: "Signal Transduction",
                description: "A sequence of molecular events converts an external signal into a cellular response."
            },
            {
                title: "Second Messengers",
                description: "Intracellular molecules such as cyclic AMP and calcium ions help transmit signals."
            },
            {
                title: "Cellular Responses",
                description: "Signalling can alter gene expression, metabolism, movement, growth or secretion."
            }
        ]
    },

    cellCycle: {
        heading: "Cell Cycle",

        phases: [
            {
                name: "G1 Phase",
                description: "The cell grows and carries out normal activities while preparing for DNA replication."
            },
            {
                name: "S Phase",
                description: "DNA is replicated."
            },
            {
                name: "G2 Phase",
                description: "The cell continues growing and prepares for division."
            },
            {
                name: "M Phase",
                description: "The cell undergoes nuclear division and usually cytoplasmic division."
            },
            {
                name: "G0 Phase",
                description: "A state outside the active cell cycle in which cells may remain temporarily or permanently, depending on cell type and conditions."
            }
        ],

        checkpoints: [
            {
                name: "G1/S Checkpoint",
                description: "Helps assess whether conditions are suitable for DNA replication."
            },
            {
                name: "G2/M Checkpoint",
                description: "Helps ensure that DNA replication is sufficiently complete and damage is assessed before mitosis."
            },
            {
                name: "Spindle Assembly Checkpoint",
                description: "Helps ensure proper chromosome attachment before chromosome separation."
            }
        ]
    },

    cellDivision: {
        heading: "Cell Division",

        types: [
            {
                name: "Mitosis",
                description: "A form of nuclear division that generally produces two genetically similar daughter nuclei.",
                stages: [
                    "Prophase",
                    "Prometaphase",
                    "Metaphase",
                    "Anaphase",
                    "Telophase"
                ],
                importance: [
                    "Growth",
                    "Tissue maintenance",
                    "Cell replacement",
                    "Wound repair"
                ]
            },
            {
                name: "Meiosis",
                description: "A specialised type of cell division that reduces chromosome number and contributes to genetic variation in sexually reproducing organisms.",
                stages: [
                    "Meiosis I",
                    "Meiosis II"
                ],
                importance: [
                    "Formation of haploid reproductive cells",
                    "Reduction of chromosome number",
                    "Genetic recombination",
                    "Genetic variation"
                ]
            },
            {
                name: "Cytokinesis",
                description: "Division of the cytoplasm to form separate daughter cells."
            }
        ]
    },

    cellDeath: {
        heading: "Cell Death and Cellular Ageing",

        topics: [
            {
                title: "Apoptosis",
                description: "A regulated form of cell death that contributes to normal development and tissue homeostasis."
            },
            {
                title: "Necrosis",
                description: "A form of cell death commonly associated with severe cellular injury and inflammation."
            },
            {
                title: "Autophagy",
                description: "A cellular process through which components are delivered to lysosomes for degradation and recycling."
            },
            {
                title: "Cellular Senescence",
                description: "A state in which cells permanently or persistently stop dividing while remaining metabolically active."
            },
            {
                title: "Cellular Ageing",
                description: "A complex process involving accumulated molecular and cellular changes over time."
            }
        ]
    },

    genetics: {
        heading: "Introduction to Molecular Genetics",

        topics: [
            {
                title: "Gene",
                description: "A segment of genetic material that contributes to the production of a functional RNA or protein product."
            },
            {
                title: "Genome",
                description: "The complete genetic material of an organism."
            },
            {
                title: "Chromosome",
                description: "A DNA-protein structure that organises and carries genetic information."
            },
            {
                title: "Alleles",
                description: "Alternative forms of a genetic sequence at a particular genomic location."
            },
            {
                title: "Genotype",
                description: "The genetic constitution of an organism or individual at specified loci."
            },
            {
                title: "Phenotype",
                description: "Observable characteristics arising from genetic, environmental and developmental influences."
            },
            {
                title: "Genetic Variation",
                description: "Differences in DNA sequences among individuals or populations."
            },
            {
                title: "Gene Regulation",
                description: "Molecular mechanisms controlling when, where and how much a gene is expressed."
            }
        ]
    },

    dnaAndRna: {
        heading: "DNA and RNA",

        dna: {
            title: "Deoxyribonucleic Acid",
            features: [
                "Stores hereditary information.",
                "Usually consists of two complementary strands.",
                "Contains the bases adenine, thymine, guanine and cytosine.",
                "Uses deoxyribose sugar.",
                "Can be replicated before cell division."
            ]
        },

        rna: {
            title: "Ribonucleic Acid",
            features: [
                "Usually consists of a single strand, although complex structures can form.",
                "Contains adenine, uracil, guanine and cytosine.",
                "Uses ribose sugar.",
                "Participates in gene expression and protein synthesis."
            ]
        },

        rnaTypes: [
            {
                name: "Messenger RNA",
                function: "Carries genetic instructions from DNA to ribosomes."
            },
            {
                name: "Transfer RNA",
                function: "Carries amino acids to ribosomes during protein synthesis."
            },
            {
                name: "Ribosomal RNA",
                function: "Forms a structural and functional component of ribosomes."
            },
            {
                name: "MicroRNA",
                function: "Participates in post-transcriptional regulation of gene expression."
            }
        ]
    },

    centralDogma: {
        heading: "Central Dogma of Molecular Biology",

        processes: [
            {
                name: "Replication",
                description: "DNA serves as a template for the synthesis of new DNA."
            },
            {
                name: "Transcription",
                description: "DNA serves as a template for RNA synthesis."
            },
            {
                name: "Translation",
                description: "Ribosomes use messenger RNA information to assemble amino acids into a polypeptide."
            }
        ],

        note: "The central dogma describes major information-flow pathways in molecular biology. Biological systems also contain additional regulatory and information-transfer mechanisms."
    },

    proteinSynthesis: {
        heading: "Protein Synthesis",

        stages: [
            {
                name: "Transcription Initiation",
                description: "RNA polymerase and associated factors assemble at a gene's regulatory region."
            },
            {
                name: "RNA Elongation",
                description: "RNA is synthesised using a DNA template."
            },
            {
                name: "RNA Processing",
                description: "In eukaryotic cells, many RNA transcripts undergo processing, including capping, splicing and polyadenylation."
            },
            {
                name: "Translation Initiation",
                description: "The ribosome assembles with messenger RNA and the initiating transfer RNA."
            },
            {
                name: "Translation Elongation",
                description: "Amino acids are added to the growing polypeptide chain."
            },
            {
                name: "Translation Termination",
                description: "A stop codon signals the release of the completed polypeptide."
            },
            {
                name: "Protein Processing",
                description: "Proteins may undergo folding, modification and transport before becoming functional."
            }
        ]
    },

    geneRegulation: {
        heading: "Gene Expression and Regulation",

        topics: [
            {
                title: "Promoters",
                description: "DNA regions involved in initiating transcription."
            },
            {
                title: "Transcription Factors",
                description: "Proteins that regulate transcription by interacting with DNA and other regulatory molecules."
            },
            {
                title: "Enhancers",
                description: "Regulatory DNA elements that can increase transcriptional activity."
            },
            {
                title: "Epigenetic Regulation",
                description: "Changes in chromatin organisation and chemical modifications that influence gene activity."
            },
            {
                title: "RNA Interference",
                description: "Mechanisms through which small RNA molecules influence gene expression."
            },
            {
                title: "Alternative Splicing",
                description: "A process allowing different RNA transcripts to be produced from the same gene."
            }
        ]
    },

    mutationsAndRepair: {
        heading: "Mutations and DNA Repair",

        mutationTypes: [
            {
                name: "Substitution",
                description: "Replacement of one nucleotide by another."
            },
            {
                name: "Insertion",
                description: "Addition of one or more nucleotides into a DNA sequence."
            },
            {
                name: "Deletion",
                description: "Removal of one or more nucleotides."
            },
            {
                name: "Frameshift",
                description: "A change in the reading frame caused by insertions or deletions not occurring in multiples of three within a coding sequence."
            },
            {
                name: "Chromosomal Rearrangement",
                description: "Structural changes involving chromosome segments."
            }
        ],

        repairMechanisms: [
            "Mismatch repair",
            "Base excision repair",
            "Nucleotide excision repair",
            "Double-strand break repair"
        ],

        note: "Mutations may be neutral, harmful or occasionally beneficial. Their effects depend on location, molecular consequences and biological context."
    },

    cancerCellBiology: {
        heading: "Cell Biology of Cancer",

        topics: [
            {
                title: "Uncontrolled Cell Proliferation",
                description: "Cancer involves abnormal regulation of cell growth and division."
            },
            {
                title: "Oncogenes",
                description: "Genes that can promote abnormal cell growth when activated in certain ways."
            },
            {
                title: "Tumour Suppressor Genes",
                description: "Genes that normally help restrict inappropriate cell growth or maintain genomic stability."
            },
            {
                title: "Apoptosis Evasion",
                description: "Some cancer cells acquire changes that allow them to avoid normal cell death mechanisms."
            },
            {
                title: "Angiogenesis",
                description: "Formation of new blood vessels, which can support tumour growth."
            },
            {
                title: "Metastasis",
                description: "Spread of cancer cells from an original tumour to other sites in the body."
            },
            {
                title: "Tumour Microenvironment",
                description: "The surrounding cells, molecules and structures that interact with tumour cells."
            }
        ]
    },

    laboratoryTechniques: {
        heading: "Molecular Biology Laboratory Techniques",

        techniques: [
            {
                name: "Polymerase Chain Reaction",
                abbreviation: "PCR",
                description: "A technique used to amplify selected DNA sequences."
            },
            {
                name: "Real-Time PCR",
                abbreviation: "qPCR",
                description: "A method that monitors DNA amplification during the reaction."
            },
            {
                name: "Gel Electrophoresis",
                abbreviation: "GE",
                description: "A method used to separate nucleic acids or proteins according to physical properties."
            },
            {
                name: "DNA Sequencing",
                abbreviation: "DNA Sequencing",
                description: "Methods used to determine the nucleotide sequence of DNA."
            },
            {
                name: "Western Blotting",
                abbreviation: "Western Blot",
                description: "A technique used to detect specific proteins in a sample."
            },
            {
                name: "ELISA",
                abbreviation: "ELISA",
                description: "An immunological assay used to detect or quantify selected antigens or antibodies."
            },
            {
                name: "Cell Culture",
                abbreviation: "Cell Culture",
                description: "Growth and maintenance of cells under controlled laboratory conditions."
            },
            {
                name: "Flow Cytometry",
                abbreviation: "Flow Cytometry",
                description: "A technique for analysing physical and molecular characteristics of cells or particles."
            },
            {
                name: "Microscopy",
                abbreviation: "Microscopy",
                description: "Methods used to observe cells, structures and biological specimens."
            },
            {
                name: "CRISPR-Based Technology",
                abbreviation: "CRISPR",
                description: "A group of technologies adapted from microbial defence systems for targeted genome editing and related research."
            }
        ],

        note: "These are introductory descriptions. Laboratory techniques require appropriate training, validated protocols, equipment and biosafety procedures."
    },

    stemCellsAndRegeneration: {
        heading: "Stem Cells and Cellular Regeneration",

        topics: [
            {
                title: "Stem Cells",
                description: "Cells capable of self-renewal and differentiation into specialised cell types."
            },
            {
                title: "Embryonic Stem Cells",
                description: "Pluripotent cells derived from early-stage embryos in appropriate research settings."
            },
            {
                title: "Adult Stem Cells",
                description: "Stem cells found in particular tissues that contribute to tissue maintenance and repair."
            },
            {
                title: "Induced Pluripotent Stem Cells",
                description: "Somatic cells reprogrammed into a pluripotent state."
            },
            {
                title: "Cell Differentiation",
                description: "The process through which cells acquire specialised structures and functions."
            },
            {
                title: "Regenerative Biology",
                description: "Study of how tissues and organisms maintain, repair or regenerate structures."
            }
        ]
    },

    biotechnology: {
        heading: "Applications of Molecular Biology",

        applications: [
            {
                title: "Molecular Diagnostics",
                description: "Detection of genetic material and molecular markers associated with selected conditions."
            },
            {
                title: "Genetic Testing",
                description: "Analysis of genetic variants for selected medical and research purposes."
            },
            {
                title: "Recombinant DNA Technology",
                description: "Combining DNA sequences from different sources for research and biotechnology applications."
            },
            {
                title: "Biopharmaceutical Production",
                description: "Use of biological systems to produce certain therapeutic proteins and other medical products."
            },
            {
                title: "Gene Therapy Research",
                description: "Research approaches that seek to treat or prevent disease by modifying genetic material or gene expression."
            },
            {
                title: "Personalised Medicine",
                description: "Use of individual biological information, including genetic information, to help guide selected healthcare decisions."
            },
            {
                title: "Infectious Disease Research",
                description: "Molecular techniques help identify and study infectious agents."
            }
        ]
    },

    visualLearning: {
        heading: "Cell and Molecular Biology Visual Learning Centre",

        resources: [
            {
                title: "Typical Human Cell",
                description: "Illustration of major cellular structures and organelles.",
                plannedAsset: "human-cell-structure"
            },
            {
                title: "Cell Membrane",
                description: "Fluid mosaic model of the plasma membrane.",
                plannedAsset: "cell-membrane"
            },
            {
                title: "Cell Transport",
                description: "Comparison of passive and active transport.",
                plannedAsset: "cell-transport"
            },
            {
                title: "Mitochondrion",
                description: "Structure of a mitochondrion.",
                plannedAsset: "mitochondrion"
            },
            {
                title: "Cell Cycle",
                description: "Diagram of cell-cycle phases and checkpoints.",
                plannedAsset: "cell-cycle"
            },
            {
                title: "Mitosis",
                description: "Stages of mitotic cell division.",
                plannedAsset: "mitosis"
            },
            {
                title: "Meiosis",
                description: "Overview of meiosis I and meiosis II.",
                plannedAsset: "meiosis"
            },
            {
                title: "DNA Double Helix",
                description: "Structure of DNA and complementary base pairing.",
                plannedAsset: "dna-double-helix"
            },
            {
                title: "DNA Replication",
                description: "Overview of DNA replication.",
                plannedAsset: "dna-replication"
            },
            {
                title: "Central Dogma",
                description: "DNA replication, transcription and translation.",
                plannedAsset: "central-dogma"
            },
            {
                title: "Protein Synthesis",
                description: "Transcription and translation overview.",
                plannedAsset: "protein-synthesis"
            },
            {
                title: "PCR",
                description: "Conceptual illustration of polymerase chain reaction.",
                plannedAsset: "pcr"
            }
        ]
    },

    learningObjectives: [
        "Explain the principles of cell theory.",
        "Differentiate prokaryotic and eukaryotic cells.",
        "Identify major cellular structures and organelles.",
        "Explain the structure and functions of the plasma membrane.",
        "Understand membrane transport mechanisms.",
        "Describe cytoskeletal components.",
        "Explain basic cell-signalling mechanisms.",
        "Understand the stages of the cell cycle.",
        "Differentiate mitosis and meiosis.",
        "Understand apoptosis and cellular senescence.",
        "Explain the structure and functions of DNA and RNA.",
        "Understand replication, transcription and translation.",
        "Describe basic gene regulation mechanisms.",
        "Recognise different types of genetic mutations.",
        "Understand introductory cancer cell biology.",
        "Identify common molecular biology laboratory techniques.",
        "Understand stem cells and their research applications."
    ],

    faqs: [
        {
            question: "What is a cell?",
            answer: "A cell is the basic structural and functional unit of living organisms."
        },
        {
            question: "What is the difference between prokaryotic and eukaryotic cells?",
            answer: "Prokaryotic cells lack a membrane-bound nucleus, whereas eukaryotic cells contain a membrane-bound nucleus and specialised organelles."
        },
        {
            question: "What is the function of mitochondria?",
            answer: "Mitochondria carry out several metabolic processes, including oxidative phosphorylation and ATP production."
        },
        {
            question: "What is the function of ribosomes?",
            answer: "Ribosomes synthesise proteins using messenger RNA information."
        },
        {
            question: "What is mitosis?",
            answer: "Mitosis is a type of nuclear division that generally produces two genetically similar daughter nuclei."
        },
        {
            question: "What is meiosis?",
            answer: "Meiosis is a specialised division process that reduces chromosome number and contributes to genetic variation."
        },
        {
            question: "What is DNA?",
            answer: "DNA is the molecule that stores hereditary information in most living organisms."
        },
        {
            question: "What is RNA?",
            answer: "RNA is a nucleic acid involved in gene expression, protein synthesis and other cellular processes."
        },
        {
            question: "What is the central dogma?",
            answer: "It describes major information-flow processes involving DNA, RNA and protein."
        },
        {
            question: "What is apoptosis?",
            answer: "Apoptosis is a regulated form of cell death involved in development and tissue maintenance."
        },
        {
            question: "What is PCR?",
            answer: "Polymerase chain reaction is a laboratory technique used to amplify selected DNA sequences."
        },
        {
            question: "What are stem cells?",
            answer: "Stem cells can self-renew and differentiate into specialised cell types under appropriate conditions."
        }
    ],

    quiz: [
        {
            question: "What is the basic structural and functional unit of life?",
            options: [
                "Tissue",
                "Organ",
                "Cell",
                "Organ system"
            ],
            answer: 2,
            explanation: "The cell is the basic structural and functional unit of living organisms."
        },
        {
            question: "Which organelle is associated with ATP production through oxidative phosphorylation?",
            options: [
                "Golgi apparatus",
                "Mitochondrion",
                "Lysosome",
                "Ribosome"
            ],
            answer: 1,
            explanation: "The inner mitochondrial membrane contains the electron transport chain and ATP synthase."
        },
        {
            question: "Which organelle is responsible for protein synthesis?",
            options: [
                "Ribosome",
                "Lysosome",
                "Peroxisome",
                "Centrosome"
            ],
            answer: 0,
            explanation: "Ribosomes translate messenger RNA into polypeptide chains."
        },
        {
            question: "During which cell-cycle phase is DNA replicated?",
            options: [
                "G1 phase",
                "S phase",
                "G2 phase",
                "M phase"
            ],
            answer: 1,
            explanation: "DNA replication takes place during the synthesis or S phase."
        },
        {
            question: "Which process produces RNA from a DNA template?",
            options: [
                "Translation",
                "Replication",
                "Transcription",
                "Cytokinesis"
            ],
            answer: 2,
            explanation: "Transcription uses DNA as a template to synthesise RNA."
        },
        {
            question: "Which RNA carries genetic instructions to ribosomes?",
            options: [
                "tRNA",
                "mRNA",
                "rRNA",
                "microRNA"
            ],
            answer: 1,
            explanation: "Messenger RNA carries coding information used during protein synthesis."
        },
        {
            question: "Which process produces two genetically similar daughter nuclei in typical somatic cell division?",
            options: [
                "Meiosis",
                "Mitosis",
                "Fertilisation",
                "Transcription"
            ],
            answer: 1,
            explanation: "Mitosis generally produces two genetically similar daughter nuclei."
        },
        {
            question: "What is apoptosis?",
            options: [
                "Protein synthesis",
                "DNA replication",
                "Regulated cell death",
                "Cellular respiration"
            ],
            answer: 2,
            explanation: "Apoptosis is a regulated process of cell death."
        },
        {
            question: "What does PCR stand for?",
            options: [
                "Protein Cell Reaction",
                "Polymerase Chain Reaction",
                "Primary Cellular Replication",
                "Protein Chain Regulation"
            ],
            answer: 1,
            explanation: "PCR stands for polymerase chain reaction."
        },
        {
            question: "Which DNA bases pair in the usual double-stranded DNA structure?",
            options: [
                "Adenine with guanine",
                "Cytosine with thymine",
                "Adenine with thymine",
                "Guanine with adenine"
            ],
            answer: 2,
            explanation: "In standard DNA base pairing, adenine pairs with thymine and guanine pairs with cytosine."
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
            name: "National Human Genome Research Institute",
            url: "https://www.genome.gov/"
        },
        {
            name: "National Institute of General Medical Sciences",
            url: "https://www.nigms.nih.gov/"
        },
        {
            name: "MedlinePlus Genetics",
            url: "https://medlineplus.gov/genetics/"
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

    const content = CELL_BIOLOGY_MOLECULAR_BIOLOGY_CONTENT;

    const requiredFields = [
        "introduction",
        "overview",
        "cellTheory",
        "cellClassification",
        "cellStructure",
        "cellMembrane",
        "cytoskeleton",
        "cellCommunication",
        "cellCycle",
        "cellDivision",
        "cellDeath",
        "genetics",
        "dnaAndRna",
        "centralDogma",
        "proteinSynthesis",
        "geneRegulation",
        "mutationsAndRepair",
        "cancerCellBiology",
        "laboratoryTechniques",
        "stemCellsAndRegeneration",
        "biotechnology",
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
            "Cell Biology and Molecular Biology content validation failed:",
            missingFields
        );

    } else {

        console.log(
            "Cell Biology and Molecular Biology educational dataset loaded."
        );

    }

})();
