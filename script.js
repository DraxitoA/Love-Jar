// Datos de notas por categoría
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
        "Gracias por iluminar mi vida con tu amor cada dia",
        "Tu amor es mi mayor tesoro",
        "Agradezco a la vida por ponerte en mi camino y permitirme amarte",
        "No hay dia que no me sienta afortunado por tenerte a ti",
        "Gracias por quererme y hacerme feliz",
        "Gracias por ser mi razon para sonreir",
        "Gracias por ser mi mayor inspiracion",
        "Gracias por estar en los buenos y malos momentos, El amor lo supera todo",
        "Eres la razon por la que mi corazoncito late de felicidad y gratitud",
        "Gracias por hacerme mejor persona",
        "Agradezco cada muestra de tu amor incondicional",
        "Eres el sueño que nunca quiero dejar de vivir",
        "Eres mi paz en el caos, mi alegria en los dias oscuros",
        "No sé que hice para merecerte, pero prometo amarte y cuidarte toda la vida",
        "Cada 'te amo' tuyo es un latido mas en mi corazon",
        "Gracias por amarme como nadie más lo ha hecho",
        "Gracias por recordarme lo importante que soy para ti",
        "No importa lo que pase, siempre estare aqui para ti, como tu lo has estado para mi",
        "Cada dia a tu lado es un paso mas hacia el futuro que soñamos",
        "El tiempo vuela, pero mi amor por ti crece cada segundo",
        "Aunque no lo diga tanto, eres lo mejor que me ha pasado",
        "Aunque a veces no lo demuestre, siempre pienso en ti y en lo afortunado que soy",
        "Aunque la vida nos ponga pruebas, se que juntos podemos con todo",
        "Si tuviera que agradecerte por todo lo que has hecho y haces por mi, necesitaria otra vida entera",
        "Gracias por hacerme el hombre mas feliz con tu amor",
        "Gracias por hacer especial todos mis dias",
        "Despertar sabiendo que eres mía es el mejor buen día posible",
        "Eres la unica que le da sentido a todo",
        "Mi mundo sin ti no podría girar",
        "Mi mundo es mas brillante porque tu estas en él",
        "La distancia hace mas fuerte el amor. Pronto estaré contigo para divertirnos y pasarla bien juntos",
        "Si tuviera que vivir todas mis vidas de nuevo, en cada una te buscaría para amarte como lo hago ahora",
        "El futuro contigo dan ganas de vivirlo",
        "Te guardo en mi alma porque tu amor se vive y se siente",
        "Eres la dueña absoluta de mi corazon"
    ],
    futuro: [
        "Prometo construir un futuro donde tu sonrisa sea mi mayor logro",
        "Mi plan perfecto eres tu, y lo demás lo iremos construyendo juntos",
        "Me imagino despertando cada dia a tu lado, escuchando tu linda voz diciendo 'buenos dias'",
        "Prometo apoyarte en cada meta que te propongas",
        "Celebrare todos tus logros y sere tu mayor admirador siempre",
        "Nuestra casa estara lleno de amor",
        "Mi mayor sueño sos vos en cada etapa de mi vida",
        "Cualquier lugar donde tu estés sera mi destino favorito",
        "Quiero envejecer contigo, recordando cada aventura que vivimos juntos",
        "No importa si estamos ocupados, siempre voy a guardar espacio para compartir tiempo juntos",
        "",
    ],
    motivacion: [
        "Eres tu misma y eso es lo mas especial",
        "Pase lo que pase, estare aqui para celebrar tu exito y abrazarte en tus fracasos",
        "No importa que tan dificil sea, caminare a tu lado sin dudarlo",
        "Cuando dudes de ti misma, te prestare mis ojos porque yo te veo una verdadera guerrera",
        "Eres mi inspiracion, si tu crees en ti, yo creo el doble",
        "Te amo no solo por lo que eres, sino por lo que te has convertido: UNA MUJER MARAVILLOSA",
        ""
    ],
    biblicos: [
        "Y sobre todas estas cosas vestíos de amor, que es el vínculo perfecto. (Colosenses 3:14)",
        "Como llama divina es el fuego ardiente del amor. Ni las muchas aguas pueden apagarlo, ni los ríos pueden extinguirlo. (Cantares 8:6b-7a)",
        "El amor es sufrido, es benigno; el amor no tiene envidia, el amor no es jactancioso, no se envanece. 1 Corintios 13:4",

    ]
};

// Obtener o inicializar el estado guardado
function getSavedState() {
    const savedState = localStorage.getItem('notesState');
    return savedState ? JSON.parse(savedState) : {
        razones: [...notesByCategory.razones],
        agradecimiento: [...notesByCategory.agradecimiento],
        futuro: [...notesByCategory.futuro],
        motivacion: [...notesByCategory.motivacion],
        biblicos: [...notesByCategory.biblicos]
    };
}

// Guardar el estado actual
function saveState(state) {
    localStorage.setItem('notesState', JSON.stringify(state));
}

// Estado inicial
let state = getSavedState();

// Función para generar una nota aleatoria y actualizar el estado
function getRandomNote(category) {
    const notes = state[category];
    if (notes.length === 0) return null;

    const randomIndex = Math.floor(Math.random() * notes.length);
    const note = notes[randomIndex];
    
    // Actualizar estado
    notes.splice(randomIndex, 1);
    state[category] = notes;
    saveState(state);
    
    return note;
}

// Función para resetear todas las notas
function resetAllNotes() {
    if (confirm("¿Estás seguro que quieres reiniciar todas las notas? Esto volverá a habilitar todas las notas de todas las categorías.")) {
        state = {
            razones: [...notesByCategory.razones],
            agradecimiento: [...notesByCategory.agradecimiento],
            futuro: [...notesByCategory.futuro],
            motivacion: [...notesByCategory.motivacion],
            biblicos: [...notesByCategory.biblicos]
        };
        saveState(state);
        alert("¡Todas las notas han sido reiniciadas! 🎉");
    }
}

// Función para mostrar la nota como un modal (sin cambios)
function showNoteModal(category, backgroundColor) {
    const noteText = getRandomNote(category);

    if (!noteText) {
        alert("Ya has leído todas las notas de esta categoría! 🎉");
        return;
    }

    const overlay = document.createElement("div");
    overlay.classList.add("overlay");

    const noteModal = document.createElement("div");
    noteModal.classList.add("note-modal");
    noteModal.textContent = noteText;
    noteModal.style.backgroundColor = backgroundColor;

    overlay.appendChild(noteModal);
    document.body.appendChild(overlay);

    overlay.addEventListener("click", (event) => {
        if (event.target === overlay) {
            document.body.removeChild(overlay);
        }
    });
}

// Escuchar clics en los botones del sidebar (sin cambios)
document.querySelectorAll(".buttons button").forEach((button) => {
    button.addEventListener("click", () => {
        const category = button.getAttribute("data-category");
        const backgroundColor = button.style.backgroundColor;
        showNoteModal(category, backgroundColor);
    });
});

// Añadir botón de reset (nuevo)
function addResetButton() {
    const sidebar = document.querySelector(".sidebar");
    const resetBtn = document.createElement("button");
    resetBtn.textContent = "Reiniciar todas las notas";
    resetBtn.style.backgroundColor = "#888";
    resetBtn.style.marginTop = "20px";
    resetBtn.style.width = "100%";
    resetBtn.addEventListener("click", resetAllNotes);
    sidebar.appendChild(resetBtn);
}

// Inicializar
addResetButton();

// Efecto de scroll (sin cambios)
let lastScrollTop = 0;
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        header.style.transform = "translateY(-1.8%)";
    } else {
        header.style.transform = "translateY(0)";
    }
    lastScrollTop = scrollTop;
});
