const path = require('path');
// ref: https://umijs.org/config/
export default {
  history: 'hash',
  treeShaking: true,
  alias: {
    '@routes': path.resolve(path.resolve(__dirname, 'src/routes'))
  },
  plugins: [
    [
      'umi-plugin-react',
      {
        dva: {
          immer:true,
        },
        antd: true,
        dynamicImport: false,
        title: 'umijs',
        dll: false,
        exportStatic: false,
        routes: {
          exclude: [
            /components\//,
          ],
        }
      }
    ]
  ],
  routes: [
    {
      path: '/',
      component: './index',
      Routes: ['./src/routes/PrivateRoute.js'],
    },
    {
      path: '/card',
      component: './card/_layout',
      routes: [
        {
          path: "/card/",
          component: './card'
        },
        {
          path: "/card/info",
          component: './card/info'
        }
      ]
    },
    {
      path: "/immer",
      component: './immer'
    },
    {
      path: '/login',
      component: './login'
    }
  ],
  disableCSSModules:true
}
