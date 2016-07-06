import React, { Component, PropTypes } from 'react';

import Header from 'views/Home/Header'

import classes from './Home.scss'

class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={classes.container}>
        <Header />
        <h1>Welcome to daizhe.xyz</h1>
      </div>
    )
  }
}

export default Home
