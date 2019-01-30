import React, { Component, Fragment } from 'react'
import {
  Container,
  Row,
  Col,
  ListGroup, 
  ListGroupItem
} from 'reactstrap'

import './OneRecipe.css'

import Navigation from '../components/Navigation'

export default class OneRecipe extends Component {
  render() {
    return (
      <Fragment>
        <Navigation/>
        <Container>
          <Row>
            <Col sm="12" lg="10" className="mx-auto mb-5">
              <img 
              width="100%"
              src="https://www.bbcgoodfood.com/sites/default/files/guide/guide-image/2018/06/chicken-wings-main.jpg" alt="MyRecipe"/>
              <div className="recipeTitle my-3">
                <h2 className="display-6">The Recipe</h2>
                <p className="text-muted mb-0">120 min</p>
              </div>
              <p className="mb-0">The description The description The description The description The description The description The description The description</p>
              <br/>
              <hr/>
              <h2 className="display-6">The ingredients</h2>
              <ListGroup className="my-3">
                <ListGroupItem>Cras justo odio</ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Morbi leo risus</ListGroupItem>
                <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
              </ListGroup>
              <br/>
              <hr/>
              <h2 className="display-6">Instructions</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <p><small>by Eckhardt</small></p>
              <hr/>
              <a href="/">Back to recipes</a>
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}