import React from 'react';
import one from '../../assets/10.png';
import '../../App.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function PageChatOne() {
    const navigate = useNavigate(); 
    const handleClick = () => {
        navigate("/PageChatTen");
    }
    
  return (
    <div className="App">
      <header className="App-header">
        <img src={one} className="img" alt="logo" />
            <button onClick={handleClick} className="third">
                Ok
            </button>
      </header>
    </div>
  );
}
