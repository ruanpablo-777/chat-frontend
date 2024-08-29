
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { BrowserRouter as Router, Route , Routes, Link,useNavigate} from "react-router-dom"
import Home from "./Home.jsx"
import "../App.css"
const socket = io('https://chat-backend-gules-five.vercel.app/', {
    transports: ['websocket']
  });
   // Substitua pela URL do seu servidor
  
   function ChatMes({nome}) {
     const [message, setMessage] = useState('');
     const [messages, setMessages] = useState([]);
     const navigate = useNavigate()
     
     console.log(nome)
  useEffect(() => {
    socket.on('receiveMessage', (newMessage) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });

    return () => {
      socket.off('receiveMessage');
    };
  }, []);

  const sendMessage = () => {
    socket.emit('sendMessage', `${nome}: ` + message);
    setMessage('');
  };

 const handleKeyDown = (event) => {
    if(event.key == "Enter" ){
     socket.emit("sendMessage",`${nome}: `+ message)
     setMessage("")
     //sendMessage()
      
    }
 }
    return(
        <div className='container'>
             <div className="nav">
               <nav>
                         <ul>
                           <li>
                <Link to="/">Home</Link>
                           </li>
                           <li>
                <Link to="/Chat">Chat</Link>
                           </li>
                         </ul>
                       </nav>
             </div>
        <div className="content">
          <div id="mess">
            
              {messages.map((msg, index) => {
              const isOwnMessage = msg.startsWith(`${nome}:`)
              return(
                <div  key={index}  className={isOwnMessage ? "message own-message": "message"} >{msg}</div>
              )})}
            </div>
          
          <div className="inputs">
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Digite sua mensagem"
            />
            <button onClick={sendMessage}>Enviar</button>
          </div>
        </div>
          </div>
    )
}

export default ChatMes