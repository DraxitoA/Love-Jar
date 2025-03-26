// Datos de notas por categoría
const notesByCategory = {
    razones: [
        "Por tu sonrisa que ilumina mis días",
        "Por cómo me haces sentir especial",
        "Por tu paciencia y comprensión",
        "Por tu forma única de ver la vida",
        "Por cómo me apoyas en todo momento"
    ],
    agradecimiento: [
        "Gracias por estar siempre ahí",
        "Gracias por tu amor incondicional",
        "Gracias por hacerme tan feliz",
        "Gracias por los momentos compartidos",
        "Gracias por ser mi apoyo"
    ],
    futuro: [
        "Viajaremos juntos por el mundo",
        "Construiremos un hogar lleno de amor",
        "Creceremos juntos como personas",
        "Superaremos todos los obstáculos unidos",
        "Seguiremos creando recuerdos inolvidables"
    ],
    motivacion: [
        "Eres capaz de lograr todo lo que te propongas",
        "Tu fuerza interior es admirable",
        "Cada día eres mejor persona",
        "No hay nada que no puedas lograr",
        "Tu determinación es inspiradora"
    ],
    biblicos: [
        "El amor es paciente, es bondadoso (1 Corintios 13:4)",
        "Todo lo puedo en Cristo que me fortalece (Filipenses 4:13)",
        "Porque de tal manera amó Dios al mundo (Juan 3:16)",
        "El amor todo lo soporta (1 Corintios 13:7)",
        "No temas, porque yo estoy contigo (Isaías 41:10)"
    ]
};

// Mensajes para notificaciones diarias
const dailyMessages = [
    "Hoy es un día perfecto para decirte que te amo",
    "Eres lo mejor que me ha pasado en la vida",
    "Mi corazón late más fuerte cuando estás cerca",
    "Cada día a tu lado es un regalo del cielo",
    "Eres mi razón para sonreír cada mañana",
    "No hay distancia que pueda disminuir mi amor por ti",
    "Eres mi sueño hecho realidad",
    "Contigo hasta el fin del mundo",
    "Te amo más que ayer, pero menos que mañana",
    "Eres mi persona favorita en todo el universo"
];

// Sistema de persistencia
function getSavedState() {
    const savedState = localStorage.getItem('notesState');
    return savedState ? JSON.parse(savedState) : JSON.parse(JSON.stringify(notesByCategory));
}

function saveState(state) {
    localStorage.setItem('notesState', JSON.stringify(state));
}

let state = getSavedState();

// Funciones principales
function getRandomNote(category) {
    const notes = state[category];
    if (notes.length === 0) return null;

    const randomIndex = Math.floor(Math.random() * notes.length);
    const note = notes[randomIndex];
    notes.splice(randomIndex, 1);
    state[category] = notes;
    saveState(state);
    return note;
}

function showNoteModal(category, backgroundColor) {
    const noteText = getRandomNote(category);
    if (!noteText) {
        alert("¡Ya has leído todas las notas de esta categoría! 🎉");
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

// Navegación entre secciones
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.nav-btn, .section').forEach(el => {
            el.classList.remove('active');
        });
        
        const section = btn.getAttribute('data-section');
        btn.classList.add('active');
        document.querySelector(`.${section}-section`).classList.add('active');
    });
});

// Contador de tiempo
function updateTimeTogether() {
    const startDate = new Date('2024-08-09T00:00:00');
    const now = new Date();
    const diff = now - startDate;
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    document.getElementById('time-together').textContent = 
        `❤️ ${days} días, ${hours} horas, ${minutes} minutos y ${seconds} segundos de amor ❤️`;
    
    // Actualizar display numérico
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
    
    checkMilestones(days);
    updateUpcomingMilestones(days);
}

// Sistema de hitos
function checkMilestones(days) {
    const months = Math.floor(days / 30);
    const daysInMonth = days % 30;
    
    const monthlyMessages = [
        "", "¡Nuestro primer mes juntos! 💕", "¡2 meses de amor! 🌸", 
        "¡3 meses! 🍁", "¡Cuarto mes! ☀️", "¡5 meses! 🌟", 
        "Medio año juntos ⏳", "7 meses 🥰", "¡8 meses! 💘",
        "9 meses 👶➡️❤️", "¡10 meses! 🎉", "11 meses ✨", 
        "¡FELIZ ANIVERSARIO! 🎂"
    ];

    const specialMilestones = {
        100: "¡100 días de amor! 💯", 
        200: "¡200 días juntos! 🌎",
        365: "¡UN AÑO CONTIGO! 🎊",
        500: "¡500 días de felicidad! 🌈",
        730: "¡2 AÑOS JUNTOS! 🥳"
    };

    if (daysInMonth === 0 && months > 0 && months <= 12) {
        showMilestone(monthlyMessages[months]);
    }
    
    if (specialMilestones[days]) {
        showMilestone(specialMilestones[days]);
    }
}

function updateUpcomingMilestones(currentDays) {
    const milestones = [
        { days: 100, message: "100 días" },
        { days: 200, message: "200 días" },
        { days: 365, message: "1 año" },
        { days: 500, message: "500 días" },
        { days: 730, message: "2 años" }
    ];
    
    // Agregar hitos mensuales para los próximos 12 meses
    for (let i = 1; i <= 12; i++) {
        const targetDays = Math.ceil(currentDays / 30) * 30 + (i * 30);
        milestones.push({
            days: targetDays,
            message: `${Math.floor(targetDays / 30)} meses`
        });
    }
    
    // Filtrar hitos futuros y ordenarlos
    const upcoming = milestones
        .filter(m => m.days > currentDays)
        .sort((a, b) => a.days - b.days)
        .slice(0, 5); // Mostrar solo los próximos 5
    
    const container = document.querySelector('.milestones-list');
    container.innerHTML = '';
    
    upcoming.forEach(milestone => {
        const daysLeft = milestone.days - currentDays;
        const item = document.createElement('div');
        item.className = 'milestone-item';
        item.innerHTML = `
            <i class="fas fa-calendar-check"></i>
            <div>
                <span class="milestone-days">${milestone.message}</span>
                <span>en ${daysLeft} día${daysLeft !== 1 ? 's' : ''}</span>
            </div>
        `;
        container.appendChild(item);
    });
}

function showMilestone(message) {
    if (document.querySelector('.milestone-modal')) return;
    
    const milestoneModal = document.createElement('div');
    milestoneModal.className = 'milestone-modal';
    milestoneModal.innerHTML = `
        <div class="milestone-content">
            <div class="milestone-header">🎉</div>
            <h3>${message}</h3>
            <p>${getRandomCompliment()}</p>
            <button class="close-milestone">Cerrar</button>
        </div>
    `;
    
    document.body.appendChild(milestoneModal);
    document.querySelector('.close-milestone').addEventListener('click', () => {
        document.body.removeChild(milestoneModal);
    });
}

function getRandomCompliment() {
    const compliments = [
        "Eres lo mejor que me ha pasado",
        "Mi corazón es tuyo",
        "Cada día contigo es especial",
        "Te amo más que ayer",
        "Eres mi sueño hecho realidad",
        "No cambio lo nuestro por nada",
        "Eres mi persona favorita",
        "Contigo quiero envejecer",
        "Eres mi razón para sonreír",
        "Te amo más de lo que las palabras pueden expresar"
    ];
    return compliments[Math.floor(Math.random() * compliments.length)];
}

// Notificación diaria
function showDailyNotification() {
    const lastNotificationDate = localStorage.getItem('lastNotificationDate');
    const today = new Date().toDateString();
    
    // Mostrar solo si no se ha mostrado hoy
    if (lastNotificationDate !== today) {
        const notification = document.querySelector('.daily-notification');
        const message = dailyMessages[Math.floor(Math.random() * dailyMessages.length)];
        
        document.querySelector('.notification-message').textContent = message;
        notification.classList.add('show');
        
        localStorage.setItem('lastNotificationDate', today);
        
        // Ocultar después de 10 segundos
        setTimeout(() => {
            notification.classList.remove('show');
        }, 10000);
    }
}

// Cerrar notificación manualmente
document.querySelector('.close-notification').addEventListener('click', () => {
    document.querySelector('.daily-notification').classList.remove('show');
});

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    // Botones de categorías
    document.querySelectorAll(".buttons button").forEach(btn => {
        btn.addEventListener("click", () => {
            const category = btn.getAttribute("data-category");
            const backgroundColor = window.getComputedStyle(btn).backgroundColor;
            showNoteModal(category, backgroundColor);
        });
    });
    
    // Activar sección de notas por defecto
    document.querySelector('.notes-section').classList.add('active');
    
    // Iniciar contador
    updateTimeTogether();
    setInterval(updateTimeTogether, 1000);
    
    // Mostrar notificación diaria (con retraso para mejor UX)
    setTimeout(showDailyNotification, 3000);
    
    // Inicializar calendario
    flatpickr("#calendar", {
        locale: "es",
        dateFormat: "d/m/Y",
        minDate: "2024-08-09",
        maxDate: new Date().fp_incr(365 * 5), // 5 años en el futuro
        onChange: function(selectedDates, dateStr, instance) {
            if (selectedDates.length > 0) {
                const selectedDate = selectedDates[0];
                const startDate = new Date('2024-08-09T00:00:00');
                const diff = selectedDate - startDate;
                const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                
                showMilestone(`Fecha especial seleccionada: ${dateStr} (${days} días desde nuestro inicio)`);
            }
        }
    });
    
    // Detección de dispositivo
    if (window.innerWidth > 768) {
        document.body.innerHTML = `
            <div class="mobile-message">
                <h2>💕 Esta app es solo para móviles</h2>
                <p>Abre esta página desde tu teléfono para disfrutar de nuestra experiencia especial</p>
                <p><small>Con todo mi amor - Tu pareja</small></p>
            </div>
        `;
    }
});
