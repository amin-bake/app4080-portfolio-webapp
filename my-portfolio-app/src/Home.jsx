// src/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div className="container mt-5">
      <div className="jumbotron">
        <h1 className="display-4">Welcome to My Portfolio</h1>
        <p className="lead">Showcasing my projects, skills, and achievements.</p>
        <hr className="my-4" />
        <div className="d-flex justify-content-between align-items-center flex-wrap">
          <div>
            <h4>Choose an action:</h4>
            <Link to="/register" className="btn btn-primary mr-2 mb-2">
              Signup
            </Link>
            <Link to="/login" className="btn btn-secondary mr-2 mb-2">
              Login
            </Link>
            <Link to="/password-reset" className="btn btn-info mb-2">
              Reset Password
            </Link>
          </div>
          
        </div>
      </div>

      {/* Additional content related to the portfolio */}
      <div className="row">
        <div className="col-md-6">
          <h2>My Projects</h2>
          {/* Add your project content here */}
        </div>
        <div className="col-md-6">
          <h2>Skills</h2>
          {/* Add your skills content here */}
        </div>
      </div>
    </div>
  );
}

export default Home;
