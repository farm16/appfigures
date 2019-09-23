//checking env

import axios from 'axios';
import ActionTypes from '../constants/ActionTypes';
const moment = require('moment');
const dateTime = new Date();

export const getQueriedData = data => dispatch => {
  let query = [];
  if (data.loadSize !== 25) {
    query.push(`count=${data.loadSize}&`);
  }
  if (data.text !== '') {
    query.push(`q=${data.text}&`);
  }
  if (data.translation !== '') {
    query.push(`lang=${data.translation}&`);
  }
  if (data.stars !== 0) {
    query.push(`stars=${data.stars}&`);
  }
  if (data.time !== '') {
    switch (data.time) {
      case 'today':
        query.push(`start=${moment(dateTime).format('YYYY-MM-DD')}&sort=date&`);
        break;
      case 'yesterday':
        query.push(
          `start=${moment(dateTime)
            .subtract(1, 'days')
            .format('YYYY-MM-DD')}&end=${moment(dateTime)
            .subtract(1, 'days')
            .format('YYYY-MM-DD')}&sort=date&`
        );
        break;
      case 'week':
        query.push(
          `start=${moment(dateTime)
            .subtract(7, 'days')
            .format('YYYY-MM-DD')}&end=${moment(dateTime).format(
            'YYYY-MM-DD'
          )}&sort=date&`
        );
        break;
      case '30':
        query.push(
          `start=${moment(dateTime)
            .subtract(30, 'days')
            .format('YYYY-MM-DD')}&end=${moment(dateTime).format(
            'YYYY-MM-DD'
          )}&sort=date&`
        );
        break;
      case 'year':
        query.push(
          `start=${moment(dateTime)
            .subtract(1, 'years')
            .format('YYYY-MM-DD')}&end=${moment(dateTime).format(
            'YYYY-MM-DD'
          )}&sort=date&`
        );
        break;
      default:
        break;
    }
  }
  if (data.country !== '') {
    query.push(`countries=${data.country}&`);
  }
  console.log(`${process.env.REACT_APP_FIGURES_API_URL}?${query.join('')}`);

  axios
    .get(`${process.env.REACT_APP_FIGURES_API_URL}?${query.join('')}`)
    .then(res => {
      console.log(res);
      dispatch({
        type: ActionTypes.GET_REVIEWS,
        payload: res.data.reviews
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

export const getAllRatings = () => dispatch => {
  axios
    .get(`${process.env.REACT_APP_FIGURES_API_URL}`)
    .then(res => {
      console.log(res);
      dispatch({
        type: ActionTypes.GET_REVIEWS,
        payload: res.data.reviews
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
