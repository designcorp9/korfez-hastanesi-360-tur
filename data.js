var APP_DATA = {
  "scenes": [
    {
      "id": "0-ana-giri",
      "name": "Ana Giriş",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.9392114601783774,
        "pitch": -0.46335794761062665,
        "fov": 1.3795342925798226
      },
      "linkHotspots": [
        {
          "yaw": -3.1375779386531324,
          "pitch": 0.015547528161555135,
          "rotation": 0,
          "target": "1-giri"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-giri",
      "name": "Giriş",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 3.105254031292601,
        "pitch": -0.11989144706673294,
        "fov": 1.3795342925798226
      },
      "linkHotspots": [
        {
          "yaw": 3.085752871020869,
          "pitch": 0.140500377329289,
          "rotation": 0,
          "target": "2-danma"
        },
        {
          "yaw": -2.1832105478191366,
          "pitch": 0.11717008582380473,
          "rotation": 0,
          "target": "0-ana-giri"
        },
        {
          "yaw": 2.0282132307874186,
          "pitch": 0.13643622624032403,
          "rotation": 0,
          "target": "0-ana-giri"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-danma",
      "name": "Danışma",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.16513499845793156,
        "pitch": 0.05013112503318773,
        "fov": 1.3795342925798226
      },
      "linkHotspots": [
        {
          "yaw": -0.8843688316470963,
          "pitch": 0.1653934872476981,
          "rotation": 0.7853981633974483,
          "target": "3-bekleme-alan"
        },
        {
          "yaw": -1.1991143661676613,
          "pitch": 0.11835467932984756,
          "rotation": 0,
          "target": "4-kafeterya"
        },
        {
          "yaw": -2.7439991931115184,
          "pitch": 0.027695948015463046,
          "rotation": 0,
          "target": "1-giri"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-bekleme-alan",
      "name": "Bekleme Alanı",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -3.024847956778901,
        "pitch": -0.052863236496556,
        "fov": 1.3795342925798226
      },
      "linkHotspots": [
        {
          "yaw": 0.7131135070646373,
          "pitch": 0.16286913374427137,
          "rotation": 0.7853981633974483,
          "target": "4-kafeterya"
        },
        {
          "yaw": -0.45779146222390743,
          "pitch": 0.18539756354539172,
          "rotation": 4.71238898038469,
          "target": "2-danma"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-kafeterya",
      "name": "Kafeterya",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.911782149667836,
          "pitch": 0.08327488402783523,
          "rotation": 4.71238898038469,
          "target": "3-bekleme-alan"
        },
        {
          "yaw": 1.358137476891299,
          "pitch": 0.09780295804564432,
          "rotation": 0,
          "target": "2-danma"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-acil-girii",
      "name": "Acil Girişi",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.9874925011224587,
        "pitch": -0.5275236032903621,
        "fov": 1.3795342925798226
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "6-rntgen",
      "name": "Röntgen",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.15707963267949587,
        "pitch": 0.00557012500368792,
        "fov": 1.3795342925798226
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "7-ultrasonografi",
      "name": "Ultrasonografi",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.0251727164724151,
        "pitch": -0.002144446351495688,
        "fov": 1.3795342925798226
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "8-mamografi",
      "name": "Mamografi",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -3.0765889647702647,
        "pitch": -0.1698888126124558,
        "fov": 1.3795342925798226
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "9-floroskopi",
      "name": "Floroskopi",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "10-kemik-densitometresi",
      "name": "Kemik Densitometresi",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "11-bilgisayarl-tomografi-ct",
      "name": "Bilgisayarlı Tomografi (CT)",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.110297916461036,
        "pitch": -0.10211895840093632,
        "fov": 1.3795342925798226
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "12-manyetin-rezonans-grntleme-mri",
      "name": "Manyetik Rezonans Görüntüleme (MRI)",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "13-bokmya-ve-mkrobyoloj-laboratuvari",
      "name": "BİOKİMYA VE MİKROBİYOLOJİ LABORATUVARI",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.4307560374509372,
        "pitch": -0.04456100002950336,
        "fov": 1.3795342925798226
      },
      "linkHotspots": [
        {
          "yaw": -1.6109276493073885,
          "pitch": 0.23278433131531528,
          "rotation": 0,
          "target": "14-bokmya-ve-mkrobyoloj-laboratuvari-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-bokmya-ve-mkrobyoloj-laboratuvari-2",
      "name": "BİOKİMYA VE MİKROBİYOLOJİ LABORATUVARI 2",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 3.07829725647571,
        "pitch": -0.10016226963861463,
        "fov": 1.3795342925798226
      },
      "linkHotspots": [
        {
          "yaw": 1.5343661460410045,
          "pitch": 0.29694301333360684,
          "rotation": 0,
          "target": "13-bokmya-ve-mkrobyoloj-laboratuvari"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-eswl-bbrek-tai-kirma-ntes",
      "name": "ESWL BÖBREK TAŞI KIRMA ÜNİTESİ",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -3.107078862800023,
        "pitch": -0.03979811864575389,
        "fov": 1.3795342925798226
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "16-di-poliklinii",
      "name": "Diş Polikliniği",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 3.0051386217621125,
        "pitch": 0.007957321433842424,
        "fov": 1.3795342925798226
      },
      "linkHotspots": [
        {
          "yaw": 2.8659264853970967,
          "pitch": 0.19904390252008852,
          "rotation": 0,
          "target": "17-az-ve-ene-cerrahisi-poliklinii"
        },
        {
          "yaw": 2.2016390938649053,
          "pitch": 0.1766651354241926,
          "rotation": 5.497787143782138,
          "target": "18-panaromik-tomografi"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-az-ve-ene-cerrahisi-poliklinii",
      "name": "Ağız ve Çene Cerrahisi Polikliniği",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.6723730810712105,
        "pitch": -0.08112806183258492,
        "fov": 1.3795342925798226
      },
      "linkHotspots": [
        {
          "yaw": 3.0822488122263048,
          "pitch": 0.15393900203162403,
          "rotation": 0,
          "target": "18-panaromik-tomografi"
        },
        {
          "yaw": 2.5801554366506547,
          "pitch": 0.1864232600726332,
          "rotation": 5.497787143782138,
          "target": "16-di-poliklinii"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-panaromik-tomografi",
      "name": "Panaromik Tomografi",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.8371246476197154,
          "pitch": 0.10264944649652108,
          "rotation": 0,
          "target": "16-di-poliklinii"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-poliklinik-koridoru",
      "name": "Poliklinik Koridoru",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.14334768314407498,
          "pitch": 0.2121438131358726,
          "rotation": 0,
          "target": "20-poliklinik-koridoru-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-poliklinik-koridoru-2",
      "name": "Poliklinik Koridoru 2",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.031078098754319328,
          "pitch": 0.27885619853963206,
          "rotation": 0,
          "target": "21-poliklinik-koridoru-3"
        },
        {
          "yaw": 3.1025004826809788,
          "pitch": 0.2530556453692441,
          "rotation": 0,
          "target": "19-poliklinik-koridoru"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-poliklinik-koridoru-3",
      "name": "Poliklinik Koridoru 3",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.1758124705923798,
          "pitch": 0.2524835452190324,
          "rotation": 0.7853981633974483,
          "target": "20-poliklinik-koridoru-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-kardiyoloji-poliklinii",
      "name": "Kardiyoloji Polikliniği",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "23-efor-holter-ekg-odas",
      "name": "Efor-Holter-EKG Odası",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "24-kbb-poliklinii",
      "name": "KBB Polikliniği",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "25-kadn-doum-ve-hastalklar-poliklinii",
      "name": "Kadın Doğum ve Hastalıkları Polikliniği",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.8320231581003537,
        "pitch": -0.06816772028322227,
        "fov": 1.3795342925798226
      },
      "linkHotspots": [
        {
          "yaw": -2.2667029351409838,
          "pitch": 0.20029377828032224,
          "rotation": 0.7853981633974483,
          "target": "26-kadn-doum-ve-hastalklar-poliklinii-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "26-kadn-doum-ve-hastalklar-poliklinii-2",
      "name": "Kadın Doğum ve Hastalıkları Polikliniği 2",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.674381001020965,
          "pitch": 0.238216593770062,
          "rotation": 0,
          "target": "25-kadn-doum-ve-hastalklar-poliklinii"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "27-gz-poliklinii",
      "name": "Göz Polikliniği",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.9795850186925801,
        "pitch": -0.01955106137981133,
        "fov": 1.3795342925798226
      },
      "linkHotspots": [
        {
          "yaw": -1.6024679491579086,
          "pitch": 0.18659285637118472,
          "rotation": 0,
          "target": "28-gz-poliklinii-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "28-gz-poliklinii-2",
      "name": "Göz Polikliniği 2",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.4721910387589894,
        "pitch": 0.0031086054666715768,
        "fov": 1.3795342925798226
      },
      "linkHotspots": [
        {
          "yaw": -0.4788591796460828,
          "pitch": 0.2902759483796622,
          "rotation": 0.7853981633974483,
          "target": "29-gz-poliklinii-3"
        },
        {
          "yaw": -1.3838193650186028,
          "pitch": 0.24117703733796958,
          "rotation": 11.780972450961727,
          "target": "30-gz-poliklinii-4"
        },
        {
          "yaw": 2.7526774649788006,
          "pitch": 0.19235354660844095,
          "rotation": 0,
          "target": "27-gz-poliklinii"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "29-gz-poliklinii-3",
      "name": "Göz Polikliniği 3",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.7316759965353654,
        "pitch": -0.03167325982489899,
        "fov": 1.3795342925798226
      },
      "linkHotspots": [
        {
          "yaw": -2.3752737627745955,
          "pitch": 0.04507956642289912,
          "rotation": 0.7853981633974483,
          "target": "30-gz-poliklinii-4"
        },
        {
          "yaw": -2.6349883109050687,
          "pitch": 0.21112464271103448,
          "rotation": 5.497787143782138,
          "target": "28-gz-poliklinii-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "30-gz-poliklinii-4",
      "name": "Göz Polikliniği 4",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0744856776169502,
          "pitch": 0.25757008921651803,
          "rotation": 0,
          "target": "28-gz-poliklinii-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "31-yatan-hasta-odalar-koridor-grntleri",
      "name": "Yatan hasta odaları, koridor görüntüleri",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "32-doumhane",
      "name": "Doğumhane",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "33-doumhane-sanc-odas",
      "name": "Doğumhane Sancı Odası",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.9764011767206586,
        "pitch": -0.0209295690635507,
        "fov": 1.3795342925798226
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "34-fototerapi-odas",
      "name": "Fototerapi Odası",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -3.0185825238652733,
        "pitch": -0.0625663431621355,
        "fov": 1.3795342925798226
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "35-yenidoan-youn-bakm-servisi",
      "name": "Yenidoğan Yoğun Bakım Servisi",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.12888585245497097,
        "pitch": 0.01114025000737584,
        "fov": 1.3795342925798226
      },
      "linkHotspots": [
        {
          "yaw": 1.4679871421786626,
          "pitch": 0.32646136461499786,
          "rotation": 5.497787143782138,
          "target": "38-kadn-doum-ve-yenidoan-servisi-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "36-yenidoan-youn-bakm-servisi-2",
      "name": "Yenidoğan Yoğun Bakım Servisi 2",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.8820229954906154,
          "pitch": 0.28943806697756713,
          "rotation": 0,
          "target": "35-yenidoan-youn-bakm-servisi"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "37-kadn-doum-ve-yenidoan-servisi",
      "name": "Kadın Doğum ve Yenidoğan Servisi",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.6351652925632933,
        "pitch": 0.027602809346408463,
        "fov": 1.3795342925798226
      },
      "linkHotspots": [
        {
          "yaw": 3.1016345826259126,
          "pitch": 0.2205986869698151,
          "rotation": 0,
          "target": "38-kadn-doum-ve-yenidoan-servisi-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "38-kadn-doum-ve-yenidoan-servisi-2",
      "name": "Kadın Doğum ve Yenidoğan Servisi 2",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.09079341671657915,
          "pitch": 0.07944399476355457,
          "rotation": 0,
          "target": "39-kadn-doum-ve-yenidoan-servisi-suit-oda"
        },
        {
          "yaw": 3.0524776312784176,
          "pitch": 0.2560571781316554,
          "rotation": 0,
          "target": "37-kadn-doum-ve-yenidoan-servisi"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "39-kadn-doum-ve-yenidoan-servisi-suit-oda",
      "name": "Kadın Doğum ve Yenidoğan Servisi Suit Oda",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.4853056470464097,
        "pitch": 0.0000014808500736762653,
        "fov": 1.3795342925798226
      },
      "linkHotspots": [
        {
          "yaw": 0.21961304030712725,
          "pitch": 0.21305336025784172,
          "rotation": 5.497787143782138,
          "target": "40-kadn-doum-ve-yenidoan-servisi-suit-oda-2"
        },
        {
          "yaw": -2.133567678283949,
          "pitch": 0.15406255737731733,
          "rotation": 0.7853981633974483,
          "target": "38-kadn-doum-ve-yenidoan-servisi-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "40-kadn-doum-ve-yenidoan-servisi-suit-oda-2",
      "name": "Kadın Doğum ve Yenidoğan Servisi Suit Oda 2",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.0488139222978603,
          "pitch": 0.23929787841580286,
          "rotation": 0.7853981633974483,
          "target": "39-kadn-doum-ve-yenidoan-servisi-suit-oda"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "41-genel-youn-bakm-servisi",
      "name": "Genel Yoğun Bakım Servisi",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.2797108985172976,
        "pitch": 0,
        "fov": 1.3795342925798226
      },
      "linkHotspots": [
        {
          "yaw": 0.8880239575295708,
          "pitch": 0.2317851907291253,
          "rotation": 5.497787143782138,
          "target": "42-genel-youn-bakm-servisi-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "42-genel-youn-bakm-servisi-2",
      "name": "Genel Yoğun Bakım Servisi 2",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.7873078211512752,
        "pitch": -0.14667680608453537,
        "fov": 1.3795342925798226
      },
      "linkHotspots": [
        {
          "yaw": 0.08015895434041553,
          "pitch": 0.20362954634792096,
          "rotation": 0.7853981633974483,
          "target": "42-genel-youn-bakm-servisi-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "43-fizik-tedavi-ve-rehabilitasyon",
      "name": "Fizik Tedavi ve Rehabilitasyon",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.15305194979027803,
        "pitch": -0.00557012500368792,
        "fov": 1.3795342925798226
      },
      "linkHotspots": [
        {
          "yaw": 0.15305186695452555,
          "pitch": 0.2998832717477775,
          "rotation": 0,
          "target": "44-fizik-tedavi-ve-rehabilitasyon-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "44-fizik-tedavi-ve-rehabilitasyon-2",
      "name": "Fizik Tedavi ve Rehabilitasyon 2",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.4783575389168053,
        "pitch": 0.08726529172442987,
        "fov": 1.3795342925798226
      },
      "linkHotspots": [
        {
          "yaw": -1.0704883676540504,
          "pitch": 0.0964898451087457,
          "rotation": 0,
          "target": "46-fizik-tedavi-ve-rehabilitasyon-odas"
        },
        {
          "yaw": 3.1134410989588144,
          "pitch": 0.1924860189733657,
          "rotation": 5.497787143782138,
          "target": "43-fizik-tedavi-ve-rehabilitasyon"
        },
        {
          "yaw": 0.9305820548989345,
          "pitch": 0.23847415390365967,
          "rotation": 0,
          "target": "45-fizik-tedavi-ve-rehabilitasyon-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "45-fizik-tedavi-ve-rehabilitasyon-3",
      "name": "Fizik Tedavi ve Rehabilitasyon 3",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.605776618013886,
        "pitch": 0.006876579145721706,
        "fov": 1.3795342925798226
      },
      "linkHotspots": [
        {
          "yaw": 1.395471839754265,
          "pitch": 0.19137087950080733,
          "rotation": 0,
          "target": "44-fizik-tedavi-ve-rehabilitasyon-2"
        },
        {
          "yaw": 2.0693947099834906,
          "pitch": 0.08938882288087768,
          "rotation": 0.7853981633974483,
          "target": "46-fizik-tedavi-ve-rehabilitasyon-odas"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "46-fizik-tedavi-ve-rehabilitasyon-odas",
      "name": "Fizik Tedavi ve Rehabilitasyon Odası",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.332203466369201,
        "pitch": 0.03999350812158653,
        "fov": 1.3795342925798226
      },
      "linkHotspots": [
        {
          "yaw": 0.15877949582719708,
          "pitch": 0.1316524413573461,
          "rotation": 0,
          "target": "44-fizik-tedavi-ve-rehabilitasyon-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "47-anjiografi-sonras-gzlem-servisi",
      "name": "Anjiografi Sonrası Gözlem Servisi",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.7587307315402416,
        "pitch": 0.005570125003682591,
        "fov": 1.3795342925798226
      },
      "linkHotspots": [
        {
          "yaw": -2.722154551976068,
          "pitch": 0.21834400795725628,
          "rotation": 0,
          "target": "48-anjiografi-sonras-gzlem-servisi-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "48-anjiografi-sonras-gzlem-servisi-2",
      "name": "Anjiografi Sonrası Gözlem Servisi 2",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.43767487396166516,
        "pitch": 0.014853666676499344,
        "fov": 1.3795342925798226
      },
      "linkHotspots": [
        {
          "yaw": -2.6135716072967377,
          "pitch": 0.194762404016938,
          "rotation": 5.497787143782138,
          "target": "47-anjiografi-sonras-gzlem-servisi"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "49-kardiovaskler-cerrahi-ameliyathanesi",
      "name": "Kardiovasküler Cerrahi Ameliyathanesi",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.986705811140908,
        "pitch": 0.06359378203757693,
        "fov": 1.3795342925798226
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "50-anjiografi-nitesi",
      "name": "Anjiografi Ünitesi",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.1269681616981213,
        "pitch": 0.13255069652347018,
        "fov": 1.3795342925798226
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "51-koroner-youn-bakm",
      "name": "Koroner Yoğun Bakım",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "52-genel-cerrahi-youn-bakm",
      "name": "Genel Cerrahi Yoğun Bakım",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.9682782819245777,
        "pitch": 0.026806226580230685,
        "fov": 1.3795342925798226
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "53-kardiovaskler-cerrahi-youn-bakm",
      "name": "Kardiovasküler Cerrahi Yoğun Bakım",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.3429367006819906,
        "pitch": 0.00908310156850689,
        "fov": 1.3795342925798226
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "54-eeg-emg-uyku-laboratuvar-odas",
      "name": "EEG, EMG, Uyku Laboratuvarı Odası",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.3538097800212263,
        "pitch": -0.018567083345624624,
        "fov": 1.3795342925798226
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "55-gnbirlik-hasta-tedavi-ve-takip-servisi",
      "name": "Günübirlik Hasta Tedavi ve Takip Servisi",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.916298559207412,
        "pitch": -0.012995991094321369,
        "fov": 1.3795342925798226
      },
      "linkHotspots": [
        {
          "yaw": -2.8149230342450995,
          "pitch": 0.3010632349669571,
          "rotation": 0,
          "target": "56-gnbirlik-hasta-tedavi-ve-takip-servisi-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "56-gnbirlik-hasta-tedavi-ve-takip-servisi-2",
      "name": "Günübirlik Hasta Tedavi ve Takip Servisi 2",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.6995518855628351,
        "pitch": 0.06811758253769895,
        "fov": 1.3795342925798226
      },
      "linkHotspots": [
        {
          "yaw": 1.760437238447139,
          "pitch": 0.3113938954872921,
          "rotation": 0,
          "target": "55-gnbirlik-hasta-tedavi-ve-takip-servisi"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "57-endoskopi-ve-kolonoskopi-nitesi",
      "name": "Endoskopi ve Kolonoskopi Ünitesi",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    }
  ],
  "name": "Özel Edremit Körfez Hastanesi 360 Derece Sanal Tur",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
