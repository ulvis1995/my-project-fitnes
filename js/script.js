let modalOpenButton = document.querySelector('.promotion');
let modalOpenUser = document.querySelector('.user-list');
let login = document.querySelector('.modal-login');
let modal = document.querySelector('.promotion-call');
let overlay = document.querySelector('.modal-overlay');
let modalOpenMap = document.querySelector('.map-adres');
let map = document.querySelector('.modal-map');
modalOpenButton.addEventListener('click', function(e){
    e.preventDefault();
    modal.classList.add('active');
    overlay.classList.add('active');
});
modalOpenUser.addEventListener('click', function(e){
    e.preventDefault();
    login.classList.add('active');
    overlay.classList.add('active');
});
modalOpenMap.addEventListener('click', function(e){
    e.preventDefault();
    map.classList.add('active');
    overlay.classList.add('active');
});
let modalClose = document.querySelectorAll('.modal-close')
modalClose.forEach(item => item.addEventListener('click', function(){
    modal.classList.remove('active');
    login.classList.remove('active');
    map.classList.remove('active');
    overlay.classList.remove('active');
}));