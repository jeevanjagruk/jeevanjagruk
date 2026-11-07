/* ==========================================
   JEEVAN JAGRUK
   MAIN JAVASCRIPT FOUNDATION
========================================== */

"use strict";

/* ==========================================
   WEBSITE CONFIGURATION
========================================== */

const JeevanJagruk = {

    name: "Jeevan Jagruk",

    tagline: "Health Awareness. Informed Choices. Safer Lives.",

    version: "1.0.0",

    settings: {
        enableSearch: true,
        enableMobileNavigation: true,
        enableAnimations: true
    }

};


/* ==========================================
   DOM ELEMENT SELECTOR
========================================== */

const select = (selector, parent = document) => {
    return parent.querySelector(selector);
};

const selectAll = (selector, parent = document) => {
    return [...parent.querySelectorAll(selector)];
};


/* ==========================================
   ANNOUNCEMENT BAR
========================================== */

function initializeAnnouncement() {

    const announcement = select("#announcement-bar");

    if (!announcement) return;

    announcement.innerHTML = `
        <div class="container">
            <p>
                Welcome to Jeevan Jagruk —
                Explore healthcare knowledge and awareness.
            </p>
        </div>
    `;

}


/* ==========================================
   FOOTER FOUNDATION
========================================== */

function initializeFooter() {

    const footer = select("#site-footer");

    if (!footer) return;

    const currentYear = new Date().getFullYear();

    footer.innerHTML = `
        <div class="container">

            <div class="footer-content">

                <div class="footer-brand">
                    <h2>Jeevan Jagruk</h2>

                    <p>
                        Health Awareness.
                        Informed Choices.
                        Safer Lives.
                    </p>

                    <p>
                        A healthcare knowledge and
                        public awareness platform.
                    </p>
                </div>

                <div class="footer-links">

                    <h3>Explore</h3>

                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="#healthcare-divisions">Healthcare Divisions</a></li>
                        <li><a href="#learning-centre">Learning Centre</a></li>
                        <li><a href="#health-resources">Health Resources</a></li>
                    </ul>

                </div>

                <div class="footer-links">

                    <h3>Platform</h3>

                    <ul>
                        <li><a href="#awareness-projects">Projects</a></li>
                        <li><a href="#latest-articles">Articles</a></li>
                        <li><a href="#community">Community</a></li>
                    </ul>

                </div>

            </div>

            <div class="footer-bottom">

                <p>
                    © ${currentYear} Jeevan Jagruk.
                    All rights reserved.
                </p>

                <p>
                    Educational information is not a
                    substitute for professional medical advice.
                </p>

            </div>

        </div>
    `;

}


/* ==========================================
   SMOOTH SCROLL
========================================== */

function initializeSmoothScroll() {

    selectAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (!targetId || targetId === "#") return;

            const target = select(targetId);

            if (!target) return;

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });

}


/* ==========================================
   ACCESSIBILITY SUPPORT
========================================== */

function initializeAccessibility() {

    document.documentElement.setAttribute(
        "data-platform",
        "jeevan-jagruk"
    );

    document.documentElement.setAttribute(
        "data-platform-version",
        JeevanJagruk.version
    );

}


/* ==========================================
   APPLICATION INITIALIZATION
========================================== */

function initializeWebsite() {

    initializeAnnouncement();

    initializeFooter();

    initializeSmoothScroll();

    initializeAccessibility();

    console.info(
        `${JeevanJagruk.name} website initialized successfully.`
    );

}


/* ==========================================
   START APPLICATION
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    initializeWebsite();

});
