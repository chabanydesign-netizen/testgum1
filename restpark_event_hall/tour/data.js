var APP_DATA = {
  "scenes": [
    {
      "id": "0-01",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.138043256758218,
          "pitch": 0.04856688560303013,
          "rotation": 0,
          "target": "1-02"
        },
        {
          "yaw": 0.019982559342341943,
          "pitch": 0.022197703184550832,
          "rotation": 0,
          "target": "1-02"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-02",
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
          "yaw": 3.1382854864219443,
          "pitch": 0.07606618101246809,
          "rotation": 0,
          "target": "0-01"
        },
        {
          "yaw": 0.01937435803884746,
          "pitch": 0.01127605266996845,
          "rotation": 0,
          "target": "0-01"
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
