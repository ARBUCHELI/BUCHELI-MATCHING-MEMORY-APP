import React from 'react';
// Add import statements below
import { useSelector, useDispatch } from 'react-redux';
import { selectVisibleIDs, flipCard, selectMatchedIDs } from '../../boardSlice.js';


let cardLogo = "https://raw.githubusercontent.com/ARBUCHELI/BUCHELI-FAVORITE-RECIPES-WITH-REACT-AND-REACT-REDUX/master/public/bucheli.jpg";

export const Card = ({ id, contents }) => {
  // Add selected data and dispatch variables below
  const dispatch = useDispatch();
  const visibleIDs = useSelector(selectVisibleIDs);
  const matchedIDs = useSelector(selectMatchedIDs);
  
  // flip card action
  const flipHandler = (id) => {
    // Add action dispatch below
    dispatch(flipCard(id));
    
  };

  let cardStyle = 'resting'
  let click = () => flipHandler(id);
  
  let cardText = (
    <img src={cardLogo} className="logo-placeholder" alt="Card option" style={{width: '30%'}}/>
  );

  // 1st if statement
  // implement card id array membership check
  if (visibleIDs.includes(id) || matchedIDs.includes(id)) {
    cardText = contents;
    click = () => {};
  }

  // 2nd if statement
  // implement card id array membership check
  if (matchedIDs.includes(id)) {
    cardStyle = 'matched';
  }

  // 3rd if statement
  // implement number of flipped cards check
  if (visibleIDs.length === 2) {
    click = () => {};
  }

  return (
    <button onClick={click} className={`card ${cardStyle}`} style={{color: 'white'}}>
      {cardText}
    </button>
  );
};