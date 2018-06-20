import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TypeIt from 'typeit';

class Type extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    new TypeIt(this.el, this.props)
      .pause(this.props.pause)
      .delete(this.props.deleteChars)
      .options({ speed: this.props.replaceSpeed })
      .type(this.props.replaceWith);
  }

  render() {
    return (
      <span
        ref={el => {
          this.el = el;
        }}
      />
    );
  }
}

Type.propTypes = {
  pause: PropTypes.number,
  deleteChars: PropTypes.number,
  replaceWith: PropTypes.string,
  speed: PropTypes.number,
  replaceSpeed: PropTypes.number,
};

export default Type;
