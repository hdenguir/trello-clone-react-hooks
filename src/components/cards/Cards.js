import React from 'react';
import Card from './Card';
import { StyleSheet, css } from 'aphrodite';

const Cards = ({ cards, onShowModal }) => (
  <ul className={css(styles.listItems)}>
    {cards &&
      cards.map((card) => (
        <Card onShowModal={onShowModal} card={card} key={card.id} />
      ))}
  </ul>
);

export default Cards;

const styles = StyleSheet.create({
  listItems: {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'start',
    marginTop: '.6rem',
    padding: '0 0.7rem 0.5rem',
    overflowY: 'auto',
    '::-webkit-scrollbar': {
      borderRadius: '0.3rem',
      backgroundClip: 'padding-box',
      width: '1rem'
    },
    '::-webkit-scrollbar-thumb': {
      borderRadius: '0.3rem',
      backgroundClip: 'padding-box',
      backgroundColor: '#c4c9cc',
      borderRight: '0.4rem solid #e2e4e6'
    }
  }
});
