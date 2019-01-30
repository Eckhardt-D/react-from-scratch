import React, {Suspense} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ReactDom from 'react-dom'

import './style.css'

class BoxOne extends React.Component {
  render() {
    return <div className="box boxOne"></div>
  }
}

class BoxTwo extends React.Component {
  render() {
    return <div className="box boxTwo"></div>
  }
}

class BoxThree extends React.Component {
  render() {
    return <div className="box boxThree"></div>
  }
}

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={BoxOne}/>
          <Route path="/two" component={BoxTwo}/>
          <Route path="/three" component={BoxThree}/>
        </Switch>
      </Suspense>
    </Router>
  )
}

ReactDom.render(
  <App/>,
  document.getElementById('root')
)