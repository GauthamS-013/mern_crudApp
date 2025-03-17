import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <>
      <div
        className="container-fluid bg-dark d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-75 d-flex flex-column justify-content-center align-items-center gap-3 bg-info p-5">
          <h1>CRUD App - Employee</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga,
            incidunt ipsa quod molestiae necessitatibus unde quis consectetur
            nesciunt perferendis, ea officiis doloribus ullam maxime autem,
            inventore magnam saepe sit dolores? Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Consectetur ullam libero alias
            voluptas esse est reprehenderit doloribus minima
          </p>
          <Link className="btn btn-success" to={'/dash'}>Go to Dashboard</Link>
        </div>
      </div>
    </>
  );
}

export default Landing;
