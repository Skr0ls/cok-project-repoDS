const routes = [
  {
    path: '/',
    getTemplate: (params) => 'modules/tourism/tourism.html'
  },
  {
    path: '/tourism',
    getTemplate: (params) => 'modules/tourism/tourism.html'
  },
  {
    path: '/clothes-belts',
    getTemplate: (params) => 'modules/belts/belts.html'
  },
  {
    path: '/clothes-shoulders',
    getTemplate: (params) => 'modules/shoulders/shoulders.html'
  },
  
  {
    path: '/clothes-belts-dynamic-infographic',
    getTemplate: (params) => 'modules/belts/dynamic-infographic/dynamic-infographic.html'
  },
  {
    path: '/clothes-belts-interactive-simulator',
    getTemplate: (params) => 'modules/belts/interactive-simulator/interactive-simulator.html'
  },
  {
    path: '/clothes-belts-virtual-simulator',
    getTemplate: (params) => 'modules/belts/virtual-simulator/virtual-simulator.html'
  },
  {
    path: '/clothes-belts-video-lesson',
    getTemplate: (params) => 'modules/belts/video-lesson/video.html'
  },

  {
    path: '/clothes-shoulders-dynamic-infographic',
    getTemplate: (params) => 'modules/shoulders/dynamic-infographic/dynamic-infographic.html'
  },
  {
    path: '/clothes-shoulders-interactive-simulator',
    getTemplate: (params) => 'modules/shoulders/interactive-simulator/interactive-simulator.html'
  },
  {
    path: '/clothes-shoulders-virtual-simulator',
    getTemplate: (params) => 'modules/shoulders/virtual-simulator/virtual-simulator.html'
  },

  {
    path: '/tourism-interactive-simulator',
    getTemplate: (params) => 'modules/tourism/interactive-simulator/interactive-simulator.html'
  },
  {
    path: '/tourism-virtual-simulator',
    getTemplate: (params) => 'modules/tourism/virtual-simulator/virtual-simulator.html'
  },
  {
    path: '/tourism-video-lesson',
    getTemplate: (params) => 'modules/tourism/video-lesson/video.html'
  },
];
