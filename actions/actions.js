import actionTypes from "./actionTypes";

export function resetGame() {
  return {
    type: actionTypes.RESET_GAME,
  };
}

export function openCard(cardIndex) {
  return {
    type: actionTypes.OPEN_CARD,
    cardIndex
  }
}

export function checkPair() {
  return {
    type: actionTypes.CHECK_PAIR
  }
}