var APP_DATA = {
  "scenes": [
    {
      "id": "0-kor",
      "name": "kor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.477483936818345,
          "pitch": -0.17670806145257245,
          "rotation": 0,
          "target": "1-vit1_d"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-vit1_d",
      "name": "vit1_d",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.678626064100049,
          "pitch": 0.14384633240508293,
          "rotation": 0,
          "target": "0-kor"
        },
        {
          "yaw": 1.5767443344662704,
          "pitch": 0.07485148001920194,
          "rotation": 0,
          "target": "2-vit2_d"
        },
        {
          "yaw": -0.1591774675897497,
          "pitch": 0.06469227661167487,
          "rotation": 0,
          "target": "3-vit1_n"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-vit2_d",
      "name": "vit2_d",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.5713526248631098,
          "pitch": 0.13101936323934993,
          "rotation": 0,
          "target": "1-vit1_d"
        },
        {
          "yaw": -2.4291399157563642,
          "pitch": 0.11311425007709985,
          "rotation": 0,
          "target": "0-kor"
        },
        {
          "yaw": -0.13264986598218975,
          "pitch": 0.10194095623834265,
          "rotation": 0,
          "target": "4-vit2_n"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-vit1_n",
      "name": "vit1_n",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5872863752085538,
          "pitch": 0.10443402972392413,
          "rotation": 0,
          "target": "4-vit2_n"
        },
        {
          "yaw": -0.17257820392933887,
          "pitch": 0.0709749051891535,
          "rotation": 0,
          "target": "1-vit1_d"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-vit2_n",
      "name": "vit2_n",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.08439400325972457,
          "pitch": 0.12014059707879987,
          "rotation": 0,
          "target": "2-vit2_d"
        },
        {
          "yaw": -1.5804499923865905,
          "pitch": 0.12534657765295698,
          "rotation": 0,
          "target": "3-vit1_n"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
