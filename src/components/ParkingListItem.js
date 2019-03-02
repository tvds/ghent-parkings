import React from 'react';
import { Link } from 'react-router-dom';

export class ParkingListItem extends React.Component {
  render() {
    return (
      <div className={'content-container ' + this.props.active ? 'parked' : ''} >
        <div className="list-item">
          <Link className="list-item__link" to={`/details/${this.props.id}`}>
            <div>
              <h3 className="list-item__title">{this.props.description}</h3>
              {this.props.address} {this.props.active ? this.props.parkingStatus.availableCapacity + 1 : this.props.parkingStatus.availableCapacity}/{this.props.parkingStatus.totalCapacity}  Open:{this.props.parkingStatus.open + ""}
            </div>
          </Link>
          <button className="button" onClick={this.props.onPark}>Park</button>
        </div>
      </div>
    );
  };

}

export default ParkingListItem;