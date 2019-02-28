
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


const ParkingDetailPage = (props) => {
  return (
    <div>
      <Link className="list-item" to="/">Return to dashboard</Link>
     <div>details</div>
     <p>{props.parking.description}</p>
     <p>{props.parking.contactInfo}</p>
     {
            props.parking.openingTimes[0].days.map((day, key) => {
              return <p key={key}>{day}: {props.parking.openingTimes[0].from} - {props.parking.openingTimes[0].to}</p>;
            })
          }
    </div>
  );
}
 

const mapStateToProp = (state, props) => {
  return {
    parking: state.parkings.find((parking) => parking.id.toString() === props.match.params.id)
  };
};

export default connect(mapStateToProp)(ParkingDetailPage);