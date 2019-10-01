import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);

        // instance variable for accessing DOM elements
        // instead of document.queryselector() ect. 
        this.imageRef = React.createRef();
    };

    componentDidMount() {
        // we need an event listener to wait for image load
        // to be able to retrieve the image height
        this.imageRef.current.addEventListener('load', this.setSpans);
    };

    setSpans = () => {
        console.log(this.imageRef.current.clientHeight);
    }

    render() {
        // desctructuring => desc & urls are the properties of this.props.image
        // after this, we can use the short version
        const { description, urls } = this.props.image;

        return (
            <div>
                <img
                    ref={this.imageRef}
                    alt={description}
                    src={urls.regular}
                />
            </div>
        );
    }
}

export default ImageCard;