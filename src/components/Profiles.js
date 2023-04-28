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
        let check=false;
        botData.forEach(data =>{
            if(data.id === botInfo.id){
                check=true
                return 0 ;
            }
        })
        
        if(check === false){
            setBotData([...botData,botInfo])
        }
    }  
    
    function handleDelete(id){
        let deleteData = dataset.filter(data=>data.id !== id)
        setData(deleteData)
        alert('Discharge Successful')
    }
 
    const bots = dataset.map(bot=>{
        return(
            <div className="card" key={bot.id} onClick={()=>handleAddbot(bot)}>
                <div className="imgCard">
                    <button onClick={()=>handleDelete(bot.id)}>Discharge❌</button>
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