import { combineReducers } from 'redux';
import reviews from './reviews';
import error from './error';

export default combineReducers({ reviews, error });
