/* ==========================================
   SECTION SWITCHING
========================================== */

function showSection(sectionId, button) {

    document.querySelectorAll(".section")
        .forEach(section => {
            section.classList.remove("active-section");
        });

    document.getElementById(sectionId)
        .classList.add("active-section");

    document.querySelectorAll(".nav-btn")
        .forEach(btn => {
            btn.classList.remove("active");
        });

    button.classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

/* ==========================================
   PDF VIEWER
========================================== */

function openPDF(pdfPath) {

    const frame =
        document.getElementById("pdfFrame");

    frame.src = pdfPath;

}

/* ==========================================
   PDF FULLSCREEN
========================================== */

function fullscreenPDF() {

    const iframe =
        document.getElementById("pdfFrame");

    if (!iframe.src) {

        alert("Please open a PDF first.");

        return;
    }

    if (iframe.requestFullscreen) {

        iframe.requestFullscreen();

    } else if (iframe.webkitRequestFullscreen) {

        iframe.webkitRequestFullscreen();

    } else if (iframe.msRequestFullscreen) {

        iframe.msRequestFullscreen();

    }

}

/* ==========================================
   WEEK SEARCH
========================================== */

function searchWeeks() {

    const searchValue =
        document
            .getElementById("weekSearch")
            .value
            .toLowerCase();

    const buttons =
        document.querySelectorAll(".week-btn");

    buttons.forEach(button => {

        const text =
            button.textContent.toLowerCase();

        if (text.includes(searchValue)) {

            button.style.display = "block";

        } else {

            button.style.display = "none";

        }

    });

}

/* ==========================================
   PROJECT OPENING
========================================== */

function openProject(projectLink) {

    if (
        projectLink === "#" ||
        projectLink === "" ||
        projectLink.includes("YOUR_LINK")
    ) {

        alert(
            "Please replace YOUR_LINK with your project URL."
        );

        return;
    }

    window.open(
        projectLink,
        "_blank"
    );

}

/* ==========================================
   DARK / LIGHT MODE
========================================== */

const themeToggle =
    document.getElementById("themeToggle");

const body =
    document.body;

/* Load Saved Theme */

window.addEventListener("DOMContentLoaded", () => {

    const savedTheme =
        localStorage.getItem("portfolio-theme");

    if (savedTheme === "dark") {

        body.classList.add("dark");

        themeToggle.innerHTML =
            '<i class="fas fa-sun"></i>';

    }

});

/* Toggle Theme */

themeToggle.addEventListener("click", () => {

    body.classList.toggle("dark");

    if (
        body.classList.contains("dark")
    ) {

        localStorage.setItem(
            "portfolio-theme",
            "dark"
        );

        themeToggle.innerHTML =
            '<i class="fas fa-sun"></i>';

    } else {

        localStorage.setItem(
            "portfolio-theme",
            "light"
        );

        themeToggle.innerHTML =
            '<i class="fas fa-moon"></i>';

    }

});

/* ==========================================
   SCROLL TO TOP
========================================== */

const scrollBtn =
    document.getElementById(
        "scrollTopBtn"
    );

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        scrollBtn.style.display = "flex";

    } else {

        scrollBtn.style.display = "none";

    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/* ==========================================
   CARD ANIMATION ON LOAD
========================================== */

window.addEventListener("load", () => {

    const cards =
        document.querySelectorAll(
            ".card"
        );

    cards.forEach((card, index) => {

        card.style.opacity = "0";

        card.style.transform =
            "translateY(30px)";

        setTimeout(() => {

            card.style.transition =
                "0.6s ease";

            card.style.opacity = "1";

            card.style.transform =
                "translateY(0px)";

        }, index * 120);

    });

});

/* ==========================================
   INTERSECTION OBSERVER
========================================== */

const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.classList.add(
                        "show-animation"
                    );

                }

            });

        },

        {
            threshold: 0.15
        }

    );

document
    .querySelectorAll(
        ".stat-card, .card, .glass-card"
    )
    .forEach(item => {

        observer.observe(item);

    });

/* ==========================================
   DEFAULT PDF
========================================== */

window.onload = function () {

    const firstPDF =
        "Daily-Diary/Week-1.pdf";

    document
        .getElementById("pdfFrame")
        .src = firstPDF;

};

/* ==========================================
   KEYBOARD SHORTCUTS
========================================== */

document.addEventListener(
    "keydown",
    function (event) {

        /* Ctrl + D = Diary */

        if (
            event.ctrlKey &&
            event.key === "d"
        ) {

            event.preventDefault();

            document
                .querySelectorAll(".nav-btn")[0]
                .click();

        }

        /* Ctrl + P = Projects */

        if (
            event.ctrlKey &&
            event.key === "p"
        ) {

            event.preventDefault();

            document
                .querySelectorAll(".nav-btn")[1]
                .click();

        }

    }
);

/* ==========================================
   CONSOLE MESSAGE
========================================== */

console.log(
`
===================================
   PORTFOLIO LOADED SUCCESSFULLY
===================================

Features Enabled:

✔ Glassmorphism UI
✔ Search Weeks
✔ PDF Viewer
✔ Fullscreen PDF
✔ Dark Mode
✔ Project Links
✔ Scroll To Top
✔ Animations
✔ Responsive Layout

===================================
`
);