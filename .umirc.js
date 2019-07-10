const path = require('path');
// ref: https://umijs.org/config/
export default {
  history: 'hash',
  treeShaking: true,
  alias:{
    '@routes':path.resolve(path.resolve(__dirname, 'src/routes'))
  },
  plugins: [
    [
      'umi-plugin-react', 
      {
        dva: false,
        antd: true,
      dynamicImport: false,
      title: 'umijs',
      dll: false,
      exportStatic:false,
      routes:{
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
      }
    ]
  ]
}
