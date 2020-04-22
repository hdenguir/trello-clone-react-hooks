import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const FormItem = ({
  onSubmit,
  onChange,
  onKeyDown,
  onBlur,
  resetForm,
  text,
  textBtn,
  placeholder
}) => (
  <form
    tabIndex="1"
    onSubmit={onSubmit}
    className={css(styles.form)}
    onBlur={(e) => onBlur(e)}
  >
    <textarea
      autoFocus
      placeholder={placeholder}
      value={text}
      onChange={(e) => onChange(e)}
      onKeyDown={(e) => onKeyDown(e)}
      className={css(styles.input)}
    />
    <div className={css(styles.groupBtn)}>
      <button
        type="submit"
        className={css(styles.btn, styles.addBtnGreen)}
      >
        {textBtn}
      </button>
      <button
        type="reset"
        className={css(styles.close)}
        onClick={() => resetForm()}
      >
        <span class="icon-lg icon-close" />
      </button>
    </div>
  </form>
);

export default React.memo(FormItem);

const styles = StyleSheet.create({
  form: {
    display: 'flex',
    flexDirection: 'column',
    padding: '.7rem',
    flexBasis: '100%',
    backgroundColor: '#e2e4e6',
    borderRadius: '0.3rem'
  },
  input: {
    resize: 'vertical',
    display: 'block',
    border: 'none',
    backgroundColor: 'none',
    margin: '0 0 1rem',
    fontSize: '1.4rem',
    fontWeight: '400',
    padding: '0.8rem 1rem 0',
    flexBasis: '100%'
  },
  groupBtn: {
    display: 'flex',
    flexDirection: 'row'
  },
  btn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    font: 'inherit',
    background: 'none',
    border: 'none',
    color: 'inherit',
    padding: '0',
    cursor: 'pointer'
  },
  addBtnGreen: {
    cursor: 'pointer',
    display: 'inline-block',
    fontWeight: '400',
    lineHeight: '20px',
    margin: '0',
    padding: '6px 12px',
    textAlign: 'center',
    backgroundColor: '#5aac44',
    boxShadow: 'none',
    border: 'none',
    color: '#fff',
    borderRadius: '3px'
  },
  addBtn: {
    display: 'inline-block',
    width: 'auto',
    fontSize: '1.4rem',
    fontWeight: '400',
    color: '#fff',
    padding: '.8rem',
    cursor: 'pointer',
    backgroundColor: '#0079bf',
    textAlign: 'center',

    ':hover': {
      color: '#fff'
    }
  },
  close: {
    marginLeft: '1rem',
    border: 'none',
    background: 'none',
    fontSize: '2rem',
    fontWeight: '400'
  }
});
