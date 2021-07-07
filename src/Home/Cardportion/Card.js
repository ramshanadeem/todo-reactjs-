import React from 'react'
import Card1 from '../../Cards/Card1/Card1'
import Card2 from '../../Cards/Card2/Card2'
import './Card.css' 
function Card() {
    return (
        <div className="card-par">
            <Card1/>
            <Card2/>
            <Card2/>
        </div>
    )
}

export default Card
