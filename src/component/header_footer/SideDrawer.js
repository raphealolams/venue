import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';



const SideDrawer = (props) => {
    return (
        <Drawer anchor="right" open={props.open} onClose={() => props.onClose(false)}>
            

            <List component="nav">
                <ListItem button 
                    onClick={() => console.log("event starts")}>
                    Event Starts In
                </ListItem>

                <ListItem button 
                    onClick={() => console.log("venue info")}>
                    Venue Info
                </ListItem>

                <ListItem button 
                    onClick={() => console.log("HighLights")}>
                    HighLights
                </ListItem>

                <ListItem button 
                    onClick={() => console.log("pricing")}>
                    Pricing
                </ListItem> 

                <ListItem button 
                    onClick={() => console.log("location")}>
                    Location
                </ListItem> 
            </List>
        </Drawer>
    );
};

export default SideDrawer;