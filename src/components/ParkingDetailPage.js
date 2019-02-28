
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


const ParkingDetailPage = (props) => {
  return (
    <div>
      <Link className="list-item" to="/">Return to dashboard</Link>
     <div>details</div>
     {props.parking.description}
    </div>
  );
}
 

const mapStateToProp = (state, props) => {
  return {
    parking: state.parkings.find((parking) => parking.id.toString() === props.match.params.id)
  };
};

export default connect(mapStateToProp)(ParkingDetailPage);