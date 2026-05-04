const toggleBtn = document.querySelector('.menu-toggle');
const rightSideHeader = document.querySelector('.rightSideHeader');

console.log(toggleBtn);
toggleBtn.addEventListener('click', () => {
    rightSideHeader.classList.toggle('active');
    console.log(navs.classList);
});