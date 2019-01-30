import React, { Component } from 'react'

import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';

export default class SearchBox extends Component {
  render() {
  return (
    <div>
      <InputGroup>
        <Input placeholder="Search for a recipe" />
        <InputGroupAddon addonType="append">
          <Button color="success">Search</Button>
        </InputGroupAddon>
      </InputGroup>
    </div>
   );
  }
};
