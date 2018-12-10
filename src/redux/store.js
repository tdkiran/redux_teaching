import { createStore } from 'redux';

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD': {
            return {
                ...state,
                notesList: state.notesList.concat(action.payload.data)
            }
        }
        default: {
            return state;
        }
    }
}
const store = createStore(reducer, { notesList: [] });

store.subscribe(() => console.log(store.getState()))

export default store;