import React from 'react';
import { shallow } from 'enzyme';
import ParkingDetailPage from '../../components/ParkingDetailPage';

test('should render ParkingDetailPage correctly', () => {
  const wrapper = shallow(<ParkingDetailPage />);
  expect(wrapper).toMatchSnapshot();
});
