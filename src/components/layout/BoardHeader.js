import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Link } from 'react-router-dom';

const BoardHeader = () => (
  <header className={css(styles.header)}>
    <Link to="/" className={css(styles.boardsBtn)}>
      <span className="icon-md icon-home" />
    </Link>
    <div className={css(styles.logo)}>
      <h1>
        <i className="fab fa-trello logo-icon" aria-hidden="true" />
        Trello
      </h1>
    </div>
  </header>
);

export default BoardHeader;
const styles = StyleSheet.create({
  header: {
    flexBasis: '4rem',
    display: 'flex',
    alignItems: 'center',
    padding: '0 0.8rem',
    backgroundColor: '#0067a3',
    boxShadow: '0 0.1rem 0.1rem rgba(0, 0, 0, 0.1)'
  },
  boardsBtn: {
    //flexBasis: '15rem',
    fontSize: '1.8rem',
    fontWeight: '700',
    color: '#fff',
    marginRight: '0.8rem',
    padding: '0.1rem 0.2rem',
    border: 'none',
    background: 'hsla(0,0%,100%,.3)',
    borderRadius: '3px'
  },
  logo: {
    flex: '1',
    fontFamily: '"Courgette", cursive',
    fontSize: '2.2rem',
    fontWeight: '700',
    color: 'rgba(255, 255, 255, 0.5)',
    margin: '0 2rem',
    transition: 'color 150ms',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    cursor: 'pointer'
  },
  logoIcon: {
    paddingRight: '0.4rem'
  }
});
