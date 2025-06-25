// Particle Animation
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 8 + 's';
        particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
        particlesContainer.appendChild(particle);
    }
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll animations
function animateOnScroll() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', animateOnScroll);

// Calendar functionality
let currentDate = new Date();
const months = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 
               'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];

function generateCalendar() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    document.getElementById('currentMonth').textContent = `${months[month]} ${year}`;
    
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    const calendarGrid = document.getElementById('calendarGrid');
    calendarGrid.innerHTML = '';
    
    // Add day headers
    const dayHeaders = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];
    dayHeaders.forEach(day => {
        const header = document.createElement('div');
        header.textContent = day;
        header.style.fontWeight = '500';
        header.style.color = '#ffffff';
        header.style.marginBottom = '1rem';
        header.style.letterSpacing = '1px';
        calendarGrid.appendChild(header);
    });
    
    // Add empty cells for days before month starts
    for (let i = 0; i < firstDay; i++) {
        const emptyDay = document.createElement('div');
        calendarGrid.appendChild(emptyDay);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement('div');
        dayElement.className = 'calendar-day';
        dayElement.textContent = day;
        
        // Simulate available/booked days
        const randomStatus = Math.random();
        if (randomStatus > 0.7) {
            dayElement.classList.add('available');
            dayElement.addEventListener('click', () => {
                alert(`Termin für ${day}. ${months[month]} ${year} anfragen`);
            });
        } else if (randomStatus < 0.3) {
            dayElement.classList.add('booked');
        }
        
        calendarGrid.appendChild(dayElement);
    }
}

function previousMonth() {
    currentDate.setMonth(currentDate.getMonth() - 1);
    generateCalendar();
}

function nextMonth() {
    currentDate.setMonth(currentDate.getMonth() + 1);
    generateCalendar();
}

// Modal functionality
function openModal(type) {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    
    let content = '';
    
    switch(type) {
        case 'impressum':
            content = `
                <h2>Impressum</h2>
                <p><strong>Angaben gemäß § 5 TMG:</strong></p>
                <p>AnVo Studio<br>
                Luna Müller<br>
                Leipzig Südvorstadt</p>
                
                <p><strong>Kontakt:</strong><br>
< triy3a-codex/codebasis-für-anfänger-erklären
                Telefon: Auf Anfrage<br>
                E-Mail: anna.vogelw@googlemail.com</p>
=======
                Telefon: +49 123 456 7890<br>
                E-Mail: info@anvostudio.de</p>
> main
                
                <p><strong>Umsatzsteuer-ID:</strong><br>
                Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz: DE123456789</p>
                
                <p><strong>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</strong><br>
                Luna Müller<br>
                Leipzig Südvorstadt</p>
            `;
            break;
        case 'datenschutz':
            content = `
                <h2>Datenschutzerklärung</h2>
                <p><strong>1. Datenschutz auf einen Blick</strong></p>
                <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen.</p>
                
                <p><strong>2. Allgemeine Hinweise und Pflichtinformationen</strong></p>
                <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
                
                <p><strong>3. Datenerfassung auf unserer Website</strong></p>
                <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.</p>
                
                <p><strong>4. Ihre Rechte</strong></p>
                <p>Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten.</p>
            `;
            break;
        case 'agb':
            content = `
                <h2>Allgemeine Geschäftsbedingungen</h2>
                <p><strong>1. Geltungsbereich</strong></p>
                <p>Diese Geschäftsbedingungen gelten für alle Verträge zwischen AnVo Studio und ihren Kunden.</p>
                
                <p><strong>2. Terminvereinbarung</strong></p>
                <p>Termine werden nur nach vorheriger Absprache vergeben. Eine Anzahlung von 50% ist bei Terminvereinbarung fällig.</p>
                
                <p><strong>3. Stornierung</strong></p>
                <p>Termine können bis 48 Stunden vor dem vereinbarten Termin kostenfrei storniert werden.</p>
                
                <p><strong>4. Hygienebestimmungen</strong></p>
                <p>Alle gesetzlichen Hygienebestimmungen werden eingehalten. Kunden sind verpflichtet, wahrheitsgemäße Angaben zu ihrem Gesundheitszustand zu machen.</p>
            `;
            break;
        default:
            content = `
                <h2>Portfolio Bild</h2>
                <div style="width: 100%; height: 300px; background: linear-gradient(135deg, #1a1a1a, #2a2a2a); border: 1px solid #333333; display: flex; align-items: center; justify-content: center; margin: 1rem 0; color: #666666; font-style: italic;">
                    [Großes Tattoo Bild hier]
                </div>
                <p>Detailansicht des Tattoos mit Beschreibung der verwendeten Techniken und Entstehungsgeschichte.</p>
            `;
    }
    
    modalBody.innerHTML = content;
    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Form submission
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            this.reset();
            const message = document.getElementById('form-success');
            if (message) {
                message.style.display = 'block';
                setTimeout(() => {
                    message.style.display = 'none';
                }, 5000);
            }
        });
    }

    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenu) {
        mobileMenu.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
});

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    createParticles();
    if (document.getElementById('calendarGrid')) {
        generateCalendar();
    }
    animateOnScroll();
});
