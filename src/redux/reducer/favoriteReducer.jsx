const INITIAL_STATE = [];

const favoriteReducer = (state = INITIAL_STATE, action) => {
    const film = action.payload;
    console.log(film);
    switch (action.type) {
        case 'ADDFILM':
            return [
                ...state,
                {
                    ...film
                }
            ]

        case 'DELFILM':
            return state.filter((x) => x._id !== film._id);

        default:
            return state;

    }
}

export default favoriteReducer


