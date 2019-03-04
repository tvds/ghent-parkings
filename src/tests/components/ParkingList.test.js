import React from 'react';
import { shallow } from 'enzyme';
import { ParkingList } from '../../components/ParkingList';
import parkings from '../fixtures/parkings';

test('should render ParkingList with parkings', () => {
  const wrapper = shallow(<ParkingList parkings={parkings} />);
  expect(wrapper).toMatchSnapshot();
});

