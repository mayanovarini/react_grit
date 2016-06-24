import React from 'react';
import LoginPopup from './LoginPopup';
import PostPopup from './PostPopup';
import ProfileMenu from './ProfileMenu';


class Navbar extends React.Component {
  constructor(){
    super();
    this.state = {
      popupStatus: false
    }
  }

  showPopup = () => {
    this.setState({popupStatus: true});
  };

  hidePopup = () => {
    this.setState({popupStatus: false})
  };


  renderLogo(){
    return(
      <a href="#"><img src="/img/apple32.png" style={{float: "left", paddingBottom: "12px", paddingRight: "12px"}}/></a>
    );
  }

  renderProductSearch(){
    return(
      <section className="left-side">
        <input className="product-search" placeholder="SEARCH" />
      </section>
    );
  }

  renderUser(){
    return(
      <section className="right-side">
        {
          this.props.user
          ?
          //display post link here for user to update their product
          <section>
            <span>
              <a href="#" onClick={this.showPopup} className="login-btn">POST</a>
              <ProfileMenu user={this.props.user}/>
            </span>
            <PostPopup user={this.props.user} status={this.state.popupStatus} hidePopup={this.hidePopup}/>

          </section>
          :
          //display login link
          <section>
            <a href="#" onClick={this.showPopup} className="login-btn">LOGIN</a>
            <LoginPopup status={this.state.popupStatus} hidePopup={this.hidePopup}/>

          </section>
        }
      </section>
    );
  }

  render() {
    return(
      <section>
        <section className="navbar">
          {this.renderLogo()}
          {this.renderProductSearch()}
          {this.renderUser()}
        </section>
      </section>
    );
  }

}

export default Navbar;
