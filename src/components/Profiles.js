import React, { useEffect, useState } from 'react';
import './Profile.css'


export default function Profiles({setBotData, botData}){
    const [dataset, setData] = useState([]);
    

    useEffect(() => {
        fetch('http://localhost:4000/bots')
        .then(res => res.json())
        .then(data => setData(data))
    },[])

    function handleAddbot(botInfo){
        setBotData([...botData,botInfo])
    }   
 
    const bots = dataset.map(bot=>{
        return(
            <div className="card" key={bot.id} onClick={()=>handleAddbot(bot)}>
                <div className="imgCard">
                    <img src={bot.avatar_url} alt={bot.name} className="img"/>
                </div>
                <div className="container">
                    <h4>{bot.name}</h4>
                    <p>HEALTH: {bot.health}</p>
                    <p>DAMAGE: {bot.damage}</p>
                    <p>ARMOR: {bot.armor}</p>
                    <p>BOT CLASS: {bot.bot_class}</p>
                    <p>CREATED : {bot.created_at}</p>
                    <p>UPDATES: {bot.updated_at}</p>
                    <p>PHRASE: {bot.catchphrase}</p>
                </div>
            </div>
        )
    })


    return(
        <div className="profiles">
            <div className="card-list">
                {bots}
            </div>
        </div>
    )
}