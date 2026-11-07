/* =========================================================
   JEEVAN JAGRUK
   DIVISION 07 — MEDICAL MICROBIOLOGY
   Educational content dataset
   ========================================================= */

"use strict";

const MEDICAL_MICROBIOLOGY_CONTENT = {

    divisionId: "medical-microbiology",
    divisionNumber: 7,
    title: "Medical Microbiology",
    subtitle: "Explore microorganisms, infectious diseases and the science of infection prevention.",

    introduction: {
        heading: "Introduction to Medical Microbiology",
        paragraphs: [
            "Medical microbiology is the branch of biomedical science that studies microorganisms associated with human health and disease.",
            "It includes the study of bacteria, viruses, fungi, parasites and other infectious agents.",
            "Medical microbiology helps explain how infections develop, spread and affect the human body.",
            "It also supports laboratory diagnosis, infection prevention, antimicrobial stewardship, vaccination programmes and public health surveillance."
        ]
    },

    overview: {
        heading: "Understanding Medical Microbiology",

        sections: [
            {
                title: "What Is Microbiology?",
                content: "Microbiology is the scientific study of microorganisms and their interactions with living organisms and the environment."
            },
            {
                title: "What Is Medical Microbiology?",
                content: "Medical microbiology focuses on microorganisms that cause or influence human diseases and health."
            },
            {
                title: "Why Is It Important?",
                content: "It contributes to the identification, prevention and control of infectious diseases."
            },
            {
                title: "Connection with Public Health",
                content: "Microbiology supports outbreak investigation, disease surveillance, vaccination and community infection prevention."
            }
        ]
    },

    branches: {
        heading: "Major Branches of Medical Microbiology",

        fields: [
            {
                name: "Bacteriology",
                description: "Study of bacteria and their relationship with human health and disease."
            },
            {
                name: "Virology",
                description: "Study of viruses and viral infections."
            },
            {
                name: "Mycology",
                description: "Study of fungi, including medically important fungal organisms."
            },
            {
                name: "Parasitology",
                description: "Study of parasites and parasitic diseases."
            },
            {
                name: "Immunomicrobiology",
                description: "Study of interactions between microorganisms and the immune system."
            },
            {
                name: "Clinical Microbiology",
                description: "Application of microbiological methods to clinical specimens and infectious disease diagnosis."
            },
            {
                name: "Environmental Microbiology",
                description: "Study of microorganisms in environmental settings and their relevance to health."
            },
            {
                name: "Food and Water Microbiology",
                description: "Study of microorganisms associated with food safety, water quality and foodborne disease."
            }
        ]
    },

    microorganismClassification: {
        heading: "Classification of Microorganisms",

        groups: [
            {
                name: "Bacteria",
                description: "Single-celled prokaryotic microorganisms with diverse shapes, structures and metabolic characteristics."
            },
            {
                name: "Viruses",
                description: "Acellular infectious agents that require host cellular machinery for replication."
            },
            {
                name: "Fungi",
                description: "Eukaryotic organisms that include yeasts, moulds and other medically relevant species."
            },
            {
                name: "Protozoa",
                description: "Single-celled eukaryotic organisms, some of which cause human diseases."
            },
            {
                name: "Helminths",
                description: "Parasitic worms that may infect humans."
            },
            {
                name: "Prions",
                description: "Abnormally folded infectious proteins associated with certain transmissible neurodegenerative diseases."
            }
        ]
    },

    bacteriology: {
        heading: "Bacteriology",

        bacterialStructure: [
            {
                name: "Cell Wall",
                description: "A structural layer that provides support and protection in many bacteria."
            },
            {
                name: "Cell Membrane",
                description: "A selectively permeable membrane involved in transport and cellular processes."
            },
            {
                name: "Cytoplasm",
                description: "The internal cellular material containing enzymes, ribosomes and other components."
            },
            {
                name: "Nucleoid",
                description: "The region containing the main bacterial chromosome."
            },
            {
                name: "Plasmids",
                description: "Small DNA molecules that may carry additional genetic information."
            },
            {
                name: "Ribosomes",
                description: "Structures involved in protein synthesis."
            },
            {
                name: "Capsule",
                description: "An external protective structure present in certain bacteria."
            },
            {
                name: "Flagella",
                description: "Structures that enable movement in many bacterial species."
            },
            {
                name: "Pili and Fimbriae",
                description: "Surface structures involved in attachment and, in some bacteria, genetic exchange."
            },
            {
                name: "Endospores",
                description: "Highly resistant dormant structures formed by certain bacterial groups."
            }
        ],

        shapes: [
            {
                name: "Cocci",
                description: "Spherical or approximately round bacteria."
            },
            {
                name: "Bacilli",
                description: "Rod-shaped bacteria."
            },
            {
                name: "Vibrios",
                description: "Curved or comma-shaped bacteria."
            },
            {
                name: "Spirilla",
                description: "Rigid spiral-shaped bacteria."
            },
            {
                name: "Spirochetes",
                description: "Flexible spiral-shaped bacteria."
            }
        ],

        staining: [
            {
                name: "Gram-Positive Bacteria",
                description: "Bacteria that generally retain the primary crystal violet stain in the Gram-staining procedure."
            },
            {
                name: "Gram-Negative Bacteria",
                description: "Bacteria that generally appear pink or red after Gram staining and counterstaining."
            },
            {
                name: "Acid-Fast Bacteria",
                description: "Bacteria with cell-envelope properties that allow them to retain specific stains during acid-fast staining."
            }
        ],

        growthAndReproduction: [
            {
                title: "Binary Fission",
                description: "A common bacterial reproductive process in which one cell divides into two daughter cells."
            },
            {
                title: "Growth Requirements",
                description: "Bacterial growth depends on environmental conditions such as nutrients, temperature, oxygen availability and pH."
            },
            {
                title: "Growth Phases",
                description: "Bacterial populations may pass through lag, exponential, stationary and decline phases under laboratory conditions."
            },
            {
                title: "Aerobic Bacteria",
                description: "Bacteria that require or use oxygen for growth."
            },
            {
                title: "Anaerobic Bacteria",
                description: "Bacteria that can grow without oxygen; oxygen tolerance varies among species."
            }
        ]
    },

    virology: {
        heading: "Virology",

        structure: [
            {
                name: "Genetic Material",
                description: "Viral genomes consist of DNA or RNA."
            },
            {
                name: "Capsid",
                description: "A protein coat that surrounds and protects the viral genome."
            },
            {
                name: "Envelope",
                description: "A lipid membrane surrounding some viruses."
            },
            {
                name: "Surface Proteins",
                description: "Viral proteins that participate in attachment and entry into host cells."
            }
        ],

        classification: [
            "DNA viruses",
            "RNA viruses",
            "Enveloped viruses",
            "Non-enveloped viruses",
            "Single-stranded viruses",
            "Double-stranded viruses"
        ],

        replicationCycle: [
            {
                name: "Attachment",
                description: "The virus binds to appropriate structures on a susceptible host cell."
            },
            {
                name: "Entry",
                description: "The viral particle or its genetic material enters the host cell."
            },
            {
                name: "Uncoating",
                description: "The viral genome becomes accessible within the host cell."
            },
            {
                name: "Replication and Synthesis",
                description: "Viral genetic material is copied and viral components are produced."
            },
            {
                name: "Assembly",
                description: "New viral particles are assembled."
            },
            {
                name: "Release",
                description: "New viral particles leave the host cell through different mechanisms."
            }
        ],

        importantConcepts: [
            {
                title: "Host Specificity",
                description: "Viruses differ in the organisms and cell types they can infect."
            },
            {
                title: "Tropism",
                description: "The preference or ability of a virus to infect particular cells or tissues."
            },
            {
                title: "Latency",
                description: "A state in which viral genetic material persists with limited or controlled production of infectious particles."
            },
            {
                title: "Viral Mutation",
                description: "Changes in viral genetic material that may influence viral characteristics."
            }
        ]
    },

    mycology: {
        heading: "Medical Mycology",

        organisms: [
            {
                name: "Yeasts",
                description: "Unicellular fungi that commonly reproduce through budding or other cellular processes."
            },
            {
                name: "Moulds",
                description: "Filamentous fungi that grow through structures called hyphae."
            },
            {
                name: "Dimorphic Fungi",
                description: "Fungi that can exist in different morphological forms under different environmental conditions."
            }
        ],

        infections: [
            {
                name: "Candidiasis",
                description: "An infection caused by Candida species, which may affect different body sites."
            },
            {
                name: "Aspergillosis",
                description: "A group of conditions associated with Aspergillus fungi."
            },
            {
                name: "Cryptococcosis",
                description: "A fungal infection caused by Cryptococcus species."
            },
            {
                name: "Dermatophytosis",
                description: "Fungal infection involving keratinised tissues such as skin, hair or nails."
            },
            {
                name: "Mucormycosis",
                description: "A serious fungal infection caused by fungi in the order Mucorales."
            }
        ],

        concepts: [
            {
                title: "Fungal Cell Wall",
                description: "Fungal cell walls contain structural components such as chitin and glucans."
            },
            {
                title: "Hyphae",
                description: "Thread-like fungal structures."
            },
            {
                title: "Mycelium",
                description: "A network of fungal hyphae."
            },
            {
                title: "Fungal Spores",
                description: "Reproductive or dispersal structures produced by many fungi."
            }
        ]
    },

    parasitology: {
        heading: "Medical Parasitology",

        groups: [
            {
                name: "Protozoan Parasites",
                description: "Single-celled eukaryotic parasites that may cause disease in humans.",
                examples: [
                    "Plasmodium",
                    "Entamoeba histolytica",
                    "Giardia duodenalis",
                    "Leishmania",
                    "Trypanosoma"
                ]
            },
            {
                name: "Helminths",
                description: "Parasitic worms that can infect humans.",
                examples: [
                    "Ascaris lumbricoides",
                    "Ancylostoma species",
                    "Taenia species",
                    "Schistosoma species",
                    "Enterobius vermicularis"
                ]
            },
            {
                name: "Ectoparasites",
                description: "Parasites that live on the external surface of the host.",
                examples: [
                    "Lice",
                    "Ticks",
                    "Mites",
                    "Fleas"
                ]
            }
        ],

        lifecycleConcepts: [
            {
                title: "Definitive Host",
                description: "A host in which a parasite undergoes sexual reproduction or reaches a specified adult stage."
            },
            {
                title: "Intermediate Host",
                description: "A host in which a parasite undergoes developmental stages before reaching another host."
            },
            {
                title: "Vector",
                description: "An organism that transmits an infectious agent between hosts."
            },
            {
                title: "Reservoir",
                description: "A host, population or environment in which an infectious agent is normally maintained."
            }
        ]
    },

    prionBiology: {
        heading: "Prions and Unconventional Infectious Agents",

        topics: [
            {
                title: "Prions",
                description: "Abnormally folded proteins capable of inducing abnormal folding of corresponding normal proteins."
            },
            {
                title: "Prion Diseases",
                description: "A group of rare, serious neurodegenerative conditions."
            },
            {
                title: "Creutzfeldt-Jakob Disease",
                description: "A rare human prion disease associated with progressive neurological deterioration."
            },
            {
                title: "Prion Research",
                description: "Research examines protein misfolding, transmission and mechanisms of neurodegeneration."
            }
        ]
    },

    infectiousDiseaseConcepts: {
        heading: "Fundamentals of Infectious Diseases",

        topics: [
            {
                title: "Pathogen",
                description: "A microorganism or infectious agent capable of causing disease under particular conditions."
            },
            {
                title: "Infection",
                description: "Entry, establishment and multiplication or persistence of an infectious agent in a host."
            },
            {
                title: "Colonisation",
                description: "Presence and growth of microorganisms on or in the body without necessarily causing disease."
            },
            {
                title: "Pathogenicity",
                description: "The capacity of an organism to cause disease."
            },
            {
                title: "Virulence",
                description: "The degree of pathogenic effect associated with an infectious organism."
            },
            {
                title: "Incubation Period",
                description: "The interval between exposure to an infectious agent and the appearance of symptoms."
            },
            {
                title: "Communicable Disease",
                description: "A disease that can spread directly or indirectly between hosts."
            },
            {
                title: "Opportunistic Infection",
                description: "An infection caused by organisms that take advantage of particular host vulnerabilities."
            },
            {
                title: "Asymptomatic Infection",
                description: "An infection that occurs without noticeable symptoms."
            },
            {
                title: "Coinfection",
                description: "Infection involving more than one infectious agent."
            }
        ]
    },

    transmission: {
        heading: "Modes of Transmission",

        routes: [
            {
                name: "Direct Contact",
                description: "Transmission through direct physical contact between individuals."
            },
            {
                name: "Indirect Contact",
                description: "Transmission through contaminated objects or surfaces."
            },
            {
                name: "Droplet Transmission",
                description: "Spread through respiratory particles expelled during activities such as coughing or sneezing."
            },
            {
                name: "Airborne Transmission",
                description: "Spread through infectious particles that can remain suspended in air under suitable conditions."
            },
            {
                name: "Foodborne Transmission",
                description: "Transmission through contaminated food."
            },
            {
                name: "Waterborne Transmission",
                description: "Transmission through contaminated water."
            },
            {
                name: "Vector-Borne Transmission",
                description: "Transmission through organisms such as mosquitoes or ticks."
            },
            {
                name: "Bloodborne Transmission",
                description: "Spread through infected blood or certain contaminated blood-contact materials."
            },
            {
                name: "Vertical Transmission",
                description: "Transmission from a pregnant person to the developing baby or around the time of birth."
            },
            {
                name: "Sexual Transmission",
                description: "Transmission through sexual contact."
            }
        ]
    },

    importantInfections: {
        heading: "Important Infectious Diseases",

        diseases: [
            {
                name: "Tuberculosis",
                category: "Bacterial",
                organism: "Mycobacterium tuberculosis",
                description: "An infectious disease that most commonly affects the lungs but can involve other organs."
            },
            {
                name: "Typhoid Fever",
                category: "Bacterial",
                organism: "Salmonella enterica serovar Typhi",
                description: "A systemic bacterial infection commonly transmitted through contaminated food or water."
            },
            {
                name: "Cholera",
                category: "Bacterial",
                organism: "Vibrio cholerae",
                description: "An acute intestinal infection that can cause severe watery diarrhoea."
            },
            {
                name: "Pneumonia",
                category: "Multiple possible causes",
                organism: "Bacteria, viruses and other organisms",
                description: "An infection involving lung tissue and air sacs."
            },
            {
                name: "Dengue",
                category: "Viral",
                organism: "Dengue virus",
                description: "A mosquito-borne viral disease."
            },
            {
                name: "Malaria",
                category: "Parasitic",
                organism: "Plasmodium species",
                description: "A mosquito-borne parasitic disease."
            },
            {
                name: "HIV Infection",
                category: "Viral",
                organism: "Human immunodeficiency virus",
                description: "A viral infection that affects the immune system."
            },
            {
                name: "Hepatitis B",
                category: "Viral",
                organism: "Hepatitis B virus",
                description: "A viral infection that primarily affects the liver."
            },
            {
                name: "Influenza",
                category: "Viral",
                organism: "Influenza viruses",
                description: "A contagious respiratory infection."
            },
            {
                name: "COVID-19",
                category: "Viral",
                organism: "SARS-CoV-2",
                description: "A respiratory infectious disease caused by SARS-CoV-2."
            },
            {
                name: "Rabies",
                category: "Viral",
                organism: "Rabies virus",
                description: "A viral disease that affects the central nervous system and is usually transmitted through infected animal saliva."
            },
            {
                name: "Measles",
                category: "Viral",
                organism: "Measles virus",
                description: "A highly contagious viral disease that can cause serious complications."
            },
            {
                name: "Candidiasis",
                category: "Fungal",
                organism: "Candida species",
                description: "A fungal infection that can affect skin, mucosal surfaces and other body sites."
            },
            {
                name: "Amoebiasis",
                category: "Parasitic",
                organism: "Entamoeba histolytica",
                description: "A parasitic infection that may affect the intestine and, in some cases, other organs."
            },
            {
                name: "Leishmaniasis",
                category: "Parasitic",
                organism: "Leishmania species",
                description: "A group of diseases transmitted by infected sand flies."
            }
        ]
    },

    normalMicrobiota: {
        heading: "Human Microbiome and Normal Microbiota",

        topics: [
            {
                title: "Normal Microbiota",
                description: "Microorganisms that commonly live on or in the human body without necessarily causing disease."
            },
            {
                title: "Human Microbiome",
                description: "The community of microorganisms and their genetic material associated with a particular environment, including the human body."
            },
            {
                title: "Gut Microbiome",
                description: "The microbial community in the gastrointestinal tract, involved in multiple biological processes."
            },
            {
                title: "Microbial Diversity",
                description: "The variety of microbial species and genetic characteristics within a community."
            },
            {
                title: "Dysbiosis",
                description: "An alteration in the composition or function of a microbial community."
            },
            {
                title: "Host-Microbe Interaction",
                description: "The relationship between microorganisms and the human body, which may be beneficial, neutral or harmful."
            },
            {
                title: "Probiotics",
                description: "Live microorganisms that may provide health benefits when administered in adequate amounts under appropriate conditions."
            },
            {
                title: "Prebiotics",
                description: "Substrates selectively utilised by host microorganisms that confer a health benefit."
            }
        ]
    },

    antimicrobialResistance: {
        heading: "Antimicrobial Resistance",

        topics: [
            {
                title: "Antimicrobial Resistance",
                description: "The ability of microorganisms to survive or grow despite exposure to antimicrobial agents that would normally inhibit or kill them."
            },
            {
                title: "Antibiotic Resistance",
                description: "Resistance specifically involving bacteria and antibacterial medicines."
            },
            {
                title: "Intrinsic Resistance",
                description: "Natural resistance associated with inherent characteristics of a microorganism."
            },
            {
                title: "Acquired Resistance",
                description: "Resistance that develops through genetic changes or acquisition of resistance genes."
            },
            {
                title: "Resistance Mechanisms",
                description: "May include drug inactivation, altered targets, reduced drug entry and active drug efflux."
            },
            {
                title: "Multidrug Resistance",
                description: "Resistance to multiple antimicrobial agents."
            },
            {
                title: "Antimicrobial Stewardship",
                description: "Coordinated efforts to promote appropriate antimicrobial use and reduce unnecessary exposure."
            },
            {
                title: "One Health",
                description: "An integrated approach recognising connections between human, animal and environmental health."
            }
        ],

        awarenessPoints: [
            "Antibiotics do not treat viral infections such as common colds.",
            "Antibiotics should only be used when appropriately prescribed or advised by a qualified healthcare professional.",
            "Do not share prescribed antimicrobial medicines.",
            "Do not use leftover antibiotics without professional advice.",
            "Infection prevention helps reduce antimicrobial resistance.",
            "Antimicrobial resistance is a public health concern."
        ]
    },

    laboratoryDiagnosis: {
        heading: "Clinical Microbiology and Laboratory Diagnosis",

        methods: [
            {
                name: "Microscopy",
                description: "Direct observation of microorganisms or cellular features in clinical specimens."
            },
            {
                name: "Gram Staining",
                description: "A differential staining technique used to classify many bacteria."
            },
            {
                name: "Acid-Fast Staining",
                description: "A staining method used to detect certain acid-fast organisms."
            },
            {
                name: "Culture",
                description: "Growth of microorganisms under suitable laboratory conditions for identification and further testing."
            },
            {
                name: "Antimicrobial Susceptibility Testing",
                description: "Laboratory methods used to assess the response of microorganisms to selected antimicrobial agents."
            },
            {
                name: "Antigen Detection",
                description: "Methods that identify specific microbial components."
            },
            {
                name: "Antibody Testing",
                description: "Methods that detect immune responses to particular infectious agents."
            },
            {
                name: "Polymerase Chain Reaction",
                description: "A molecular method used to detect or amplify selected genetic sequences."
            },
            {
                name: "Real-Time PCR",
                description: "A molecular method that monitors amplification during the reaction."
            },
            {
                name: "Sequencing",
                description: "Methods used to determine genetic sequence information."
            },
            {
                name: "Automated Microbiology Systems",
                description: "Laboratory systems used for selected identification and susceptibility testing workflows."
            }
        ],

        specimenTypes: [
            "Blood",
            "Urine",
            "Sputum",
            "Stool",
            "Cerebrospinal fluid",
            "Throat swabs",
            "Wound swabs",
            "Tissue samples",
            "Other appropriate clinical specimens"
        ],

        note: "Specimen selection, collection, transport and interpretation must follow validated laboratory procedures and clinical requirements."
    },

    infectionPrevention: {
        heading: "Infection Prevention and Control",

        topics: [
            {
                title: "Hand Hygiene",
                description: "Proper hand hygiene is a fundamental measure for reducing transmission of infectious agents."
            },
            {
                title: "Personal Protective Equipment",
                description: "Protective equipment is selected according to the expected exposure and infection-control requirements."
            },
            {
                title: "Respiratory Hygiene",
                description: "Measures such as covering coughs and sneezes help reduce respiratory transmission."
            },
            {
                title: "Environmental Cleaning",
                description: "Appropriate cleaning reduces contamination of frequently touched surfaces and environments."
            },
            {
                title: "Disinfection",
                description: "Use of appropriate chemical or physical methods to reduce or eliminate many microorganisms on inanimate surfaces."
            },
            {
                title: "Sterilisation",
                description: "A validated process intended to eliminate all forms of microbial life, including bacterial spores."
            },
            {
                title: "Isolation Precautions",
                description: "Measures used to reduce transmission from individuals with suspected or confirmed infections."
            },
            {
                title: "Safe Injection Practices",
                description: "Practices that reduce risks associated with injections and contaminated equipment."
            },
            {
                title: "Healthcare-Associated Infections",
                description: "Infections acquired during the delivery of healthcare."
            },
            {
                title: "Healthcare Waste Management",
                description: "Safe segregation, handling and disposal of healthcare waste."
            }
        ]
    },

    vaccinesAndImmunisation: {
        heading: "Vaccines and Microbiology",

        topics: [
            {
                title: "Vaccination",
                description: "Administration of a vaccine to stimulate an immune response and help protect against selected infectious diseases."
            },
            {
                title: "Live Attenuated Vaccines",
                description: "Vaccines containing weakened forms of an infectious organism."
            },
            {
                title: "Inactivated Vaccines",
                description: "Vaccines containing organisms that have been rendered non-infectious."
            },
            {
                title: "Subunit Vaccines",
                description: "Vaccines containing selected components of an infectious organism."
            },
            {
                title: "Conjugate Vaccines",
                description: "Vaccines in which a polysaccharide antigen is linked to a carrier protein to improve immune recognition."
            },
            {
                title: "Viral Vector Vaccines",
                description: "Vaccines that use a modified viral vector to deliver genetic instructions for an antigen."
            },
            {
                title: "mRNA Vaccines",
                description: "Vaccines that deliver messenger RNA instructions for cells to produce an antigen."
            },
            {
                title: "Herd Protection",
                description: "Population-level reduction in transmission that can occur when a sufficiently large proportion of a population is immune, depending on the disease and vaccine."
            }
        ],

        note: "Vaccine recommendations vary according to age, health status, country and current public health guidance."
    },

    epidemiology: {
        heading: "Infectious Disease Epidemiology",

        topics: [
            {
                title: "Incidence",
                description: "The number of new cases occurring in a population during a specified period."
            },
            {
                title: "Prevalence",
                description: "The proportion or number of existing cases in a population at a specified time or over a period."
            },
            {
                title: "Outbreak",
                description: "An occurrence of disease cases above what would normally be expected in a particular place or population."
            },
            {
                title: "Epidemic",
                description: "An increase in disease occurrence above expected levels in a population or region."
            },
            {
                title: "Pandemic",
                description: "An epidemic that spreads across multiple countries or continents and affects large populations."
            },
            {
                title: "Surveillance",
                description: "Ongoing collection, analysis and interpretation of health data for public health action."
            },
            {
                title: "Contact Tracing",
                description: "Identification and follow-up of people who may have been exposed to an infectious disease."
            },
            {
                title: "Reproductive Number",
                description: "A measure describing the average number of secondary infections generated by an infected individual under specified conditions."
            }
        ]
    },

    indianPublicHealthContext: {
        heading: "Medical Microbiology and Infectious Disease Awareness in India",

        areas: [
            {
                title: "Tuberculosis Control",
                description: "India has national programmes focused on tuberculosis prevention, diagnosis and treatment."
            },
            {
                title: "Vector-Borne Disease Control",
                description: "Public health programmes address diseases such as malaria, dengue and other vector-borne infections."
            },
            {
                title: "Immunisation",
                description: "The Universal Immunisation Programme supports vaccination against selected vaccine-preventable diseases."
            },
            {
                title: "Antimicrobial Resistance",
                description: "Surveillance, stewardship and infection prevention are important components of India's response to antimicrobial resistance."
            },
            {
                title: "Disease Surveillance",
                description: "Surveillance systems help identify unusual disease patterns and support public health responses."
            },
            {
                title: "Food and Water Safety",
                description: "Safe food handling, clean drinking water and sanitation are important for preventing many infections."
            }
        ],

        organisations: [
            {
                name: "National Centre for Disease Control",
                url: "https://ncdc.mohfw.gov.in/"
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
            },
            {
                name: "World Health Organization",
                url: "https://www.who.int/"
            }
        ]
    },

    visualLearning: {
        heading: "Medical Microbiology Visual Learning Centre",

        resources: [
            {
                title: "Classification of Microorganisms",
                description: "Overview of major groups of medically relevant microorganisms.",
                plannedAsset: "microorganism-classification"
            },
            {
                title: "Bacterial Cell Structure",
                description: "Diagram showing important bacterial structures.",
                plannedAsset: "bacterial-cell-structure"
            },
            {
                title: "Bacterial Shapes",
                description: "Comparison of common bacterial shapes.",
                plannedAsset: "bacterial-shapes"
            },
            {
                title: "Gram Staining",
                description: "Educational overview of Gram-positive and Gram-negative staining.",
                plannedAsset: "gram-staining"
            },
            {
                title: "Virus Structure",
                description: "Diagram of viral genetic material, capsid and envelope.",
                plannedAsset: "virus-structure"
            },
            {
                title: "Viral Replication",
                description: "Overview of the viral replication cycle.",
                plannedAsset: "viral-replication"
            },
            {
                title: "Fungal Structures",
                description: "Illustration of yeast, hyphae and mould structures.",
                plannedAsset: "fungal-structures"
            },
            {
                title: "Parasite Life Cycles",
                description: "Conceptual overview of parasite hosts and transmission.",
                plannedAsset: "parasite-life-cycles"
            },
            {
                title: "Transmission Routes",
                description: "Comparison of common infection transmission routes.",
                plannedAsset: "infection-transmission"
            },
            {
                title: "Antimicrobial Resistance",
                description: "Illustration of selected resistance mechanisms.",
                plannedAsset: "antimicrobial-resistance"
            },
            {
                title: "Laboratory Diagnosis",
                description: "Overview of clinical microbiology testing methods.",
                plannedAsset: "microbiology-diagnosis"
            },
            {
                title: "Infection Prevention",
                description: "Visual guide to infection prevention principles.",
                plannedAsset: "infection-prevention"
            }
        ]
    },

    learningObjectives: [
        "Define medical microbiology and its major branches.",
        "Classify medically important microorganisms.",
        "Describe basic bacterial structure and morphology.",
        "Understand bacterial growth and reproduction.",
        "Explain basic viral structure and replication.",
        "Identify major medically relevant fungal groups.",
        "Understand the classification of parasites.",
        "Explain fundamental infectious disease concepts.",
        "Identify common routes of infection transmission.",
        "Recognise important infectious diseases.",
        "Understand the human microbiome.",
        "Explain antimicrobial resistance and stewardship.",
        "Identify major laboratory diagnostic methods.",
        "Understand infection prevention and control.",
        "Explain the basic role of vaccines.",
        "Understand infectious disease surveillance."
    ],

    faqs: [
        {
            question: "What is medical microbiology?",
            answer: "Medical microbiology studies microorganisms associated with human health and infectious diseases."
        },
        {
            question: "What are the major groups of microorganisms?",
            answer: "Major groups include bacteria, viruses, fungi and parasites. Prions are also studied as unconventional infectious agents."
        },
        {
            question: "Are viruses considered cells?",
            answer: "No. Viruses are acellular infectious agents that require host cellular machinery for replication."
        },
        {
            question: "What is the difference between Gram-positive and Gram-negative bacteria?",
            answer: "They differ in cell-envelope structure and their response to Gram staining."
        },
        {
            question: "What is a pathogen?",
            answer: "A pathogen is a microorganism or infectious agent capable of causing disease under particular conditions."
        },
        {
            question: "What is normal microbiota?",
            answer: "Normal microbiota refers to microorganisms commonly living on or within the body without necessarily causing disease."
        },
        {
            question: "What is antimicrobial resistance?",
            answer: "It is the ability of microorganisms to survive or grow despite exposure to antimicrobial agents that would normally inhibit or kill them."
        },
        {
            question: "Do antibiotics work against viruses?",
            answer: "No. Antibiotics act against bacteria and do not treat viral infections."
        },
        {
            question: "What is PCR used for in microbiology?",
            answer: "PCR can amplify selected genetic sequences and is used in various molecular detection methods."
        },
        {
            question: "What is an outbreak?",
            answer: "An outbreak is an occurrence of disease cases above what would normally be expected in a particular setting or population."
        },
        {
            question: "Why is hand hygiene important?",
            answer: "Hand hygiene helps reduce the transmission of infectious microorganisms."
        },
        {
            question: "What is the human microbiome?",
            answer: "It refers to the community of microorganisms and their genetic material associated with the human body."
        }
    ],

    quiz: [
        {
            question: "Which branch of microbiology studies viruses?",
            options: [
                "Bacteriology",
                "Virology",
                "Mycology",
                "Parasitology"
            ],
            answer: 1,
            explanation: "Virology is the study of viruses."
        },
        {
            question: "Which bacterial shape is spherical?",
            options: [
                "Bacilli",
                "Cocci",
                "Vibrios",
                "Spirochetes"
            ],
            answer: 1,
            explanation: "Cocci are spherical or approximately round bacteria."
        },
        {
            question: "Which organism causes tuberculosis?",
            options: [
                "Plasmodium falciparum",
                "Mycobacterium tuberculosis",
                "Candida albicans",
                "Dengue virus"
            ],
            answer: 1,
            explanation: "Tuberculosis is caused by Mycobacterium tuberculosis."
        },
        {
            question: "Which organism is associated with malaria?",
            options: [
                "Plasmodium",
                "Salmonella",
                "Aspergillus",
                "Influenza virus"
            ],
            answer: 0,
            explanation: "Malaria is caused by parasites belonging to the genus Plasmodium."
        },
        {
            question: "Which technique is commonly used to amplify selected DNA sequences?",
            options: [
                "ECG",
                "PCR",
                "X-ray",
                "Spirometry"
            ],
            answer: 1,
            explanation: "Polymerase chain reaction amplifies selected DNA sequences."
        },
        {
            question: "What is antimicrobial resistance?",
            options: [
                "The ability of microorganisms to resist antimicrobial agents",
                "The ability of humans to resist all infections",
                "A type of vaccination",
                "A type of bacterial staining"
            ],
            answer: 0,
            explanation: "Antimicrobial resistance occurs when microorganisms are no longer effectively inhibited or killed by certain antimicrobial agents."
        },
        {
            question: "Which of the following is a fungal organism?",
            options: [
                "Candida",
                "Plasmodium",
                "Salmonella",
                "Dengue virus"
            ],
            answer: 0,
            explanation: "Candida is a genus of fungi."
        },
        {
            question: "Which practice is fundamental to infection prevention?",
            options: [
                "Sharing medicines",
                "Hand hygiene",
                "Ignoring symptoms",
                "Reusing disposable needles"
            ],
            answer: 1,
            explanation: "Proper hand hygiene is a fundamental infection prevention measure."
        },
        {
            question: "Which organism transmits malaria?",
            options: [
                "Housefly",
                "Female Anopheles mosquito",
                "Tick",
                "Sand fly"
            ],
            answer: 1,
            explanation: "Malaria is transmitted through the bite of an infected female Anopheles mosquito."
        },
        {
            question: "Which of the following is an acellular infectious agent?",
            options: [
                "Bacterium",
                "Fungus",
                "Virus",
                "Protozoan"
            ],
            answer: 2,
            explanation: "Viruses are acellular infectious agents."
        }
    ],

    references: [
        {
            name: "World Health Organization",
            url: "https://www.who.int/"
        },
        {
            name: "Centers for Disease Control and Prevention",
            url: "https://www.cdc.gov/"
        },
        {
            name: "National Centre for Disease Control, India",
            url: "https://ncdc.mohfw.gov.in/"
        },
        {
            name: "Indian Council of Medical Research",
            url: "https://www.icmr.gov.in/"
        },
        {
            name: "NCBI Bookshelf",
            url: "https://www.ncbi.nlm.nih.gov/books/"
        },
        {
            name: "OpenStax Microbiology",
            url: "https://openstax.org/details/books/microbiology"
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

    const content = MEDICAL_MICROBIOLOGY_CONTENT;

    const requiredFields = [
        "introduction",
        "overview",
        "branches",
        "microorganismClassification",
        "bacteriology",
        "virology",
        "mycology",
        "parasitology",
        "prionBiology",
        "infectiousDiseaseConcepts",
        "transmission",
        "importantInfections",
        "normalMicrobiota",
        "antimicrobialResistance",
        "laboratoryDiagnosis",
        "infectionPrevention",
        "vaccinesAndImmunisation",
        "epidemiology",
        "indianPublicHealthContext",
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
            "Medical Microbiology content validation failed:",
            missingFields
        );

    } else {

        console.log(
            "Medical Microbiology educational dataset loaded."
        );

    }

})();
