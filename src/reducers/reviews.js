import ActionType from '../constants/ActionTypes';

/**
 * @param {object} initialState
 *
 **/

export default function(state = [], action) {
  switch (action.type) {
    case ActionType.GET_REVIEWS:
      return action.payload;
    default:
      return state;
  }
}
