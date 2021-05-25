import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import NotFound from './NotFound';
// Styles
import '../assets/styles/components/Player.scss';

// Actions
import * as Actions from '../actions/videosActions';

const { getVideoSource } = Actions;

const Player = (props) => {
  const { playing, getVideoSource, history, match: { params: { id } } } = props;

  const hasPlaying = Object.keys(playing).length > 0;

  const handleClick = (e) => {
    history.goBack();
  };

  useEffect(() => {
    getVideoSource(id);
  }, []);

  return hasPlaying ? (
    <div className='Player'>
      <video controls autoPlay>
        <source src={playing.source} type='video/mp4' />
      </video>
      <div className='Player-back'>
        <button onClick={handleClick} type='button'>
              Regresar
        </button>
      </div>
    </div>
  ) : <NotFound />;
};

const mapStateToProps = (reducers) => {
  return reducers.videosReducer;
};

const mapDispatchToProps = {
  getVideoSource,
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
