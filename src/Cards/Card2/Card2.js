import React from 'react'
import  Card1img from '../../images/card1img.jpg'
import { Typography } from "@material-ui/core";
import './Card2.css'
function Card2() {
    return (
        <div className="card1-por">
          
            <div className="card1">
                <div className="card1-img">

                    <img className="img" src={Card1img}/>

                </div>
                <div className="card1-content">
                    <div className="cardP">
                    <Typography>
                        This is card1 content
                    </Typography>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Card2
