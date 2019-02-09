import React from 'react';
import './carousel.css';
class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.slideIndex = 1;
        this.slideNumber = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve','Thirteen',
            'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen', 'twenty'];
        this.state = {
            show: false,
        }

    }
    componentDidMount() {
        this.showSlides(this.slideIndex);
    }
    componentDidUpdate() {
        this.showSlides(this.slideIndex);
    }
    showSlides = (n) => {
        var i;
        var slides = document.querySelectorAll(".mySlides");
        var mainDiv = document.querySelector(".slideshow-container");
        mainDiv.style.display = 'none';
        if (slides.length > 0) {
            if (n > slides.length) { this.slideIndex = 1 }
            if (n < 1) { this.slideIndex = slides.length }
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slides[this.slideIndex - 1].style.display = "block";
            mainDiv.style.display = 'block';
        }
    }
    plusSlides = (n) => {
        this.showSlides(this.slideIndex += n);
    }
     
    render() {
        var slides = [];
        const pStyle = {
                marginTop: '10px'
                };
        for (var i = 0; i < this.props.slideNumber; i++) {
            slides.push(<div className="mySlides fade" key={i}>
                <div className="side-text">{i+1}/{this.props.slideNumber}</div>
                <div className="text">{this.slideNumber[i]}</div>
            </div>);
        }
       
        return (
            <React.Fragment>
                <div className="slideshow-container" style={pStyle}>
                    {slides}
                    <a className="prev" onClick={() => this.plusSlides(-1)}>&#10094;</a>
                    <a className="next" onClick={() => this.plusSlides(1)}>&#10095;</a>
                </div>
            </React.Fragment>
        )
    }
}
export default Carousel;