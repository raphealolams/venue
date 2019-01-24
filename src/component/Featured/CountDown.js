import React, { Component } from 'react';

class CountDown extends Component {

    state = {

    }


    render() {
        return (
            <div className="countdown_wrapper">
                <div className="countdown_top">
                    Event Starts In
                </div>

                <div className="countdown_bottom">
                    <div className="countdown_item">
                        <div className="countdown_time">
                            23
                        </div>
                        <div className="countdown_tag">
                            Days
                        </div>
                    </div>

                    <div className="countdown_item">
                        <div className="countdown_time">
                            2
                        </div>
                        <div className="countdown_tag">
                            Hours
                        </div>
                    </div>

                    <div className="countdown_item">
                        <div className="countdown_time">
                            3
                        </div>
                        <div className="countdown_tag">
                            Minutes
                        </div>
                    </div>

                    <div className="countdown_item">
                        <div className="countdown_time">
                            10
                        </div>
                        <div className="countdown_tag">
                            Seconds
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CountDown;