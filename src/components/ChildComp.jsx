import React, {Fragment} from "react";

const ChildComp = (props) => {

    const array = [
       "Pratik",
        "Chasiya"
    ]
    const obj = {
        name : "Mehul",
        surname : "Waghela"
    }

  return (
    <Fragment>
      <h2>{props.array}</h2>
      <h2>{props.obj.name} {props.obj.surname}</h2>
      <button onClick={() => props.getData(array,obj)}>Click me</button>
    </Fragment>
  );
};

export default ChildComp;
