import React from 'react';
import { productList } from './productList'
import { ProductWrapper } from './Button'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: []
    }
  }

  componentDidMount() {
    const query = `
          query {
            allUsers {
              mail
              id
              name
              role
          }
        }`;

    const url = "http://localhost:3000/graphql";
    const opts = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query })
    };
    fetch(url, opts)
      .then(res => res.json())
      .then((result) => {
        this.setState({
          user: result.data.allUsers
        })
      })
      .catch(console.error);
  }

  render() {
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        {productList.map(product => (
            <div className="card">
              <div className="img-container p-5">
                <img src={product.image} alt="Product" className="card-img-top" />
              </div>
              <div className="card-footer d-flex justify-content-between">
                <p className="align-self-center mb-0">{product.title}</p>
                <h5 className="text-blue font-italic mb-0">
                  <span className="mr-1">{product.price}./kr.</span>
                </h5>
                <h5 className="text-blue font-italic mb-0">
                  <span className="mr-1"> qty:</span>{product.quantity}
                </h5>
              </div>
            </div>
        ))}
      </ProductWrapper>
    )
  }
}

export default App;

{/* <div className="mainContainer">
  <div className="billedeContainer">
    <img src={product.image} alt="Produkt" />
  </div>
  <div className="title">{product.title}</div>
  <div className="type">Type: {product.type}</div>
</div> */}
