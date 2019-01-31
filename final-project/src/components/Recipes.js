import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchRecipes } from '../actions/recipeActions';

import { 
  Card, 
  CardImg, 
  CardText, 
  CardBody, 
  CardTitle, 
  CardSubtitle,
  Container,
  Row,
  Col,
  Button } from 'reactstrap';

import './Recipes.css'

class Recipes extends Component {
  componentDidMount() {
    this.props.fetchRecipes()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newRecipe) {
      this.props.recipes.unshift(nextProps.newRecipe);
    }
  }

  render() {
    const recipeCards = this.props.recipes.map(recipe => {
      return ( 
        <Col key={recipe.id} className="mt-3" lg="4" md="6" sm="12">
          <Card className={"recipeCard "+recipe.id}>
            <CardImg 
              top 
              width="100%" 
              src={recipe.image} 
              alt="React-Recipes" />
            <CardBody>
              <CardTitle style={{fontSize: "1.2em", fontWeight: "bold"}}>{recipe.name}</CardTitle>
              <CardSubtitle style={{color: "darkgrey"}}>{recipe.time} min</CardSubtitle>
              <CardText>{recipe.description}</CardText>
              <Button>Read</Button>
            </CardBody>
          </Card>
        </Col>
      )
    })

    return (
      <Container className="homeContent">
        <Row>
          {recipeCards}
        </Row>
      </Container>
    )
  }
}

Recipes.propTypes = {
  fetchRecipes: PropTypes.func.isRequired,
  recipes: PropTypes.array.isRequired,
  newRecipe: PropTypes.object
};

const mapStateToProps = state => ({
  recipes: state.recipes.items,
  newRecipe: state.recipes.item
});

export default connect(mapStateToProps, { fetchRecipes })(Recipes);