//Notas por categoría
const notesByCategory = {
    razones: [
        "Te amo porque me haces sentir seguro",
        "Te amo porque se que puedo contar contigo",
        "Te amo por tu paciencia conmigo",
        "Te amo por dedicar tiempo conmigo",
        "Te amo porque me mostras cuánto me amas",
        "Te amo porque me haces sentir una mejor persona",
        "Te amo porque me amas tal como soy",
        "Te amo porque me haces sentir especial",
        "Me encantan tus ojos",
        "Te amo porque siempre cuidas de mi",
        "Me encantan tus labios",
        "Te amo porque siempre me apoyas",
        "Te amo porque eres mi lugar seguro",
        "Te amo porque haces que cada día sea mejor",
        "Te amo porque siempre sabes cómo hacerme sonreír",
        "Te amo porque eres increíblemente fuerte",
        "Te amo porque eres mi inspiración",
        "Te amo porque siempre me entiendes",
        "Te amo porque haces que me sienta amado",
        "Te amo porque eres mi compañera de vida",
        "Te amo porque siempre estás ahí para mí",
        "Te amo porque haces que mi vida sea completa",
        "Te amo porque eres inteligente",
        "Te amo porque sos hermosa, por dentro y por fuera",
        "Te amo porque siempre sabes que decir para animarme",
        "Te amo porque tu presencia me llena de paz",
        "Te amo porque eres mi razón para dar lo mejor de mí",
        "Te amo porque eres mi razón para creer en el amor verdadero",
        "Te amo porque simplemente no puedo imaginar mi vida sin vos",
        "Te amo porque eres mi lugar seguro en mis momentos dificiles",
        "Te amo por tu forma de cuidarme",
        "Te amo porque contigo es una aventura nueva cada día",
        "Te amo porque mi futuro sera lleno de felicidad junto a vos",
        "Te amo porque tienes sueños que admiro",
        "Te amo porque me enseñas nuevas cosas",
        "Te amo porque me haces sentir que soy muy afortunado de tenerte",
        "Te amo porque eres mi razon para creer que el amor puede ser tan mágico",
        "Te amo porque contigo cada día aburrido se vuelve en un día lleno de risas y amor",
        "Te amo porque siempre sabes calmarme cuando estoy estresado",
        "Te amo porque me haces sentir que puedo lograr cualquier cosa con tu apoyo",
        "Te amo porque me haces sentir suficiente tal como soy",
        "Te amo porque cada día contigo es un regalo",
        ""
    ],
    agradecimiento: [
        ""
    ],
    futuro: [
        "Viajaremos por el mundo juntos.",
        "Construiremos una familia llena de amor.",
        "Seguiremos creciendo juntos.",
    ],
    motivacion: [
        "Eres capaz de lograr todo lo que te propongas.",
        "Nunca dejes de creer en ti.",
        "El éxito es tuyo, sigue adelante.",
    ],
    biblicos: [
        "Y sobre todas estas cosas vestíos de amor, que es el vínculo perfecto. (Colosenses 3:14)",
        "Como llama divina es el fuego ardiente del amor. Ni las muchas aguas pueden apagarlo, ni los ríos pueden extinguirlo. (Cantares 8:6b-7a)"
    ]
};

//nota aleatoria y eliminarla de la lista
function getRandomNote(category) {
    const notes = notesByCategory[category];
    if (notes.length === 0) return null; // Si no hay más notas, retorna null

    const randomIndex = Math.floor(Math.random() * notes.length);
    const note = notes[randomIndex];
    notes.splice(randomIndex, 1); // Elimina la nota de la lista
    return note;
}

// Función para mostrar la nota como un modal
function showNoteModal(category, backgroundColor) {
    const noteText = getRandomNote(category);

    if (!noteText) {
        alert("Ya has leido todas las notas de esta categoria! 🎉");
        return;
    }

    // Crear el overlay (fondo semitransparente)
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");

    // Crear el modal de la nota
    const noteModal = document.createElement("div");
    noteModal.classList.add("note-modal");
    noteModal.textContent = noteText;
    noteModal.style.backgroundColor = backgroundColor;

    // Agregar el modal al overlay
    overlay.appendChild(noteModal);

    // Agregar el overlay al body
    document.body.appendChild(overlay);

    // Cerrar el modal al hacer clic fuera de la nota
    overlay.addEventListener("click", (event) => {
        if (event.target === overlay) {
            document.body.removeChild(overlay);
        }
    });
}

// Escuchar clics en los botones del sidebar
document.querySelectorAll(".buttons button").forEach((button) => {
    button.addEventListener("click", () => {
        const category = button.getAttribute("data-category");
        const backgroundColor = button.style.backgroundColor;
        showNoteModal(category, backgroundColor);
    });
});

let lastScrollTop = 0; // Almacena la posición del último scroll
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Deslizando hacia abajo
        header.style.transform = "translateY(-1.8%)";
    } else {
        // Deslizando hacia arriba
        header.style.transform = "translateY(0)";
    }

    lastScrollTop = scrollTop;
});
