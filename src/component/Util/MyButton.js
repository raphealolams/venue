import React from 'react';
import Button from '@material-ui/core/Button';

import TicketIcon from '../../resources/images/icons/ticket.png'; 

const MyButton = (props) => {
    return (
        <Button>
            <img className="iconImage" alt="icone_button"
                src={TicketIcon}/>
        </Button>
    );
};

export default MyButton;