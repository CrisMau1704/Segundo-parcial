
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Segundo-parcial/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Segundo-parcial"
  },
  {
    "renderMode": 2,
    "route": "/Segundo-parcial/about"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 7872, hash: 'cd48aada61f3d9c764da2928f2d06db9e971fb11eedcdc6607ad0d8d249bb59f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 8389, hash: '7359a24178a28e6902331143e4f701602d7132982c4dfbc0da2a614daf6494d5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 30038, hash: '7bb8ec82595b39afeda6e4d7c3a7e9b6bd2b43fd83627ab0e7e94a2b1a96ed38', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 19405, hash: '047aba0bc39692360d434df6115806bf2acb0bb1d2b62a66ac38b18c7604f6d8', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
