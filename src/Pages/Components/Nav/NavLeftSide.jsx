import React from 'react';
import logo from '../../../assets/Images/logo.png';
import { Link } from 'react-router-dom';

export default function NavLeftSide(props) {

  return (
    <div>
        <img src={logo} alt="Logo" style={{width:"25%",display:"block",margin:props.alignCenter}} />
    </div>
  )
}
