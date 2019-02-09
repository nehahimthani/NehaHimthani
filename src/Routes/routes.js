import React from 'react'
import { Switch, Route } from 'react-router-dom'
import SlidePage from './../slides'
import LoginPage from './../login'
const Routes = () => (
  <Switch>
     <Route exact path='/' component={LoginPage}/>
     <Route exact path='/slides' component={SlidePage}/>
  </Switch>
)
export default Routes;
