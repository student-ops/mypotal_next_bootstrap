import React from 'react';
import { Dropdown } from 'react-bootstrap';

export default function Home() {
  return (
    <>
      <p>Hello Bootstrap</p>

      <Dropdown>
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
          Dropdown
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action 1</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Action 2</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Action 3</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <h1>Hello</h1>
    </>
  )
}
