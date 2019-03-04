import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ParkingListItem = (props) => {
  return (
    <div className={props.active ? 'parked' : ''} >
      <div className="list-item">
        <Link className="list-item__link" to={`/details/${props.id}`}>
          <div>
            <h3 className="list-item__title">{props.index + 1}. {props.description}</h3>
            <div>{props.address}</div>
            <div>
              Availability: {props.active ? props.parkingStatus.availableCapacity - 1 : props.parkingStatus.availableCapacity} / {props.parkingStatus.totalCapacity} {props.active && <FontAwesomeIcon icon={['fas', 'parking']} />}
            </div>
          </div>
        </Link>
        <button className="button" onClick={props.onPark}>Park</button>
      </div>
    </div>
  );
};


export default ParkingListItem;