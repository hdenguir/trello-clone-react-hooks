import React, { useContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { StyleSheet, css } from 'aphrodite';

import BoardContext from '../../context/board-context';

import Cards from '../cards/Cards';
import FormItem from '../forms/FormItem';
import Modal from '../ui/Modal';

const ListItems = ({ item: { text, id, cards } }) => {
  const { list, addItemCard, deleteItem } = useContext(BoardContext);

  const [textBtn, setTextBtn] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [cardId, setCardId] = useState('');
  const [title, setTitle] = useState('');

  useEffect(() => {
    const textBtnCarte =
      cards.length > 0
        ? 'Ajouter une autre carte'
        : 'Ajouter une carte';
    setTextBtn(textBtnCarte);
  }, [cards]);

  const onChange = (e) => setTitle(e.target.value);

  const closeForm = (e) => {
    const currentTarget = e.currentTarget;
    setTimeout(() => {
      if (!currentTarget.contains(document.activeElement))
        resetForm();
    }, 0);
  };

  const resetForm = () => {
    setShowForm(false);
    setTitle('');
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (showForm && title) {
      submitData();
    }
  };

  const submitData = () => {
    addItemCard(list, id, { id: uuidv4(), title });
    resetForm();
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter' && title) {
      e.preventDefault();
      submitData();
    }
  };

  const onDelete = (id) => {
    if (window.confirm('Voulez-vous supprimer cette liste!'))
      deleteItem(list, id);
  };

  const onShowModal = (cardId) => {
    setShowModal(true);
    setCardId(cardId);
  };

  const onCloseModal = () => {
    setShowModal(false);
    setCardId('');
  };

  const onBlurCard = (e) => {
    const currentTarget = e.currentTarget;
    setTimeout(() => {
      if (!currentTarget.contains(document.activeElement)) {
        if (title) addItemCard(list, id, { id: uuidv4(), title });
        resetForm();
      }
    }, 0);
  };

  return (
    <div className={css(styles.list)}>
      <button
        className={css(styles.btn, styles.close)}
        onClick={() => onDelete(id)}
      >
        <span className="icon-sm icon-overflow-menu-horizontal" />
      </button>
      <h3 className={css(styles.listTitle)}>{text}</h3>
      {cards.length > 0 && (
        <Cards cards={cards} onShowModal={onShowModal} />
      )}
      {showModal && (
        <Modal
          idList={id}
          title={text}
          cardId={cardId}
          onCloseModal={onCloseModal}
          onBlur={closeForm}
        />
      )}

      {showForm ? (
        <FormItem
          text={title}
          onChange={onChange}
          onSubmit={onSubmit}
          onKeyDown={onKeyDown}
          onBlur={onBlurCard}
          resetForm={resetForm}
          textBtn="Ajouter une carte"
          placeholder="Saisissez le titre de la carte..."
        />
      ) : (
        <button
          className={css(styles.btn, styles.addCardBtn)}
          onClick={() => setShowForm(true)}
        >
          <span className="icon-sm icon-add" /> {textBtn}
        </button>
      )}
    </div>
  );
};

export default React.memo(ListItems);

const styles = StyleSheet.create({
  list: {
    flex: '0 0 27rem',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#e2e4e6',
    maxHeight: 'calc(100vh - 11.8rem)',
    borderRadius: '0.3rem',
    marginRight: '1rem',
    position: 'relative',
    overflowY: 'scroll',
    ':last-of-type': {
      marginRight: '0'
    }
  },
  listTitle: {
    fontSize: '1.4rem',
    fontWeight: '700',
    color: '#333',
    padding: '1rem',
    margin: '.5rem 0 0'
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
  addCardBtn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'left',
    fontSize: '1.4rem',
    fontWeight: '400',
    color: '#838c91',
    padding: '1rem',
    textAlign: 'left',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: '#cdd2d4',
      color: '#4d4d4d'
    }
  },
  close: {
    position: 'absolute',
    top: '.5rem',
    right: '.5rem',
    display: 'block',
    fontSize: '1.6rem',
    fontWeight: '800',
    color: '#838c91',
    padding: '2px',
    textAlign: 'left',
    cursor: 'pointer',
    borderRadius: '3px',
    ':hover': {
      backgroundColor: 'rgba(9,30,66,.08)',
      color: '#172b4d',
      textDecoration: 'none'
    }
  }
});
