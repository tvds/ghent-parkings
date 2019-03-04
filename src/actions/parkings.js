// SET_PARKINGS
export const setParkings = (parkings) => ({
  type:'SET_PARKINGS',
  parkings
});

export const startSetParkings = () => {
  return (dispatch) => {  
    return fetch("https://datatank.stad.gent/4/mobiliteit/bezettingparkingsrealtime.json")
    .then(results =>  results.json())
    .then(data => {
      dispatch(setParkings(data))
    }).catch(error => console.log(error));
  };
}

