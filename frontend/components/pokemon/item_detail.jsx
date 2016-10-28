import React from 'react';

class ItemDetail extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>{this.props.item.name}</h1>
        <h1>{this.props.item.price}</h1>
      </div>);
  }

}

export default ItemDetail;
