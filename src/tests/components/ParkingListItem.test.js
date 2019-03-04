import React from 'react';
import { shallow } from 'enzyme';
import parkings from '../fixtures/parkings';
import ParkingListItem from '../../components/ParkingListItem';

test('should render ParkingListItem correctly', () => {
  const wrapper = shallow(<ParkingListItem {...parkings[0]} />);
  expect(wrapper).toMatchSnapshot();
});
