const options_menu = document.getElementById("options-menu");
const placar_menu = document.getElementById("placar-menu");


const show_options_button = document.getElementById("show-options-btn");

const solo_button = options_menu.querySelector("#jogar-solo-btn");
const create_room_button = options_menu.querySelector("#criar-sala-btn");
const enter_id_button = options_menu.querySelector("#entrar-id-btn");
const placar_button = options_menu.querySelector('#ver-placar-btn');


show_options_button.addEventListener('click', (e) =>{
    options_menu.classList.add('active');
    placar_menu.classList.remove('active');
    show_options_button.classList.remove('active');
});
solo_button.addEventListener('click', (e) => {
    console.log("Quer jogar solo");
});
create_room_button.addEventListener('click', (e) => {
    console.log("Quer criar sala");
});
enter_id_button.addEventListener('click', (e) =>{
    console.log("Quer entrar na sala pelo ID");
});
placar_button.addEventListener('click', (e) =>{
    placar_menu.classList.add('active');
    show_options_button.classList.add('active');
    options_menu.classList.remove('active');
});