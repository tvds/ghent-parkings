
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Map from "./Map";

const ParkingDetailPage = (props) => {
  return (
    <div>
      <div className="detail-header">
        <Link className="detail-header__link" to="/">
          <div className="content-container">
            <FontAwesomeIcon icon={['fas', 'chevron-left']} />  Return to dashboard
          </div>
        </Link>
      </div>
      <div className="detail-body">
        <div className="content-container detail-body__data">
          <h1 className="detail-body__title">
            {props.parking.description}
          </h1>
          <div className="detail-body__sub-title">{props.parking.contactInfo}</div>
          <h3>Opening hours</h3>
          {
            props.parking.openingTimes[0].days.map((day, key) => {
              return <div key={key}>{day}: {props.parking.openingTimes[0].from} - {props.parking.openingTimes[0].to}</div>;
            })
          }
        </div>
        <Map
          center={{ lat: 51.052757, lng: 3.718902 }}
          zoom={13}
          places={[props.parking]}
        />
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