import React from 'react';
import ParkingListItem from './ParkingListItem';
import { connect } from 'react-redux';


const ParkingList = (props) => {
  return (
    <div className="content-container">
      <div className="list-header">
        <div>ParkingList</div>
      </div>
      <div className="list-body">
        {
          props.parkings.map((parking) => {
            return <ParkingListItem key={parking.id} {...parking} />;
          })
        }
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    parkings: state.parkings
  };
};

export default connect(mapStateToProps)(ParkingList);