import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
    state = { images: [] };

    // have to be arrow function iot "this.setState" can be used
    onSearchSubmit = async (term) => {
        // Endpoint  + an object for request specification
        const response = await unsplash.get('/search/photos', {
            params: { query: term },
        });

        this.setState({ images: response.data.results });
    };

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar formSubmitted={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        );
    };
}

export default App;