// Action;
const CREATE = "todo/CREATE";
const UPDATE = "todo/UPDATE";


const initialState = {
  til_list: []
  };

  
// Action Creators
export function create(til) {
  return { type: CREATE, til };
}

export function update(til_list) {
  return { type: UPDATE, til_list };
}


// 리듀서
export default function reducer(state = initialState, action={}) {
  switch (action.type) {
    case CREATE: {
      const new_til_list = [...state.til_list, action.til];
      return { ...state, list: new_til_list };
    }
    case UPDATE: {
      const til_list =  action.til_list
      return {til_list};
  }
   
    default:
      return state;
  }
};

