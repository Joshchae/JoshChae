import React from 'react'
import Particles from 'react-tsparticles';

function Particle() {
    return (
        <div>
            <Particles
              options={{
                "background": {
                  "color": {
                    "value": "#ffffff"
                  },
                  "image": "url('https://source.unsplash.com/1600x900/?coding')",
                  "position": "50% 50%",
                  "repeat": "no-repeat",
                  "size": "cover",
                },
                "backgroundMask": {
                  "cover": {
                    "color": {
                      "value": "#d1d1d1"
                    }
                  },
                  "enable": true
                },
                "fullScreen": {
                  "enable": true,
                  "zIndex": -1
                },
                "interactivity": {
                  "events": {
                    "onClick": {
                      "mode": "push"
                    },
                    "onHover": {
                      "mode": "bubble",
                      "parallax": {
                        "force": 60
                      }
                    },
                    "resize": false
                  },
                  "modes": {
                    "bubble": {
                      "distance": 400,
                      "duration": 2,
                      "opacity": 1,
                      "size": 4
                    },
                    "grab": {
                      "distance": 400
                    }
                  }
                },
                "particles": {
                  "color": {
                    "value": "#ffffff"
                  },
                  "links": {
                    "color": "#ffffff",
                    "distance": 150,
                    "enable": true,
                    "opacity": 0.5,
                    "width": 1,
                  },
                  "move": {
                    "attract": {
                      "rotate": {
                        "x": 600,
                        "y": 1200
                      }
                    },
                    "direction": "bottom-right",
                    "enable": true,
                    "path": {},
                    "outModes": {
                      "bottom": "out",
                      "left": "out",
                      "right": "out",
                      "top": "out"
                    },
                    "random": true
                  },
                  "number": {
                    "density": {
                      "enable": true
                    },
                    "value": 300
                  },
                  "opacity": {
                    "random": {
                      "enable": true,
                      "minimumValue": 1
                    },
                    "value": {
                      "min": 0.5,
                      "max": 1
                    },
                    "animation": {
                      "speed": 1,
                      "minimumValue": 0.1
                    }
                  },
                  "shape": {
                    "type": "circle"
                  },
                  "size": {
                    "random": {
                      "enable": true
                    },
                    "value": {
                      "min": 1,
                      "max": 25,
                    },
                    "animation": {
                      "speed": 40,
                      "minimumValue": 0.1
                    }
                  }
                }
              }}
            />
        </div>
    )
}

export default Particle
