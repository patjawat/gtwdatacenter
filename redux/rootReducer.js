import { combineReducers } from 'redux'


import authReducer from './auth/authReducer'
import themeReducer from './themes/themeReducer'
import bookReducer from './book/bookReducer'
import userReducer from './user/userReducer'
import infomationReducer from './infomation/infomationReducer'
import personReducer from './persons/personReducer'

const rootReducer = combineReducers({
  auth:authReducer,
  theme:themeReducer,
  book:bookReducer,
  user:userReducer,
  infomation:infomationReducer,
  persons:personReducer
})

export default rootReducer;