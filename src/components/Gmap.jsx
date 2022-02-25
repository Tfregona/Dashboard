import { React, Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

class Gmap extends Component {
  render() {
    const style = {
      maxWidth: "600px",
      height: "350px",
      overflowX: "hidden",
      overflowY: "hidden",
    };
    const containerStyle = {
      maxWidth: "600px",
      height: "350px",
    };
    return (
      <Map
        google={this.props.google}
        style={style}
        zoom={10}
        initialCenter={{
          lat: 43.710175,
          lng: 7.261953,
        }}
        containerStyle={containerStyle}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLEMAP,
})(Gmap);
