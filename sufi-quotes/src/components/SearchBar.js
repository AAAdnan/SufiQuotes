import React from 'react';
import './SearchBar.css'

class SearchBar extends React.Component {
    state = { term: '' };

    onInputChange = (e) => {
        this.setState({term : e.target.value});
    }

    onFormSubmit = event => {
        event.preventDefault();

        this.props.onFormSubmit(this.state.term);
    };


    render() {
        return <div className="search-bar ui segment">
            <form onSubmit={this.onFormSubmit} className="ui form">
                <div id="field">
                    <label>How are you feeling today?</label>
                    <input 
                        type="text"
                        value={this.state.term}
                        onChange={this.onInputChange}
                        id="input"
                    />
                </div>
            </form>
        </div>
    }
}

export default SearchBar;