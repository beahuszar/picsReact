import React from 'react';

class SearchBar extends React.Component {

    // Controlled element - preferred
    // Information is stored in the state instead of DOM - more easily managable
    state = { term: ''};

    render() {
        return (
            <div className="ui segment">
                <form className="ui form">
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