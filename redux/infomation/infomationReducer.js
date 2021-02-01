
import infomationType from './infomationType';


const initialState = {
    data:null
}

function userReducer(state = null, action) {
    switch (action.type) {
        case infomationType.GET_INFOMATION:
            return action.payload
                
                return {
                    ...state,
                }
        default:
            return state;
    }
}


export default userReducer;