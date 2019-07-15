import * as types from "./actionTypes";
import * as ajaxActions from "./ajaxActions";
import CandidateApi from "../../api/CandidatesApi";

export function createCandidate(candidate) {
  return { type: types.CREATE_CANDIDATE, candidate };
}

export function getCandidates() {
  return dispatch => {
    dispatch(ajaxActions.beginAjaxCall());

    return CandidateApi.getCandidates()
      .then(candidates => {
        dispatch({
          type: types.GET_CANDIDATES_SUCCESS,
          data: candidates
        });
      })
      .catch(error => {
        dispatch(ajaxActions.ajaxCallError());
        throw error;
      });
  };
}
export function getCandidate(id) {
  return dispatch => {
    dispatch(ajaxActions.beginAjaxCall());

    return CandidateApi.getCandidate(id)
      .then(candidate => {
        dispatch({
          type: types.GET_CANDIDATE_SUCCESS,
          data: candidate
        });
      })
      .catch(error => {
        dispatch(ajaxActions.ajaxCallError());
        throw error;
      });
  };
}
