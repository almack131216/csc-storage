import * as React from "react";
//Import all needed Component for this tutorial
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import { Link } from "react-router-dom";
import "./App.scss";
import Homepage from "./pages/Home/Home";
import About from "./pages/About/About";
import Privacy from "./pages/Privacy/Privacy";
import Transport from "./pages/Transport/Transport";
import Accessories from "./pages/Accessories/Accessories";
import Maintenance from "./pages/Maintenance/Maintenance";
import Header from "./components/Header/Header";
import Contact from "./components/Contact/Contact";
import SiteData from "./assets/api/data.json";
import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";
import CookieConsent from "react-cookie-consent";
import { ConsoleLog } from "./assets/js/Helpers";
class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    document.title = this.props.appTitle;
    ConsoleLog("[App.js] constructor");

    this.state = {
      data: SiteData,
      sideDrawerOpen: false
    };
  }

  // componentDidMount() {
    // ConsoleLog("[App.js] componentDidMount");
  // }

  drawerToggleClickHandler = () => {
    this.setState((prevState: { sideDrawerOpen: any }) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  closeSideDrawerHandler = () => {
    ConsoleLog("[App.tsx] closeSideDrawerHandler");
    this.backdropClickHandler();
  };

  render() {
    ConsoleLog("[App.js] render... ");

    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    return (
      <div className="App">
        <Router>
        <Toolbar
          brandName={false}
          navigation={false}
          drawerClickHandler={this.drawerToggleClickHandler}
          sideDrawerOpen={this.state.sideDrawerOpen}
        />
        <SideDrawer
          show={this.state.sideDrawerOpen}
          navigation={this.state.data.navigation}
          clicked={this.closeSideDrawerHandler}
        />
        {backdrop}
        <main>
          <Header 
            data={this.state.data.header}
          />          
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/`}
              >
                <Homepage
                siteData={this.state.data}
                />
            </Route>
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/homepage`}
              >
                <Homepage
                siteData={this.state.data}
                />
            </Route>
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/about`}
              >
                <About
                siteData={this.state.data}
                />
            </Route>
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/privacy`}
              >
                <Privacy
                siteData={this.state.data}
                />
            </Route>
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/transport`}
              >
                <Transport
                siteData={this.state.data}
                />
            </Route>
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/maintenance`}
              >
                <Maintenance
                siteData={this.state.data}
                />
            </Route>
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/accessories`}
              >
                <Accessories
                siteData={this.state.data}
                />
            </Route>
          {/* <MainImage data={this.state.data.header} /> */}
        </main>
        <Contact
          id={this.state.data.contact.id}
          data={this.state.data.contact}          
        />
        <CookieConsent>
          This website uses <Link to="/privacy">cookies</Link> to enhance the user experience.
        </CookieConsent>
        </Router>
      </div>
    );
  }
}

export default App;
