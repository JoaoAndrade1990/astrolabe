import { BrowserRouter as Link } from 'react-router-dom'

function NavBar() {

    return (
      <>
      <h1>NavBar</h1>
      <nav>
            <ul>
              <li>
                <Link to="/">HomePage</Link>
              </li>
              <li>
                <Link to="/category">CategoryPage</Link>
              </li>
              <li>
                <Link to="/product">ProductDetailsPage</Link>
              </li>
              <li>
                <Link to="/cart">CartPage</Link>
              </li>
              <li>
                <Link to="/checkout">CheckoutPage</Link>
              </li>
            </ul>
          </nav>
      </>
    )
  }

  export default NavBar;