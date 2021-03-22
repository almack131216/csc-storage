import * as React from "react";

class mainImage extends React.Component<any, any> {
  render() {
    const myClass = this.props.data.class ? this.props.data.class : "";

    return (
      <section id={this.props.data.id} className={myClass}>
        <div className="section-inner">
          <div className="main-img">
            <img src={this.props.data.img.src} alt={this.props.data.img.alt} />
          </div>
        </div>
      </section>
    );
  }
}

export default mainImage;
