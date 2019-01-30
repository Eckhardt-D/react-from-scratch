import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createRecipe } from '../actions/recipeActions'

class PostForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      description: '',
      ingredients: [],
      instructions: '',
      created: '',
      images: '',
      createdBy: '',
      time: ''
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const recipe = {
      name: '',
      description: '',
      ingredients: [],
      instructions: '',
      created: '',
      images: '',
      createdBy: '',
      time: ''
    }

    this.props.createRecipe(recipe)
  }

  render() {
    return (
      <div>
        <h1>Add Recipe</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title: </label>
            <br />
            <input
              type="text"
              name="title"
              onChange={this.onChange}
              value={this.state.title}
            />
          </div>
          <br />
          <div>
            <label>Body: </label>
            <br />
            <textarea
              name="body"
              onChange={this.onChange}
              value={this.state.body}
            />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

PostForm.propTypes = {
  createRecipe: PropTypes.func.isRequired
}

export default connect(null, { createRecipe })(PostForm)