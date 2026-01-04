export const appState = {
    current: "menu",
    states: {
        menu: "menu",
        placar: "placar",
    }
};
export function setState(newState)
{
    appState.current = newState;    
}
