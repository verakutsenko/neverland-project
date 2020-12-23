import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import BrandStyles from '../../../BrandStyles';

const styles = {
  container: {
    width: '100%',
    height: '90%',
    zIndex: -100,
    position: 'absolute',
    backgroundImage: "url('../../../../images/onboarding-background.png')",
    backgroundSize: 'cover'
  },
  desktopMenuContainer: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: '20vw',
    maxWidth: '30vw',
    backgroundColor: BrandStyles.color.highContrastDarkBeige,
    paddingLeft: '3vw',
    boxShadow: `4px 0px 64px ${BrandStyles.color.xdarkBeige}`
  },
  mainContainer: {
    display: 'flex',
    flexDirection: 'row',
    minHeight: '100vh'
  },
  navItem: {
    marginTop: '1em',
    marginBottom: '1em'
  },
  logo: {
    width: '70%',
    marginTop: '2em'
  }
};

export default class SellerDashboardNavWrapper extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={styles.mainContainer}>
        <div style={styles.desktopMenuContainer}> 
          <div> <img style={styles.logo} src="../../../../images/neverland_logo.png" /></div>
          <br />
          <br />
          <Link style={styles.navItem} to="/seller/dashboard/orders"> My Orders </Link>
          <Link style={styles.navItem} to="/seller/dashboard/products"> My Products </Link>
          <Link style={styles.navItem} to="/seller/dashboard/shop"> My Shop </Link>
          <Link style={styles.navItem} to="/seller/dashboard/payments"> My Payments & Payouts </Link>
          <Link style={styles.navItem} to="/seller/dashboard/support"> Contact support </Link>
          <Link style={styles.navItem} to="/seller/logout"> Logout </Link>
        </div>
        <div> Mobile nav menu</div>
        <div style={{marginBottom: '3em'}}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
