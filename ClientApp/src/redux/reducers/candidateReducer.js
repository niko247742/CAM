export default function candidateReducer(state = [], action) {
    switch (action.type) {
        case "CREATE_CANDIDATE":
            return [...state, { ...action.candidate }];
        default:
            return state;
    }
  
}