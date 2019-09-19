import React from 'react';

class SearchBar extends React.Component {

    // called by onChange JSX prop
    // no parenteses needed in JSX, as it is a callback
    onInputChange(event) {
        console.log(event.target.value);
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Image search</label>
                        <input type="text" onChange={this.onInputChange}></input>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;