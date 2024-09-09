import React from 'react'
import "./header.css"
import NetflixLogo from '../../assets/Images/Netflix-logo.jpg'
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const Header = () => {
    return (
        <div className='outer-header-wrapper'>
            <div className='inner-header-wrapper'>
                <div className='left-header'>
                    <ul>
                        <li><img src={NetflixLogo} alt="Netflix logo" width="100" /></li>
                        <li>Home</li>
                        <li>TVShows</li>
                        <li>Movies</li>
                        <li>Latest</li>
                        <li>MyList</li>
                        <li>Browse by Language</li>
                    </ul>
                </div>
                <div className='right-header'>
                    <ul>
                        <li><SearchIcon/></li>
                        <li><NotificationsNoneIcon/></li>
                        <li><AccountBoxIcon/></li>
                        <li><ArrowDropDownIcon/></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;
