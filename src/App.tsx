import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import Counter from './containers/Counter'
import Wishlist from './containers/WishList'
import StoreProvider from './utils/store'
import './App.css'

const Index = () => <h1 style={{ textAlign: 'center' }}>Welcome to Mobx-state-tree and React hooks example</h1>

function App() {
  return (
    <StoreProvider>
      <Router>
        <div>
          <nav>
            <ul>
              <li className="slide">
                <Link to="/counter">Counter</Link>
              </li>
              <li className="slide">
                <Link to="/wishlist">WishList</Link>
              </li>
            </ul>
          </nav>
          <Route path="/" exact component={Index} />
          <Route path="/wishlist" exact component={Wishlist} />
          <Route path="/counter" exact component={Counter} />
        </div>
      </Router>
    </StoreProvider>
  )
}

export default App
