import personType from './personType';
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
// import axios from '../../axios.config';
// // const dispatch = useDispatch();

export  function getPersonx() {

        // const { data } = await axios.get('user')
        // alert(JSON.stringify(data));
        console.log('loading')

    
    return { 
        type: personType.GET_PERSON,
        payload: data
     }
}

export function getPerson() {
    return { type: personType.GET_PERSON }
}

export function fetchImg() {
    return async dispatch => {
      return await axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
        dispatch({
          type: personType.GET_PERSON,
          payload: response.data
        });
        // console.log('loading')
      });
    };
  }

// export function buyBook() {
//     return { type: userType.BUY_BOOK }
// }

