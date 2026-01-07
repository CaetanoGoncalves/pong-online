export const appState = {
    current: "menu",
    states: {
        menu: "menu",
        placar: "placar",
        game:"game"
    }
};
export function setState(newState)
{
    appState.current = newState;    
}
