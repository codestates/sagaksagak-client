import { initialState } from './initialState';

const dummyReducer = (state = initialState, action) => {

    switch (action.type) {
      default:
        return state;
    }
}

export default dummyReducer;