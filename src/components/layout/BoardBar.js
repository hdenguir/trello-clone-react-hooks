import React, { useContext } from 'react';
import { StyleSheet, css } from 'aphrodite';
import BoardContext from '../../context/board-context';

const BoardBar = () => {
  const { resetList } = useContext(BoardContext);
  return (
    <section className={css(styles.bar)}>
      <div className={css(styles.controls)}>
        <h2 className={css(styles.h2)}>Tableau Reezocar</h2>
        <button
          className={css(styles.btn)}
          onClick={() => {
            if (
              window.confirm('Voulez-vous initialiser le tableau!!!')
            )
              resetList();
          }}
        >
          <i className="fas fa-power-off" /> Initialiser le jeux de
          données
        </button>
      </div>
    </section>
  );
};

export default BoardBar;

const styles = StyleSheet.create({
  bar: {
    flexBasis: '3rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '0.8rem 0',
    padding: '0 1rem',
    color: '#f6f6f6'
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  btn: {
    fontSize: '1.4rem',
    borderRadius: '0.3rem',
    cursor: 'pointer',
    display: 'inline-block',
    fontWeight: '400',
    lineHeight: '20px',
    margin: '0',
    padding: '6px 12px',
    textAlign: 'center',
    backgroundColor: 'hsla(0,0%,100%,.24)',
    boxShadow: 'none',
    border: 'none',
    color: '#fff'
  },
  h2: {
    color: '#fff',
    fontSize: '1.8rem',
    fontWeight: '700',
    whiteSpace: 'nowrap',
    marginRight: '1rem'
  }
});
