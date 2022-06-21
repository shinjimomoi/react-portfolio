import React from "react"

const Card = (props) => {
  return (
      <div class="card align-center">
        <div class="description">
          <h3 class="light-gray mb-5"><span class="primary font-light">{props.item.id}</span>{props.item.title}</h3>
          <a className='img-small' href={props.item.url}><img src={props.item.imageUrl} alt="ronin" /></a>
          <p class="gray">{props.item.description}</p>
          <p class="gray mt-3">Role: <span class="primary font-bold">{props.item.role}</span> </p>
          <p class="gray mt-3">Tech stack: <span class="primary font-bold">{props.item.tech}</span> </p>
          <a href={props.item.url} class="btn btn-ghost mt-5">Check it out</a>
        </div>
        <a className="img-big" href={props.item.url}><img class="" src={props.item.imageUrl && props.item.imageUrl2} alt="ronin" /></a>
      </div>
  )
}

export default Card;
