import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import * as Data from "../Data/data.js"
var order = 0;

Subcard.propTypes = {
  subcardTiming : PropTypes.number.isRequired,
}

function Subcard(props) {
  const listSubCards = Data.listSubCards;
  const [SubImg, setSubImg] = useState({imgLink :'./images/sub_img/default.png', text : "no data"});
  const [timer, settimer] = useState(0);
  const {subcardTiming} = props;
  function postSubcard (){
    for (let i = 0 ; i < listSubCards.length ; i++){
      if(subcardTiming == listSubCards[i].time){
        setSubImg(listSubCards[i]);
      }
    }
  }

  useEffect(() => {
    var myInterval = setInterval(postSubcard,200)
    return () => {
      clearInterval(myInterval)
    }
  },)

  const preSubcard = () => {
    order--;
    if(order <= 0){
        order = listSubCards.length;
    }
    let subImg = listSubCards.find((element,index)=>{
        return (index + 1) == order;
    })
    setSubImg(subImg)
  }
  const nextSubCard = () =>{
    order++;
    if(order > listSubCards.length){
        order = 1;
    }
    let subImg = listSubCards.find((element,index)=>{
        return (index + 1) == order;
    })
    setSubImg(subImg)
}
  return (
    <div>
      <div id="card-sub" className="card-sub">
        <div className="img-sub">
          <img src={SubImg.imgLink} alt="" />
        </div>
        <div className="sub-content">
          <span>{SubImg.text}</span>
        </div>
      </div>
      <div className="control">
        <button onClick={preSubcard} className="btn">lui</button>
        <button onClick={nextSubCard} className="btn">tiến</button>
      </div>
      <button className="lock">đã khóa</button>
    </div>
  );
}

export default Subcard;
