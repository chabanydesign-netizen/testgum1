var APP_DATA = {
  "scenes": [
    {
      "id": "0-",
      "name": "Вітальня",
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
          "yaw": -0.8983298438927463,
          "pitch": 0.03819617511601692,
          "rotation": 0,
          "target": "1-"
        },
        {
          "yaw": -1.230277600453416,
          "pitch": 0.03982662462345843,
          "rotation": 0,
          "target": "2-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.05313018237287004,
          "pitch": -0.04627199903121415,
          "title": "Відеопрезентація",
          "text": "<br><a href='https://www.youtube.com/watch?v=soW--WTk77o' target='_blank' style='display: inline-block; background-color: #FF0000; color: white; padding: 10px 20px; border-radius: 20px; text-decoration: none; font-weight: bold; font-family: sans-serif;'>▶ Дивитися відео</a>"
        }
      ]
    },
    {
      "id": "1-",
      "name": "СВ",
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
          "yaw": 3.116460059370856,
          "pitch": 0.07413155881179101,
          "rotation": 0,
          "target": "0-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-",
      "name": "Спальня",
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
          "yaw": 2.064817656876178,
          "pitch": 0.12470019975999058,
          "rotation": 0,
          "target": "0-"
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
