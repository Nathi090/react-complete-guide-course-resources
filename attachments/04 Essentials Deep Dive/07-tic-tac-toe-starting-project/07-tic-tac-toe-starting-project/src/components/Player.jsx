import { useState } from "react"

export default function Player({initialName, symbol}){
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick(){
        //setIsEditing(!isEditing); DONT DO THIS IN REACT, React schedules the action to be performed
            //in the future, is not instand
        setIsEditing(editing => !editing); //Do it like this, so it does not get scheduled but happens inmediately
    }

    function handleChange(event){//we are passing a pointer here from the onChange below
        console.log(event)
        setPlayerName(event.target.value)
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>;
    //let btnCaption = 'Edit';

    if (isEditing){
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChange}/>//if I use "value" instead of defaultValue it would be permanent not editable...
            //BUT I have a useState there so it will actually be updated...
            //ALSO, this is two way binding (or alike)
        //btnCaption="Save"
    }
   


    return(
        <li>
              <span className="player">
              {/* Another solution: */}
                {/* {isEditing ? 
                    <input type="text" required /> : 
                    ( <span className="player-name">{name}</span>)
                }               */}
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
              </span>
              <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
            </li>
    )
}