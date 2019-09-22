import { combineReducers } from 'redux';
import reviews from './reviews';
import errors from './error';

export default combineReducers({ reviews, errors });
