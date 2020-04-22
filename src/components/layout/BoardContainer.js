import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { v4 as uuidv4 } from 'uuid';

import BoardContext from '../../context/board-context';

import ListItems from '../lists/ListItems';
import FormItem from '../forms/FormItem';

const BoardContainer = () => {
  const { list, addItem } = useContext(BoardContext);

  const [textBtn, setTextBtn] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [text, setText] = useState('');

  useEffect(() => {
    const textBtnCarte =
      list.length > 0
        ? 'Ajouter une autre liste'
        : 'Ajouter une liste';
    setTextBtn(textBtnCarte);
  }, [list]);

  const onChange = (e) => setText(e.target.value);

  const closeForm = (e) => {
    const currentTarget = e.currentTarget;
    setTimeout(() => {
      if (!currentTarget.contains(document.activeElement))
        resetForm();
    }, 0);
  };

  const resetForm = () => {
    setShowForm(false);
    setText('');
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (showForm && text) {
      submitData();
    }
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter' && text) {
      e.preventDefault();
      submitData();
    }
  };

  const submitData = () => {
    addItem(list, { id: uuidv4(), text });
    resetForm();
  };

  return (
    <section className={css(styles.listsContainer)}>
      {list.length > 0 &&
        list.map((item) => <ListItems key={item.id} item={item} />)}

      <div className={css(styles.list, styles.light)}>
        {showForm ? (
          <FormItem
            text={text}
            onChange={onChange}
            onSubmit={onSubmit}
            onKeyDown={onKeyDown}
            resetForm={resetForm}
            onBlur={closeForm}
            textBtn="Ajouter une liste"
            placeholder="Saisissez le titre de la liste..."
          />
        ) : (
          <button
            onClick={() => setShowForm(true)}
            className={css(styles.btn, styles.addListBtn)}
          >
            <span className="icon-sm icon-add" /> {textBtn}
          </button>
        )}
      </div>
    </section>
  );
};

export default BoardContainer;

const styles = StyleSheet.create({
  list: {
    flex: '0 0 27rem',
    display: 'flex',
    backgroundColor: '#e2e4e6',
    borderRadius: '0.3rem',
    marginRight: '1rem'
  },
  light: { backgroundColor: 'tranparent' },
  listsContainer: {
    display: 'flex',
    alignItems: 'start',
    padding: '0 0.8rem 0.8rem',
    overflowX: 'auto',
    height: 'calc(100vh - 8.6rem)',
    ':-webkit-scrollbar ': {
      height: '2.4rem'
    },
    ':-webkit-scrollbar-thumb': {
      backgroundColor: '#66a3c7',
      border: '0.8rem solid #0079bf',
      borderTopWidth: '0'
    }
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
  addListBtn: {
    flex: '0 0 27rem',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'left',
    fontSize: '1.4rem',
    fontWeight: '400',
    backgroundColor: 'rgba(226, 228, 230, .7)',
    color: '#333',
    padding: '1rem',
    borderRadius: '0.3rem',
    cursor: 'pointer',
    textAlign: 'left'
  }
});
