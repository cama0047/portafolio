import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Projects!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Scrap-app: taking the show to another level'
              label='React'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Webscrapper to update the firebase database information'
              label='Python'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/AWS.png'
              text='DevOps: Deploy a Docker Image in a AWS:Lambda '
              label='AWS'
              path='/services'
            />
            <CardItem
              src='images/img-4.png'
              text='Restaurants.com: Restaurant app using yelp API and localization'
              label='React-Native'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Music Player'
              label='Cordova'
              path='/sign-up'
            />
            
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-1.jpg'
              text='Weather app '
              label='Javascript'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='File Explorer in C# and Xaml'
              label='C#'
              path='/products'
            />
            <CardItem
              src='images/img-3.jpg'
              text='Music Player'
              label='Cordova'
              path='/sign-up'
            />
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;