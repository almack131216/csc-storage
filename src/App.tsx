import * as React from "react";
import "./App.scss";
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
          {/* <MainImage data={this.state.data.header} /> */}
          <TitleTextImg 
            id="home"
            title={this.state.data.home.title}
            body={this.state.data.home.body}
            contact={this.state.data.contact}
            class="bg-primary"
          />
          <TitleSection
            id={this.state.data.services.id}
            title={this.state.data.services.title}
            class="bg-white"
          />
          <Services id="services-list" data={this.state.data.services} />
          <TitleSection
            id={this.state.data.rates.id}
            title={this.state.data.rates.title}
            body={this.state.data.rates.body}
            contact={this.state.data.contact}
            class="bg-primary"
          />
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
