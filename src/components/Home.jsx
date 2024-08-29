import React, {useEffect, useState} from "react"
import {Link, useNavigate} from "react-router-dom"
import "../App.css"


const Home = ({ setNomeGlobal }) => {

    const [nome, setNome] = useState("")
    console.log(nome)
    const navigate = useNavigate()

    const sendName = () => {
        if(nome.trim() == "") {
            window.alert("Digite seu Nome Abençoado")
        } else {
            setNomeGlobal(nome.trim())
            navigate("/Chat")

        }
    }
    return(
        
        <div className="home">
            <input  className="home-input"
            placeholder="Digite seu Nome..."
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            
            />
            <button className="home-button" onClick={sendName}>Adicionar</button>
        </div>
        
    )
}

export default Home