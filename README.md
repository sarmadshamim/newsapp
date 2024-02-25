# newsapp

# News Aggregator App

This is a React application that fetches news articles from an API and displays them by category using React Router.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-repo-name.git
```

## Navigate

1.Navigate to the project directory:

```bash
cd news-aggregator-app
```

## Install dependencies:

```bash
npm install
```

## Usage

1.Get an API key from newsapi.org.

2.Replace "YOUR_API_KEY" with your actual API key in the App.js file.

3.Run the development server:

```bash
npm start
```

1.Open your browser and visit http://localhost:3000 to view the app.

## Features

1.Fetches news articles from various categories such as business, entertainment, health, science, sports, and technology.

2.Utilizes React Router for navigation between different categories.

3.Displays a loading progress bar while fetching data.

4.Implements infinite scrolling to load more news articles.

## Technologies Used

1.React

2.React Router

3.react-top-loading-bar

4.react-infinite-scroll-component

## License

This project is licensed under the MIT License - see the LICENSE file for details

```

This README file provides installation instructions, usage guidelines, features, technologies used, and licensing information for the News Aggregator App. Make sure to replace `"YOUR_API_KEY"` with the actual API key in the `App.js` file before running the application.
```

## Components used in this Projects

## 1.NavBar

```javascript
import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand">NewsFor</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/general">
                  General
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/health">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Technology">
                  Technology
                </Link>
              </li>
            </ul>

            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
```

## 2.News

```javascript
import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  // Component logic here...
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

News.defaultProps = {
  country: "in",
  pageSize: 9,
  category: "general",
};

export default News;
```

## 3.Newsitem

```javascript
import React from "react";

const Newsitem = (props) => {
  // Component logic here...
};

export default Newsitem;
```

## 4.Spinner

```javascript
import React from "react";
import loading from "./loading.gif";

const Spinner = () => {
  // Component logic here...
};

export default Spinner;
```

## App file

```javascript
import "./App.css";
import React, { useState } from "react";
import NavBar from "./components/NavBar";
import LoadingBar from "react-top-loading-bar";
import News from "./components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  const pageSize = 9;
  const apiKey = "055a966f06a14ecb8ca7259762a361ae";
  const [progress, setProgress] = useState(0);
  return (
    <div>
      <Router>
        <LoadingBar height={3} color="#f11946" progress={progress} />
        <NavBar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="home"
                pageSize={pageSize}
                country="in"
                category="general"
              />
            }
          ></Route>
          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="business"
                pageSize={pageSize}
                country="in"
                category="business"
              />
            }
          ></Route>
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="entertainment"
                pageSize={pageSize}
                country="in"
                category="entertainment"
              />
            }
          ></Route>
          <Route
            exact
            path="/general"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="general"
                pageSize={pageSize}
                country="in"
                category="general"
              />
            }
          ></Route>
          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="health"
                pageSize={pageSize}
                country="in"
                category="health"
              />
            }
          ></Route>
          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="science"
                pageSize={pageSize}
                country="in"
                category="science"
              />
            }
          ></Route>
          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="sports"
                pageSize={pageSize}
                country="in"
                category="sports"
              />
            }
          ></Route>
          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="technology"
                pageSize={pageSize}
                country="in"
                category="technology"
              />
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
};
export default App;
```
