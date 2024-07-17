import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Mes <strong className="purple">Disponibilités</strong>
      </h1>
      <GitHubCalendar
        username="AnassErraji"
        blockSize={15}
        blockMargin={5}
        color="#008000"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
