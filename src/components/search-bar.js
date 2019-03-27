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
    fetch(`http://localhost:5000/search/${this.state.title}`, {
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
        
        console.log(this.state.books);
        
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
    <div>
        <div className="error-msg">
            { this.state.books !== null ? null : "Your search wasn't found. Please try again" }
        </div>
        <form onSubmit={this.onSubmit}>
        
        <input
          placeholder="Search for..."
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
        <button type='submit' value="submit" onChange={this.onSubmit}>Submit</button>
      </form>
    </div>
    )
  }
}
export default SearchBar