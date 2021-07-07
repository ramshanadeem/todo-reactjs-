import React from 'react'
import Imgtodo from '../images/todo.png';
import { Typography } from "@material-ui/core";
import "./Home.css"
import Card from './Cardportion/Card'
import Contactus from '../Home/Contact/Contactus'
export default function Home() {
    return (
        <div className="home-main">
            <div className="hero-sec">
                <div className="text">
                        <Typography>
                            TODO LIST 
                        </Typography>
                        <Typography>
                        n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content
                        <br/> Lorem ipsum may be used as a placeholder before final copy is available.
                        </Typography>
                   </div>
                <img  className="imghero" src={Imgtodo}/>
            </div>
         
              
           <div>
               <Card/>
           </div>
<div>
    <Contactus/>
</div>
        </div>
    )
}
