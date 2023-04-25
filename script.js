const button1 = document.querySelector('.button1');
const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.close');

button1.addEventListener('click',()=>{
    modal.classList.remove('hidden');
    modal.classList.add('visible')
});
closeButton.addEventListener('click', CloseModal);

function ChangeClass() {
}
function CloseModal() {
    modal.classList.add('hidden');
    modal.classList.remove('visible');
}