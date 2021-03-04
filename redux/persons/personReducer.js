
import personType from './personType';


const initialState = {
    data:[]
}

function personReducer(state = null, action) {
    switch (action.type) {
        case personType.GET_PERSON:
            return action.payload
                
                return {
                    ...state,
                }
        default:
            return state;
    }
}


export default personReducer;