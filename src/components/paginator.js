import React from "react";

class Paginator extends React.Component {
  render() {
    let pages = [];
    console.log(new Array(this.props.pages));
    pages = new Array(this.props.pages).fill(0).map((currentElement, index) => {
      let className = "pagination-buttons";

      if (this.props.current_page === index+1) {
        className += " active-page-indicator";
      }
      return (
        <span
          onClick={() => this.props.goToPage(index + 1)}
          className={className}
          key={index + 1}
        >
          {index + 1}
        </span>
      );
    });
    return pages;
  }
}

export default Paginator;