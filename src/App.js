import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import rzcLogo from './assets/images/reezocar.svg';

const App = () => (
   <div className={css(styles.app)}>
      <div className={css(styles.container)}>
         <img src={rzcLogo} className={css(styles.logo)} alt="RzcLogo" />
         <div className={css(styles.tagLine)}>À toi de jouer !</div>
      </div>
   </div>
);

export default App;

const fadeInOut = {
   '0%': {
      opacity: 0,
   },
   '100%': {
      opacity: 1,
   },
};

const translate = {
   '0%': {
      transform: 'translateY(-25px)',
   },
   '100%': {
      transform: 'translateY(0px)',
   },
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
      right: 0,
   },
   container: {
      marginTop: -200,
      maxWidth: 500,
      width: '100%',
   },
   logo: {
      animationName: [fadeInOut],
      animationDuration: '1500ms, 1500ms',
      animationIterationCount: 1,

      width: '100%',
   },
   tagLine: {
      animationName: [fadeInOut, translate],
      animationDuration: '1500ms, 600ms',
      animationIterationCount: 1,

      fontSize: 20,
      fontWeight: 600,
      marginTop: -20,
   },
});
