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
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.05160208628135621,
        "pitch": -0.026037550538674736,
        "fov": 1.3474042771833745
      },
      "linkHotspots": [
        {
          "yaw": -0.2896946434348475,
          "pitch": 0.4817059654690077,
          "rotation": 0,
          "target": "1-02"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.31678031133905904,
          "pitch": 0.08676900184761394,
          "title": "<font dir=\"auto\" style=\"vertical-align: inherit;\"><font dir=\"auto\" style=\"vertical-align: inherit;\">Відеопрезентаціія</font></font>",
          "text": "<br><a href='https://www.youtube.com/watch?v=81ADaqaljBU' target='_blank' style='display: inline-block; background-color: #FF0000; color: white; padding: 10px 20px; border-radius: 20px; text-decoration: none; font-weight: bold; font-family: sans-serif;'>▶ Дивитися відео</a>"
        }
      ]
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
          "yaw": -0.3181368612310518,
          "pitch": 0.4705150042893713,
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
