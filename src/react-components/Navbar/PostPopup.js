import React from 'react';
import Popup from './Popup';
import Actions from '../../actions';

class PostPopup extends React.Component {
  handlePost = () => {
    var newProduct = {
      name: this.refs.name.value,
      link: this.refs.link.value,
      description: this.refs.description.value,
      media: this.refs.media.value,
      upvote: 0,
      maker: {
        name: this.props.user.name,
        avatar: this.props.user.avatar
      }
    }

    Actions.addProduct(newProduct);
  };

  render(){
    return (
      <Popup {...this.props} style="post-popup">
        <header className="post-header">Post Your Plan</header>
        <section>
          <table>
            <tbody>
              <tr>
                <td>I want to ...</td>
                <td><input placeholder="Write what you're planning to do. E.g. Learn how to code" ref="name"/></td>
              </tr>
              <tr>
                <td>Details</td>
                <td><input placeholder="Share more with the Grit community of what is it that you want to achieve exactly" ref="description"/></td>
              </tr>
              <tr>
                <td style={{padding: '1px'}}>Any link or reference that inspired you?</td>
                <td><input placeholder="http://www.myinspiration.com" ref="link"/></td>
              </tr>
              <tr>
                <td>Cover</td>
                <td><input placeholder="Paste a direct link of an image for illustration" ref="media"/></td>
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
