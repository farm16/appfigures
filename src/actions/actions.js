//checking env

import axios from 'axios';
import ActionTypes from '../constants/ActionTypes';

export const byDefault = () => dispatch => {
  axios
    .get(
      `${process.env.REACT_APP_FIGURES_API_URL}?q=love&rating=4,5&sort=-date`
    )
    .then(res => {
      console.log(res);
      dispatch({
        type: ActionTypes.GET_REVIEWS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: ActionTypes.GET_ERRORS,
        payload: err
      });
    });
};

export const byRatings = () => dispatch => {
  axios
    .get(
      `${process.env.REACT_APP_FIGURES_API_URL}?q=love&rating=4,5&sort=-date`
    )
    .then(res => {
      console.log(res);
      dispatch({
        type: ActionTypes.GET_REVIEWS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: ActionTypes.GET_ERRORS,
        payload: err
      });
    });
};
