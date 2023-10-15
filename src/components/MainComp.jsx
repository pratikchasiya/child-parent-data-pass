import React, { Fragment, useState } from 'react'
import ChildComp from './ChildComp'

const MainComp = () => {
  const [array, setarray] = useState(0)
  const [obj, setobj] = useState("")

    const getData = (value,value1)=>{
        console.log(value)
        console.log(value1)
        setarray(value)
        setobj(value1)
    }

  return (
   <Fragment>
     <ChildComp array={array} getData={getData} obj={obj} />
   </Fragment>
  )
}

export default MainComp