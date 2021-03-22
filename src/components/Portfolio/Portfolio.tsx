import * as React from "react";
import ImgGallery from "./ReactGestureGallery";

class portfolio extends React.Component<any, any> {
  render() {
    // this.props.data.items[0].imr.src
    const myClass = this.props.data.class ? this.props.data.class : "";
    const myPortfolio = this.props.data.items.map(
      (
        item: {
          title: string;
          img: { src: string | undefined; alt: string | undefined };
          text: string;
          url: string;
          slides: [{ src: string; alt: string }];
        },
        index: number
      ) => {
        const itemClass = "css-grid__item css-grid__item--" + (index + 1);
        const itemImgElement = (
          <img
            className="css-grid__img top img-responsive"
            src={item.img.src}
            alt={item.img.alt}
          />
        );

        const itemImg = item.url ? (
          <a
            href={item.url}
            target="_blank"
            title={item.text}
            rel="noopener noreferrer"
          >
            {itemImgElement}
          </a>
        ) : (
          <ImgGallery
            images={item.slides}
            click={true}
            custBtn={itemImgElement}
          />
        );

        return (
          <div className={itemClass} key={index}>
            {itemImg}
            <span className="spec-note">{item.text}</span>
          </div>
        );
      }
    );

    return (
      <section id={this.props.id ? this.props.id : null} className={myClass}>
        <div className="section-inner">
          <div className="css-grid portfolio">{myPortfolio}</div>
        </div>
      </section>
    );
  }
}

export default portfolio;
