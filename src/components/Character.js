import React from "react";
import { connect } from 'react-redux';

const Character = props => {
  return <li>{props.character.name}</li>;
};


const mapStateToProps = (state) => {
  console.log(state);
  return {
    character: state.characters
  }
}

export default connect( mapStateToProps, {} )(Character);
