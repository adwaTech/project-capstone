import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";

import MobileDetect from "mobile-detect";

import Card from "./card";
import Carousel from "react-multi-carousel";
import "./carousel-with-custom-dots.css";
import "./style.css";
import "react-multi-carousel/lib/styles.css";
import Land from '../../assets/images/gozha-net-xDrxJCdedcI-unsplash.jpg';
import House from '../../assets/images/webaliser-_TPTXZd9mOo-unsplash.jpg';
import Vehicle from '../../assets/images/dhiva-krishna-X16zXcbxU4U-unsplash.jpg';
import Electronics from '../../assets/images/daniel-korpai-r73OFSry5AI-unsplash.jpg';
import Service from '../../assets/images/lode-lagrainge-45cr4wHWTIw-unsplash.jpg';
import Rare from '../../assets/images/annie-spratt-JMjNnQ2xFoY-unsplash.jpg';
import Old from '../../assets/images/dan-gold-N7RiDzfF2iw-unsplash.jpg';

class Index extends Component {
  static getInitialProps({ req }) {
    let userAgent;
    let deviceType;
    if (req) {
      userAgent = req.headers["user-agent"];
    } else {
      userAgent = navigator.userAgent;
    }
    const md = new MobileDetect(userAgent);
    if (md.tablet()) {
      deviceType = "tablet";
    } else if (md.mobile()) {
      deviceType = "mobile";
    } else {
      deviceType = "desktop";
    }
    return { deviceType };
  }

  state = { isMoving: false };

  render() {
    const { classes } = this.props;
    const images = [
      Land,
      House,
      Vehicle,
      Electronics,
      Service,
      Rare,
      Old,
    ];
    const texts = [
      "Land",
      "House",
      "Vehicle",
      "Electronics",
      "Service",
      "Rare",
      "Old"
    ];
    const fakerData = Array(7)
      .fill(0)
      .map((item, index) => {
        return {
          image: images[index],
          headline: "Popular Auction Catagories",
          description: texts[index] || texts[0]
        };
      });
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1
      }
    };
    return (
      <div className={classes.root}>

        <Carousel

          swipeable={false}
          draggable={false}

          responsive={responsive}
          ssr
          infinite={false}
          beforeChange={() => this.setState({ isMoving: true })}
          afterChange={() => this.setState({ isMoving: false })}
          containerClass="first-carousel-container container"
          deviceType={this.props.deviceType}
        >
          {fakerData.map((card,index) => {
            return <Card key={index} isMoving={this.state.isMoving} {...card} />;
          })}
        </Carousel>
      </div>
    );
  }
}

const styles = () => ({
  root: {
    textAlign: "center"
  },
  title: {
    maxWidth: 400,
    margin: "auto",
    marginTop: 10
  }
});

export default withStyles(styles)(Index);