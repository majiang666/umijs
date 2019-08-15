import { Route, Redirect } from 'dva/router';

const AuthRouter = (props) => {
  const { route } = props;
  const { component:Component } = route;
  return (
    <Route render={ props => {
      console.log(props);
      return false ? <Component { ...props } /> : <Redirect to="/login" />
    }} />
  )
}

export default AuthRouter;
// true ? <Route {...route} /> : <Redirect to="/login" />