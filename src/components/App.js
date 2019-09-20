import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar'

class App extends React.Component {
    onSearchSubmit(term) {
        // Endpoint  + an object for request specification
        axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: {
                Authorization: 'Client-ID cacffa66c2846ef57a79d530cc918ee0c604dcb5cd5eea7f4dbea2eca5dbeac1'
            }
        });
    };

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar formSubmitted={this.onSearchSubmit} />
            </div>
        );
    };
}

export default App;