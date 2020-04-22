import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const Card = ({ card, onShowModal }) => (
  <li
    className={css(styles.listItem)}
    onClick={() => onShowModal(card.id)}
  >
    <span className={css(styles.title)}>{card.title}</span>
    <div className={css(styles.badges)}>
      {card.watched && <span className="icon-sm icon-subscribe" />}{' '}
      {card.fullDescription && (
        <span className="icon-sm icon-description" />
      )}
    </div>
  </li>
);

export default Card;

const styles = StyleSheet.create({
  listItem: {
    fontSize: '1.4rem',
    fontWeight: '400',
    lineHeight: '1.3',
    backgroundColor: '#fff',
    padding: '0.65rem 0.6rem',
    color: '#4d4d4d',
    borderBottom: '0.1rem solid #ccc',
    borderRadius: '0.3rem',
    marginBottom: '0.6rem',
    wordWrap: 'break-word',
    cursor: 'pointer',
    boxShadow: '0 0.5px 0 rgba(9,30,66,.25)',
    ':last-of-type': {
      marginBottom: '0'
    },
    ':hover': {
      backgroundColor: '#eee'
    }
  },
  title: {
    clear: 'both',
    display: 'block',
    margin: '0 0 4px',
    overflow: 'hidden',
    textDecoration: 'none',
    wordWrap: 'break-word',
    color: '#172b4d'
  },
  badges: { float: 'left', maxWidth: '100%', marginLeft: '-2px' }
});
