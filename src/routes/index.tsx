import React from 'react'
import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom'

import Home from '../views/Home'
import Todo from '../views/Todo'

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path="/todo" element={<Todo />} />
    </Switch>
  </BrowserRouter>
)

export default Routes
