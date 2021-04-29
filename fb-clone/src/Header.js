import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/Home'
import FlagIcon from '@material-ui/icons/FlagOutlined'
import SubscriptionOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined'
import StoreFrontOutlinedIcon from '@material-ui/icons/StoreOutlined' 
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle'
import { Avatar, IconButton } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import ForumIcon from '@material-ui/icons/Forum'
import NotificationActiveIcon from '@material-ui/icons/NotificationsActive'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { useStateValue } from './StateProvider'


function Header() {
    const [{user},dispatch] = useStateValue();
    return (
        <div className = 'header'>
            <div className="header__left">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSbKz5Xy7maLCoRQ8e41VAeQfDv_ijUqOg95g&usqp=CAU" alt=""/>

                <div className="header__input">
                    <SearchIcon/>
                    <input placeholder="Search Facebook" type="text"></input>
                </div>
            </div>

            <div className="header__middle">
                <div className="header__option header__option--active">
                    <HomeIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <FlagIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <SubscriptionOutlinedIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <StoreFrontOutlinedIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <SupervisedUserCircleIcon fontSize="large" />
                </div>
                
            </div>

            <div className="header__right">
                <div className="header__info">
                    <Avatar  src={user.photoURL}/>
                    <h4>{user.displayName}</h4>
                </div>
                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationActiveIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default Header
