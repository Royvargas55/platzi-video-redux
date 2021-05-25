/* eslint-disable import/prefer-default-export */
/* eslint-disable no-multi-assign */
import {
  SET_FAVORITE,
  DELETE_FAVORITE,
  ALREADY_EXISTS,
  LOGIN_REQUEST,
  LOGOUT_REQUEST,
  REGISTER_REQUEST,
  GET_VIDEO_SOURCE } from '../types/videosTypes';

export const setFavorite = favorite => (dispatch, getState) => {
  // Other way to update the list

  const { myList } = getState().videosReducer;

  const updatedList = [...myList, favorite];

  const updatedListItem = updatedList.map(item => ({
    ...item,
    favorite: true,
  }));

  const exist = myList.find(item => item.id === favorite.id);
  if (exist) {
    dispatch({
      type: ALREADY_EXISTS,
    });
  } else {
    dispatch({
      type: SET_FAVORITE,
      payload: updatedListItem,
    });
  }

};

export const deleteFavorite = id => (dispatch) => {
  dispatch({
    type: DELETE_FAVORITE,
    payload: id,
  });
};

export const loginRequest = form => (dispatch) => {
  dispatch({
    type: LOGIN_REQUEST,
    payload: form,
  });
};

export const logoutRequest = user => (dispatch) => {
  dispatch({
    type: LOGOUT_REQUEST,
    payload: user,
  });
};

export const registerRequest = user => (dispatch) => {
  dispatch({
    type: REGISTER_REQUEST,
    payload: user,
  });
};

export const getVideoSource = id => (dispatch) => {
  dispatch({
    type: GET_VIDEO_SOURCE,
    payload: id,
  });
};
