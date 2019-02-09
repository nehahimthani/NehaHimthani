import React from 'react';
import DropDown from './Library/dropDownComponent';
import Carousel from './Library/carouselComponent';

export default class SlidePages extends React.Component {
    constructor (props) {
        super(props) 
        this.state = {
            dropDownArray : [],
            slides: 0,
            selectedSlideNumber : [],
            show: false,
        }
    };

    getSelectedValue=(value)=>{
        if(value !== 'Select Slides') {
            this.setState(prevState => ({
                selectedSlideNumber: [...prevState.selectedSlideNumber, value] 
              }))
        }
        this.setState({slides : value})
    }
    showSelectedValue=()=>{
        alert('User selected' + " "+ this.state.selectedSlideNumber.toString());
    }

    componentWillMount () {
        let array = [];
        for(let i = 0; i<= 20 ;i ++ ){
         array.push({ 
            id: i,
            value: i,
            optionText: i === 0 ? 'Select Slides' : i,
        })
        }
        this.setState({dropDownArray : array});
    }
    render() {
        console.log();
        return (
            <React.Fragment>
                {this.props.location && this.props.location.state && this.props.location.state.loginToken ?
                <div>
                <div className="pre-guide"> <span> Please Select Slides Between 1 to 20 </span></div>
                <DropDown className="drop-down" options={this.state.dropDownArray} onChange={this.getSelectedValue}/>
                <Carousel slideNumber={this.state.slides} selectedSlides={this.state.selectedSlideNumber}/>
                <div>{this.state.slides > 0 ? <input type="button" value="Finish" className="finishButton" onClick={this.showSelectedValue} /> : null}</div>
                 </div>
                : null }
            </React.Fragment>
        )
    }
}
