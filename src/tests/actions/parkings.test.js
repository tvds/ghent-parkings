import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetch from 'whatwg-fetch';
import { setParkings, startSetParkings } from "../../actions/parkings";
import parkings from '../fixtures/parkings';

const createMockStore = configureMockStore([thunk]);


test('should setup set parkings action object with data', () => {
  const action = setParkings(parkings);
  expect(action).toEqual({
    type: 'SET_PARKINGS',
    parkings
  })
});


test('should fetch the parkings from api', (done) => {
  const store = createMockStore();
  store.dispatch(startSetParkings()).then(() => {
    const mockSuccessResponse = {};
    const mockJsonPromise = Promise.resolve(mockSuccessResponse); 
    const mockFetchPromise = Promise.resolve({ 
      json: () => mockJsonPromise,
    });
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);           
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith("https://datatank.stad.gent/4/mobiliteit/bezettingparkingsrealtime.json");

    process.nextTick(() => { 
      global.fetch.mockClear(); 
      done(); 
    });
  });
});