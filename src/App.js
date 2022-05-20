import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import Order from './pages/order/order'
import Dashboard from './pages/dashboard/dashboard'

const App = () => {
  return (
    <Router>
      <Switch>
        {/* <Route path='/' element={ <Redirect to='/order' /> } /> */}
        <Route path='/order' component={Order}/>
        <Route path='/dashboard' component={Dashboard} />
      </Switch>
    </Router>
  )
}

export default App