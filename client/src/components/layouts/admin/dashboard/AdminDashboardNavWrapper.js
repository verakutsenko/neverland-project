import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

import BrandStyles from 'components/BrandStyles';

const MainContentWrapper = styled.div`
  padding: 4em
`;

const styles = {
  container: {
    width: '100%',
    height: '90%',
    zIndex: -100,
    position: 'absolute',
    backgroundImage: "url('../../../../images/onboarding-background.png')",
    backgroundSize: 'cover',
  },
  desktopMenuContainer: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: '20vw',
    maxWidth: '30vw',
    backgroundColor: BrandStyles.color.highContrastDarkBeige,
    paddingLeft: '3vw',
    boxShadow: `4px -30px 64px ${BrandStyles.color.xdarkBeige}`,
  },
  mainContainer: {
    display: 'flex',
    flexDirection: 'row',
    minHeight: '100vh',
  },
  navItem: {
    marginTop: '1em',
    marginBottom: '1em',
  },
  logo: {
    width: '70%',
    marginTop: '2em',
  },
};

export default function AdminDashboardNavWrapper({ children }) {
  return (
    <div style={styles.mainContainer}>
      <div style={styles.desktopMenuContainer}>
        <div>
          {' '}
          <img style={styles.logo} src="../../../../images/neverland_logo.png" />
        </div>
        <br />
        <br />
        <Link style={styles.navItem} to="/admin/dashboard/orders">
          {' '}
          Orders{' '}
        </Link>
        <Link style={styles.navItem} to="/admin/dashboard/products">
          {' '}
          Products{' '}
        </Link>
        <Link style={styles.navItem} to="/admin/dashboard/stores">
          {' '}
          Stores{' '}
        </Link>
        <Link style={styles.navItem} to="/admin/dashboard/users">
          {' '}
          Users{' '}
        </Link>
        <Link style={styles.navItem} to="/admin/dashboard/sellers">
          {' '}
          Sellers{' '}
        </Link>
        <Link style={styles.navItem} to="/seller/logout">
          {' '}
          Logout{' '}
        </Link>
      </div>
      {/* <div style={{ paddingLeft: '4em', paddingRight: '4em', paddingTop: '2em', marginBottom: '3em' }}>{children}</div> */}
      <MainContentWrapper>
        {children}
      </MainContentWrapper>
    </div>
  );
}
