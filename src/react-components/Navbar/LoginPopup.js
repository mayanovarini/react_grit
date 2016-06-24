import React from 'react';
import Popup from './Popup';
import Actions from '../../actions';

class LoginPopup extends React.Component {
  handleLogin = () => {
    Actions.login();
    this.props.hidePopup();
  };

  render() {
    return (
      <Popup {...this.props} style="login-popup">
        <img src="/img/logo.png" style={{marginLeft: '-5em', marginBottom: '4em'}}/>
        <h2>Login to Join The Grit Community</h2>
        <p style={{paddingTop: '1em'}}>The Grit is a Community to seek and share advice.</p>
        <button className="facebook-btn" onClick={this.handleLogin}>Sign in with Facebook</button>
        <p>We'll never post to Facebook without your permission.</p>
      </Popup>
    );
  }
}

export default LoginPopup;
