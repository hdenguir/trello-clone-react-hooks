import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite';

import BoardBar from '../components/layout/BoardBar';
import BoardHeader from '../components/layout/BoardHeader';
import BoardContainer from '../components/layout/BoardContainer';
import BoardContext from '../context/board-context';

const BoardPage = () => {
  const [state, setState] = useState({
    list: JSON.parse(localStorage.getItem('tasks')) || [],
    resetList: () => onResetList(),
    addItem: (list, item) => addItemToList(list, item),
    addItemCard: (list, id, card) => addItemToCard(list, id, card),
    deleteItem: (list, id) => onDeleteFromList(list, id),
    followCardItem: (list, id, cardId) =>
      onFollowCard(list, id, cardId),
    deleteCardItem: (list, id, cardId) =>
      onDeleteCardItem(list, id, cardId),
    addItemCardFullDescription: (list, id, cardId, desc) =>
      onAddItemCardFullDescription(list, id, cardId, desc)
  });
  const onResetList = () => {
    setState({
      ...state,
      list: []
    });
    localStorage.setItem('tasks', JSON.stringify([]));
  };

  const addItemToList = (list, item) => {
    const updatedItem = { ...item, cards: [] };
    const updatedList = [...list, updatedItem];
    setState({
      ...state,
      list: updatedList
    });
    localStorage.setItem('tasks', JSON.stringify(updatedList));
  };

  const addItemToCard = (list, id, card) => {
    const updatedCard = { ...card, descriptions: [] };
    const index = list.findIndex((item) => item.id === id);
    const updatedObj = {
      ...list[index],
      cards: [...list[index].cards, updatedCard]
    };
    const updatedList = [
      ...list.slice(0, index),
      updatedObj,
      ...list.slice(index + 1)
    ];
    setState({
      ...state,
      list: updatedList
    });
    localStorage.setItem('tasks', JSON.stringify(updatedList));
  };

  const onDeleteFromList = (list, id) => {
    const updatedList = list.filter((item) => item.id !== id);
    setState({
      ...state,
      list: updatedList
    });
    localStorage.setItem('tasks', JSON.stringify(updatedList));
  };
  const onFollowCard = (list, id, cardId) => {
    const index = list.findIndex((item) => item.id === id);
    const updatedCards = list[index].cards.map((card) => {
      return card.id === cardId
        ? { ...card, watched: !card.watched }
        : card;
    });

    const updatedObj = { ...list[index], cards: updatedCards };
    const updatedList = [
      ...list.slice(0, index),
      updatedObj,
      ...list.slice(index + 1)
    ];
    setState({
      ...state,
      list: updatedList
    });
    localStorage.setItem('tasks', JSON.stringify(updatedList));
  };

  const onDeleteCardItem = (list, id, cardId) => {
    const index = list.findIndex((item) => item.id === id);
    const updatedCards = list[index].cards.filter(
      (card) => card.id !== cardId
    );
    const updatedObj = { ...list[index], cards: updatedCards };
    const updatedList = [
      ...list.slice(0, index),
      updatedObj,
      ...list.slice(index + 1)
    ];
    setState({
      ...state,
      list: updatedList
    });
    localStorage.setItem('tasks', JSON.stringify(updatedList));
  };

  const onAddItemCardFullDescription = (list, id, cardId, desc) => {
    const index = list.findIndex((item) => item.id === id);
    const cardIndex = list[index].cards.findIndex(
      (card) => card.id === cardId
    );
    const updatedCard = {
      ...list[index].cards[cardIndex],
      fullDescription: desc
    };
    const listCards = [
      ...list[index].cards.slice(0, cardIndex),
      updatedCard,
      ...list[index].cards.slice(cardIndex + 1)
    ];
    const updatedObj = { ...list[index], cards: listCards };
    const updatedList = [
      ...list.slice(0, index),
      updatedObj,
      ...list.slice(index + 1)
    ];
    setState({
      ...state,
      list: updatedList
    });
    localStorage.setItem('tasks', JSON.stringify(updatedList));
  };

  return (
    <BoardContext.Provider value={{ ...state }}>
      <div className={css(styles.container)}>
        <BoardHeader />
        <BoardBar />
        <BoardContainer />
      </div>
    </BoardContext.Provider>
  );
};

export default BoardPage;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    backgroundColor: '#0079bf'
  }
});
