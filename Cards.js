import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these epic indie games!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/deadcells.jpg'
              text='Explore a sprawling, ever-changing castle... assuming you’re able to fight your way past its keepers in 2D souls-lite combat!'
              label='Dead Cells'
              path='/services'
              link='https://www.youtube.com/watch?v=gX4cGcwmdsY'
            />
            <CardItem
              src='images/stanley.jpg'
              text='First person exploration game with limitless options!'
              label='The Stanley Parable'
              path='/services'
              link='https://www.youtube.com/watch?v=fBtX0S2J32Y'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/papers.jpg'
              text='Use your wits to find what is fake or not! Beware consequnces down the line!'
              label='Papers Please'
              path='/services'
              link='https://www.youtube.com/watch?v=_QP5X6fcukM'
            />
            <CardItem
              src='images/ww1.jpg'
              text='Dive into a very emotional 2D animated comic book adventure, mixing exploration, action and puzzles!'
              label='Valiant Hearts'
              path='/products'
            />
            <CardItem
              src='images/shovel.jpg'
              text='Bash your way through a fantastical, 8-bit world-class action-adventure gameplay!'
              label='Shovel Knight'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;