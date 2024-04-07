import React from "react";
import { ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

export default function ListItemWithIcon() {
  return (
    <ListGroup>
      <ListGroup.Item className="d-flex align-items-center">
        <FontAwesomeIcon icon={faCoffee} className="mr-2" />
        Drink much coffee
      </ListGroup.Item>
    </ListGroup>
  );
}
