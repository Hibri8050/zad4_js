
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
