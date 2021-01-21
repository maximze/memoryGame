import actionTypes from "../actions/actionTypes";
import consts from '../utils/consts';
import utils from '../utils/utils';


const getInitialState = () => {
  const cards = [];
  for(let i = 0; i < consts.CELLS_COUNT / 2; ++i){
    cards.push({cardValue: i, opened: false}, {cardValue: i, opened: false});
  }
  return {
    cards: utils.shuffleArray(cards),
    lastOpened: [],
    cellsCount: consts.CELLS_COUNT
  };
};

const initialState = getInitialState();



const appReducer = (state = initialState, action) => {
  let cards, lastOpened;
  switch (action.type) {
    case actionTypes.RESET_GAME:
      return {
        ...initialState
      };
    case actionTypes.OPEN_CARD:
      cards = [...state.cards];
      cards[action.cardIndex].opened = true;
      lastOpened = [...state.lastOpened];
      lastOpened.push({index: action.cardIndex, card: cards[action.cardIndex]});
      return {
        ...state,
        cards,
        lastOpened
      };
    case actionTypes.CHECK_PAIR:
      cards = [...state.cards];
      lastOpened = [...state.lastOpened];
      if(lastOpened.length===2 && lastOpened[0].card.cardValue !== lastOpened[1].card.cardValue){
        cards[lastOpened[0].index].opened = false;
        cards[lastOpened[1].index].opened = false;
        lastOpened = [];
      }
      else if(lastOpened.length===2 && lastOpened[0].card.cardValue === lastOpened[1].card.cardValue){
        lastOpened = [];
      }
      return {
        ...state,
        lastOpened,
        cards
      }
    default:
      return state;
  }
};

export default appReducer;