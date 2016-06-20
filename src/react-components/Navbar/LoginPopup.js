import React from 'react';
import Popup from './Popup';

class LoginPopup extends React.Component {
  render() {
    return (
      <Popup {...this.props}>
        <img src="/img/logo.png"/>
        <h1>Login to Join The Grit Community</h1>
        <p>The Grit is a Community to seek and share advice.</p>
        <button className="facebook-btn">Login with Facebook</button>
        <p>We'll never post to Facebook without your permission.</p>
      </Popup>
    );
  }
}

export default LoginPopup;
