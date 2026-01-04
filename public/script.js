const options_menu = document.getElementById("options-menu");
const placar_menu = document.getElementById("placar-menu");
const app_header = document.getElementById("app-header");

const drop_down = app_header.querySelector("#dropdown");

const drop_down_btn = drop_down.querySelector("#dropdown-btn");
const drop_down_menu = drop_down.querySelector("#dropdown-menu");
const drop_down_placar = drop_down.querySelector("#dropdown-placar");
const drop_down_options = drop_down.querySelector("#dropdown-options");

const solo_button = options_menu.querySelector("#jogar-solo-btn");
const create_room_button = options_menu.querySelector("#criar-sala-btn");
const enter_id_button = options_menu.querySelector("#entrar-id-btn");
const placar_button = options_menu.querySelector('#ver-placar-btn');


drop_down_btn.addEventListener('click', (e) =>{
    if(drop_down.classList.contains('open'))
    {
        drop_down.classList.remove('open');
        return;
    }
    drop_down.classList.add('open');
})
drop_down_placar.addEventListener('click', show_placar)
drop_down_options.addEventListener('click', (e)=>{
    options_menu.classList.add('active');
    app_header.classList.remove('show');
    placar_menu.classList.remove('active');
})


solo_button.addEventListener('click', (e) => {
    console.log("Quer jogar solo");
});
create_room_button.addEventListener('click', (e) => {
    console.log("Quer criar sala");
});
enter_id_button.addEventListener('click', (e) =>{
    console.log("Quer entrar na sala pelo ID");
});
placar_button.addEventListener('click', show_placar);

function show_placar()
{   
    drop_down.classList.remove('open');
    app_header.classList.add('show');
    placar_menu.classList.add('active');
    options_menu.classList.remove('active');
}