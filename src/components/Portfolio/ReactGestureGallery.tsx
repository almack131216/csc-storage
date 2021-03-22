// https://github.com/frontend-collective/react-image-lightbox
import * as React from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // This only needs to be imported once in your app

class LightboxExample extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    // console.log("[ReactGestureGallery] props: ", props);

    this.state = {
      photoIndex: 0,
      isOpen: false
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;

    // const images = [
    //   "//placekitten.com/1500/500",
    //   "//placekitten.com/4000/3000",
    //   "//placekitten.com/800/1200",
    //   "//placekitten.com/1500/1500"
    // ];

    // console.log("src: " + this.props.images[0].src);

    // const images = [
    //   this.props.images[0].img.src,
    //   this.props.images[1].img.src,
    //   this.props.images[2].img.src
    // ];

    const images = this.props.images.map(
      (image: { src: string }, index: number) => {
        // console.log("[ReactGestureGallery] img: " + image.src);
        return image.src;
      }
    );

    const atag =
      this.props.click && this.props.custBtn ? (
        <div onClick={() => this.setState({ isOpen: true })}>
          {this.props.custBtn}
        </div>
      ) : (
        <button type="button" onClick={() => this.setState({ isOpen: true })}>
          Open Lightbox
        </button>
      );

    return (
      <React.Fragment>
        {atag}

        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length
              })
            }
          />
        )}
      </React.Fragment>
    );
  }
}

export default LightboxExample;
