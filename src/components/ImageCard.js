import React from 'react';

class ImageCard extends React.Component {
    render() {
        // desctructuring => desc & urls are the properties of this.props.image
        // after this, we can use the short version
        const { description, urls } = this.props.image;

        return (
            <div>
                <img
                    alt={description}
                    src={urls.regular}
                />
            </div>
        );
    }
}

export default ImageCard;