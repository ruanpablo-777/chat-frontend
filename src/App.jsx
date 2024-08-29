import React,{ useState} from 'react';

import { BrowserRouter as Router, Route , Routes, Link} from "react-router-dom"
import Home from "./components/Home.jsx"
import ChatMes from "./components/Chat.jsx"



const Chat = () => {
  const [nomeGlobal, setNomeGlobal] = useState("")
  return (
    <div>
      
       

      <Router>
      
      <Routes>
        <Route path='/' element={<Home setNomeGlobal={setNomeGlobal}/>} />
        <Route path='Chat' element={<ChatMes nome={nomeGlobal}/>}/>
      </Routes>
      </Router>
    </div>

  );
};

export default Chat;
