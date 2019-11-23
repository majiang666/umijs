import React from 'react';
import './index.less';
import { connect } from 'dva';
import PropTypes from 'prop-types';

const Immer = (props) => {
  return (
    <div className="immer">
      <h1>{props.count}</h1>
      <button onClick={props.add}>+1</button>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    count:state.immer.count
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    add:() => {
      dispatch({type:'immer/countAdd'});
    }
  }
}

Immer.propTypes = {
  count:PropTypes.number,
  add:PropTypes.func
}
export default connect(mapStateToProps,mapDispatchToProps)(Immer);