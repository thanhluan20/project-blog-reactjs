import { ACT_FETCH_ALL_CATEGORIES} from "./action"

const initState = {
  listCategory: [],
}

function reducer(state = initState, action) {
  switch (action.type) {
    case ACT_FETCH_ALL_CATEGORIES:
      return {
        ...state,
        listCategory: action.payload.listCategories,
      }
    default:
      return state;
  }
}

export default reducer;