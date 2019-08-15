import styles from './index.css';
import Login from './login';
function BasicLayout(props) {
  // console.log(props.location);
  if(props.location.pathname === '/login'){
    return (
      <Login />
    )
  }
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to umi!</h1>
      {props.children}
      <p style={{background:"#ccc",lineHeight:"50px",textAlign:'center',fontSize:'13px',color:'#666'}}>版权所有 umijs</p>
    </div>
  );
}

export default BasicLayout;
