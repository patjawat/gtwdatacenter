import React from "react";
import { Dimmer, Loader, Image, Segment } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";

export default function IsLoading() {
  const store = useSelector((state) => state);
  const isLoading = store.theme.isLoading;
  
  if(isLoading){
    return <Dimmer active inverted><Loader inverted content="Loading" /></Dimmer>
  }else{
    return null;
  }

}
