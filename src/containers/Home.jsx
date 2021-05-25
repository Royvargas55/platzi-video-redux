/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import '../assets/styles/App.scss';
import Header from '../components/Header';

const Home = (props) => {
  return (
    <>
      <Header />
      <Search isHome />
      {props.myList.length > 0 && (
        <Categories title='Mi Lista'>
          <Carousel>
            {props.myList.map(item => (
              <CarouselItem
                key={item.id}
                {...item}
              />
            ))}
          </Carousel>
        </Categories>
      )}
      <Categories title='Tendencias'>
        <Carousel>
          {props.trends.map(item => <CarouselItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>
      <Categories title='Originales de Platzi Video'>
        <Carousel>
          {props.originals.map(item => <CarouselItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>
    </>
  );
};

const mapStateToProps = (reducers) => {
  return reducers.videosReducer;
};

export default connect(mapStateToProps, null)(Home);
