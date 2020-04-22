import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const Loader = () => (
  <div className={css(styles.loader)}>
    <span className={css(styles.span)} />
    <span className={css(styles.span)} />
    <span className={css(styles.span)} />
  </div>
);

export default Loader;

const loader = {
  '0%': {
    width: '10px',
    height: '10px',
    opacity: '0.9',
    '-webkitTransform': 'translateY(0)'
  },
  '100%': {
    width: '24px',
    height: '24px',
    opacity: '0.1',
    '-webkitTransform': 'translateY(-21px)'
  }
};

const styles = StyleSheet.create({
  loader: {
    textAlign: 'center'
  },
  span: {
    display: 'inline-block',
    verticalAlign: 'middle',
    width: '10px',
    height: '10px',
    margin: '50px auto',
    background: 'black',
    borderRadius: '50px',
    animationName: [loader],
    animationDuration: '0.9s',
    animationIterationCount: 'infinite',

    ':nth-of-type(2)': {
      '-webkitAnimationDelay': '0.3s',
      '-mozAnimationDelay': '0.3s'
    },
    ':nth-of-type(3)': {
      '-webkitAnimationDelay': '0.6s',
      '-mozAnimationDelay': '0.6s'
    }
  }
});
