import React from 'react';
import Popup from './Popup';

class PostPopup extends React.Component {
  handlePost = () => {

  };

  render(){
    return (
      <Popup {...this.props} style="post-popup">
        <header className="post-header">Post Your Thought</header>
        <section>
          <table>
            <tbody>
              <tr>
                <td>I want to ...</td>
                <td><input placeholder="Write what you're planning to do. E.g. Learn how to code"/></td>
              </tr>
              <tr>
                <td>Details</td>
                <td><input placeholder="Share more with the Grit community of what is it that you want to achieve exactly"/></td>
              </tr>
              <tr>
                <td>Link</td>
                <td><input placeholder="http://www..."/></td>
              </tr>
              <tr>
                <td>Media</td>
                <td><input placeholder="Paste a direct link of an image for illustration"/></td>
              </tr>
            </tbody>
          </table>
        </section>
        <footer className="post-footer">
          <button onClick={this.handlePost} className="post-btn">Share</button>
        </footer>
      </Popup>
    );
  }
}

export default PostPopup;
