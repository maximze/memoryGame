import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import '../app/index.css';
import GameContainer from './styled/GameContainer.styled';
import Cell from './styled/Cell.styled';
import Border from './styled/border.styled';
import * as actions from '../actions/actions'; 




function AppContainer({cards, lastOpened, cellsCount, onCardClick, checkPairs}) {
  useEffect(()=>{
    if(lastOpened.length == 2){
      checkPairs();
    }
  });
  return (
    <React.Fragment>
      <GameContainer>
        {
          cards.map((card, index) => {
            return (
              <Border key={index}
              className={card.opened ? '' : 'flipped'} 
                onClick={(e) => {
                  if(e.target.classList.contains('flipped')){
                    onCardClick(index);
                  }
                }}>
                <Cell type={card.cardValue} >
                  {card.cardValue}
                </Cell>
              </Border>
            )
          })
        }
      </GameContainer>
    </React.Fragment>
  )
}

const mapStateToDispatch = (dispatch) => {
  return {
    onCardClick:(index)=>{
      dispatch(actions.openCard(index));
    },
    checkPairs: () => {
      dispatch(actions.checkPair());
    }
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state.appReducer.cards,
    lastOpened: state.appReducer.lastOpened,
    cellsCount: state.appReducer.lastOpened
  }
}
export default connect(mapStateToProps, mapStateToDispatch)(AppContainer);
