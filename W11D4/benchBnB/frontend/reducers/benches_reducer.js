import { RECEIVE_BENCHES, CREATE_BENCH } from "../actions/bench_actions";

const benchesReducer = (state= {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_BENCHES:
            return action.benches
        case CREATE_BENCH:
            let newState = Object.assign(state, action.bench);
            return newState;
        default:
            return state;
    }
};

export default benchesReducer;