export const addFavFilm = (film) => {
    return{
        type: 'ADDFILM',
        payload: film
    }
}

export const delFavFilm = (film) => {
    return{
        type: 'DELFILM',
        payload: film
    }
}



