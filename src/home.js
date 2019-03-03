

import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import StarIcon from "@material-ui/icons/StarBorder";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Login from "./login";

const styles = theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  appBar: {
    position: "relative"
  },
  toolbarTitle: {
    flex: 1
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      width: 900,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  heroContent: {
    maxWidth: 600,
    margin: "0 auto",
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`
  },
  cardHeader: {
    backgroundColor: theme.palette.grey[200]
  },
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing.unit * 2
  },
  cardActions: {
    [theme.breakpoints.up("sm")]: {
      paddingBottom: theme.spacing.unit * 2
    }
  },
  footer: {
    marginTop: theme.spacing.unit * 8,
    borderTop: `1px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit * 6}px 0`
  }
});

const tiers = [
  {
    title: "Free",
    price: "0",
    description: [
      "10 users included",
      "2 GB of storage",
      "Help center access",
      "Email support"
    ],
    buttonText: "Sign up for free",
    buttonVariant: "outlined"
  },
  {
    title: "Pro",
    subheader: "Most popular",
    price: "15",
    description: [
      "20 users included",
      "10 GB of storage",
      "Help center access",
      "Priority email support"
    ],
    buttonText: "Get started",
    buttonVariant: "contained"
  },
  {
    title: "Enterprise",
    price: "30",
    description: [
      "50 users included",
      "30 GB of storage",
      "Help center access",
      "Phone & email support"
    ],
    buttonText: "Contact us",
    buttonVariant: "outlined"
  }
];
const footers = [
  {
    title: "Company",
    description: ["Team", "History", "Contact us", "Locations"]
  },
  {
    title: "Features",
    description: [
      "Cool stuff",
      "Random feature",
      "Team feature",
      "Developer stuff",
      "Another one"
    ]
  },
  {
    title: "Resources",
    description: [
      "Resource",
      "Resource name",
      "Another resource",
      "Final resource"
    ]
  },
  {
    title: "Legal",
    description: ["Privacy policy", "Terms of use"]
  }
];

class Home extends React.Component{
 // const { classes } = props;
    constructor(props){
        super(props);
        this.state = {
            displayLogin: false
        }
        this.displayLogin = this.displayLogin.bind(this);
    }

    displayLogin(){
        this.setState({
            displayLogin: !this.state.displayLogin
        })
    }
 render(){
    const { classes } = this.props;
    return (
        <React.Fragment>
          <CssBaseline />
          <AppBar position="static" color="default" className={classes.appBar}>
            <Toolbar>
              <Typography
                variant="h6"
                color="inherit"
                noWrap
                className={classes.toolbarTitle}
              >
                Health Plan Services
              </Typography>
              <Button>About</Button>
              <Button>Solutions</Button>
              <Button>Contact</Button>
              <Button color="primary" variant="outlined" onClick={this.displayLogin}>
                Login
              </Button>
            </Toolbar>
          </AppBar>
          <main className={classes.layout}>
            {/* Hero unit */}
            {!this.state.displayLogin ? 
            <div className={classes.heroContent}>
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                ExchangeLink
              </Typography>
              <Typography
                variant="h6"
                align="left"
                color="textSecondary"
                component="p"
              >
                Connecting to every public and private exchange. Added by Prabhat.
                ExchangeLink® is a cutting-edge solution that connects your organization to every public and private health insurance exchanges, 
                aggregating and processing data across multiple platforms and distribution channels.
                ExchangeLink, part of the HealthPlan Services Links℠ Solution Suite, provides your organization with an information transfer platform and 
                transaction processing expertise to coordinate business configuration, provide deep transaction processing visibility and effectively manage the transfer 
                of data across all channels.
              </Typography>
            </div>: null}
            {/* End hero unit */}
            <Grid container spacing={40} alignItems="flex-end">
              {/* {tiers.map(tier => (
                // Enterprise card is full width at sm breakpoint
                <Grid
                  item
                  key={tier.title}
                  xs={12}
                  sm={tier.title === "Enterprise" ? 12 : 6}
                  md={4}
                >
                  {this.state.displayLogin ? <Login /> : null}
                </Grid>
              ))} */}
              {this.state.displayLogin ? <Login /> : null}
            </Grid>
          </main>
          {/* Footer */}
          <footer className={classNames(classes.footer, classes.layout)}>
            <Grid container spacing={32} justify="space-evenly">
              {footers.map(footer => (
                <Grid item xs key={footer.title}>
                  <Typography variant="h6" color="textPrimary" gutterBottom>
                    {footer.title}
                  </Typography>
                  {footer.description.map(item => (
                    <Typography
                      key={item}
                      variant="subtitle1"
                      color="textSecondary"
                    >
                      {item}
                    </Typography>
                  ))}
                </Grid>
              ))}
            </Grid>
          </footer>
          {/* End footer */}
        </React.Fragment>
      );
 }
  
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home); 