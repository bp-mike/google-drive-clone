import React from 'react'
import '../../styles/header.css'
import GDLogo from '../../img/Google_Drive_icon.svg.png'
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import AppsIcon from '@material-ui/icons/Apps';


const index = ({userPhoto}) => {
    return (
        <div className='header'>
            <div className='header__logo'>
                <img src={GDLogo} alt='google_drive_logo'/>
                <span>Drive</span>
            </div>
            <div className='header__searchContainer'>
                <div className='header__searchBar'>
                    <SearchIcon />
                    <input type='text' placeholder='Search in Drive' />
                    <ExpandMoreIcon />
                </div>
            </div>
            <div className='header__icons'>
                <span>
                    <HelpOutlineIcon />
                    <SettingsIcon />
                </span>
                <AppsIcon />
                <img src={ userPhoto } alt='user photo' />
            </div>
            
        </div>
    )
}

export default index
