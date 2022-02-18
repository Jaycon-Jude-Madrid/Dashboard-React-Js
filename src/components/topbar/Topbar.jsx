import React from 'react'
import './topbar.css'
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Link } from 'react-router-dom';

export default function Topbar() {
  
    return (
        <div className='topbar'>
            <div className="topbarWrapper">
                <div className="topLeft">
                <Link to='/'>
                    <span className="logo"><img src="https://panaghiusa.netlify.app/img/panaghiusa.png" alt-=""  width='100px' height='100px'/>Panaghiusa</span>
                    </Link>
                </div>
                <div className="topRight"> 
                <div className='topAvatar'>
    
            Log out
                <ExitToAppIcon  className='iconExit'/>
     
                
          
                </div>
                </div>
            </div>
        </div>
    )
}
