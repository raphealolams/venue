import React, { Component } from 'react';
import Button from '../Util/MyButton'; 
import Zoom from 'react-reveal/Zoom'

class Pricing extends Component {

    state = {
        prices: [100, 150, 250],
        positions: ["Balcony", "Medium", "Star"],
        description: [
            "Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        ],
        linkTo: ["sales/b ", "sales/m", "sales/s"],
        delays: [500, 0, 500 ]
    }

    showBoxes = () => (
        this.state.prices.map((box, index) => (
            <Zoom key={index} delay={this.state.delays[index]}>
                <div className="pricing_item">
                    <div className="pricing_inner_wrapper">
                        <div className="pricing_title">
                            <span>$ {this.state.prices[index]}</span>
                            <span>$ {this.state.positions[index]}</span>
                        </div>

                        <div className="pricing_description">
                            {this.state.description[index]}
                        </div>

                        <div className="pricing_buttons">
                            <Button
                                text="Purchase"
                                background="#ffa808"
                                color="#ffffff"
                                link={this.state.linkTo[index]}
                            />
                        </div>
                    </div>
                </div>  
            </Zoom> 
        ))
    )

    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section ">
                    <h2>Pricing</h2>
                    <div className="pricing_wrapper">
                        {this.showBoxes()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Pricing;