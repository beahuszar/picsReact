import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = { spans: 0 };

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
        const height = this.imageRef.current.clientHeight;

        // in our css => grid-auto-rows: 150px
        // we need this number to define how many rows an image needs to render correctly
        const spans = Math.ceil(height / 10);

        // spans has the same name as state property
        // thus putting in only the variable is enough
        this.setState({ spans });
    }

    render() {
        // desctructuring => desc & urls are the properties of this.props.image
        // after this, we can use the short version
        const { description, urls } = this.props.image;

        return (
            // adding dynamic spans to the component
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
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