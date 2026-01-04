import { setState, appState } from "./state.js";
import { render } from "./router.js";

export function init_ui()
{
    const placar_button = document.getElementById("options-menu").querySelector("#ver-placar-btn");
    const app_header = document.getElementById("app-header");
    const drop_down = app_header.querySelector("#dropdown");

    const drop_down_btn = drop_down.querySelector("#dropdown-btn");
    const drop_down_placar = drop_down.querySelector("#dropdown-placar");
    const drop_down_options = drop_down.querySelector("#dropdown-options");

    placar_button.addEventListener('click', () => {
        setState(appState.states.placar);
        app_header.classList.toggle('show');
        render();
    });
    drop_down_btn.addEventListener('click', () => {
        drop_down.classList.toggle('open');
        render();
    });
    drop_down_placar.addEventListener('click', () => {

        setState(appState.states.placar);
        render();
    });

    drop_down_options.addEventListener('click', () => {
        setState(appState.states.menu);
        app_header.classList.toggle('show');
        render();
    });
}