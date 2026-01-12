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
          "yaw": -0.2918682916976909,
          "pitch": 0.0943280359396308,
          "rotation": 0,
          "target": "1-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.5474305738498337,
          "pitch": 0.07035835752329511,
          "title": "Відео презентація",
          "text": "<br><a href='https://https://youtu.be/vPVFAOmrO4Q' target='_blank' style='display: inline-block; background-color: #FF0000; color: white; padding: 10px 20px; border-radius: 20px; text-decoration: none; font-weight: bold; font-family: sans-serif;'>▶ Дивитися відео</a>"
        }
      ]
    },
    {
      "id": "1-",
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
          "yaw": -1.8425277685827837,
          "pitch": 0.10783873869456961,
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
