"use strict";

/* ==========================================
   JEEVAN JAGRUK — WEBSITE CONFIGURATION
========================================== */

const JeevanJagruk = {
    name: "Jeevan Jagruk",
    tagline: "Health Awareness. Informed Choices. Safer Lives.",
    version: "1.0.0"
};


/* ==========================================
   DOM UTILITIES
========================================== */

const select = (selector, parent = document) =>
    parent.querySelector(selector);

const selectAll = (selector, parent = document) =>
    [...parent.querySelectorAll(selector)];


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
                Your gateway to healthcare knowledge and awareness.
            </p>
        </div>
    `;
}


/* ==========================================
   MAIN NAVIGATION
========================================== */

function initializeHeader() {
    const header = select("#site-header");

    if (!header) return;

    header.innerHTML = `
        <div class="container">

            <div class="navbar">

                <a href="index.html" class="brand">
                    <span class="brand-icon">✚</span>

                    <span class="brand-text">
                        <strong>Jeevan Jagruk</strong>
                        <small>HEALTHCARE KNOWLEDGE PLATFORM</small>
                    </span>
                </a>

                <button
                    class="menu-toggle"
                    id="menu-toggle"
                    aria-label="Open navigation menu"
                    aria-expanded="false"
                    aria-controls="nav-menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <nav class="nav-menu" id="nav-menu">

                    <a href="index.html">Home</a>

                    <a href="#healthcare-divisions">
                        Explore Healthcare
                    </a>

                    <a href="#learning-centre">
                        Learning Centre
                    </a>

                    <a href="#health-resources">
                        Resources
                    </a>

                    <a href="#awareness-projects">
                        Projects
                    </a>

                    <a href="#latest-articles">
                        Blog
                    </a>

                    <a href="#community">
                        Community
                    </a>

                    <a href="#site-footer" class="nav-contact">
                        About Us
                    </a>

                </nav>

            </div>

        </div>
    `;

    initializeMobileNavigation();
}


/* ==========================================
   MOBILE NAVIGATION
========================================== */

function initializeMobileNavigation() {

    const toggle = select("#menu-toggle");
    const menu = select("#nav-menu");

    if (!toggle || !menu) return;

    toggle.addEventListener("click", () => {

        const isOpen = menu.classList.toggle("active");

        toggle.classList.toggle("active", isOpen);

        toggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

    });

    selectAll("#nav-menu a").forEach(link => {

        link.addEventListener("click", () => {

            menu.classList.remove("active");
            toggle.classList.remove("active");

            toggle.setAttribute("aria-expanded", "false");

        });

    });

}


/* ==========================================
   FOOTER
========================================== */

function initializeFooter() {

    const footer = select("#site-footer");

    if (!footer) return;

    const year = new Date().getFullYear();

    footer.innerHTML = `
        <div class="container">

            <div class="footer-content">

                <div class="footer-brand">
                    <h2>Jeevan Jagruk</h2>

                    <p>${JeevanJagruk.tagline}</p>

                    <p>
                        A healthcare knowledge,
                        education and public awareness platform.
                    </p>
                </div>

                <div class="footer-links">
                    <h3>Explore</h3>

                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="#healthcare-divisions">Healthcare Divisions</a></li>
                        <li><a href="#learning-centre">Learning Centre</a></li>
                        <li><a href="#health-resources">Resources</a></li>
                    </ul>
                </div>

                <div class="footer-links">
                    <h3>Discover</h3>

                    <ul>
                        <li><a href="#awareness-projects">Projects</a></li>
                        <li><a href="#latest-articles">Articles</a></li>
                        <li><a href="#community">Community</a></li>
                    </ul>
                </div>

            </div>

            <div class="footer-bottom">

                <p>
                    © ${year} Jeevan Jagruk.
                    All rights reserved.
                </p>

                <p>
                    Educational information does not replace
                    professional medical advice.
                </p>

            </div>

        </div>
    `;
}


/* ==========================================
   ACCESSIBILITY
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
   WEBSITE INITIALIZATION
========================================== */

function initializeWebsite() {

    initializeAnnouncement();

    initializeHeader();

    initializeFooter();

    initializeAccessibility();

    console.info(
        `${JeevanJagruk.name} initialized successfully.`
    );

}


document.addEventListener(
    "DOMContentLoaded",
    initializeWebsite
);
