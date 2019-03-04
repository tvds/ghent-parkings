import React from 'react';
import { shallow } from 'enzyme';
import ParkingDashboardPage from '../../components/ParkingDashboardPage';

test('should render ParkingDashboardPage correctly', () => {
  const wrapper = shallow(<ParkingDashboardPage />);
  expect(wrapper).toMatchSnapshot();
});
