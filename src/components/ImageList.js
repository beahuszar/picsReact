import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = props => {
    // .map() makes a brand new array, so we can spare a for loop with it
    const images = props.images.map((image) => {
        return <ImageCard key={image.id} image={image} />;
    });
    return <div className="image-list" >{images}</div>;
};

export default ImageList;