export function movieslist() {
    return {
        type: "MOVIES_LIST",
        payload: [
            { id: "1", name: "Pulp Fiction" },
            { id: "2", name: "Pacific Rim" },
            { id: "3", name: "Rambo" }
        ]
    };
}

// prettier-ignore

export function directorslist() {
    return {
        type: "DIR_LIST",
        payload: [
            { id: "1", name: "Terantino" },
            { id: "2", name: "Scorsese" }
        ]
    };
}
