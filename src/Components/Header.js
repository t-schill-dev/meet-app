import React, { Component } from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { BsFillPeopleFill } from 'react-icons/bs';

export default class Header extends Component {
  render() {
    return (
      <Navbar>
        <Container>
          <div className="header">
            <BsFillPeopleFill />{' '}
            Meet App - Meet other people while learning what you love!
          </div>
        </Container>
      </Navbar>
    )
  }
}