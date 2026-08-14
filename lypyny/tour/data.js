var APP_DATA = {
  "scenes": [
    {
      "id": "0-03",
      "name": "03",
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
          "yaw": -0.4857700585409255,
          "pitch": -0.10143771014363345,
          "rotation": 0,
          "target": "1-01"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-01",
      "name": "01",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.7454963804246262,
          "pitch": 0.01636525885187723,
          "rotation": 0,
          "target": "2-02"
        },
        {
          "yaw": 1.6864151591857963,
          "pitch": 0.08617281591407888,
          "rotation": 0,
          "target": "0-03"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-02",
      "name": "02",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.05248091977965075,
          "pitch": 0.13463901502296416,
          "rotation": 0,
          "target": "1-01"
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
