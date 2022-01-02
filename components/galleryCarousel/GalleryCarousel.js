import React from "react";
import styles from "./GalleryCarousel.module.css"
import Image from "next/image"

import galleryImage1 from "../../public/images/GalleryImages/galleryPictureOne.png"
import galleryImage2 from "../../public/images/GalleryImages/galleryPictureTwo.png"


var images = [
  galleryImage1,
  galleryImage2,

];

class ImageCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images,
      fadedleft: true,
      fadedright: false,
      start: 0,
      finish: 5
    };
  }
  leftClick() {
    let start = this.state.start;
    let finish = this.state.finish;
    if (start > 0 && finish > 0) {
      this.setState({
        start: start - 5,
        finish: finish - 5
      });
    } else {
      this.setState({
        fadedleft: true
      });
    }
    this.setState({
      fadedright: false
    });
  }
  rightClick() {
    let start = this.state.start;
    let finish = this.state.finish;
    if (finish < images.length) {
      this.setState({
        start: start + 5,
        finish: finish + 5
      });
    } else {
      this.setState({
        fadedright: true
      });
    }

    this.setState({
      fadedleft: false
    });
  }
  render() {
    var startindex = this.state.start;
    var finishindex = this.state.finish;
    const fadedleft = this.state.fadedleft
      ? "arrow-left faded-left"
      : "arrow-left";
    const fadedright = this.state.fadedright
      ? "arrow-right faded-right"
      : "arrow-right";
    return (
      <div className={styles.bgColor}>
        <div className="container content-spacer">
          <div className="slideshow row col-md-12">
            <div className={fadedleft} onClick={this.leftClick.bind(this)} />
            {this.state.images
              .slice(startindex, finishindex)
              .map((image, imageindex) => {
                return (
                  <div className="width-auto" key={imageindex}>
                    <Image className="image" src={image} alt={"reparatii lovituri de grindina"} width={335} height={225} />
                  </div>
                );
              })}
            <div className={fadedright} onClick={this.rightClick.bind(this)} />
          </div>
        </div>
      </div>
    );
  }
}

export default ImageCarousel;
