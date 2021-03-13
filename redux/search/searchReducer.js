
import searchType from './searchType';

const initialState = {
    key: ''
}

function searchReducer(state = initialState, action) {
    switch (action.type) {
        case searchType.SEARCH_KEY:
            return action.payload
        default:
            return state;
    }
}

export default searchReducer;