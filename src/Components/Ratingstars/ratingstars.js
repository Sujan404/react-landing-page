import React from 'react';
import "./ratingstar.css";
import { useState } from 'react';

const DEFAULT_COUNT = 5;
const DEFAULT_ICON = "⭐";
// export default function Ratingstars ({count, icon,}){

export default function Ratingstars (){
let stars = Array(DEFAULT_COUNT).fill(DEFAULT_ICON);
// let stars = Array(count || DEFAULT_COUNT).fill(icon || DEFAULT_ICON);
  return <div className='starsContainer'>
        {stars.map((item, index) =>{
            return (
                <div className='star' key={index}>
                    {/* {icon ? icon : DEFAULT_ICON} */}
                    {DEFAULT_ICON}
                </div>
            );
        })}
    </div>
};
