import React from 'react';
import ParkingListItem from './ParkingListItem';
import { connect } from 'react-redux';

export class ParkingList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeIndex : 0
    }
  }

  handleOnPark(activeIndex) {
    this.setState({ activeIndex });
  }
  render() {
    return (
      <div className="content-container">
        <div className="list-header">
          <div>ParkingList</div>
        </div>
        <div className="list-body">
          {
            this.props.parkings.map((parking) => {
              return <ParkingListItem key={parking.id} {...parking} onPark={this.handleOnPark.bind(this, parking.id )} active={parking.id === this.state.activeIndex} />;
            })
          }
        </div>
      </div>
    );
  };

}




const mapStateToProps = (state) => {
  return {
    parkings: state.parkings
  };
};

export default connect(mapStateToProps)(ParkingList);