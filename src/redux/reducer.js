const initialState = {
    country: 'Global',
    newConfirmed: '',
    totalConfirmed: '',
    newDeaths: '',
    totalDeaths: '',
    countries: []
}

export function reducer(state = initialState, action){
    switch(action.type){
        case 'FETCH_GLOBAL_DATA':
            return{
                ...state,
                newConfirmed: action.payload.globalData.NewConfirmed,
                totalConfirmed: action.payload.globalData.TotalConfirmed,
                newDeaths: action.payload.globalData.NewDeaths,
                totalDeaths: action.payload.globalData.TotalDeaths,
                countries: action.payload.countries
            }
        case 'SET_COUNTRY':
            return{
                ...state,
                newConfirmed: action.payload.NewConfirmed,
                totalConfirmed: action.payload.TotalConfirmed,
                newDeaths: action.payload.NewDeaths,
                totalDeaths: action.payload.TotalDeaths,
                country: action.payload.Country
            }
        default:
            return state
    }
}