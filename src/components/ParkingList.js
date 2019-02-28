import React from 'react';
import ParkingListItem from './ParkingListItem';

const dataUrl = "https://datatank.stad.gent/4/mobiliteit/bezettingparkingsrealtime.json";

export class ParkingList extends React.Component {
  constructor() {
    super();
    this.state = {
      parkings: []
    }
  }
  componentDidMount() {
    fetch(dataUrl).then(results => {
      return results.json();
    }).then(data => {
      console.log(data);
      this.setState({parkings : data});
    });
  };

  render() {
    return (
      <div className="content-container">
        <div className="list-header">
          <div>ParkingList</div>
        </div>
        <div className="list-body">
          {
            this.state.parkings.map((parking) => {
              return <ParkingListItem key={parking.id} {...parking} />;
            })
          }
        </div>

      </div>
    );
  };

}
export default ParkingList;
