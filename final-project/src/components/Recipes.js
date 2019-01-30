import React, { Component } from 'react';
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

export default class Recipes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recipes: [
        {
          name: 'Spur Wings Recipe',
          id: 1,
          time: 120,
          description: 'A delicious recipe that emulates Spur\'s famous wings!',
          instructions: 'Mix the food',
          created: new Date().toLocaleDateString('en-US'),
          images: ['https://www.bbcgoodfood.com/sites/default/files/guide/guide-image/2018/06/chicken-wings-main.jpg'],
          createdBy: 'Eckhardt'
        },
        {
          name: 'Spur Wings Recipe',
          id: 2,
          time: 120,
          description: 'A delicious recipe that emulates Spur\'s famous wings!',
          instructions: 'Mix the food',
          created: new Date().toLocaleDateString('en-US'),
          images: ['https://www.bbcgoodfood.com/sites/default/files/guide/guide-image/2018/06/chicken-wings-main.jpg'],
          createdBy: 'Eckhardt'
        },
        {
          name: 'Spur Wings Recipe',
          id: 3,
          time: 120,
          description: 'A delicious recipe that emulates Spur\'s famous wings!',
          instructions: 'Mix the food',
          created: new Date().toLocaleDateString('en-US'),
          images: ['https://www.bbcgoodfood.com/sites/default/files/guide/guide-image/2018/06/chicken-wings-main.jpg'],
          createdBy: 'Eckhardt'
        },
        {
          name: 'Spur Wings Recipe',
          id: 4,
          time: 120,
          description: 'A delicious recipe that emulates Spur\'s famous wings!',
          instructions: 'Mix the food',
          created: new Date().toLocaleDateString('en-US'),
          images: ['https://www.bbcgoodfood.com/sites/default/files/guide/guide-image/2018/06/chicken-wings-main.jpg'],
          createdBy: 'Eckhardt'
        },
        {
          name: 'Spur Wings Recipe',
          id: 5,
          time: 120,
          description: 'A delicious recipe that emulates Spur\'s famous wings!',
          instructions: 'Mix the food',
          created: new Date().toLocaleDateString('en-US'),
          images: ['https://www.bbcgoodfood.com/sites/default/files/guide/guide-image/2018/06/chicken-wings-main.jpg'],
          createdBy: 'Eckhardt'
        }
      ]
    }
  }

  render() {
    const recipeCards = this.state.recipes.map(recipe => {
      return ( 
        <Col key={recipe.id} className="mt-3" lg="4" md="6" sm="12">
          <Card className={"recipeCard "+recipe.id}>
            <CardImg 
              top 
              width="100%" 
              src={recipe.images[0]} 
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