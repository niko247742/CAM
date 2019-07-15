import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function candidateReducer(
  state = initialState.candidates,
  action
) {
  switch (action.type) {
    case types.CREATE_CANDIDATE:
      return [...state, { ...action.candidate }];
    case types.GET_CANDIDATES_SUCCESS:
      return action.data;
    case types.GET_CANDIDATE_SUCCESS:
      return action.data;
    default:
      return state;
  }
}
