import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { toggleMessage } from "../actions";
import styles from "./styles.css";

export class Start extends Component {
  handleClick(e) {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(toggleMessage());
  }

  render() {
    const { messageState } = this.props;
    return (
      <div>
        <div className={styles.header}>
          <div className={styles.headerName}>React Template</div>
        </div>
        <div className={styles.body}>
          {messageState == 0 ? "Hello World" : "Goodbye cruel world"}
          <button onClick={this.handleClick.bind(this)}>Go</button>
        </div>
      </div>
    );
  }
}

Start.propTypes = {
  messageState: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapState(state) {
  const { state: messageState } = state.message || { state: 0 };

  return {
    messageState
  };
}

export default connect(mapState)(Start);
