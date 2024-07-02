const INITIAL_STATE = true;

export const asideReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case 'CLICK':
            return !state;
        default:
            return state;
    }
}