import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, css } from 'aphrodite';

import FormItem from '../forms/FormItem';
import BoardContext from '../../context/board-context';

const Modal = ({
  idList,
  title: titleItem,
  cardId,
  followCard,
  deleteCard,
  onCloseModal,
  onChange,
  onSubmit,
  onKeyDown
}) => {
  const {
    list,
    followCardItem,
    deleteCardItem,
    addItemCardFullDescription
  } = useContext(BoardContext);

  const [showForm, setShowForm] = useState(false);
  const [fullDescription, setFullDescription] = useState('');

  const currentCard = (currCardId) => {
    const itemCard = list.find((item) => item.id === idList);
    const updatedCard = itemCard.cards.find(
      (crd) => crd.id === currCardId
    );
    return updatedCard;
  };

  const card = currentCard(cardId);
  const {
    title: titleCard,
    watched,
    fullDescription: fullDesc
  } = card;

  useEffect(() => {
    setFullDescription(fullDesc);
  }, [fullDesc]);

  const onFollowCard = (e, cardId) => {
    e.preventDefault();
    followCardItem(list, idList, cardId);
  };

  const onDeleteCard = (e, cardId) => {
    e.preventDefault();
    if (window.confirm('Voulez-vous supprimer cette carte!')) {
      deleteCardItem(list, idList, cardId);
      onCloseModal();
    }
  };

  const onChangeDescription = (e) =>
    setFullDescription(e.target.value);

  const onSubmitDescription = (e) => {
    e.preventDefault();

    submitData();
  };

  const onKeyDownDescription = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      submitData();
    }
  };

  const submitData = () => {
    addItemCardFullDescription(
      list,
      idList,
      cardId,
      fullDescription.trim()
    );
    setShowForm(false);
  };

  return (
    <div className={css(styles.windowOverlay)}>
      <div className={css(styles.window)}>
        <div className={css(styles.windowWrapper)}>
          <button
            className={css(styles.btnClose)}
            onClick={() => onCloseModal()}
          >
            <span className="icon-lg icon-close" />
          </button>
          <div className={css(styles.cardDetailWindow)}>
            <div className={css(styles.windowHeader)}>
              <div className={css(styles.windowTitle)}>
                <span className={css(styles.windowHeaderIcon)}>
                  <i className="fas fa-card" />
                </span>
                <h2 className={css(styles.windowTitleH2)}>
                  {titleCard}
                </h2>
              </div>
              <div className={css(styles.windowHeaderInlineContent)}>
                <p className={css(styles.uInlineBlock)}>
                  Dans la liste{' '}
                  <strong className={css(styles.uInlineBlockBold)}>
                    {titleItem}
                  </strong>{' '}
                  {watched && (
                    <span className="icon-sm icon-subscribe" />
                  )}
                </p>
              </div>
            </div>
            <div className={css(styles.windowMainCol)}>
              <div className={css(styles.windowModuleTitle)}>
                <h3
                  className={css(
                    styles.uInlineBlock,
                    styles.uInlineBlockBold2
                  )}
                >
                  Description
                  {fullDesc && !showForm && (
                    <button
                      className={css(styles.btnModify)}
                      onClick={(e) => setShowForm(true)}
                    >
                      Modifier
                    </button>
                  )}
                </h3>
                {fullDesc && !showForm && (
                  <p className={css(styles.desc)}>{fullDesc}</p>
                )}

                {!fullDesc && !showForm && (
                  <p
                    className={css(styles.descriptionFakeText)}
                    onClick={(e) => setShowForm(!showForm)}
                  >
                    Ajouter une description plus détaillée…
                  </p>
                )}

                {showForm && (
                  <FormItem
                    text={fullDescription}
                    textBtn="Enregister"
                    onSubmit={onSubmitDescription}
                    onChange={onChangeDescription}
                    onBlur={() => {}}
                    resetForm={() => setShowForm(false)}
                    onKeyDown={onKeyDownDescription}
                    placeholder="Ajouter une description plus détaillée…"
                  />
                )}
              </div>
            </div>
            <div className={css(styles.windowSidebar)}>
              <div className={css(styles.windowModule)}>
                <h3 className={css(styles.modNoTopMargin)}>
                  Actions
                </h3>
                <button
                  className={css(styles.btnLink)}
                  title="Partager"
                  onClick={(e) => onFollowCard(e, cardId)}
                >
                  <span className="icon-sm icon-subscribe" />
                  <span className="js-sidebar-action-text">
                    Suivre
                  </span>

                  {watched && (
                    <span className={css(styles.on)}>
                      <span className="icon-sm icon-check light"></span>
                    </span>
                  )}
                </button>
                <button
                  className={css(styles.btnLink)}
                  title="Partager"
                  onClick={(e) => onDeleteCard(e, cardId)}
                >
                  <span className="icon-sm icon-remove" />
                  <span className="js-sidebar-action-text">
                    Supprimer
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Modal);

const styles = StyleSheet.create({
  windowOverlay: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,.64)',
    height: '100%',
    justifyContent: 'center',
    left: '0',
    overflowY: 'auto',
    position: 'fixed',
    top: '0',
    width: '100%',
    zIndex: '20'
  },
  window: {
    backgroundColor: '#e2e4e6',
    borderRadius: '2px',
    display: 'block',
    margin: '48px auto 80px',
    overflow: 'hidden',
    position: 'relative',
    width: '768px',
    zIndex: '25'
  },
  btnClose: {
    color: '#42526e',
    position: 'absolute',
    top: '0',
    right: '0rem',
    height: '32px',
    overflow: 'hidden',
    padding: '0px',
    margin: '4px',
    width: '32px',
    zIndex: '2',
    fontSize: '1.8rem',
    background: 'none',
    border: 'none',
    boxShadow: 'none',
    borderRadius: '50%',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: 'rgba(9,30,66,.08)',
      color: '#42526e'
    }
  },
  cardDetailWindow: { minHeight: '250px' },
  windowCover: {
    //display: 'none',
    backgroundColor: 'rgba(9,30,66,.08)',
    backgroundPosition: '50%',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    height: '160px',
    position: 'relative',
    transition: 'opacity 85ms',
    width: '100%'
  },
  windowHeader: {
    margin: '10px 40px 8px 20px',
    minHeight: '32px',
    position: 'relative',
    zIndex: '1'
  },
  windowHeaderIcon: {
    left: '-40px',
    position: 'absolute',
    top: '4px',
    color: '#42526e',
    height: '32px',
    lineHeight: '32px',
    width: '32px',
    fontSize: '24px'
  },
  windowTitle: {
    margin: '4px 0 0',
    padding: '8px 0 0'
  },
  windowTitleH2: {
    marginRight: '4px',
    fontWeight: '600',
    fontSize: '20px',
    lineHeight: '24px'
  },
  windowHeaderInlineContent: {
    color: '#5e6c84',
    cursor: 'default',
    display: 'inline-block',
    margin: '4px 8px 4px 2px'
  },
  uInlineBlock: {
    color: '#5e6c84',
    marginBottom: '0',
    paddingBottom: '0',
    display: 'inline-block',
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: '400'
  },
  uInlineBlockBold: { fontWeight: '700' },
  uInlineBlockBold2: {
    color: '#000',
    fontWeight: '800',
    fontSize: '16px',
    display: 'block',
    margin: '0 .5rem 1rem'
  },
  windowMainCol: {
    float: 'left',
    margin: '0',
    overflowX: 'hidden',
    overflowY: 'auto',
    minHeight: '24px',
    padding: '0 8px 8px 16px',
    position: 'relative',
    width: '552px',
    zIndex: '0'
  },
  windowModuleTitle: {
    borderBottom: 'none',
    padding: '8px 0',
    position: 'relative',
    margin: '10px 0 4px 0',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '32px'
  },
  windowSidebar: {
    float: 'right',
    padding: '0 16px 8px 8px',
    width: '168px',
    overflow: 'hidden',
    zIndex: '10'
  },
  windowModule: {
    clear: 'both',
    marginBottom: '24px',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  modNoTopMargin: {
    color: '#5e6c84',
    fontSize: '12px',
    fontWeight: '500',
    letterSpacing: '.04em',
    lineHeight: '20px',
    marginTop: '16px',
    textTransform: 'uppercase',
    marginBottom: '-4px'
  },
  btnLink: {
    backgroundColor: 'rgba(9,30,66,.04)',
    boxShadow: 'none',
    border: 'none',
    borderRadius: '3px',
    boxSizing: 'border-box',
    cursor: 'pointer',
    height: '32px',
    marginTop: '8px',
    maxWidth: '300px',
    overflow: 'hidden',
    padding: '6px 8px',
    position: 'relative',
    textDecoration: 'none',
    textOverflow: 'ellipsis',
    outline: 'none',

    display: 'flex',
    alignItems: 'center',
    fontSize: '1.3rem'
  },
  watched: { marginLeft: 'auto', color: 'green' },
  form: {
    display: 'flex',
    flexDirection: 'column',
    margin: '.5rem',
    flexBasis: '100%'
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
  desc: {
    margin: '0 .5rem',
    fontSize: '1.5rem',
    fontWeight: '400'
  },
  btnModify: {
    boxSizing: 'border-box',
    WebkitAppearance: 'none',
    borderRadius: '3px',
    display: 'inline-block',
    lineHeight: '20px',
    margin: '0 0 1rem 1rem',
    padding: '6px 12px',
    textDecoration: 'none',
    position: 'relative',
    cursor: 'pointer',

    backgroundColor: 'rgba(9,30,66,.04)',
    boxShadow: 'none',
    border: 'none'
  },
  on: {
    backgroundColor: '#61bd4f',
    borderRadius: '3px',
    fontWeight: '700',
    marginLeft: 'auto',
    textAlign: 'center',
    color: '#fff'
  },
  descriptionFakeText: {
    backgroundColor: 'rgba(9,30,66,.04)',
    color: '#172b4d',
    boxShadow: 'none',
    border: 'none',
    borderRadius: '3px',
    display: 'block',
    minHeight: '50px',
    padding: '8px 12px',
    textDecoration: 'none',
    fontWeight: '500',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: 'rgba(9,30,66,.08)',
      boxShadow: 'none',
      border: 'none'
    }
  }
});
