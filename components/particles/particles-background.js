import React, { Component } from "react";
import { Particles } from "react-particles-js";
import ParticlesConfig from "./config";

const ParticlesBackground = () => {
  return <Particles params={ParticlesConfig} className="particles" />;
};

export default ParticlesBackground;
