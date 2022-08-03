// Action;
const CREATE = "todo/CREATE";


const initialState = {
    list: [
      {
        id: 0,
        subject: "테스트제목",
        body: "테스트내용",
        time: 3
      },
      {
        id: 1,
        subject: "테스트제목2",
        body: "테스트내용2",
        time: 4
      },
    ]
  };

  
// Action Creators
export function create(til) {

  return { type: CREATE, til };
}


// 리듀서
export default function reducer(state = initialState, action={}) {
  switch (action.type) {

    case CREATE: {
      const new_til_list = [...state.list, action.til];
      return { ...state, list: new_til_list };
    }

   
    default:
      return state;
  }
};

