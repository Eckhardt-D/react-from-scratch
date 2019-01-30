import React from 'react'
import ReactDom from 'react-dom'

const randomAnimals = [
  'Horse',
  'Cow',
  'Chicken',
  'Lion',
  'Elephant',
  'Dog'
]

class Animal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      animals: randomAnimals,
      showAnimal: ''
    }
  }

  getRandomAnimal() {
    this.setState({
      showAnimal: this.state.animals[Math.floor(Math.random() * this.state.animals.length)]
    })
  }

  componentDidMount() {
    this.changeAnimal = setInterval(
      () => this.getRandomAnimal(),
      1000
    )
  }

  componentWillUnmount() {
    clearInterval(this.changeAnimal)
  }

  render() {
    return <p>{this.state.showAnimal}</p>
  }
}

ReactDom.render(
  <Animal/>,
  document.getElementById('root')
)