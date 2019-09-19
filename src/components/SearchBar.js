import React from 'react';

class SearchBar extends React.Component {

    // Controlled element - preferred
    // Information is stored in the state instead of DOM - more easily managable
    state = { term: ''};

    // With the arrow function syntax we can use 'this' prefix
    // as this way, 'state' remains in context
    onFormSubmit = event => {
        // Stops the default vanillaJS behaviour
        // i.e.: on ENTER submit data to backend and refresh the page
        event.preventDefault();

        console.log(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image search</label>
                        <input 
                            type="text" 
                            value={this.state.term} 
                            onChange={e => this.setState({ term: e.target.value })} 
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;