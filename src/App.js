import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// In this project we use class base components

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />

         
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Launch demo modal
          </button>

   
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  ...
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div>

          <Routes>

            <Route path="/" element={<News />} />

            <Route
              exact
              path="/Buisness"
              element={
                <News
                  key="Buisness"
                  pageSize={6}
                  country="in"
                  category="Buisness"
                />
              }
            />

            <Route
              exact
              path="/Entertainment"
              element={
                <News
                  key="Entertainment"
                  pageSize={6}
                  country="in"
                  category="Entertainment"
                />
              }
            />

            <Route
              exact
              path="/General"
              element={
                <News
                  key="General"
                  pageSize={6}
                  country="in"
                  category="General"
                />
              }
            />

            <Route
              exact
              path="/Health"
              element={
                <News
                  key="Health"
                  GeneralpageSize={6}
                  country="in"
                  category="Health"
                />
              }
            />

            <Route
              exact
              path="/Science"
              element={
                <News
                  key="Science"
                  pageSize={6}
                  country="in"
                  category="Science"
                />
              }
            />

            <Route
              exact
              path="/Sports"
              element={
                <News
                  key="Sports"
                  pageSize={6}
                  country="in"
                  category="Sports"
                />
              }
            />

            <Route
              exact
              path="/Technology"
              element={
                <News
                  key="Technology"
                  pageSize={6}
                  country="in"
                  category="Technology"
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
