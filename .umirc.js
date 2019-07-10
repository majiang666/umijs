const path = require('path');
// ref: https://umijs.org/config/
export default {
  history: 'hash',
  treeShaking: true,
  alias:{
    '@routes':path.resolve(path.resolve(__dirname, 'src/routes'))
  },
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: false,
      dva: {
        immer: true
      },
      dynamicImport: false,
      title: 'umijs',
      dll: false,
      exportStatic:true,
      routes: {
        exclude: [
          /components\//,
        ],
      },
      routes:[
        {
          path:'/',
          component:'./index.js',
          Routes:['src/routes/PrivateRoute.js']
        },
        {
          path:'/card',
          component:'./card',
          Routes:['src/routes/qx.js']
        }
      ]
    }],
  ]
}
