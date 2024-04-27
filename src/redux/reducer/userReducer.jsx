
const INITIAL_STATE = {
    account: { email: '', auth: null, token: ' ' },
    isLoading: false,
    isError: false
}

export const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'FETCH_USER_LOGIN':
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        case 'FETCH_USER_ERROR':
            return {
                ...state,
                account: {
                    auth: false,
                },
                isLoading: false,
                isError: true
            }
        case 'FETCH_USER_SUCCESS':
            return {
                ...state,
                account: {
                    auth: true,
                },
                isLoading: false,
                isError: false
            }
        case 'USER_LOGOUT':
            localStorage.removeItem('email');
            localStorage.removeItem('token');
            return{
                ...state,
                account: {
                    email:'',
                    token:'',
                    auth: false
                }
            }
        default:
            return state;
            

    }
}