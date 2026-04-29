
const themeBtn = document.getElementById('themeButton');
const toggleBtn = document.getElementById('toggleBtn');


const sections = document.querySelectorAll('section');
const targetSection = sections[5]; 


themeBtn.addEventListener('click', () => {
    if (!document.body.classList.contains('green-theme') && !document.body.classList.contains('red-theme')) {
        // Если нет тем — включаем зеленую
        document.body.classList.add('green-theme');
    } else if (document.body.classList.contains('green-theme')) {
        // Если зеленая — меняем на красную
        document.body.classList.remove('green-theme');
        document.body.classList.add('red-theme');
    } else {
        // Если красная — возвращаемся к стандарту
        document.body.classList.remove('red-theme');
    }
    console.log("Styl strony został zaktualizowany");
});


toggleBtn.addEventListener('click', () => {
    targetSection.classList.toggle('hidden');
    console.log("Widoczność sekcji zmieniona");
});
const contactForm = document.getElementById('contactForm');
const validationMessage = document.getElementById('validationMessage');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    validationMessage.innerText = "";
    validationMessage.className = "";

    const name = document.getElementById('userName').value;
    const surname = document.getElementById('userSurname').value;
    const email = document.getElementById('userEmail').value;

    const hasDigits = /\d/;

    if (hasDigits.test(name) || hasDigits.test(surname)) {
        validationMessage.innerText = "Błąd: Imię i nazwisko nie mogą zawierać cyfr!";
        validationMessage.classList.add('error-text');
        return;
    }

    if (!email.includes('@') || !email.includes('.')) {
        validationMessage.innerText = "Błąd: Wprowadź poprawny adres e-mail!";
        validationMessage.classList.add('error-text');
        return;
    }

    validationMessage.innerText = "Formularz został wysłany pomyślnie!";
    validationMessage.classList.add('success-text');
    
    contactForm.reset();
});
