import React, { Component } from "react";

export default class GenreItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      genreItemClass: ""
    };
  }

  render() {
    const { id, title } = this.props.item;
    return (
      <div
        className="genre-item-wrapper"
      >
        <div
          className={
            "genre-img-background " + this.state.genreItemClass
          }
          
        />

        <div className="img-text-wrapper">
          

          <div className="subtitle">{title}</div>
        </div>
      </div>
    );
  }
}