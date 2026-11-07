/* =========================================================
   JEEVAN JAGRUK
   DYNAMIC HEALTHCARE DIVISION PAGE
   ========================================================= */

"use strict";

(function () {

    const scriptURL = document.currentScript
        ? document.currentScript.src
        : window.location.href;

    const scriptDirectory = new URL(".", scriptURL);

    const dataURL = new URL("divisions-data.js", scriptDirectory);

    /* =====================================================
       LOAD DIVISION DATABASE
       ===================================================== */

    function loadDivisionDatabase() {

        return new Promise((resolve, reject) => {

            if (window.JeevanDivisionDB) {
                resolve();
                return;
            }

            const script = document.createElement("script");

            script.src = dataURL.href;
            script.onload = resolve;

            script.onerror = () => {
                reject(new Error("Unable to load division database."));
            };

            document.head.appendChild(script);

        });

    }


    /* =====================================================
       PAGE HELPERS
       ===================================================== */

    function getElement(id) {
        return document.getElementById(id);
    }

    function setText(id, value) {

        const element = getElement(id);

        if (element) {
            element.textContent = value || "";
        }

    }

    function createElement(tag, className, text) {

        const element = document.createElement(tag);

        if (className) {
            element.className = className;
        }

        if (text !== undefined && text !== null) {
            element.textContent = text;
        }

        return element;

    }

    function clearElement(id) {

        const element = getElement(id);

        if (element) {
            element.replaceChildren();
        }

        return element;

    }

    function createCard(title, description) {

        const card = createElement("article", "division-content-card");

        card.appendChild(
            createElement("h3", "", title)
        );

        card.appendChild(
            createElement("p", "", description)
        );

        return card;

    }

    function createListItem(text) {

        return createElement("li", "", text);

    }

    function createSectionHeading(title, description) {

        const wrapper = createElement("div", "division-section-heading");

        wrapper.appendChild(
            createElement("h2", "", title)
        );

        if (description) {
            wrapper.appendChild(
                createElement("p", "", description)
            );
        }

        return wrapper;

    }


    /* =====================================================
       GET SELECTED DIVISION
       ===================================================== */

    function getSelectedDivision() {

        const parameters = new URLSearchParams(window.location.search);

        const divisionId = parameters.get("id");

        if (!divisionId || !window.JeevanDivisionDB) {
            return null;
        }

        return JeevanDivisionDB.getById(divisionId);

    }


    /* =====================================================
       PAGE TITLE AND META INFORMATION
       ===================================================== */

    function updatePageMetadata(division) {

        document.title =
            `${division.name} | Jeevan Jagruk`;

        const description =
            `${division.introduction} Explore healthcare knowledge on Jeevan Jagruk.`;

        const metaDescription =
            document.querySelector('meta[name="description"]');

        if (metaDescription) {
            metaDescription.setAttribute("content", description);
        }

    }


    /* =====================================================
       HERO SECTION
       ===================================================== */

    function renderHero(division, category) {

        setText("breadcrumbDivision", division.name);

        setText(
            "divisionCategory",
            category ? category.name : "Healthcare Division"
        );

        setText(
            "divisionNumber",
            `DIVISION ${String(division.number).padStart(2, "0")}`
        );

        setText("divisionTitle", division.name);

        setText(
            "divisionIntroduction",
            division.introduction
        );

        setText(
            "quickCategory",
            category ? category.shortName : "Healthcare"
        );

        setText("quickSubject", `Division ${division.number}`);

    }


    /* =====================================================
       OVERVIEW SECTION
       ===================================================== */

    function renderOverview(division) {

        const container = clearElement("divisionOverview");

        if (!container) return;

        container.appendChild(
            createSectionHeading(
                "About This Division",
                "An introduction to this area of healthcare knowledge."
            )
        );

        container.appendChild(
            createCard(
                "Overview",
                division.description
            )
        );

        container.appendChild(
            createCard(
                "Introduction",
                division.introduction
            )
        );

    }


    /* =====================================================
       SCOPE SECTION
       ===================================================== */

    function renderScope(division) {

        const container = clearElement("divisionScope");

        if (!container) return;

        container.appendChild(
            createSectionHeading(
                "Scope of This Division",
                "The subject area and its place within healthcare education."
            )
        );

        container.appendChild(
            createCard(
                "Subject Focus",
                division.name
            )
        );

        container.appendChild(
            createCard(
                "Educational Purpose",
                `This section introduces the fundamental concepts and terminology associated with ${division.name}.`
            )
        );

        container.appendChild(
            createCard(
                "Healthcare Connection",
                "This division connects with other areas of medicine, healthcare education and public awareness."
            )
        );

    }


    /* =====================================================
       TOPICS SECTION
       ===================================================== */

    function renderTopics(division) {

        const container = clearElement("divisionTopics");

        if (!container) return;

        container.appendChild(
            createSectionHeading(
                "Topics and Learning Areas",
                "A framework for organising future educational material."
            )
        );

        const topics = [
            {
                title: "Foundations",
                description: `Basic terminology and introductory concepts in ${division.name}.`
            },
            {
                title: "Core Concepts",
                description: "Important principles and essential subject knowledge."
            },
            {
                title: "Systems and Processes",
                description: "Understanding relevant structures, systems and processes."
            },
            {
                title: "Health and Disease",
                description: "Educational exploration of health conditions and their relevance."
            },
            {
                title: "Diagnosis and Assessment",
                description: "An introduction to relevant assessment and diagnostic concepts where applicable."
            },
            {
                title: "Prevention and Awareness",
                description: "Understanding prevention, safety and public health awareness where relevant."
            }
        ];

        const grid = createElement("div", "division-topic-grid");

        topics.forEach(topic => {

            grid.appendChild(
                createCard(topic.title, topic.description)
            );

        });

        container.appendChild(grid);

    }


    /* =====================================================
       SUBDIVISIONS SECTION
       ===================================================== */

    function renderSubdivisions(division) {

        const container = clearElement("divisionSubdivisions");

        if (!container) return;

        container.appendChild(
            createSectionHeading(
                "Subdivisions and Specialised Areas",
                "Related areas that can be developed into dedicated learning sections."
            )
        );

        container.appendChild(
            createCard(
                "Further Classification",
                `Detailed subtopics of ${division.name} will be added as educational content is researched and reviewed.`
            )
        );

    }


    /* =====================================================
       RELATED DIVISIONS
       ===================================================== */

    function renderRelatedDivisions(division) {

        const container = clearElement("relatedDivisionGrid");

        if (!container) return;

        const related = JeevanDivisionDB.getRelated(division);

        if (!related.length) {

            container.appendChild(
                createElement(
                    "p",
                    "division-empty-state",
                    "Related divisions will be added soon."
                )
            );

            return;

        }

        related.forEach(item => {

            const link = createElement("a", "division-related-card");

            link.href =
                `division.html?id=${encodeURIComponent(item.id)}`;

            link.appendChild(
                createElement("span", "division-related-number",
                    `DIVISION ${String(item.number).padStart(2, "0")}`)
            );

            link.appendChild(
                createElement("h3", "", item.name)
            );

            link.appendChild(
                createElement("p", "", item.introduction)
            );

            const category = JeevanDivisionDB.getCategory(item.category);

            if (category) {
                link.appendChild(
                    createElement("small", "", category.shortName)
                );
            }

            container.appendChild(link);

        });

    }


    /* =====================================================
       KEY CONCEPTS
       ===================================================== */

    function renderConcepts(division) {

        const container = clearElement("divisionConcepts");

        if (!container) return;

        container.appendChild(
            createSectionHeading(
                "Key Concepts",
                "Important concepts to explore while learning this subject."
            )
        );

        const concepts = [
            "Basic terminology",
            "Fundamental principles",
            "Scientific foundations",
            "Healthcare relevance",
            "Safety and responsible understanding"
        ];

        const list = createElement("ul", "division-concept-list");

        concepts.forEach(concept => {
            list.appendChild(createListItem(concept));
        });

        container.appendChild(list);

        container.appendChild(
            createElement(
                "p",
                "division-note",
                `These are general learning headings for ${division.name}. Detailed, subject-specific concepts will be added after research and review.`
            )
        );

    }


    /* =====================================================
       VISUAL LEARNING
       ===================================================== */

    function renderVisuals(division) {

        const container = clearElement("divisionVisuals");

        if (!container) return;

        container.appendChild(
            createSectionHeading(
                "Visual Learning Centre",
                "A space for diagrams, illustrations, charts and educational visuals."
            )
        );

        container.appendChild(
            createCard(
                "Illustrations",
                `Educational illustrations related to ${division.name} will be added here.`
            )
        );

        container.appendChild(
            createCard(
                "Diagrams and Charts",
                "Reviewed diagrams and explanatory charts will support visual learning."
            )
        );

        container.appendChild(
            createCard(
                "Infographics",
                "Simplified educational infographics will help explain important concepts."
            )
        );

    }


    /* =====================================================
       ARTICLES
       ===================================================== */

    function renderArticles(division) {

        const container = clearElement("divisionArticles");

        if (!container) return;

        container.appendChild(
            createSectionHeading(
                "Articles and Explanations",
                "Detailed educational articles related to this division."
            )
        );

        container.appendChild(
            createElement(
                "p",
                "division-empty-state",
                `Educational articles about ${division.name} will be published here after research and review.`
            )
        );

    }


    /* =====================================================
       LEARNING RESOURCES
       ===================================================== */

    function renderResources(division) {

        const container = clearElement("divisionResources");

        if (!container) return;

        container.appendChild(
            createSectionHeading(
                "Learning Resources",
                "Explore reputable sources for further healthcare education."
            )
        );

        const resources = [
            {
                name: "World Health Organization",
                description: "International public health information and educational resources.",
                url: "https://www.who.int/"
            },
            {
                name: "National Institutes of Health",
                description: "Biomedical and health research information.",
                url: "https://www.nih.gov/"
            },
            {
                name: "MedlinePlus",
                description: "Health information for patients, families and the public.",
                url: "https://medlineplus.gov/"
            }
        ];

        resources.forEach(resource => {

            const card = createElement("article", "division-resource-card");

            card.appendChild(
                createElement("h3", "", resource.name)
            );

            card.appendChild(
                createElement("p", "", resource.description)
            );

            const link = createElement("a", "", "Visit Official Website");

            link.href = resource.url;
            link.target = "_blank";
            link.rel = "noopener noreferrer";

            card.appendChild(link);

            container.appendChild(card);

        });

        container.appendChild(
            createElement(
                "p",
                "division-note",
                `These are general learning resources. Subject-specific references for ${division.name} must be selected and reviewed before publication.`
            )
        );

    }


    /* =====================================================
       QUIZ SECTION
       ===================================================== */

    function renderQuiz(division) {

        const container = clearElement("divisionQuiz");

        if (!container) return;

        container.appendChild(
            createSectionHeading(
                "Knowledge Check",
                "Test your understanding as educational quizzes are developed."
            )
        );

        container.appendChild(
            createCard(
                "Quiz Coming Soon",
                `A reviewed educational quiz for ${division.name} will be added here.`
            )
        );

        container.appendChild(
            createElement(
                "p",
                "division-note",
                "These quizzes are for general learning and self-assessment. They do not certify clinical competence."
            )
        );

    }


    /* =====================================================
       FAQ SECTION
       ===================================================== */

    function renderFAQ(division) {

        const container = clearElement("divisionFAQ");

        if (!container) return;

        container.appendChild(
            createSectionHeading(
                "Frequently Asked Questions",
                "Basic information about this healthcare division."
            )
        );

        const questions = [
            {
                question: `What is ${division.name}?`,
                answer: division.description
            },
            {
                question: "Who can explore this division?",
                answer: "Students, educators and members of the public interested in healthcare education can explore this section."
            },
            {
                question: "Is this section a substitute for medical advice?",
                answer: "No. This platform provides educational information and does not replace consultation with a qualified healthcare professional."
            }
        ];

        questions.forEach(item => {

            const details = createElement("details", "division-faq-item");

            details.appendChild(
                createElement("summary", "", item.question)
            );

            details.appendChild(
                createElement("p", "", item.answer)
            );

            container.appendChild(details);

        });

    }


    /* =====================================================
       REFERENCES
       ===================================================== */

    function renderReferences() {

        const container = clearElement("divisionReferences");

        if (!container) return;

        container.appendChild(
            createSectionHeading(
                "References and Medical Review",
                "Medical educational content will include traceable sources and review information."
            )
        );

        container.appendChild(
            createElement(
                "p",
                "division-note",
                "Detailed references, publication dates and reviewer information will be added when subject-specific educational content is published."
            )
        );

    }


    /* =====================================================
       REVIEW DATE
       ===================================================== */

    function renderReviewDate() {

        setText(
            "divisionReviewDate",
            "Educational content under development — review status pending."
        );

    }


    /* =====================================================
       INVALID DIVISION
       ===================================================== */

    function showNotFound() {

        const main = document.querySelector("main");

        if (!main) return;

        main.replaceChildren();

        const section = createElement("section", "division-not-found");

        section.appendChild(
            createElement("h1", "", "Division Not Found")
        );

        section.appendChild(
            createElement(
                "p",
                "",
                "The requested healthcare division could not be found."
            )
        );

        const link = createElement("a", "division-back-link", "Explore All Healthcare Divisions");

        link.href = "explore-healthcare.html";

        section.appendChild(link);

        main.appendChild(section);

        document.title = "Division Not Found | Jeevan Jagruk";

    }


    /* =====================================================
       MAIN PAGE RENDERER
       ===================================================== */

    function renderDivisionPage(division) {

        const category = JeevanDivisionDB.getCategory(division.category);

        updatePageMetadata(division);

        renderHero(division, category);

        renderOverview(division);

        renderScope(division);

        renderTopics(division);

        renderSubdivisions(division);

        renderRelatedDivisions(division);

        renderConcepts(division);

        renderVisuals(division);

        renderArticles(division);

        renderResources(division);

        renderQuiz(division);

        renderFAQ(division);

        renderReferences();

        renderReviewDate();

    }


    /* =====================================================
       INITIALISE
       ===================================================== */

    async function initialiseDivisionPage() {

        try {

            await loadDivisionDatabase();

            const division = getSelectedDivision();

            if (!division) {
                showNotFound();
                return;
            }

            renderDivisionPage(division);

            console.log(
                `Jeevan Jagruk: Loaded ${division.name}`
            );

        } catch (error) {

            console.error(error);

            const main = document.querySelector("main");

            if (main) {

                main.replaceChildren();

                main.appendChild(
                    createElement(
                        "p",
                        "division-error",
                        "Unable to load healthcare division information. Please refresh the page."
                    )
                );

            }

        }

    }

    document.addEventListener(
        "DOMContentLoaded",
        initialiseDivisionPage
    );

})();
