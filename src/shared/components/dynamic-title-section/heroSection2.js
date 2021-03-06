import React, { Component } from "react";
import { Animated } from "react-web-animation";

export default class Basic extends Component {
  getKeyFrames() {
    return [
      { transform: "scale(1)", opacity: 1, offset: 0 },
      { transform: "scale(.5)", opacity: 0.5, offset: 0.3 },
      { transform: "scale(.667)", opacity: 0.667, offset: 0.7875 },
      { transform: "scale(.6)", opacity: 0.6, offset: 1 },
    ];
  }

  getTiming(duration) {
    return {
      duration,
      easing: "ease-in-out",
      delay: 0,
      iterations: 2,
      direction: "alternate",
      fill: "forwards",
    };
  }

  render() {
    return (
      <Animated.div
        keyframes={this.getKeyFrames()}
        timing={this.getTiming(2500)}
      >
        Web Animations API Rocks
      </Animated.div>
    );
  }
}
