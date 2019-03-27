import React, { Component } from 'react'
class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            books: []
        }
        this.getInfo = this.getInfo.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.handleFilter = this.handleFilter.bind(this);
    
      }
    
      handleFilter(filter) {
        this.setState({
          books: this.state.books.filter(item => {
            return item.title === filter;
          })
        });
      }

 getInfo() {
    fetch(`https://book-nation.herokuapp.com/search/${this.state.title}`, {
        method: 'GET',
        header: {
            "accepts": "application/json",
            "Content-Type": "application/json"
        }
    })
    .then(response => {return response.json();})
    .then((data) => {
        console.log(data);
        
        this.setState({
            books: data
        })
        
      })
    .catch(err => {console.log("Fetch Error" + err);})
  }
  handleInputChange = () => {
    this.setState({
      title: this.search.value
    })
  }

  onSubmit(event) {
    event.preventDefault();
    this.getInfo()
  }

  render() {
    return (
    <div className = 'search-bar-wrapper'>
        <form onSubmit={this.onSubmit}>
        
        <div className = 'search'>
          <input
            placeholder="Search for..."
            className="search-bar-input"
            ref={input => this.search = input}
            onChange={this.handleInputChange}
          />
          <button className="submit" type='submit' value="submit" onChange={this.onSubmit}>Submit</button>
        </div>
        <div className="render">
            { this.state.books !== null ? this.state.books : "Your search wasn't found!" }
        </div>
      </form>
    </div>
    )
  }
}
export default SearchBar