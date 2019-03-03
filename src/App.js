

import React, { Component } from "react";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import Button from "@material-ui/core/Button";
import Footer from "./footer";
import Home from "./home";
import Login from "./login";
import Pricing from "./pricing";
import Blog from "./blog";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayPage: ""
    };
    this.display = this.display.bind(this);
  }

  display(page) {
    this.setState({
      displayPage: page
    });
  }
  render() {
    return (
      <div className="App" style={{ padding: "30px" }}>
        <MuiThemeProvider>
          {/* <Button variant="contained">Default</Button>
          <Button variant="contained" color="primary">
            Primary
          </Button>
          <Button variant="contained" color="secondary">
            Secondary
          </Button>
          <Button variant="contained" color="secondary" disabled>
            Disabled
          </Button>
          <Button variant="contained" href="#contained-buttons">
            Link
          </Button>
          <Footer /> */}
          {/* {!this.state.displayPage ? <Login display={this.display} /> : null}
          {this.state.displayPage === "Pricing" ? <Pricing /> : null}
          {this.state.displayPage === "Blog" ? <Blog /> : null} */}
          <Home />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
