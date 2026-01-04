/* =========================
   Screens e Estados
========================= */

const screens = {
    menu: document.getElementById("options-menu"),
    placar: document.getElementById("placar-menu"),
};

const appState = {
    current: "menu",
    states: {
        menu: "menu",
        placar: "placar",
    }
};

/* =========================
   Header e Dropdown
========================= */

const app_header = document.getElementById("app-header");
const drop_down = app_header.querySelector("#dropdown");

const drop_down_btn = drop_down.querySelector("#dropdown-btn");
const drop_down_menu = drop_down.querySelector("#dropdown-menu");
const drop_down_placar = drop_down.querySelector("#dropdown-placar");
const drop_down_options = drop_down.querySelector("#dropdown-options");

/* =========================
   Função de Estado
========================= */

function setState(newState)
{
    appState.current = newState;

    for (const screen in screens)
    {
        screens[screen].classList.remove('active');
    }
    screens[newState].classList.add('active');
    drop_down.classList.remove('open');
    app_header.classList.remove('show');
    
}

/* =========================
   Botões do Menu Principal
========================= */

const solo_button = screens.menu.querySelector("#jogar-solo-btn");
const create_room_button = screens.menu.querySelector("#criar-sala-btn");
const enter_id_button = screens.menu.querySelector("#entrar-id-btn");
const placar_button = screens.menu.querySelector("#ver-placar-btn");

/* =========================
   Eventos do Dropdown
========================= */

drop_down_btn.addEventListener('click', () => {
    drop_down.classList.toggle('open');
});

drop_down_placar.addEventListener('click', () => {

    setState(appState.states.placar);
    app_header.classList.toggle('show');
});

drop_down_options.addEventListener('click', () => {
    setState(appState.states.menu);
});

/* =========================
   Eventos do Menu
========================= */

solo_button.addEventListener('click', () => {
    console.log("Quer jogar solo");
});

create_room_button.addEventListener('click', () => {
    console.log("Quer criar sala");
});

enter_id_button.addEventListener('click', () => {
    console.log("Quer entrar na sala pelo ID");
});

placar_button.addEventListener('click', () => {
    setState(appState.states.placar);
    app_header.classList.toggle('show');
});
