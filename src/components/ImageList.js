import React from 'react';

const ImageList = props => {
    // .map() makes a brand new array, so we can spare a for loop with it
    const images = props.images.map(({ urls, description, id }) => {
        return <img src={urls.regular} alt={description} key={id} />;
    });
    return <div className="image-list" >{images}</div>;
};

export default ImageList;