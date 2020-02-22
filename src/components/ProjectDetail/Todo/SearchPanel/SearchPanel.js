import React, { Component } from 'react';
import './SearchPanel.css';

class SearchPanel extends Component {

  state = {
    term: ''
  }

  onChangeHandler = (e) => {
    const term = e.target.value;
    this.setState({term})
    this.props.searchFilter(term);
  }

  render() {
    return (
      <input type='text' 
              className="form-control search-input"
              placeholder='search' 
              onChange={this.onChangeHandler}
              value={this.state.text}/>
    )
  }
}

export default SearchPanel;