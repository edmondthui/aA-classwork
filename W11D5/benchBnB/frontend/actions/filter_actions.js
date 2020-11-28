export const UPDATE_FILTER = "UPDATE_FILTER"
import {fetchBenches} from './bench_actions'

export const updateFilters = (filter, value) => {
    return {
        type: UPDATE_FILTER,
        filter,
        value
    }
}

export function updateFilter(filter, value) {
    return (dispatch, getState) => {
      dispatch(updateFilters(filter, value));
      return fetchBenches(getState().ui.filter)(dispatch);
    };
}