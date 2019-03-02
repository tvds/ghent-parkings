
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


const ParkingDetailPage = (props) => {
  return (
    <div>
      <div className="detail-header">
        <Link className="detail-header__link" to="/">
          <div className="content-container">
            Return to dashboard
        </div>
        </Link>
      </div>
      <div className="detail-body">
        <div className="content-container">
          <div className="detail-body__title">
            <h1>
              {props.parking.description}
            </h1>
          </div>
          <p>{props.parking.contactInfo}</p>
          {
            props.parking.openingTimes[0].days.map((day, key) => {
              return <p key={key}>{day}: {props.parking.openingTimes[0].from} - {props.parking.openingTimes[0].to}</p>;
            })
          }
        </div>
      </div>
    </div>
  );
}


const mapStateToProp = (state, props) => {
  return {
    parking: state.parkings.find((parking) => parking.id.toString() === props.match.params.id)
  };
};

export default connect(mapStateToProp)(ParkingDetailPage);