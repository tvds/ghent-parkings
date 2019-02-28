import React from 'react';
import { Link } from 'react-router-dom';

export class ParkingListItem extends React.Component {

  onHandleParkButton() {
    //todo
  }

  render() {
    return (
      <div>
        <Link className="list-item" to={`/details/${this.props.id}`}>
          <div>
            <h3 className="list-item__title">{this.props.description}</h3>
            {this.props.address} {this.props.parkingStatus.availableCapacity}/{this.props.parkingStatus.totalCapacity}  Open:{this.props.parkingStatus.open + ""}
          </div>
        </Link>
        <button onClick={this.onHandleParkButton}>Park</button>
      </div>
    );
  };

}

export default ParkingListItem;
