import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class ParkingListItem extends React.Component {
  render() {
    console.log(this)
    return (
      <div className={this.props.active && 'parked'} >
        <div className="list-item">
          <Link className="list-item__link" to={`/details/${this.props.id}`}>
            <div>
              <h3 className="list-item__title">{this.props.index + 1}. {this.props.description}</h3>
              <div>{this.props.address}</div>
              <div>
               Availability: {this.props.active ? this.props.parkingStatus.availableCapacity - 1 : this.props.parkingStatus.availableCapacity} / {this.props.parkingStatus.totalCapacity} {this.props.active && <FontAwesomeIcon icon={['fas', 'parking']} />}
              </div>
            </div>
          </Link>
          <button className="button" onClick={this.props.onPark}>Park</button>
        </div>
      </div>
    );
  };

}

export default ParkingListItem;