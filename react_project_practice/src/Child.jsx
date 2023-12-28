import React from 'react'

const Child = (props) => {
  return (
    <div>Child ,
       <p> {props.mycity} </p>
       <p> {
            props.obj.name
        } </p>
    </div>
  )
}

export default Child

// import React from 'react'

// const Child = ({mycity,obj}) => {
//   return (
//     <div>Child ,
//        <p> {mycity} </p>
//        <p> {
//             obj.name
//         } </p>
//     </div>
//   )
// }

// export default Child

// import React from 'react'

 export const DestructureChild = ({mycity,obj}) => {
  return (
    <div> DestructureChild
        <p>{mycity}</p>
        <p>{obj.name}</p>
    </div>
  )
}

