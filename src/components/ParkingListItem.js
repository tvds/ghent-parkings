import React from 'react';
import { Link } from 'react-router-dom';


const ParkingListItem = (props) => (
    <Link className="list-item" to={`/details/${props.id}`}>
    <div>
    <h3 className="list-item__title">{props.description}</h3>
      {props.address} {props.parkingStatus.availableCapacity}/{props.parkingStatus.totalCapacity}  Open:{props.parkingStatus.open +""}
     </div>
    </Link>
);

export default ParkingListItem;
