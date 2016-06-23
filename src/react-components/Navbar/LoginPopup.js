import React from 'react';
import Popup from './Popup';
import Firebase from 'firebase';

class LoginPopup extends React.Component {
  handleLogin = () => {
    var firebaseRef = new Firebase('https://grit.firebaseio.com');
    firebaseRef.authWithOAuthPopup('facebook', (error, user) => {
      if (error) {
        console.log('Failed!', error);
      } else {
        console.log('Login successfully!', user);
      }
    });
  };

  render() {
    return (
      <Popup {...this.props} style="login-popup">
        <img src="/img/logo.png"/>
        <h2>Login to Join The Grit Community</h2>
        <p>The Grit is a Community to seek and share advice.</p>
        <button className="facebook-btn" onClick={this.handleLogin}>Sign in with Facebook</button>
        <p>We'll never post to Facebook without your permission.</p>
      </Popup>
    );
  }
}

export default LoginPopup;
