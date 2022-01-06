const citiesReducer = (state = {allCities:[], filteredCities:[], newCity:{}}, action) => {
  switch (action.type) {
    case 'GET_ALL_CITIES':
      return {
        ...state,
        allCities: action.payload,
        filteredCities: action.payload,
      }
    case 'FILTER_CITIES':
      let filtered = state.allCities.filter(city => city.name.toLowerCase().startsWith(action.payload.toLowerCase().trim()))
      return{
        ...state,
        filteredCities: filtered
      }
    case 'GET_ONE_CITY':
      console.log('entra al reducer')
      let oneCity = state.allCities.find(city => city._id === action.payload);
      console.log(oneCity.name)
      return{
        ...state,
        newCity: oneCity
      }
    default:
      return state;
  }
}

export default citiesReducer