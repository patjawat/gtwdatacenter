import infomationType from './infomationType';
import { useSelector, useDispatch } from 'react-redux'

// import axios from '../../axios.config';
// // const dispatch = useDispatch();

// export  function getUser() {

//         // const { data } = await axios.get('user')
//         // alert(JSON.stringify(data));

    
//     return { 
//         type: userType.GET_USER,
//         // payload: data
//      }
// }

export function getIfomation() {
    return { type: infomationType.GET_INFOMATION }
}

// export function buyBook() {
//     return { type: userType.BUY_BOOK }
// }

