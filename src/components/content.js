import React from "react";
import { Link } from "react-router-dom";
import { Card, Row, Col, Button } from "react-bootstrap";
import contentList from "./content.json";
import UserBackground from "./userBackground";
import "./content.scss";
const Content = () => {
  return (
    <>
      <h2 className="Content-title">
        Exploring React Features for the version 16+{" "}
      </h2>
      <UserBackground />
      <Row className="Content">
        {contentList.map((content, i) => {
          return (
            <Col sm={12} lg="4" key={content.id}>
              <Card className="Content-Card">
                <Card.Body>
                  <Card.Title>{content.title}</Card.Title>
                  <Card.Text>{content.description}</Card.Text>
                  <Card.Text>
                    Refer Source Code:
                    <b>{content.filename}</b>
                  </Card.Text>
                  <Link to={content.link}>
                    <Button variant="info">Explore</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default Content;
