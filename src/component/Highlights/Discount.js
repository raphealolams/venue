import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

class Discount extends Component {
    state = {
        discountStart: 0,
        discountEnd: 30
    }

    percentage = () => {
        if (this.state.discountStart < this.state.discountEnd){
            this.setState({
                discountStart: this.state.discountStart + 1
            })
        }
    }

    componentDidUpdate() {
        setTimeout(() => this.percentage(), 30)
    }


    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">
                    <Fade 
                        onReveal={() => this.percentage()}>
                        <div className="discount_percentage">
                            <span>{this.state.discountStart}%</span>

                            <span>Off</span>
                        </div>
                    </Fade>

                    <Slide right>
                        <div className="discouunt_description">
                            <h3>Purchase Tickets Before 30 June</h3>
                            <p>
                                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                            <div>
                                
                            </div>
                        </div>
                    </Slide>
                </div>
                
            </div>
        );
    }
}

export default Discount;