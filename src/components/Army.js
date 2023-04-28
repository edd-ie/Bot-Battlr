import React from 'react';
import './Army.css'


export default function Army({botData, discharge}) {

  function handleDischarge(id){
    let remaining = botData.filter(bot=>bot.id!==id)
    discharge(remaining)
  }
  
  const bots = botData.map(bot=>{
        return(
            <div className="armyCard" key={`${bot.name}${bot.id}`} onClick={()=>handleDischarge(bot.id)}>
                <div className="armyCard_imgCard">
                    <img src={bot.avatar_url} alt={bot.name} className="armyCard_img"/>
                </div>
                <div className="armyCard_container">
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
  

  return (
    <div className="army">
      {bots}
    </div>
  );
}