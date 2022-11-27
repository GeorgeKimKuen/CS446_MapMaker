import React from 'react'
import './Lobby.css'

function Lobby(props) {
  return (props.trigger) ? (
    <div className='lobby'>
        <div  className='lobby-inner'>
            <button className="host-button" onClick={() => props.setTrigger(false)}>Host Room</button>
            <input className="join-text" type="text"  placeholder="Enter Lobby Code"></input>
            <button className="join-button" onClick={() => props.setTrigger(false)}>Join Room</button>
            
            {props.children}
        </div>
    </div>
  ) :"";
}

export default Lobby
