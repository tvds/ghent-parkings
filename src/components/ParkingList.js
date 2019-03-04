import React from 'react';
import ParkingListItem from './ParkingListItem';

export class ParkingList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeParkingId: 0
    }
  }

  handleOnPark(activeParkingId) {
    if(this.state.activeParkingId === activeParkingId) {
      this.setState({ activeParkingId : 0 });
    } else {
      this.setState({ activeParkingId });
    }
  }

  render() {
    return (
      <div>
        <div className="list-body">
          {
            this.props.parkings.length === 0 ?
              (
                <p>Could not retreive parkings</p>
              )
              : (
                this.props.parkings.map((parking, i) => {
                  return <ParkingListItem key={parking.id} index={i} {...parking} onPark={this.handleOnPark.bind(this, parking.id)} active={parking.id === this.state.activeParkingId} />;
                })
              )
          }
        </div>
      </div>
    );
  };
}

export default ParkingList;