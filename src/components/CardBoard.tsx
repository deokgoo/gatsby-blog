import React from 'react';
import './CardBoardStyle.scss';

interface cardBoardPropsInterface {
  pageUri: string,
  title: string,
  description: string,
  date: string,
  children: any,
}

const CardBoard = (props: cardBoardPropsInterface) => {
  let {title, description, date, pageUri} = props;

  return (
    <div className="cardBoard" onClick={() => { location.href = `${pageUri}`}}>
      <div className="cardBoard__title">{title}</div>
      <div className="cardBoard__date">{date}</div>
      <div className="cardBoard__description">{description}</div>
    </div>
  )
};

export default CardBoard;
