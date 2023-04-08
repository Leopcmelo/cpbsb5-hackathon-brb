import React from 'react';
import one from '../../assets/1.png';
import '../../App.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function PageChatOne() {
    const navigate = useNavigate(); 
    const handleClick = () => {
        navigate("/PageChatTwo");
    }
  return (
    <div className="App">
      <header className="App-header">
        <img src={one} className="img" alt="logo" />
            <button onClick={handleClick} className="one">
                Me Ajuda BRB!!! 
            </button>
      </header>
    </div>
  );
}
