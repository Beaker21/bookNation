import React, { Component } from "react";
import axios from "axios";
import DropzoneComponent from "react-dropzone-component";

import "../../../node_modules/react-dropzone-component/styles/filepicker.css";
import "../../../node_modules/dropzone/dist/min/dropzone.min.css";

export default class PortfolioForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      spanish_title: "",
      author: "",
      cost: "",
      genre: "",
      spanish_genre: "",
      summary: "",
      spanish_summary: "",
      cover_url: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.componentConfig = this.componentConfig.bind(this);
    this.djsConfig = this.djsConfig.bind(this);
    this.handleCoverDrop = this.handleCoverDrop.bind(this);

    this.coverRef = React.createRef();
  }

  handleCoverDrop() {
    return {
      addedfile: file => this.setState({ cover_url: file })
    };
  }

  componentConfig() {
    return {
      iconFiletypes: [".jpg", ".png"],
      showFiletypeIcon: true,
      postUrl: "https://httpbin.org/post"
    };
  }

  djsConfig() {
    return {
      addRemoveLinks: true,
      maxFiles: 1
    };
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    axios
      .post(
        "https://book-nation.herokuapp.com/library/input",
        { withCredentials: true }
      )
      .then(response => {
        this.props.handleSuccessfulFormSubmission(response.data.book);

        this.setState({
            title: "",
            spanish_title: "",
            author: "",
            cost: "",
            genre: "",
            spanish_genre: "",
            summary: "",
            spanish_summary: "",
            cover_url: ""
        });

        [this.coverRef].forEach(ref => {
          ref.current.dropzone.removeAllFiles();
        });
      })
      .catch(error => {
        console.log("portfolio form handleSubmit error", error);
      });

    event.preventDefault();
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit} className="portfolio-form-wrapper">
          <div className="two-column">
            <input
              type="text"
              name="title"
              placeholder="Book Title"
              value={this.state.title}
              onChange={this.handleChange}
            />

            <input
              type="text"
              name="spanish_title"
              placeholder="Spanish Title"
              value={this.state.spanish_title}
              onChange={this.handleChange}
            />
          </div>
 
          <div className="two-column">
                <input
                    type="text"
                    name="author"
                    placeholder="Author"
                    value={this.state.author}
                    onChange={this.handleChange}
                />

                <input
                    type="text"
                    name="cost"
                    placeholder="Cost"
                    value={this.state.cost}
                    onChange={this.handleChange}
                />

                <select
                    name="genre"
                    value={this.state.genre}
                    onChange={this.handleChange}
                    className="select-element"
                >
                    <option>Select Genre</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="historical fiction">Historical Fiction</option>
                    <option value="personal development">Personal Development</option>
                    <option value="romance">Romance</option>
                    <option value="science fiction">Science Fiction</option>
                </select>

                <select
                    name="spanish_genre"
                    value={this.state.spanish_genre}
                    onChange={this.handleChange}
                    className="select-element"
                >
                    <option>Select Genre</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="historical fiction">Historical Fiction</option>
                    <option value="personal development">Personal Development</option>
                    <option value="romance">Romance</option>
                    <option value="science fiction">Science Fiction</option>
                </select>
            </div >

            <div className="one-column">
                <textarea
                    type="text"
                    name="summary"
                    placeholder="Summary"
                    value={this.state.summary}
                    onChange={this.handleChange}
                />

                <textarea
                    type="text"
                    name="spanish_summary"
                    placeholder="Summary"
                    value={this.state.spanish_summary}
                    onChange={this.handleChange}
                />
            </div>

          <div className="image-uploaders three-column">
            <DropzoneComponent
              ref={this.coverRef}
              config={this.componentConfig()}
              eventHandlers={this.handleCoverDrop()}
            />
          </div>

          <div>
            <button type="submit">Save</button>
          </div>
        </form>
    );
  }
}