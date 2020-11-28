const thunk = ({ dispatch, getState }) => next => action => {
    if (typeof action === 'function') {
        return action(dispatch, getState);
    }
    return next(action);
}

export default thunk;

// const thunk = function(store) {
//     return function(next) { //
//         return function(action) {
//             if (action instanceof Function) {
//                 return action(store.dispatch, store.getState) //store.dispatch, store.getState?
//             }
//             return next(action);
//         }
//     }
// }