import * as React from "react";

class imgBanner extends React.Component<any, any> {
  render() {
    return (
      <aside
        id={this.props.id}
        className="callout"
        style={{
          backgroundImage:
            this.props.background.url && `url(${this.props.background.url})`,
          backgroundPosition: this.props.background.position
            ? this.props.background.position
            : "left top",
          backgroundRepeat: this.props.background.repeat
            ? this.props.background.repeat
            : "no-repeat",
          backgroundAttachment: this.props.background.attachment
            ? this.props.background.attachment
            : "scroll",
          backgroundSize: this.props.background.size
            ? this.props.background.size
            : "cover",
          backgroundColor: this.props.background.color
            ? this.props.background.color
            : "#333"
        }}
      >
        <div className="text-vertical-center">
          <h1>
            <em>{this.props.title}</em>
          </h1>
          <h3>{this.props.subtitle}</h3>
        </div>
      </aside>
    );
  }
}

export default imgBanner;
