import parkingsReducer from '../../reducers/parkings';
import parkings from '../fixtures/parkings';


test('should set parkings', () => {
  const action = {
    type: 'SET_PARKINGS',
    parkings: [parkings[1]]
  };
  const state = parkingsReducer(parkings, action);
  expect(state).toEqual([parkings[1]]);
});
