import * as APIUtil from '../util/bench_api_util'

export const RECEIVE_BENCHES = "RECEIVE_BENCHES"

const receiveBenches = (benches) => {
    return {
        type: RECEIVE_BENCHES,
        benches
    }
}

export const fetchBenches = (filters) => {
    return (dispatch) => {
        APIUtil.fetchBenches(filters).then((benches) => dispatch(receiveBenches(benches)))
    }
}