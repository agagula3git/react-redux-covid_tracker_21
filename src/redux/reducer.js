const initialState = {
    country: 'Global',
    newConfirmed: '',
    totalConfirmed: '',
    newDeaths: '',
    totalDeaths: ''
}

export function reducer(state = initialState, action){
    switch(action.type){
        case 'FETCH_GLOBAL_DATA':
            return{
                ...state,
                newConfirmed: action.payload.NewConfirmed,
                totalConfirmed: action.payload.TotalConfirmed,
                newDeaths: action.payload.NewDeaths,
                totalDeaths: action.payload.TotalDeaths
            }
        default:
            return state
    }
}