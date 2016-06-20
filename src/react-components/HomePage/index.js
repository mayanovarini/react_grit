import React from 'react';
import ProductList from '../Product/ProductList';

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      productList: [
        {
          id: 1,
          name: 'World traveler!',
          link: 'https://www.facebook.com/mayanovarini',
          media: '/img/travel.jpg',
          upvote: 169,
          description: 'I want to travel the world',
          maker: {
            name: 'Maya Novarini',
            avatar: '/img/maya.jpg',
          }
        },
        {
          id: 2,
          name: 'I want to build my own startup',
          link: 'https://www.facebook.com/wulan.mantik',
          media: '/img/startup.jpg',
          upvote: 765,
          description: 'A company to help people achieve their goals',
          maker: {
            name: 'Wulan',
            avatar: '/img/wulan.jpg',
          }
        }
      ]
    }
  }

  render() {
    return (
      <section>
        <header>
          <img src="/img/balloon.jpg" width="100%" />
        </header>

        <section>
          <section className="container">
            {
              this.state.productList
              ?
              <ProductList productList={this.state.productList}/>
              :
              null
            }


          </section>
        </section>
      </section>
    );
  }
}

export default HomePage;
