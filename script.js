const button2 = document.querySelector('.button2');
const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.close');

button2.addEventListener('click',()=>{
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