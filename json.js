export const json = {
    data: {
      id: 20,
      company_id: 15,
      name: "Michelin",
      slug: "michelin",
      created_at: "3 months ago",
      updated_at: "1 week ago",
      endpoint_url: "http://portal-api.martech3d.com/api/platforms/michelin",
      endpoint_privacy: "private",
      company: {
        id: 15,
        name: "Michelin",
        email: "info@michelinconnectedfleet.com",
        phone: "+44 113 281 4899",
        address_line_1: "Lynton House",
        address_line_2: "7-12 Tavistock Square",
        town: "London",
        county: "London",
        postcode: "WC1H 9LT",
        has_platforms: true,
        settings: { liveGuidedTour: { roomLimit: 4 } },
        country: "United Kingdom",
        temporary_portal_settings: null,
        created_at: "3 months ago",
        updated_at: "3 months ago",
      },
      branding: {
        colors: {
          filter: "#27509b",
          loading: {
            background: "#27509b",
            spinnerOutside: "#ffffff",
            spinnerInside: "#fce500",
            percentage: "#ffffff",
            status: "#ffffff",
          },
          intro: {
            background: "#27509b",
            title: "#ffffff",
            subtitle: "#ffffff",
            disclaimer: "",
            enterButton: {
              backgroundGradientStart: "#fce500",
              backgroundGradientEnd: "#fce500",
            },
          },
          portraitWarning: {
            background: "#27509b",
            title: "#ffffff",
            subtitle: "#ffffff",
            graphic: "#fce500",
          },
          sideMenu: {
            border: "#000000",
            activeButton: {
              backgroundGradientStart: "#fce500",
              backgroundGradientEnd: "#fce500",
              icon: "#27509b",
              iconHover: "white",
            },
          },
          gridMenu: {
            header: {
              backgroundGradientStart: "#717171",
              backgroundGradientEnd: "#717171",
              text: "#ffffff",
            },
            tile: {
              background: "#ffffff",
              category: "#717171",
              title: "#000000",
            },
            activeTile: { category: "#4000c", title: "#000000", bar: "#d4000c" },
          },
          productInfoPage: {
            title: "#27509b",
            subtitle: "#000000",
            description: "#000000",
            bulletPoint: "#000000",
            headline: "#27509b",
            qrCode: { border: "#27509b" },
            resource: {
              text: "#ffffff",
              backgroundGradientStart: "#27509b",
              backgroundGradientEnd: "#27509b",
            },
          },
          tooltips: { background: "#27509b", text: "white" },
          footer: {
            background: "#f7f8f8",
            text: "#27509b",
            border: "#e6e6e6",
            activeButton: { background: "#27509b", text: "white" },
          },
          productSelector: {
            titleText: "#ffffff",
            backgroundGradientStart: "#000000",
            backgroundGradientEnd: "#000000",
          },
          contactUs: {
            background: "#ffffff",
            header: "#fce500",
            title: "#d4000c",
            subtitle: "#000000",
            button: { background: "#fce500", text: "#27509b" },
          },
        },
        fonts: {
          fontFamilies: [
            {
              id: "michelin-bold",
              url: "https://martech3d-customer-portal.s3.eu-west-2.amazonaws.com/fonts/1715164042_production_18_michelin-bold.otf",
            },
            {
              id: "michelin-semibold",
              url: "https://martech3d-customer-portal.s3.eu-west-2.amazonaws.com/fonts/1715164073_production_18_michelin-semibold.otf",
            },
            {
              id: "michelin-regular",
              url: "https://martech3d-customer-portal.s3.eu-west-2.amazonaws.com/fonts/1715164073_production_18_michelin-semibold.otf",
            },
            {
              id: "michelin-light",
              url: "https://martech3d-customer-portal.s3.eu-west-2.amazonaws.com/fonts/1715164105_production_18_michelin-light.otf",
            },
            {
              id: "opensans-bold",
              url: "https://martech3d-customer-portal.s3.eu-west-2.amazonaws.com/fonts/1715174732_production_18_opensans-bold.ttf",
            },
            {
              id: "opensans-regular",
              url: "https://martech3d-customer-portal.s3.eu-west-2.amazonaws.com/fonts/1715174679_production_18_opensans-regular.ttf",
            },
          ],
          loading: { percentage: "opensans-bold", status: "michelin-regular" },
          intro: {
            title: "michelin-bold",
            subtitle: "michelin-regular",
            disclaimer: "",
          },
          portraitWarning: {
            title: "michelin-bold",
            subtitle: "opensans-regular",
          },
          productInfoPage: {
            title: "michelin-bold",
            subtitle: "michelin-semibold",
            description: "opensans-regular",
            bulletPoint: "opensans-regular",
            headline: "michelin-regular",
          },
          tooltips: { text: "michelin-regular" },
          footer: { text: "opensans-bold" },
          contactUs: {
            header: "opensans-regular",
            title: "opensans-regular",
            subtitle: "opensans-regular",
            form: "opensans-regular",
            button: "opensans-regular",
          },
        },
        graphics: {
          environment: {
            logo: "https://martech3d-customer-portal.s3.eu-west-2.amazonaws.com/images/assets/1715174350_production_18_michelin-logo-white.png",
          },
          intro: {
            backgroundImage:
              "https://martech3d-customer-portal.s3.eu-west-2.amazonaws.com/images/assets/1715174233_production_18_michelin-landingpage-v1.png",
            logo: "https://martech3d-customer-portal.s3.eu-west-2.amazonaws.com/images/assets/1715174350_production_18_michelin-logo-white.png",
            enterButton:
              "https://martech3d-customer-portal.s3.eu-west-2.amazonaws.com/images/assets/1697104350_production_7_tcc-loadingpage-cta.png",
          },
          loading: { logo: "" },
        },
        layouts: { intro: "3", productInfoModal: "1" },
      },
      settings: {
        defaultPano: "pano00",
        defaultFov: 1.2,
        maxFov: 1.4,
        metadata: {
          title: "Michelin Smart Predictive Tire Tour",
          description:
            "3D Virtual Showroom & 3D Interactive Product Guide powered by MARTECH3D",
          favicon:
            "https://martech3d-customer-portal.s3.eu-west-2.amazonaws.com/images/assets/1715175292_production_18_michelin-favicon-512x512.png",
        },
        analytics: {
          source: "Michelin",
          enabled: true,
          appId: "09b7d64fcd8b7c92dc677e08f31554d0",
        },
        tasks: [
          {
            id: "TASK_ShowHomeUI",
            actions: [
              { id: "3D_HIDE_UI_LAYER", payload: { layerId: "all" } },
              {
                id: "3D_SHOW_UI_ELEMENT",
                payload: {
                  layerId: "home-cta-layer",
                  elementId: ["home-cta-01", "home-cta-02", "home-cta-03"],
                },
              },
              { id: "3D_SHOW_UI_LAYER", payload: { layerId: "home-cta-layer" } },
            ],
          },
        ],
        panoramas: [
          {
            id: "pano00",
            description: "Home",
            type: "image",
            url: "https://martech3d-customer-portal.s3.eu-west-2.amazonaws.com/images/panos/1721312950_production_18_pano00.jpg",
            preload: true,
            target: {
              x: -1.2639889076561388,
              y: 1.0101922262612946,
              z: 0.005682269003583202,
            },
            lockedAngle: {
              horizontal: { min: -0.13, max: 0.13 },
              vertical: { min: 1.0101922262612946, max: 1.0101922262612946 },
            },
            minZoom: 0.657,
            fov: 0.657,
            maxZoom: 0.657,
            hotspots: [],
            actions: [
              {
                id: "UI_SET_ACTIVE_BREADCRUMB_GROUP",
                payload: { breadcrumb_group_index: 0 },
              },
              {
                id: "3D_SHOW_UI_LAYER",
                payload: { layerId: ["home-cta-layer"] },
              },
            ],
          },
          {
            id: "pano01",
            description: "Understanding Your Fleet's Needs",
            type: "image",
            url: "https://martech3d-customer-portal.s3.eu-west-2.amazonaws.com/images/panos/1721312961_production_18_pano01.jpg",
            preload: false,
            target: {
              x: -2.2797604829880846,
              y: 1.0431294805436673,
              z: -1.5597008785491338,
            },
            hotspots: [
              {
                id: "next-cta-01-0",
                description: "Daily Vehicle Inspections",
                buttonType: "image",
                image: "next-cta-01-0",
                position: {
                  x: -0.9835079312324524,
                  y: 0.6163455843925476,
                  z: -0.8067734241485596,
                },
                actions: [
                  { id: "3D_OPEN_PANORAMA", payload: { panoId: "pano01-1" } },
                ],
              },
              {
                id: "next-cta-go-to-01-1",
                description: "Fleet Inspections",
                buttonType: "image",
                image: "next-cta-01-0-1",
                position: {
                  x: -0.886671245098114,
                  y: 0.5567651987075806,
                  z: -2.852267265319824,
                },
                actions: [
                  { id: "3D_OPEN_PANORAMA", payload: { panoId: "pano01-1-1" } },
                ],
              },
              {
                id: "information-panel-understanding-needs",
                description: "Content - Understanding Your Fleets Needs",
                buttonType: "animation",
                animation: "product-info-anim",
                position: {
                  x: -0.9436342716217041,
                  y: 0.8962888717651367,
                  z: -0.6346908807754517,
                },
                actions: [
                  { id: "UI_OPEN_CONTENT_MODAL", payload: { contentId: 57 } },
                ],
              },
              {
                id: "information-video-low-institutional",
                description: "Video - Low Institutional",
                buttonType: "animation",
                animation: "product-play-anim",
                position: {
                  x: -0.9436342716217041,
                  y: 1.2413207292556763,
                  z: -0.4053398668766022,
                },
                actions: [
                  { id: "UI_OPEN_CONTENT_MODAL", payload: { contentId: 70 } },
                ],
              },
            ],
            patches: [],
            actions: [
              {
                id: "UI_SET_ACTIVE_BREADCRUMB_GROUP",
                payload: { breadcrumb_group_index: 1 },
              },
              { id: "3D_HIDE_UI_LAYER", payload: { layerId: "home-cta-layer" } },
            ],
          },
          {
            id: "pano01-1",
            description: "Daily Vehicle Inspections",
            type: "image",
            url: "https://martech3d-customer-portal.s3.eu-west-2.amazonaws.com/images/panos/1721312970_production_18_pano01-1.jpg",
            preload: false,
            target: {
              x: -2.759634615103141,
              y: 0.8932783618284341,
              z: 0.09035302148923104,
            },
            fov: 1.4,
            hotspots: [
              {
                id: "next-cta-01-1",
                description: "Driver Inspection",
                buttonType: "image",
                image: "next-cta-01-1",
                position: {
                  x: -1.2567088603973389,
                  y: 0.28519317507743835,
                  z: 1.44635808467865,
                },
                actions: [
                  { id: "3D_OPEN_PANORAMA", payload: { panoId: "pano01-2" } },
                ],
              },
              {
                id: "daily-inspections-infographic",
                buttonType: "image",
                image: "in-scene-data-daily-vehicle-inspections",
                position: {
                  x: -12.94467830657959,
                  y: 0.8574836254119873,
                  z: -9.411588668823242,
                },
                actions: [],
              },
            ],
            patches: [],
            actions: [],
          },
          {
            id: "pano01-1-1",
            description: "Fleet Inspections",
            type: "image",
            url: "https://martech3d-customer-portal.s3.eu-west-2.amazonaws.com/images/panos/1721312980_production_18_pano01-1-1.jpg",
            preload: false,
            target: {
              x: -0.9710948305050691,
              y: 0.9848328210429841,
              z: 2.9808235975390223,
            },
            fov: 0.8,
            hotspots: [
              {
                id: "next-cta-01-0",
                description: "Daily Vehicle Inspections",
                buttonType: "image",
                image: "next-cta-01-0",
                position: {
                  x: -0.06252710521221161,
                  y: 0.8556033372879028,
                  z: 0.9509999752044678,
                },
                actions: [
                  { id: "3D_OPEN_PANORAMA", payload: { panoId: "pano01-1" } },
                ],
              },
              {
                id: "next-cta-01-2",
                description: "Problems on the road",
                buttonType: "image",
                image: "next-cta-01-2",
                position: {
                  x: 0.33098527789115906,
                  y: 0.7261828780174255,
                  z: 1.9539999961853027,
                },
                actions: [
                  { id: "3D_OPEN_PANORAMA", payload: { panoId: "pano01-3" } },
                ],
              },
              {
                id: "information-panel-routine-fleet-inspections",
                description: "Routine Fleet Inspections",
                buttonType: "animation",
                animation: "product-info-anim",
                position: {
                  x: -1.3441485166549683,
                  y: 1.238190770149231,
                  z: 2.625826358795166,
                },
                actions: [
                  { id: "UI_OPEN_CONTENT_MODAL", payload: { contentId: 54 } },
                ],
              },
            ],
            patches: [],
            actions: [],
          },
          {
            id: "pano01-2",
            description: "Driver Inspection",
            type: "image",
            url: "https://martech3d-customer-portal.s3.eu-west-2.amazonaws.com/images/panos/1721312991_production_18_pano01-2.jpg",
            preload: false,
            target: {
              x: -2.977215326150935,
              y: 1.1353335863209748,
              z: 0.9707825484275833,
            },
            fov: 1.4,
            hotspots: [
              {
                id: "next-cta-01-2",
                description: "Problems on the road",
                buttonType: "image",
                image: "next-cta-01-2",
                position: {
                  x: -0.8519954681396484,
                  y: 0.4279399514198303,
                  z: 1.9543356895446777,
                },
                actions: [
                  { id: "3D_OPEN_PANORAMA", payload: { panoId: "pano01-3" } },
                ],
              },
              {
                id: "information-panel-walkaround-inspections-tread",
                description: "Content - Walkaround Inspections(Treads)",
                buttonType: "animation",
                animation: "product-info-anim",
                position: {
                  x: -0.9436342716217041,
                  y: 0.9324524402618408,
                  z: -0.5846371650695801,
                },
                actions: [
                  { id: "UI_OPEN_CONTENT_MODAL", payload: { contentId: 50 } },
                ],
              },
              {
                id: "information-panel-walkaround-inspections-tyre",
                description: "Content - Walkaround Inspections(Tyres)",
                buttonType: "animation",
                animation: "product-info-anim",
                position: {
                  x: -0.9436342716217041,
                  y: 0.9324524402618408,
                  z: 0.6351739764213562,
                },
                actions: [
                  { id: "UI_OPEN_CONTENT_MODAL", payload: { contentId: 51 } },
                ],
              },
              {
                id: "animation-01-wheel-check",
                description: "Animation - Driver Inspection",
                buttonType: "animation",
                animation: "product-play-anim",
                position: {
                  x: -1.0002390146255493,
                  y: 1.0566200017929077,
                  z: 0.6756264567375183,
                },
                actions: [
                  { id: "UI_OPEN_CONTENT_MODAL", payload: { contentId: 72 } },
                ],
              },
            ],
            patches: [],
            actions: [
              { id: "UI_OPEN_CONTENT_MODAL", payload: { contentId: 72 } },
            ],
          },
          {
            id: "pano01-3",
            description: "Problems on the road",
            type: "image",
            url: "https://martech3d-customer-portal.s3.eu-west-2.amazonaws.com/images/panos/1721313001_production_18_pano01-3.jpg",
            preload: false,
            target: {
              x: -0.5933322738494837,
              y: 0.7990888940672853,
              z: 3.0718619492233015,
            },
            hotspots: [
              {
                id: "next-cta-01-3",
                description: "Roadside Breakdown",
                buttonType: "image",
                image: "next-cta-01-3",
                position: {
                  x: 2.5161993503570557,
                  y: -0.6019176244735718,
                  z: 4.402322292327881,
                },
                actions: [
                  { id: "3D_OPEN_PANORAMA", payload: { panoId: "pano01-4" } },
                ],
              },
              {
                id: "information-panel-punctures-air-loss",
                description: "Content - Punctures and Air Loss",
                buttonType: "animation",
                animation: "product-info-anim",
                position: {
                  x: 0.045906614512205124,
                  y: 0.715650200843811,
                  z: 1.3358442783355713,
                },
                actions: [
                  { id: "UI_OPEN_CONTENT_MODAL", payload: { contentId: 52 } },
                ],
              },
              {
                id: "problems-on-the-road-infographic",
                buttonType: "image",
                image: "in-scene-data-problems-on-the-road",
                position: {
                  x: -5213.95703125,
                  y: -606.1085205078125,
                  z: 5880.8125,
                },
                actions: [],
              },
            ],
            actions: [],
          },
          {
            id: "pano01-4",
            description: "Roadside Breakdown",
            type: "image",
            url: "https://martech3d-customer-portal.s3.eu-west-2.amazonaws.com/images/panos/1721313012_production_18_pano01-4.jpg",
            preload: false,
            target: {
              x: -0.17490211440861203,
              y: 0.6671162596217062,
              z: 2.738435657160223,
            },
            hotspots: [
              {
                id: "next-cta-01-4",
                description: "Summary of Problems",
                buttonType: "image",
                image: "next-cta-01-4",
                position: {
                  x: 0.28481918573379517,
                  y: -0.3420550227165222,
                  z: 3.5415825843811035,
                },
                actions: [
                  { id: "3D_OPEN_PANORAMA", payload: { panoId: "pano01-5" } },
                ],
              },
              {
                id: "information-panel-breakdowns",
                description: "Content - Breakdowns, A Fleet Nightmare!",
                buttonType: "animation",
                animation: "product-info-anim",
                position: {
                  x: -0.9283315539360046,
                  y: 0.5421299934387207,
                  z: 1.3358442783355713,
                },
                actions: [
                  { id: "UI_OPEN_CONTENT_MODAL", payload: { contentId: 53 } },
                ],
              },
              {
                id: "animation-02-breakdown",
                description: "Animation - Roadside Breakdown",
                buttonType: "animation",
                animation: "product-play-anim",
                position: {
                  x: -111.19392395019531,
                  y: -38.47578811645508,
                  z: 161.33348083496094,
                },
                actions: [
                  { id: "UI_OPEN_CONTENT_MODAL", payload: { contentId: 73 } },
                ],
              },
              {
                id: "breakdown-infographic",
                buttonType: "image",
                image: "in-scene-data-roadside-breakdown",
                position: {
                  x: 3167.09619140625,
                  y: -518.892578125,
                  z: 5880.8125,
                },
                actions: [],
              },
            ],
            patches: [],
            actions: [
              { id: "UI_OPEN_CONTENT_MODAL", payload: { contentId: 73 } },
            ],
          },
          {
            id: "pano01-5",
            description: "Summary of Problems",
            type: "image",
            url: "https://martech3d-customer-portal.s3.eu-west-2.amazonaws.com/images/panos/1721313026_production_18_pano01-5.jpg",
            preload: false,
            target: {
              x: 1.8725071735069998,
              y: 0.8899482798344195,
              z: 2.5118187138284136,
            },
            fov: 1.2,
            hotspots: [
              {
                id: "next-cta-01-5",
                description: "Our Smart Predictive Tire Solutions",
                buttonType: "image",
                image: "next-cta-01-5",
                position: {
                  x: 529.5071411132812,
                  y: -119.35641479492188,
                  z: 100.2923355102539,
                },
                actions: [
                  { id: "3D_OPEN_PANORAMA", payload: { panoId: "pano02-1" } },
                ],
              },
              {
                id: "in-summary-infographic",
                buttonType: "image",
                image: "in-scene-data-in-summary",
                position: {
                  x: 0.15363357961177826,
                  y: -3.8603127002716064,
                  z: 143.8614959716797,
                },
                actions: [],
              },
              {
                id: "animation-03-breadown-repair",
                description: "Animation - Breakdown Repair",
                buttonType: "animation",
                animation: "product-play-anim",
                position: {
                  x: 24.80293846130371,
                  y: -2.103393793106079,
                  z: 23.24950408935547,
                },
                actions: [
                  { id: "UI_OPEN_CONTENT_MODAL", payload: { contentId: 74 } },
                ],
              },
            ],
            patches: [],
            actions: [
              { id: "UI_OPEN_CONTENT_MODAL", payload: { contentId: 74 } },
            ],
          },
          {
            id: "pano02-1",
            description: "Our Smart Predictive Tire Solutions",
            type: "image",
            url: "https://martech3d-customer-portal.s3.eu-west-2.amazonaws.com/images/panos/1721312980_production_18_pano01-1-1.jpg",
            preload: false,
            target: {
              x: 3.12225625582114,
              y: 0.7299713377289403,
              z: 0.03569817881601493,
            },
            fov: 0.9,
            hotspots: [
              {
                id: "next-cta-02-1",
                description: "Target the vehicles that need servicing",
                buttonType: "image",
                image: "next-cta-02-1",
                position: {
                  x: 1508.0419921875,
                  y: -492.65191650390625,
                  z: 271.71588134765625,
                },
                actions: [
                  { id: "3D_OPEN_PANORAMA", payload: { panoId: "pano02-2" } },
                ],
              },
              {
                id: "information-panel-quickscan-plates",
                description: "Content - QuickScan Plates",
                buttonType: "animation",
                animation: "product-info-anim",
                position: {
                  x: 6.42514705657959,
                  y: -0.07037436962127686,
                  z: 1.4382045269012451,
                },
                actions: [
                  { id: "UI_OPEN_CONTENT_MODAL", payload: { contentId: 57 } },
                ],
              },
              {
                id: "video-quickscan-plates",
                description: "Video - Our Smart Predictive Tire Solutions",
                buttonType: "animation",
                animation: "product-play-anim",
                position: { x: 6.425, y: 0.4272175133228302, z: 1.438 },
                actions: [
                  { id: "UI_OPEN_CONTENT_MODAL", payload: { contentId: 65 } },
                ],
              },
              {
                id: "information-panel-camera",
                description: "Content - Capture your Vehicle Information",
                buttonType: "animation",
                animation: "product-info-anim",
                position: {
                  x: 3.432216167449951,
                  y: 0.7130538821220398,
                  z: -0.40320339798927307,
                },
                actions: [
                  { id: "UI_OPEN_CONTENT_MODAL", payload: { contentId: 58 } },
                ],
              },
              {
                id: "information-panel-monitor-fleets",
                description: "Content - Monitor your fleet's tyre pressures",
                buttonType: "animation",
                animation: "product-info-anim",
                position: {
                  x: 2.837491750717163,
                  y: 0.40976718068122864,
                  z: -1.4400160312652588,
                },
                actions: [
                  { id: "UI_OPEN_CONTENT_MODAL", payload: { contentId: 59 } },
                ],
              },
            ],
            patches: [],
            actions: [
              {
                id: "UI_SET_ACTIVE_BREADCRUMB_GROUP",
                payload: { breadcrumb_group_index: 2 },
              },
              { id: "3D_HIDE_UI_LAYER", payload: { layerId: "home-cta-layer" } },
            ],
          },
          {
            id: "pano02-2",
            description: "Target the vehicles that need servicing",
            type: "image",
            url: "https://martech3d-customer-portal.s3.eu-west-2.amazonaws.com/images/panos/1721312980_production_18_pano01-1-1.jpg",
            preload: false,
            target: {
              x: -1.260212009747384,
              y: 1.325508736798024,
              z: 2.852054867295105,
            },
            fov: 0.9,
            hotspots: [
              {
                id: "next-cta-02-1",
                description: "React to issues before they become problems",
                buttonType: "image",
                image: "next-cta-02-2",
                position: {
                  x: -10.672924041748047,
                  y: -510.27520751953125,
                  z: 4976.0322265625,
                },
                actions: [
                  { id: "3D_OPEN_PANORAMA", payload: { panoId: "pano02-3" } },
                ],
              },
              {
                id: "information-panel-target-vehicles",
                description: "Content - Target the vehicles that need servicing",
                buttonType: "animation",
                animation: "product-info-anim",
                position: {
                  x: -3.727083444595337,
                  y: 0.22394193708896637,
                  z: 10.860906600952148,
                },
                actions: [
                  { id: "UI_OPEN_CONTENT_MODAL", payload: { contentId: 60 } },
                ],
              },
            ],
            patches: [],
            actions: [
              {
                id: "UI_SET_ACTIVE_BREADCRUMB_GROUP",
                payload: { breadcrumb_group_index: 2 },
              },
              { id: "3D_HIDE_UI_LAYER", payload: { layerId: "home-cta-layer" } },
            ],
          },
          {
            id: "pano02-3",
            description: "React to issues before they become problems",
            type: "image",
            url: "https://martech3d-customer-portal.s3.eu-west-2.amazonaws.com/images/panos/1721313001_production_18_pano01-3.jpg",
            preload: false,
            target: {
              x: 0.26376618782737593,
              y: 0.5497342643190668,
              z: 3.0913543783201534,
            },
            hotspots: [
              {
                id: "next-cta-02-3",
                description: "Michelin Connected Fleet",
                buttonType: "image",
                image: "next-cta-02-3",
                position: {
                  x: 2.5161993503570557,
                  y: -0.6019176244735718,
                  z: 4.402322292327881,
                },
                actions: [
                  { id: "3D_OPEN_PANORAMA", payload: { panoId: "pano02-4" } },
                ],
              },
              {
                id: "information-panel-react-to-issues",
                description:
                  "Content - React to issues before they become problems",
                buttonType: "animation",
                animation: "product-info-anim",
                position: {
                  x: 0.045906614512205124,
                  y: 0.715650200843811,
                  z: 1.3358442783355713,
                },
                actions: [
                  { id: "UI_OPEN_CONTENT_MODAL", payload: { contentId: 71 } },
                ],
              },
            ],
            actions: [],
          },
          {
            id: "pano02-4",
            description: "Michelin Connected Fleet",
            type: "image",
            url: "https://martech3d-customer-portal.s3.eu-west-2.amazonaws.com/images/panos/1721313039_production_18_pano02-4.jpg",
            preload: false,
            target: {
              x: 0.9786936927935166,
              y: 0.14737719966485308,
              z: -2.8516823487817637,
            },
            hotspots: [
              {
                id: "next-cta-02-2",
                description: "Customer Service Teams",
                buttonType: "image",
                image: "next-cta-02-4",
                position: {
                  x: 0.1559833437204361,
                  y: 0.27685612440109253,
                  z: -1.491868495941162,
                },
                actions: [
                  { id: "3D_OPEN_PANORAMA", payload: { panoId: "pano02-5" } },
                ],
              },
              {
                id: "animation-michelin-connected-fleet",
                description: "Animation - Michelin Connected Fleet",
                buttonType: "animation",
                animation: "product-play-anim",
                position: {
                  x: 3.650714635848999,
                  y: 0.4543183743953705,
                  z: -5.25922966003418,
                },
                actions: [
                  { id: "UI_OPEN_CONTENT_MODAL", payload: { contentId: 75 } },
                ],
              },
              {
                id: "information-panel-connected-fleet",
                description: "Content - Michelin Connected Fleet",
                buttonType: "animation",
                animation: "product-info-anim",
                position: {
                  x: 6.42514705657959,
                  y: 0.08944287896156311,
                  z: -6.305224418640137,
                },
                actions: [
                  { id: "UI_OPEN_CONTENT_MODAL", payload: { contentId: 61 } },
                ],
              },
            ],
            patches: [],
            actions: [
              { id: "UI_OPEN_CONTENT_MODAL", payload: { contentId: 75 } },
            ],
          },
          {
            id: "pano02-5",
            description: "Customer Service Teams",
            type: "image",
            url: "https://martech3d-customer-portal.s3.eu-west-2.amazonaws.com/images/panos/1721313048_production_18_pano02-5.jpg",
            preload: false,
            target: {
              x: -0.029220450921587548,
              y: -0.2489051433010725,
              z: -2.8733671056948675,
            },
            hotspots: [
              {
                id: "next-cta-02-3",
                description: "Michelin Connected Mobility Solution",
                buttonType: "image",
                image: "next-cta-02-5",
                position: {
                  x: -0.002255406929180026,
                  y: 0.27443909645080566,
                  z: -0.9768339395523071,
                },
                actions: [
                  { id: "3D_OPEN_PANORAMA", payload: { panoId: "pano02-6" } },
                ],
              },
              {
                id: "information-panel-alerts",
                description: "Content - Alerts",
                buttonType: "animation",
                animation: "product-info-anim",
                position: {
                  x: 3.4881842136383057,
                  y: -0.5024141073226929,
                  z: -8.387696266174316,
                },
                actions: [
                  { id: "UI_OPEN_CONTENT_MODAL", payload: { contentId: 62 } },
                ],
              },
              {
                id: "information-panel-plan",
                description: "Content - Plan",
                buttonType: "animation",
                animation: "product-info-anim",
                position: {
                  x: 0.05134142190217972,
                  y: -2.592787027359009,
                  z: -20.87206268310547,
                },
                actions: [
                  { id: "UI_OPEN_CONTENT_MODAL", payload: { contentId: 63 } },
                ],
              },
              {
                id: "information-panel-predict",
                description: "Content - Predict",
                buttonType: "animation",
                animation: "product-info-anim",
                position: {
                  x: -6.908203125,
                  y: -1.7915629148483276,
                  z: -16.405296325683594,
                },
                actions: [
                  { id: "UI_OPEN_CONTENT_MODAL", payload: { contentId: 64 } },
                ],
              },
            ],
            patches: [],
            actions: [],
          },
          {
            id: "pano02-6",
            description: "Michelin Connected Mobility Solution",
            type: "image",
            url: "https://martech3d-customer-portal.s3.eu-west-2.amazonaws.com/images/panos/1721313057_production_18_pano02-6.jpg",
            preload: false,
            target: {
              x: -3.1133856426851696,
              y: 0.9268657052416467,
              z: 0.353258039201409,
            },
            fov: 1.4,
            hotspots: [
              {
                id: "next-cta-02-4",
                description: "Summary of Solutions",
                buttonType: "image",
                image: "next-cta-02-6",
                position: {
                  x: -0.9835079312324524,
                  y: 0.6088759303092957,
                  z: 0.17118406295776367,
                },
                actions: [
                  { id: "3D_OPEN_PANORAMA", payload: { panoId: "pano02-7" } },
                ],
              },
              {
                id: "video-lanjatrans",
                description: "Video - Lanjatrans",
                buttonType: "animation",
                animation: "product-play-anim",
                position: { x: -5.9125285148620605, y: 3.323, z: -5.407 },
                actions: [
                  { id: "UI_OPEN_CONTENT_MODAL", payload: { contentId: 69 } },
                ],
              },
              {
                id: "video-spt",
                description: "Video - Platform Walkthrough SPT",
                buttonType: "animation",
                animation: "product-play-anim",
                position: {
                  x: -3797.8740234375,
                  y: 1531.8819580078125,
                  z: 1204.8685302734375,
                },
                actions: [
                  { id: "UI_OPEN_CONTENT_MODAL", payload: { contentId: 76 } },
                ],
              },
              {
                id: "video-carino",
                description: "Video - Carino",
                buttonType: "animation",
                animation: "product-play-anim",
                position: {
                  x: -3797.8740234375,
                  y: 1531.8819580078125,
                  z: 5895.4921875,
                },
                actions: [
                  { id: "UI_OPEN_CONTENT_MODAL", payload: { contentId: 68 } },
                ],
              },
            ],
            patches: [],
            actions: [],
          },
          {
            id: "pano02-7",
            description: "Summary of Solutions",
            type: "image",
            url: "https://martech3d-customer-portal.s3.eu-west-2.amazonaws.com/images/panos/1721312980_production_18_pano01-1-1.jpg",
            preload: false,
            target: {
              x: -1.827325901445727,
              y: 0.8922389614475416,
              z: 2.54498729944763,
            },
            fov: 0.8,
            hotspots: [
              {
                id: "next-cta-02-5",
                description: "Book a Demo",
                buttonType: "image",
                image: "book-a-demo",
                position: {
                  x: -96.56160736083984,
                  y: -34.42325210571289,
                  z: 103.84176635742188,
                },
                actions: [
                  { id: "UI_OPEN_CONTENT_MODAL", payload: { contentId: 56 } },
                ],
              },
              {
                id: "next-cta-02-6",
                description: "Back Home",
                buttonType: "image",
                image: "back-home",
                position: {
                  x: -14.595903396606445,
                  y: -6.784440040588379,
                  z: 27.471643447875977,
                },
                actions: [
                  { id: "3D_OPEN_PANORAMA", payload: { panoId: "pano00" } },
                ],
              },
            ],
            patches: [],
            actions: [],
          },
        ],
        sceneUI: {
          layers: [
            {
              id: "home-cta-layer",
              enabled: true,
              elements: [
                {
                  id: "home-cta-01",
                  type: "image-button",
                  properties: {
                    width: "20%",
                    height: "40%",
                    image: "home-cta-01",
                    position: { top: "25%", left: "18%" },
                  },
                  enabled: true,
                  actions: [
                    { id: "3D_OPEN_PANORAMA", payload: { panoId: "pano01" } },
                    {
                      id: "UI_SET_ACTIVE_BREADCRUMB_GROUP",
                      payload: { breadcrumb_group_index: 1 },
                    },
                  ],
                },
                {
                  id: "home-cta-02",
                  type: "image-button",
                  properties: {
                    width: "20%",
                    height: "40%",
                    image: "home-cta-02",
                    position: { top: "25%", left: "40%" },
                  },
                  enabled: true,
                  actions: [
                    { id: "3D_OPEN_PANORAMA", payload: { panoId: "pano02-1" } },
                  ],
                },
                {
                  id: "home-cta-03",
                  type: "image-button",
                  properties: {
                    width: "20%",
                    height: "40%",
                    image: "home-cta-03",
                    position: { top: "25%", left: "62%" },
                  },
                  enabled: true,
                  actions: [
                    { id: "UI_OPEN_CONTENT_MODAL", payload: { contentId: 56 } },
                  ],
                },
              ],
            },
          ],
        },
        images: [
          {
            id: "home-cta-01",
            url: "https://martech3d-customer-portal.s3.eu-west-2.amazonaws.com/images/assets/1716559887_production_18_menu-cta1-1.png",
          },
          {
            id: "home-cta-02",
            url: "https://martech3d-customer-portal.s3.eu-west-2.amazonaws.com/images/assets/1715330859_production_18_menu-cta2.png",
          },
          {
            id: "home-cta-03",
            url: "https://martech3d-customer-portal.s3.eu-west-2.amazonaws.com/images/assets/1715330788_production_18_menu-cta3.png",
          },
          {
            id: "next-cta-01-0",
            url: "https://martech3d-customer-portal.s3.eu-west-2.amazonaws.com/images/assets/1716564502_production_18_next-hotspot-01-1.png",
            widthInPixels: 336,
            heightInPixels: 136,
          },
          {
            id: "next-cta-01-0-1",
            url: "https://martech3d-customer-portal.s3.eu-west-2.amazonaws.com/images/assets/1716560474_production_18_next-hotspot-01-1-2.png",
            widthInPixels: 336,
            heightInPixels: 136,
          },
          {
            id: "next-cta-01-1",
            url: "https://martech3d-customer-portal.s3.eu-west-2.amazonaws.com/images/assets/1716561149_production_18_next-hotspot-01-2-1.png",
            widthInPixels: 336,
            heightInPixels: 136,
          },
          {
            id: "next-cta-01-2",
            url: "https://martech3d-customer-portal.s3.eu-west-2.amazonaws.com/images/assets/1716561837_production_18_next-hotspot-01-3-1.png",
            widthInPixels: 336,
            heightInPixels: 136,
          },
          {
            id: "next-cta-01-3",
            url: "https://martech3d-customer-portal.s3.eu-west-2.amazonaws.com/images/assets/1716562435_production_18_next-hotspot-01-3-2.png",
            widthInPixels: 336,
            heightInPixels: 136,
          },
          {
            id: "next-cta-01-4",
            url: "https://martech3d-customer-portal.s3.eu-west-2.amazonaws.com/images/assets/1715610019_production_18_next-hotspot-01-4.png",
            widthInPixels: 336,
            heightInPixels: 136,
          },
          {
            id: "next-cta-01-5",
            url: "https://martech3d-customer-portal.s3.eu-west-2.amazonaws.com/images/assets/1715610031_production_18_next-hotspot-01-5.png",
            widthInPixels: 336,
            heightInPixels: 136,
          },
          {
            id: "next-cta-02-0",
            url: "https://martech3d-customer-portal.s3.eu-west-2.amazonaws.com/images/assets/1715610520_production_18_next-hotspot-02.png",
            widthInPixels: 336,
            heightInPixels: 136,
          },
          {
            id: "next-cta-02-1",
            url: "https://martech3d-customer-portal.s3.eu-west-2.amazonaws.com/images/assets/1717081379_production_18_next-hotspot-02-target-vehicles.png",
            widthInPixels: 336,
            heightInPixels: 136,
          },
          {
            id: "next-cta-02-2",
            url: "https://martech3d-customer-portal.s3.eu-west-2.amazonaws.com/images/assets/1717081356_production_18_next-hotspot-02-react-to-issues.png",
            widthInPixels: 336,
            heightInPixels: 136,
          },
          {
            id: "next-cta-02-3",
            url: "https://martech3d-customer-portal.s3.eu-west-2.amazonaws.com/images/assets/1715610727_production_18_next-hotspot-02-1.png",
            widthInPixels: 336,
            heightInPixels: 136,
          },
          {
            id: "next-cta-02-4",
            url: "https://martech3d-customer-portal.s3.eu-west-2.amazonaws.com/images/assets/1715610785_production_18_next-hotspot-02-2.png",
            widthInPixels: 336,
            heightInPixels: 136,
          },
          {
            id: "next-cta-02-5",
            url: "https://martech3d-customer-portal.s3.eu-west-2.amazonaws.com/images/assets/1715610796_production_18_next-hotspot-02-3.png",
            widthInPixels: 336,
            heightInPixels: 136,
          },
          {
            id: "next-cta-02-6",
            url: "https://martech3d-customer-portal.s3.eu-west-2.amazonaws.com/images/assets/1715610807_production_18_next-hotspot-02-4.png",
            widthInPixels: 336,
            heightInPixels: 136,
          },
          {
            id: "back-home",
            url: "https://martech3d-customer-portal.s3.eu-west-2.amazonaws.com/images/assets/1715610110_production_18_next-hotspot-02-6.png",
            widthInPixels: 336,
            heightInPixels: 136,
          },
          {
            id: "book-a-demo",
            url: "https://martech3d-customer-portal.s3.eu-west-2.amazonaws.com/images/assets/1715610098_production_18_next-hotspot-02-5.png",
            widthInPixels: 336,
            heightInPixels: 136,
          },
          {
            id: "in-scene-data-roadside-breakdown",
            type: "image",
            url: "https://martech3d-customer-portal.s3.eu-west-2.amazonaws.com/images/assets/1717164476_production_18_in-scene-data-roadside-breakdown.png",
            widthInPixels: 381,
            heightInPixels: 432,
          },
          {
            id: "in-scene-data-daily-vehicle-inspections",
            type: "image",
            url: "https://martech3d-customer-portal.s3.eu-west-2.amazonaws.com/images/assets/1717170257_production_18_in-scene-data-daily-vehicle-inspections-1.png",
            widthInPixels: 679,
            heightInPixels: 603,
          },
          {
            id: "in-scene-data-in-summary",
            type: "image",
            url: "https://martech3d-customer-portal.s3.eu-west-2.amazonaws.com/images/assets/1717164456_production_18_in-scene-data-in-summary.png",
            widthInPixels: 665,
            heightInPixels: 606,
          },
          {
            id: "in-scene-data-problems-on-the-road",
            type: "image",
            url: "https://martech3d-customer-portal.s3.eu-west-2.amazonaws.com/images/assets/1717164466_production_18_in-scene-data-problems-on-the-road.png",
            widthInPixels: 397,
            heightInPixels: 455,
          },
        ],
        animations: [
          {
            id: "navigation-anim",
            url: "https://martech3d-customer-portal.s3.eu-west-2.amazonaws.com/images/animations/1715089008_production_17_hotspot-navigation-arrow.png",
            widthInPixels: 80,
            heightInPixels: 80,
            spriteWidth: 146,
            spriteHeight: 146,
            spritesheetWidth: 2044,
            spritesheetHeight: 1022,
            fps: 60,
          },
          {
            id: "product-info-anim",
            url: "https://martech3d-customer-portal.s3.eu-west-2.amazonaws.com/images/animations/1715590721_production_18_hotspot-information-button.png",
            widthInPixels: 80,
            heightInPixels: 80,
            spriteWidth: 146,
            spriteHeight: 146,
            spritesheetWidth: 2044,
            spritesheetHeight: 1022,
            fps: 60,
          },
          {
            id: "product-play-anim",
            url: "https://martech3d-customer-portal.s3.eu-west-2.amazonaws.com/images/animations/1715592253_production_18_hotspot-play-button.png",
            widthInPixels: 80,
            heightInPixels: 80,
            spriteWidth: 146,
            spriteHeight: 146,
            spritesheetWidth: 2044,
            spritesheetHeight: 1022,
            fps: 60,
          },
        ],
        patches: [],
        content: {
          links: [],
          videos: [],
          images: [],
          galleries: [],
          models: [],
          documents: [],
          audio: [],
        },
        editor: { editPanoramas: true, editHotspots: true, editPatches: true },
        products: [],
        sideMenu: {
          enableProductMenu: false,
          enableGuidedTour: true,
          enableNavigationMenu: false,
          enableHome: true,
          enableSound: false,
          disableHomeDefaultPano: false,
          setFooterDropdownToFirstItemWhenHomeIsClicked: true,
        },
        localisation: {
          english: {
            loading: { status: "Loading..." },
            intro: {
              title: "Welcome to Michelin Smart Predictive Tire Tour",
              subtitle: "",
              disclaimer: "",
            },
          },
          french: {
            loading: { status: "CHARGEMENT..." },
            intro: {
              title: "Bienvenue dans notre Tour Virtuel",
              subtitle:
                "Choisissez votre \u00e9cran tactile et visualisez-le dans votre propre espace !",
              disclaimer: "disclaimer-fr",
            },
          },
        },
        footer: {
          martech3dLogo:
            "https://martech3d-customer-portal.s3.eu-west-2.amazonaws.com/images/assets/1706538796_production_1_martech3d-logo-plaincircle.png",
          poweredBy: {
            enabled: true,
            text: "Powered by",
            logo: "https://martech3d-customer-portal.s3.eu-west-2.amazonaws.com/images/assets/1706538796_production_1_martech3d-logo-plaincircle.png",
            link: "https://www.martech3d.com/",
          },
          showPaginationButtons: false,
          breadcrumbGroups: [
            {
              title: "Home",
              description: "",
              current: true,
              actions: [
                { id: "3D_OPEN_PANORAMA", payload: { panoId: "pano00" } },
              ],
              paginationButtons: [],
            },
            {
              title: "Your fleet's needs",
              description: "",
              current: false,
              paginationButtons: [
                {
                  tooltip: "Problems Overview",
                  actions: [
                    { id: "3D_OPEN_PANORAMA", payload: { panoId: "pano01" } },
                  ],
                },
                {
                  tooltip: "Daily & Interval Inspections",
                  actions: [
                    { id: "3D_OPEN_PANORAMA", payload: { panoId: "pano01-1" } },
                  ],
                },
                {
                  tooltip: "Problem identified",
                  actions: [
                    { id: "3D_OPEN_PANORAMA", payload: { panoId: "pano01-2" } },
                  ],
                },
                {
                  tooltip: "Punctured tire on Transit",
                  actions: [
                    { id: "3D_OPEN_PANORAMA", payload: { panoId: "pano01-3" } },
                  ],
                },
                {
                  tooltip: "Broken-down lorry",
                  actions: [
                    { id: "3D_OPEN_PANORAMA", payload: { panoId: "pano01-4" } },
                  ],
                },
                {
                  tooltip: "Summary of Problems",
                  actions: [
                    { id: "3D_OPEN_PANORAMA", payload: { panoId: "pano01-5" } },
                  ],
                },
              ],
              actions: [
                { id: "3D_OPEN_PANORAMA", payload: { panoId: "pano01" } },
              ],
            },
            {
              title: "Our Smart Solutions",
              description: "",
              current: false,
              paginationButtons: [
                {
                  tooltip: "QuickScan & TMPS sensors",
                  actions: [
                    { id: "3D_OPEN_PANORAMA", payload: { panoId: "pano02-1" } },
                  ],
                },
                {
                  tooltip: "Michelin Connected Fleet",
                  actions: [
                    { id: "3D_OPEN_PANORAMA", payload: { panoId: "pano02-2" } },
                  ],
                },
                {
                  tooltip: "Customer Service Teams",
                  actions: [
                    { id: "3D_OPEN_PANORAMA", payload: { panoId: "pano02-3" } },
                  ],
                },
                {
                  tooltip: "Michelin Connected Mobility Solution",
                  actions: [
                    { id: "3D_OPEN_PANORAMA", payload: { panoId: "pano02-4" } },
                  ],
                },
                {
                  tooltip: "Summary of Solutions",
                  actions: [
                    { id: "3D_OPEN_PANORAMA", payload: { panoId: "pano02-5" } },
                  ],
                },
              ],
              actions: [
                { id: "3D_OPEN_PANORAMA", payload: { panoId: "pano02-1" } },
              ],
            },
          ],
        },
        productSelector: [],
        gridMenu: { enabled: false, header: "Explore Area", tiles: [] },
        contactUsSettings: {
          first_name: true,
          last_name: true,
          full_name: true,
          email: true,
          phone: true,
          message: true,
          organisation: true,
          position: false,
          address_line_1: false,
          address_line_2: false,
          town: false,
          county: false,
          postcode: false,
          country: false,
          location: false,
          gdpr_opt_in: false,
          product_of_interest: false,
          source_application: false,
        },
        guidedTour: {
          slides: [
            {
              title: "Guided Tour - Step 01",
              instruction: "Click and drag the cursor to look around.",
              imageUrl:
                "https://martech3d-customer-portal.s3.eu-west-2.amazonaws.com/images/assets/1721131189_local_1_pointer.png",
            },
            {
              title: "Guided Tour - Step 02",
              instruction: "Zoom in and out using the scroll wheel.",
              imageUrl:
                "https://martech3d-customer-portal.s3.eu-west-2.amazonaws.com/images/assets/1721131189_local_1_pointer.png",
            },
            {
              title: "Guided Tour - Step 03",
              instruction: "Use the arrow keys for navigation.",
              imageUrl:
                "https://martech3d-customer-portal.s3.eu-west-2.amazonaws.com/images/assets/1721131189_local_1_pointer.png",
            },
          ],
        },
      },
    },
  };
  