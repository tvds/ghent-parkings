import React from 'react';
import ParkingListItem from './ParkingListItem';
import { connect } from 'react-redux';

export class ParkingList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeIndex: 0
    }
  }

  handleOnPark(activeIndex) {
    this.setState({ activeIndex });
  }
  render() {
    return (
      <div >
        {/* <div className="list-header">
          <div className="content-container">Parking list</div>
        </div> */}
        <div className="list-body">
          {
            this.props.parkings.length === 0 ?
              (
                <p>Could not retreive parkings</p>
              )
              : (
                this.props.parkings.map((parking, i) => {
                  return <ParkingListItem key={parking.id} index={i} {...parking} onPark={this.handleOnPark.bind(this, parking.id)} active={parking.id === this.state.activeIndex} />;
                })
              )
          }
        </div>
      </div>
    );
  };

}



/* 
const mapStateToProps = (state) => {
  return {
    parkings: state.parkings
  };
};

export default connect(mapStateToProps)(ParkingList); */
export default ParkingList;