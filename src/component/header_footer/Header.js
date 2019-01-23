import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

let style = {
    backgroundColor: '#2f2f2f',
    boxShadow: 'none',
    padding: '10px 0px'
}



class Header extends Component {
    render() {
        return (
           <AppBar position="fixed" style={style}>
            <ToolBar>
                <div className="header_logo">
                    <div className="font_righteous header_logo_venue">The Venue</div>
                    <div className="header_logo_title">Music Event</div>
                </div>

                <IconButton aria-label="Menu" color="inherit" onClick={() => console.log("Open")}>
                    <MenuIcon/>
                </IconButton>
            </ToolBar>
           </AppBar>
        );
    }
}


export default Header
