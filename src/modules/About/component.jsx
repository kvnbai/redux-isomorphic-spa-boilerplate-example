
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Counter from '../Counter/container';
import { ABOUT } from '../../constants';

export default class About extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.setActiveModule();
  }

  render() {

    return (
      <div class='mdl-cell mdl-cell--4-col page-content'>
        <Counter counter={ this.props.counter } section={ ABOUT } />
        <h5>
          This is `About` fragment. This should change on nav click.
          However the current counter for this page should stay
          the same on revisit.
        </h5>
      </div>
    );
  }
};

About.propTypes = {
  setActiveModule: PropTypes.func.isRequired
}