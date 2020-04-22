import React from 'react';
import { Link } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';
import rzcLogo from '../assets/images/reezocar.svg';

const HomePage = () => (
  <div className={css(styles.app)}>
    <div className={css(styles.container)}>
      <img src={rzcLogo} className={css(styles.logo)} alt="RzcLogo" />
      <div className={css(styles.tagLine)}>À toi de jouer !</div>
      <Link className={css(styles.btn)} to="/board">
        Board Page
      </Link>
    </div>
  </div>
);

export default HomePage;

const fadeInOut = {
  '0%': {
    opacity: 0
  },
  '100%': {
    opacity: 1
  }
};

const translate = {
  '0%': {
    transform: 'translateY(-25px)'
  },
  '100%': {
    transform: 'translateY(0px)'
  }
};

const styles = StyleSheet.create({
  app: {
    alignItems: 'center',
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    top: 0,
    right: 0
  },
  container: {
    marginTop: -200,
    maxWidth: 500,
    width: '100%'
  },
  logo: {
    animationName: [fadeInOut],
    animationDuration: '1500ms, 1500ms',
    animationIterationCount: 1,

    width: '100%'
  },
  tagLine: {
    animationName: [fadeInOut, translate],
    animationDuration: '1500ms, 600ms',
    animationIterationCount: 1,

    fontSize: 20,
    fontWeight: 600,
    marginTop: -20
  },
  btn: {
    boxSizing: 'border-box',
    WebkitAppearance: 'none',
    borderRadius: '3px',
    border: 'none',
    display: 'block',
    lineHeight: '20px',
    margin: '1rem',
    padding: '1rem',
    textDecoration: 'none',
    position: 'relative',
    backgroundColor: '#5aac44',
    boxShadow: 'none',
    color: '#fff',
    fontWeight: '400',
    fontSize: '2rem',
    textAlign: 'center'
  }
});
