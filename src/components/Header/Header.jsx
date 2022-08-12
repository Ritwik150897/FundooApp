import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import ViewStreamOutlinedIcon from '@mui/icons-material/ViewStreamOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AppsIcon from '@mui/icons-material/Apps';
import Avatar from '@mui/material/Avatar';
import { lightBlue, grey } from '@mui/material/colors';
import InputBase from '@mui/material/InputBase';
import './Header.css';

function Header(props) {

    const openMenu = () => {
        props.listenToHeader()
    }

    return (
        <div>
            <div className="NavBarMainContainer">
                <div className="HamBurger">
                    <MenuIcon fontSize='medium' onClick = {openMenu}/>
                </div>
                <div className="Logo">
                    <img src='./KeepLogo.png' />
                </div>
                <div className="KeepName">
                    <span id='keep'>Keep</span>
                </div>
                <div className="Blank1"></div>
                <div className="SearchBox">
                    <SearchIcon fontSize='medium' id='search' />
                    {/* <TextField id="filled-search" label="Search" type="search" /> */}
                    <InputBase id="filled-search" placeholder="Search" />
                </div>
                <div className="Blank2"></div>
                <div className="MenuIcons">
                    <RefreshIcon fontSize='medium' sx={{color: grey[600] }}/>
                    <ViewStreamOutlinedIcon fontSize='medium' sx={{color: grey[600] }}/>
                    <SettingsOutlinedIcon fontSize='medium' sx={{color: grey[600] }}/>
                </div>
                <div className="Avatar">
                    <AppsIcon fontSize='medium' />
                    <Avatar sx={{ width: 35, height: 35,  bgcolor: lightBlue[500] }}>RD</Avatar>
                </div>
                
            </div>
        </div>
    )
}

export default Header
