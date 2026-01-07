import { appState } from "./state.js";
const screens = {
    menu: document.getElementById("options-menu"),
    placar: document.getElementById("placar-menu"),
};
export function render()
{
    for(const key in screens)
    {
        screens[key].classList.remove("active");
    }
    screens[appState.current].classList.add("active");
}