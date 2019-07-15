import * as types from "./../constants/actionTypes";
import initialState from "./initialState";

function actionTypeEndsInSuccess(type) {
  return type.substring(type.length - 7) === "SUCCESS";
}

export default function ajaxStatusReducer(
  state = initialState.ajaxCallsInProgress,
  action
) {
  if (action.type === types.BEGIN_AJAX_CALL) {
    return state + 1;
  } else if (
    action.type === types.AJAX_ERROR ||
    actionTypeEndsInSuccess(action.type)
  ) {
    return state > 0 ? state - 1 : 0;
  }

  return state;
}
