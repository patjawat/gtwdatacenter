import React,{useState} from "react";
import Router from 'next/router';
import dynamic from 'next/dynamic'
// add nprogress module
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import 'antd/dist/antd.css';

// add Redux Store
import { Provider } from 'react-redux'
import store from '../redux/store'
import { useDispatch, useSelector } from "react-redux";
// import LoadingScreen from '../components/loadingScreen'


// add css Style
import 'semantic-ui-css/semantic.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/globals.css'



// const dispatch = useDispatch();

// function AppLoading({status}){
//   if(status){
//     dispatch({ type: "THEME_LOADING" });

//   }else{
//     dispatch({ type: "THEME_COMPLATE" });
//   }




// }
export default function MyApp({ Component, pageProps, ...rest }) {
  

  //progress ตอนโหลดหน้าเพจ
  Router.onRouteChangeStart = (url) => {
    NProgress.start()
  };
  
  Router.onRouteChangeComplete = (url) => {
    NProgress.done()
  };
  
  Router.onRouteChangeError = (err, url) => {
    NProgress.done()
  }; 

  const Layout = Component.Layout ? Component.Layout : React.Fragment;

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}
