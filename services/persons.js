import axios from 'axios';
import Axios from '../axios.config'
function getAll () {
    return  Axios.get('datacenter/persons')
        // .then(items => dispatch({ type: personType.GET_PERSON, items }));
    console.log('loading')
    
}
export default {
    getAll,
    // get,
    // create,
    // update,
    // remove,
    // removeAll,
    // findByTitle
  };
