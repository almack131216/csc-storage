import * as React from "react";
//Import all needed Component for this tutorial
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import "./App.scss";
import Homepage from "./pages/Home/Home";
import About from "./pages/About/About";
import Transport from "./pages/Transport/Transport";
import Accessories from "./pages/Accessories/Accessories";
import Header from "./components/Header/Header";
import TitleTextImg from "./components/TitleTextImg/TitleTextImg";
import Services from "./components/Services/Services";
import ImgBanner from "./components/ImgBanner/ImgBanner";
import TitleSection from "./components/TitleSection/TitleSection";
import Contact from "./components/Contact/Contact";
import SiteData from "./assets/api/data.json";
import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    document.title = this.props.appTitle;
    // console.log("[App.js] constructor");

    this.state = {
      data: SiteData,
      sideDrawerOpen: false
    };
  }

  componentDidMount() {
    // console.log("[App.js] componentDidMount");
    //"http://www.amactive.net/amactive2020/data.json"
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState: { sideDrawerOpen: any }) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  closeSideDrawerHandler = () => {
    console.log("[App.tsx] closeSideDrawerHandler");
    this.backdropClickHandler();
  };

  render() {
    // console.log("[App.js] render... ");

    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    return (
      <div className="App">
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
          <Router>
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
              path={`${process.env.PUBLIC_URL}/transport`}
              >
                <Transport
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
          </Router>
          {/* <MainImage data={this.state.data.header} /> */}
        </main>
        <Contact
          id={this.state.data.contact.id}
          data={this.state.data.contact}          
        />
      </div>
    );
  }
}

export default App;
