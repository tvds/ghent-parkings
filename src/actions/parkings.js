// SET_PARKINGS
export const setParkings = (parkings) => ({
  type:'SET_PARKINGS',
  parkings
});

export const startSetParkings = () => {
  return (dispatch) => {  
    return fetch("https://datatank.stad.gent/4/mobiliteit/bezettingparkingsrealtime.json").then(results => {
      return results.json();
    }).then(data => {
      console.log(data);
      dispatch(setParkings(data))
    });
    
  };
}
