import React, { Component, Fragment } from "react";

import Content from "./Content";

class ShowMore extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: this.props.showMore
    }
  }

  showContent = () => {
    this.setState((prevState) => {
      return ({
        active: !prevState.active
      });
    })
  }

  render() {
    let contentElement = '';

    if (!this.state.active) {
      contentElement = <Content content={this.props.content} toggleShowContent={this.showContent} />
    }

    return (
      <Fragment>
        <button onClick={this.showContent}>Show More</button>
        {contentElement}
      </Fragment>
    )
  }

}

export default ShowMore;