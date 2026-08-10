// ========================================
// MENU MOBILE
// ========================================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", () => {

        navMenu.classList.toggle("show");

        const icon = menuBtn.querySelector("i");

        if (navMenu.classList.contains("show")) {

            icon.classList.remove("fa-bars");

            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        }

    });

}


// ========================================
// MODO ESCURO
// ========================================

const darkMode = document.getElementById("darkMode");

if (darkMode) {

    darkMode.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        const icon = darkMode.querySelector("i");

        if (document.body.classList.contains("dark")) {

            icon.classList.remove("fa-moon");

            icon.classList.add("fa-sun");

        } else {

            icon.classList.remove("fa-sun");

            icon.classList.add("fa-moon");

        }

    });

}


// ========================================
// AUMENTAR FONTE
// ========================================

const increaseFont = document.getElementById("increaseFont");

if (increaseFont) {

    increaseFont.addEventListener("click", () => {

        document.body.classList.toggle("large-text");

    });

}


// ========================================
// ALTO CONTRASTE
// ========================================

const contrastMode = document.getElementById("contrastMode");

if (contrastMode) {

    contrastMode.addEventListener("click", () => {

        document.body.classList.toggle("contrast");

    });

}


// ========================================
// VOLTAR AO TOPO
// ========================================

const topBtn = document.getElementById("topBtn");

if (topBtn) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {

            topBtn.style.display = "block";

        } else {

            topBtn.style.display = "none";

        }

    });


    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}


// ========================================
// PORTAL DE ESCUTA
// ========================================

const listeningForm =
    document.getElementById("listeningForm");

const welcomeMessage =
    document.getElementById("welcomeMessage");


if (listeningForm) {

    listeningForm.addEventListener("submit", (event) => {

        event.preventDefault();


        const name =
            document.getElementById("name").value;


        welcomeMessage.innerHTML = `

            <h3>
                Obrigada por compartilhar, ${name}! 💜
            </h3>

            <p>
                Seus sentimentos são importantes.
                Lembre-se de procurar uma pessoa adulta
                de confiança ou um profissional da escola
                quando precisar de apoio.
            </p>

        `;


        welcomeMessage.style.display = "block";


        listeningForm.reset();

    });

}


// ========================================
// QUIZ
// ========================================

const quizForm =
    document.getElementById("quizForm");

const quizResult =
    document.getElementById("quizResult");


if (quizForm) {

    quizForm.addEventListener("submit", (event) => {

        event.preventDefault();


        const answers = {

            q1: "b",

            q2: "b",

            q3: "a",

            q4: "b",

            q5: "b"

        };


        let score = 0;


        Object.keys(answers).forEach((question) => {

            const selected =
                document.querySelector(
                    `input[name="${question}"]:checked`
                );


            if (
                selected &&
                selected.value === answers[question]
            ) {

                score++;

            }

        });


        let message = "";


        if (score === 5) {

            message =
                "Excelente! Você demonstrou que entendeu muito bem o tema. 💜";

        } else if (score >= 3) {

            message =
                "Muito bem! Você já conhece pontos importantes sobre o tema.";

        } else {

            message =
                "Continue aprendendo! Informação é uma ferramenta importante para combater a violência.";

        }


        quizResult.innerHTML = `

            <h2>
                Você acertou ${score} de 5!
            </h2>

            <p>
                ${message}
            </p>

            <button
                class="btn btn-white"
                onclick="location.reload()">

                Refazer quiz

            </button>

        `;


        quizResult.style.display = "block";


        quizResult.scrollIntoView({

            behavior: "smooth",

            block: "center"

        });

    });

}