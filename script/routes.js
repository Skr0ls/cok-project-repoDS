const routes = [
  {
    path: '/',
    getTemplate: (params) => '../modules/tourism/tourism.html'
  },
  {
    path: '/tourism',
    getTemplate: (params) => '../modules/tourism/tourism.html'
  },
  {
    path: '/clothes/:belts',
    getTemplate: (params) => '../modules/clothes/belts/belts.html'
  },
  {
    path: '/clothes/:shoulders',
    getTemplate: (params) => '../modules/clothes/shoulders/shoulders.html'
  },
  /* Пример рута с параметром
  {
    path: '/products/:productId',
    getTemplate: (params) => `<h1>Product ${params.productId}</h1>`,
  },
  */
];