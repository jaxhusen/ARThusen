import React from 'react'

function Startsida({ props }) {


  return (
    <div>
      <article>
        <img src={props.pic.img} alt={props.pic.name}></img>
        <p>
          {props.pic.name}
          <br />
          {props.pic.price} :-
        </p>
      </article>
    </div>
  )
}

export default Startsida