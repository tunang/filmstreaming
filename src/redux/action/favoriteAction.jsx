// export const addFavFilm = (film) => {
//     return{
//         type: 'ADDFILM',
//         payload: film
//     }
// }

// export const delFavFilm = (film) => {
//     return{
//         type: 'DELFILM',
//         payload: film
//     }
// }

export const handleFavButtonRedux = (film) => {
    return async (dispatch, getState) =>  {
        const films = getState();
        const exist = films.favFilms.find((x) => {
            return x._id === film._id
        });
        
        if(exist){
            dispatch({type: 'DELFILM', payload: film})
        }
        else{
            dispatch({type: 'ADDFILM', payload: film})
        }
    }
}


