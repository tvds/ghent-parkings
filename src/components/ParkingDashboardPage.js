import React from 'react';
import { connect } from 'react-redux';
import ParkingList from './ParkingList';
import Map from "./Map";

export class ParkingDashboardPage extends React.Component {
  render() {
    return (
      <div>
        <div className='dashboard-left'>
          <ParkingList parkings={this.props.parkings} />
        </div>
        <div className='dashboard-right'>
          <Map
            center={{ lat: 51.052757, lng: 3.718902 }}
            zoom={13}
            places={this.props.parkings}
          />
        </div>
      </div>
    );
  };
}

const mapStateToProps = (state) => {
  return {
    parkings: state.parkings
  };
};

export default connect(mapStateToProps)(ParkingDashboardPage);
