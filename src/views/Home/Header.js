import React, { Component, PropTypes } from 'react'

import classes from './Header.scss'

class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <header className={classes['site-header']}>
        <div style={{align: 'center'}}>
        <img src="http://synyan.net/images/hd/26.JPG"
             title="杭州 中国 2010"
             alt="杭州 中国 2010"
             width="970" height="340"
             border="0" align="middle" />
          </div>
      </header>
    )
  }
}

export default Header
