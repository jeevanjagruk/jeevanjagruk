/* =========================================================
   JEEVAN JAGRUK
   DIVISION 06 — MEDICAL GENETICS AND GENOMICS
   Educational content dataset
   ========================================================= */

"use strict";

const MEDICAL_GENETICS_GENOMICS_CONTENT = {

    divisionId: "medical-genetics-genomics",
    divisionNumber: 6,
    title: "Medical Genetics and Genomics",
    subtitle: "Understand heredity, genetic variation and the role of genes in human health.",

    introduction: {
        heading: "Introduction to Medical Genetics and Genomics",
        paragraphs: [
            "Medical genetics is the branch of medicine that studies the role of genes and heredity in human health, disease and biological variation.",
            "Genomics examines the structure, function, organisation and interactions of the complete genetic material of an organism.",
            "These disciplines help explain inherited conditions, genetic susceptibility, chromosomal abnormalities, molecular diagnosis and emerging approaches to personalised healthcare.",
            "Genetic information must be interpreted carefully because many health conditions involve interactions between multiple genes, environmental factors and lifestyle."
        ]
    },

    overview: {
        heading: "Understanding Medical Genetics",

        sections: [
            {
                title: "What Is Genetics?",
                content: "Genetics studies genes, heredity and variation among living organisms."
            },
            {
                title: "What Is Medical Genetics?",
                content: "Medical genetics applies genetic knowledge to understanding, evaluating and managing inherited and genetic conditions."
            },
            {
                title: "What Is Genomics?",
                content: "Genomics studies the complete genome, including interactions among genes and their relationship with biological processes."
            },
            {
                title: "Why Is It Important?",
                content: "Genetic knowledge supports research, selected diagnostic investigations, risk assessment and the development of personalised healthcare approaches."
            }
        ]
    },

    foundations: {
        heading: "Fundamentals of Genetics",

        topics: [
            {
                title: "Heredity",
                description: "The transmission of biological characteristics from parents to offspring through genetic material."
            },
            {
                title: "Variation",
                description: "Differences in genetic and observable characteristics among individuals."
            },
            {
                title: "Gene",
                description: "A region of DNA that contributes to producing a functional RNA or protein product."
            },
            {
                title: "Allele",
                description: "An alternative form of a genetic sequence at a particular genomic location."
            },
            {
                title: "Locus",
                description: "The specific physical location of a gene or genetic marker on a chromosome."
            },
            {
                title: "Genotype",
                description: "The genetic constitution of an individual at one or more specified loci."
            },
            {
                title: "Phenotype",
                description: "Observable characteristics resulting from genetic, environmental and developmental influences."
            },
            {
                title: "Homozygous",
                description: "Having two identical alleles at a particular genetic locus."
            },
            {
                title: "Heterozygous",
                description: "Having two different alleles at a particular genetic locus."
            },
            {
                title: "Dominance",
                description: "A relationship in which one allele influences a phenotype in a heterozygous individual."
            },
            {
                title: "Recessiveness",
                description: "A pattern in which a particular phenotype generally requires two relevant recessive alleles in a simple Mendelian model."
            }
        ]
    },

    dnaAndChromosomes: {
        heading: "DNA, Genes and Chromosomes",

        topics: [
            {
                title: "DNA Structure",
                description: "DNA is a double-stranded molecule composed of nucleotide units."
            },
            {
                title: "Nucleotides",
                description: "The building blocks of nucleic acids, each containing a sugar, phosphate group and nitrogenous base."
            },
            {
                title: "DNA Base Pairing",
                description: "In standard double-stranded DNA, adenine pairs with thymine and guanine pairs with cytosine."
            },
            {
                title: "Chromatin",
                description: "A complex of DNA and associated proteins that organises genetic material."
            },
            {
                title: "Chromosomes",
                description: "Organised DNA-protein structures that carry genetic information."
            },
            {
                title: "Autosomes",
                description: "Chromosomes other than the sex chromosomes."
            },
            {
                title: "Sex Chromosomes",
                description: "Chromosomes involved in sex determination and other biological functions."
            },
            {
                title: "Human Karyotype",
                description: "A representation of the chromosome complement of an individual."
            },
            {
                title: "Mitochondrial DNA",
                description: "Genetic material found in mitochondria and generally inherited through the maternal line in humans."
            }
        ],

        humanChromosomeOverview: {
            typicalSomaticCellCount: 46,
            chromosomePairs: 23,
            autosomePairs: 22,
            sexChromosomePairs: 1,
            note: "This describes the typical human somatic chromosome complement. Chromosome number and structure can vary in certain biological and medical conditions."
        }
    },

    mendelianGenetics: {
        heading: "Mendelian Genetics",

        principles: [
            {
                name: "Law of Segregation",
                description: "The two alleles of a gene separate during gamete formation so that each gamete generally receives one allele."
            },
            {
                name: "Independent Assortment",
                description: "Alleles of different genes can assort independently during gamete formation when their inheritance is not linked."
            },
            {
                name: "Dominance",
                description: "Describes how different alleles contribute to the phenotype in a heterozygous individual."
            }
        ],

        concepts: [
            {
                title: "Monohybrid Cross",
                description: "A genetic cross involving one particular gene."
            },
            {
                title: "Dihybrid Cross",
                description: "A genetic cross involving two genes."
            },
            {
                title: "Punnett Square",
                description: "A diagram used to illustrate possible allele combinations in offspring."
            },
            {
                title: "Carrier",
                description: "An individual who carries a genetic variant associated with a condition without necessarily showing the condition."
            },
            {
                title: "Pedigree Analysis",
                description: "A diagrammatic method for studying the inheritance of traits across generations."
            }
        ]
    },

    inheritancePatterns: {
        heading: "Patterns of Genetic Inheritance",

        patterns: [
            {
                name: "Autosomal Dominant",
                description: "A condition associated with a pathogenic variant in one copy of a gene on an autosome can show this inheritance pattern.",
                example: "Huntington disease."
            },
            {
                name: "Autosomal Recessive",
                description: "A condition generally develops when pathogenic variants affect both copies of a relevant autosomal gene.",
                example: "Cystic fibrosis."
            },
            {
                name: "X-Linked Recessive",
                description: "A pattern associated with pathogenic variants in genes on the X chromosome, often affecting males more frequently.",
                example: "Haemophilia A."
            },
            {
                name: "X-Linked Dominant",
                description: "A pattern in which a pathogenic variant on the X chromosome can produce a condition with one affected copy.",
                example: "Rett syndrome is commonly associated with pathogenic MECP2 variants, although its inheritance and clinical presentation are complex."
            },
            {
                name: "Y-Linked",
                description: "Inheritance involving genetic material located on the Y chromosome."
            },
            {
                name: "Mitochondrial Inheritance",
                description: "Inheritance involving mitochondrial DNA, which is generally transmitted maternally."
            },
            {
                name: "Multifactorial Inheritance",
                description: "Conditions influenced by multiple genetic and environmental factors.",
                example: "Many cases of type 2 diabetes and hypertension involve multifactorial influences."
            }
        ],

        note: "Real-world inheritance can be more complex than simplified textbook patterns. Variable expressivity, reduced penetrance, new variants and other mechanisms may influence family patterns."
    },

    geneticVariation: {
        heading: "Genetic Variation",

        types: [
            {
                name: "Single Nucleotide Variant",
                abbreviation: "SNV",
                description: "A difference involving one nucleotide at a specific genomic position."
            },
            {
                name: "Insertion",
                description: "Addition of one or more nucleotides into a DNA sequence."
            },
            {
                name: "Deletion",
                description: "Removal of one or more nucleotides from a DNA sequence."
            },
            {
                name: "Copy Number Variation",
                abbreviation: "CNV",
                description: "Differences in the number of copies of particular DNA segments."
            },
            {
                name: "Structural Variation",
                description: "Larger genomic changes such as inversions, duplications and translocations."
            },
            {
                name: "Repeat Expansion",
                description: "An increase in the number of repeated DNA sequences."
            },
            {
                name: "Polymorphism",
                description: "A genetic variation commonly observed within a population."
            }
        ],

        effects: [
            "Some variants have no known health effect.",
            "Some variants influence normal biological diversity.",
            "Some variants increase susceptibility to particular conditions.",
            "Some variants are associated with inherited disorders.",
            "The effect of a variant may depend on other genes and environmental influences."
        ]
    },

    chromosomalDisorders: {
        heading: "Chromosomal Abnormalities and Disorders",

        categories: [
            {
                title: "Numerical Abnormalities",
                description: "Changes in chromosome number.",
                examples: [
                    {
                        name: "Down Syndrome",
                        description: "Usually associated with an additional copy of chromosome 21."
                    },
                    {
                        name: "Edwards Syndrome",
                        description: "Associated with an additional copy of chromosome 18."
                    },
                    {
                        name: "Patau Syndrome",
                        description: "Associated with an additional copy of chromosome 13."
                    },
                    {
                        name: "Turner Syndrome",
                        description: "Often associated with complete or partial absence of one X chromosome."
                    },
                    {
                        name: "Klinefelter Syndrome",
                        description: "Commonly associated with an additional X chromosome in individuals with a 47,XXY karyotype."
                    }
                ]
            },
            {
                title: "Structural Abnormalities",
                description: "Changes in chromosome structure.",
                examples: [
                    "Deletion",
                    "Duplication",
                    "Inversion",
                    "Translocation",
                    "Ring chromosome"
                ]
            }
        ],

        note: "Chromosomal conditions have varied clinical presentations. Examples are included for education and should not be used for self-diagnosis."
    },

    inheritedDisorders: {
        heading: "Introduction to Inherited Genetic Disorders",

        conditions: [
            {
                name: "Sickle Cell Disease",
                description: "An inherited blood disorder associated with pathogenic variants in the HBB gene."
            },
            {
                name: "Thalassaemia",
                description: "A group of inherited conditions affecting haemoglobin production."
            },
            {
                name: "Cystic Fibrosis",
                description: "An inherited condition associated with variants in the CFTR gene."
            },
            {
                name: "Haemophilia",
                description: "A group of inherited bleeding disorders involving deficiencies or dysfunction of clotting factors."
            },
            {
                name: "Duchenne Muscular Dystrophy",
                description: "An inherited muscle disorder associated with pathogenic variants in the DMD gene."
            },
            {
                name: "Phenylketonuria",
                description: "An inherited metabolic disorder commonly associated with impaired phenylalanine hydroxylase activity."
            },
            {
                name: "Huntington Disease",
                description: "An inherited neurological condition associated with a CAG repeat expansion in the HTT gene."
            },
            {
                name: "Spinal Muscular Atrophy",
                description: "A genetic neuromuscular condition commonly associated with pathogenic changes affecting the SMN1 gene."
            },
            {
                name: "Fragile X Syndrome",
                description: "A genetic condition commonly associated with CGG repeat expansion and altered expression of the FMR1 gene."
            },
            {
                name: "Albinism",
                description: "A group of genetic conditions affecting melanin production or distribution."
            }
        ]
    },

    multifactorialGenetics: {
        heading: "Multifactorial and Complex Genetics",

        topics: [
            {
                title: "Polygenic Inheritance",
                description: "A characteristic influenced by variants in many genes."
            },
            {
                title: "Environmental Influences",
                description: "External factors such as nutrition, physical activity and environmental exposures can interact with genetic susceptibility."
            },
            {
                title: "Genetic Susceptibility",
                description: "Inherited genetic variation can influence the likelihood of developing certain conditions without making their development inevitable."
            },
            {
                title: "Gene-Environment Interaction",
                description: "The effect of genetic variation may differ according to environmental conditions."
            },
            {
                title: "Risk Prediction",
                description: "Genetic and non-genetic information may be combined in selected models to estimate disease risk."
            }
        ]
    },

    populationGenetics: {
        heading: "Population Genetics",

        topics: [
            {
                title: "Allele Frequency",
                description: "The proportion of a particular allele among all copies of a gene in a population."
            },
            {
                title: "Genetic Drift",
                description: "Random changes in allele frequencies across generations."
            },
            {
                title: "Natural Selection",
                description: "Differences in reproductive success that influence genetic variation over generations."
            },
            {
                title: "Gene Flow",
                description: "Movement of genetic variants between populations."
            },
            {
                title: "Founder Effect",
                description: "A change in genetic variation when a population is established by a small number of individuals."
            },
            {
                title: "Hardy-Weinberg Principle",
                description: "A mathematical model describing allele and genotype frequencies under specified assumptions."
            },
            {
                title: "Genetic Diversity",
                description: "Variation in genetic material within and between populations."
            }
        ]
    },

    epigenetics: {
        heading: "Epigenetics",

        topics: [
            {
                title: "DNA Methylation",
                description: "A chemical modification of DNA that can influence gene activity."
            },
            {
                title: "Histone Modification",
                description: "Chemical changes to histone proteins that influence chromatin organisation and gene regulation."
            },
            {
                title: "Chromatin Remodelling",
                description: "Changes in chromatin structure that affect access to genetic information."
            },
            {
                title: "Non-Coding RNA",
                description: "RNA molecules that perform regulatory and structural functions without encoding proteins."
            },
            {
                title: "Environmental Influences",
                description: "Environmental factors can influence epigenetic patterns and gene expression."
            },
            {
                title: "Epigenetic Research",
                description: "Research into how gene activity changes over time and across biological contexts."
            }
        ]
    },

    genomics: {
        heading: "Human Genomics",

        topics: [
            {
                title: "Human Genome",
                description: "The complete set of genetic material in a human cell."
            },
            {
                title: "Genome Organisation",
                description: "The arrangement of genes, regulatory regions and other DNA sequences."
            },
            {
                title: "Whole Genome Sequencing",
                description: "A method used to determine a large proportion of an individual's genomic DNA sequence."
            },
            {
                title: "Whole Exome Sequencing",
                description: "A sequencing approach focused mainly on protein-coding regions of the genome."
            },
            {
                title: "Functional Genomics",
                description: "Study of gene and genome functions and their interactions."
            },
            {
                title: "Comparative Genomics",
                description: "Comparison of genome sequences and structures across organisms or populations."
            },
            {
                title: "Pharmacogenomics",
                description: "Study of how genetic variation influences responses to medicines."
            },
            {
                title: "Transcriptomics",
                description: "Study of RNA transcripts produced in cells or tissues under particular conditions."
            },
            {
                title: "Proteomics",
                description: "Large-scale study of proteins and their functions."
            },
            {
                title: "Bioinformatics",
                description: "Use of computational methods to analyse and interpret biological data."
            }
        ]
    },

    geneticTesting: {
        heading: "Genetic Testing and Diagnosis",

        categories: [
            {
                name: "Diagnostic Testing",
                description: "Testing performed to investigate a suspected genetic condition in an individual."
            },
            {
                name: "Carrier Screening",
                description: "Testing to identify individuals carrying particular genetic variants associated with inherited conditions."
            },
            {
                name: "Predictive Testing",
                description: "Testing that may provide information about the likelihood of developing certain genetic conditions in the future."
            },
            {
                name: "Prenatal Genetic Testing",
                description: "Testing during pregnancy to assess selected genetic or chromosomal conditions."
            },
            {
                name: "Newborn Screening",
                description: "Screening programmes designed to identify selected conditions early in life."
            },
            {
                name: "Pharmacogenetic Testing",
                description: "Testing for genetic variants that may influence medication response."
            },
            {
                name: "Preimplantation Genetic Testing",
                description: "Testing of embryos in specific assisted reproduction contexts."
            }
        ],

        methods: [
            "Karyotyping",
            "Fluorescence in situ hybridisation",
            "Chromosomal microarray",
            "Polymerase chain reaction",
            "Targeted gene sequencing",
            "Next-generation sequencing",
            "Whole exome sequencing",
            "Whole genome sequencing"
        ],

        note: "Genetic testing requires appropriate consent, clinical interpretation and counselling. A test result may have limitations and does not always predict whether or when a condition will develop."
    },

    geneticCounselling: {
        heading: "Genetic Counselling and Ethical Considerations",

        topics: [
            {
                title: "Pre-Test Counselling",
                description: "Discussion of the purpose, possible outcomes, limitations and implications of genetic testing."
            },
            {
                title: "Post-Test Counselling",
                description: "Explanation of test results and their possible significance."
            },
            {
                title: "Informed Consent",
                description: "Voluntary agreement after receiving relevant information."
            },
            {
                title: "Privacy and Confidentiality",
                description: "Responsible protection and handling of genetic information."
            },
            {
                title: "Family Implications",
                description: "Genetic findings may have relevance for biological relatives."
            },
            {
                title: "Psychological Impact",
                description: "Genetic information may influence emotional wellbeing and family decisions."
            },
            {
                title: "Equity and Accessibility",
                description: "Access to genetic services and testing should be considered fairly."
            },
            {
                title: "Genetic Discrimination",
                description: "Concerns about unfair treatment based on genetic information."
            }
        ]
    },

    personalisedMedicine: {
        heading: "Genomics and Personalised Medicine",

        topics: [
            {
                title: "Precision Medicine",
                description: "An approach that considers individual differences, including genetic, environmental and lifestyle factors."
            },
            {
                title: "Pharmacogenomics",
                description: "Genetic information may help explain why individuals respond differently to certain medicines."
            },
            {
                title: "Cancer Genomics",
                description: "Molecular analysis of tumours can help identify biological features relevant to selected treatment decisions."
            },
            {
                title: "Rare Disease Genomics",
                description: "Genomic methods can help investigate some rare inherited conditions."
            },
            {
                title: "Genomic Research",
                description: "Large-scale genomic studies help identify genetic associations and biological mechanisms."
            }
        ]
    },

    indianGeneticsContext: {
        heading: "Medical Genetics in India",

        topics: [
            {
                title: "Thalassaemia Awareness",
                description: "Thalassaemia is an important inherited blood disorder and a subject of public health awareness."
            },
            {
                title: "Sickle Cell Disease Awareness",
                description: "Sickle cell disease is an inherited condition with particular public health relevance in several Indian communities."
            },
            {
                title: "Newborn Screening",
                description: "Early identification programmes may help detect selected inherited and metabolic conditions."
            },
            {
                title: "Genetic Services",
                description: "Genetic testing, counselling and specialist services are relevant to the evaluation of inherited conditions."
            },
            {
                title: "Genomic Research",
                description: "Indian research initiatives contribute to understanding genetic diversity and population health."
            }
        ],

        references: [
            {
                name: "Indian Council of Medical Research",
                url: "https://www.icmr.gov.in/"
            },
            {
                name: "Department of Biotechnology",
                url: "https://dbtindia.gov.in/"
            },
            {
                name: "National Health Mission",
                url: "https://nhm.gov.in/"
            }
        ]
    },

    visualLearning: {
        heading: "Medical Genetics Visual Learning Centre",

        resources: [
            {
                title: "DNA Double Helix",
                description: "Structure of DNA and complementary base pairing.",
                plannedAsset: "dna-double-helix"
            },
            {
                title: "Human Chromosomes",
                description: "Overview of the human chromosome complement.",
                plannedAsset: "human-chromosomes"
            },
            {
                title: "Gene Structure",
                description: "Illustration of genes and important genomic regions.",
                plannedAsset: "gene-structure"
            },
            {
                title: "Mendelian Inheritance",
                description: "Basic inheritance patterns using Punnett squares.",
                plannedAsset: "mendelian-inheritance"
            },
            {
                title: "Pedigree Analysis",
                description: "Family inheritance diagrams.",
                plannedAsset: "pedigree-analysis"
            },
            {
                title: "Chromosomal Disorders",
                description: "Educational chromosome illustrations.",
                plannedAsset: "chromosomal-disorders"
            },
            {
                title: "DNA Replication",
                description: "Overview of DNA replication.",
                plannedAsset: "dna-replication"
            },
            {
                title: "Central Dogma",
                description: "DNA, RNA and protein information flow.",
                plannedAsset: "central-dogma"
            },
            {
                title: "Genetic Testing Methods",
                description: "Comparison of common genetic testing methods.",
                plannedAsset: "genetic-testing-methods"
            },
            {
                title: "Genome Sequencing",
                description: "Conceptual explanation of genomic sequencing.",
                plannedAsset: "genome-sequencing"
            }
        ]
    },

    learningObjectives: [
        "Define genetics and genomics.",
        "Understand heredity and genetic variation.",
        "Explain the structure of DNA and chromosomes.",
        "Understand genes, alleles, genotypes and phenotypes.",
        "Describe basic Mendelian inheritance.",
        "Recognise major patterns of genetic inheritance.",
        "Understand common genetic variations.",
        "Identify examples of chromosomal abnormalities.",
        "Recognise selected inherited disorders.",
        "Understand multifactorial inheritance.",
        "Explain basic population genetics concepts.",
        "Understand introductory epigenetics.",
        "Describe major fields of human genomics.",
        "Recognise different genetic testing approaches.",
        "Understand the importance of genetic counselling and informed consent.",
        "Explore the role of genomics in personalised medicine."
    ],

    faqs: [
        {
            question: "What is medical genetics?",
            answer: "Medical genetics studies the role of heredity and genetic variation in human health and disease."
        },
        {
            question: "What is the difference between genetics and genomics?",
            answer: "Genetics often focuses on individual genes and heredity, whereas genomics examines the entire genome and interactions among its components."
        },
        {
            question: "How many chromosomes are usually present in a human somatic cell?",
            answer: "A typical human somatic cell contains 46 chromosomes arranged in 23 pairs."
        },
        {
            question: "What is a gene?",
            answer: "A gene is a region of genetic material that contributes to producing a functional RNA or protein product."
        },
        {
            question: "What is a genetic mutation?",
            answer: "A mutation is a change in genetic material. Its effects can vary depending on the location and nature of the change."
        },
        {
            question: "What is an inherited disorder?",
            answer: "An inherited disorder is a condition associated with genetic changes transmitted through biological inheritance."
        },
        {
            question: "What is genetic counselling?",
            answer: "Genetic counselling helps individuals and families understand genetic information, testing options and possible implications."
        },
        {
            question: "What is whole genome sequencing?",
            answer: "It is a method used to determine a large proportion of an individual's genomic DNA sequence."
        },
        {
            question: "What is pharmacogenomics?",
            answer: "Pharmacogenomics studies how genetic variation can influence responses to medicines."
        },
        {
            question: "Does having a genetic risk mean a person will definitely develop a disease?",
            answer: "No. Genetic risk does not always mean a condition will develop. Environmental factors, other genes and individual circumstances may also influence risk."
        },
        {
            question: "What is a carrier?",
            answer: "A carrier has a genetic variant associated with an inherited condition but may not show the condition themselves."
        },
        {
            question: "Why is genetic privacy important?",
            answer: "Genetic information can reveal sensitive details about individuals and biological relatives, so it requires responsible protection."
        }
    ],

    quiz: [
        {
            question: "What is the complete genetic material of an organism called?",
            options: [
                "Proteome",
                "Genome",
                "Transcript",
                "Phenotype"
            ],
            answer: 1,
            explanation: "The genome represents the complete genetic material of an organism."
        },
        {
            question: "How many chromosome pairs are typically present in human somatic cells?",
            options: [
                "22",
                "23",
                "44",
                "46"
            ],
            answer: 1,
            explanation: "Typical human somatic cells contain 23 chromosome pairs."
        },
        {
            question: "Which condition is usually associated with an additional chromosome 21?",
            options: [
                "Turner syndrome",
                "Down syndrome",
                "Klinefelter syndrome",
                "Patau syndrome"
            ],
            answer: 1,
            explanation: "Down syndrome is usually associated with trisomy 21."
        },
        {
            question: "What does genotype describe?",
            options: [
                "Observable characteristics only",
                "Genetic constitution",
                "Environmental exposure",
                "Physical fitness"
            ],
            answer: 1,
            explanation: "Genotype refers to the genetic constitution of an individual at specified loci."
        },
        {
            question: "Which inheritance pattern is commonly associated with cystic fibrosis?",
            options: [
                "Autosomal dominant",
                "Autosomal recessive",
                "Y-linked",
                "Mitochondrial"
            ],
            answer: 1,
            explanation: "Cystic fibrosis is typically inherited in an autosomal recessive manner."
        },
        {
            question: "Which technique is commonly used to amplify selected DNA sequences?",
            options: [
                "PCR",
                "ECG",
                "Ultrasound",
                "Spirometry"
            ],
            answer: 0,
            explanation: "Polymerase chain reaction amplifies selected DNA sequences."
        },
        {
            question: "What is the study of how genetic variation influences medication response?",
            options: [
                "Histology",
                "Pharmacogenomics",
                "Anatomy",
                "Epidemiology"
            ],
            answer: 1,
            explanation: "Pharmacogenomics investigates the influence of genetic variation on medication response."
        },
        {
            question: "Which chromosome-related condition is commonly associated with a 47,XXY karyotype?",
            options: [
                "Turner syndrome",
                "Klinefelter syndrome",
                "Down syndrome",
                "Patau syndrome"
            ],
            answer: 1,
            explanation: "A 47,XXY karyotype is commonly associated with Klinefelter syndrome."
        },
        {
            question: "What does epigenetics study?",
            options: [
                "Only chromosome numbers",
                "Changes in gene activity without changes in DNA sequence",
                "Only protein digestion",
                "Only blood circulation"
            ],
            answer: 1,
            explanation: "Epigenetics examines mechanisms that influence gene activity without changing the underlying DNA sequence."
        },
        {
            question: "What is the primary purpose of genetic counselling?",
            options: [
                "To guarantee disease prevention",
                "To explain genetic information and its implications",
                "To replace all medical examinations",
                "To alter every inherited trait"
            ],
            answer: 1,
            explanation: "Genetic counselling helps individuals and families understand genetic risks, testing and possible implications."
        }
    ],

    references: [
        {
            name: "National Human Genome Research Institute",
            url: "https://www.genome.gov/"
        },
        {
            name: "MedlinePlus Genetics",
            url: "https://medlineplus.gov/genetics/"
        },
        {
            name: "NCBI Bookshelf",
            url: "https://www.ncbi.nlm.nih.gov/books/"
        },
        {
            name: "Online Mendelian Inheritance in Man",
            url: "https://www.omim.org/"
        },
        {
            name: "Indian Council of Medical Research",
            url: "https://www.icmr.gov.in/"
        },
        {
            name: "Department of Biotechnology, India",
            url: "https://dbtindia.gov.in/"
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

    const content = MEDICAL_GENETICS_GENOMICS_CONTENT;

    const requiredFields = [
        "introduction",
        "overview",
        "foundations",
        "dnaAndChromosomes",
        "mendelianGenetics",
        "inheritancePatterns",
        "geneticVariation",
        "chromosomalDisorders",
        "inheritedDisorders",
        "multifactorialGenetics",
        "populationGenetics",
        "epigenetics",
        "genomics",
        "geneticTesting",
        "geneticCounselling",
        "personalisedMedicine",
        "indianGeneticsContext",
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
            "Medical Genetics and Genomics content validation failed:",
            missingFields
        );

    } else {

        console.log(
            "Medical Genetics and Genomics educational dataset loaded."
        );

    }

})();
