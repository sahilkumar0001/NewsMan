import React from 'react'
import '../App.css';

export default function NewsItem(props) {
  return (
    <>
    <div className="card text-white bg-secondary" style={{width: "18rem"}}>
    <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
      Source: &nbsp;
    {
      props.author?
      props.author:props.creator
    }
    <span className="visually-hidden">{props.author}</span>
  </span>
      <img src={
        props.url?
        props.url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6PIFHUvI4GJrwvaI3m5E37O5Sb652wwGVfhy2AXoE&s"
      } className="card-img-top" alt={props.author}/>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <hr/>
        <p className="card-text " >{props.description?.slice(0,120)}...</p>
        <hr/>
        <p className="card-text text-white"><small className=" text-white">Published at : {props.date}</small></p>
        <a href={props.source} target="_blank" rel="noreferrer" className="btn btn-dark">Read More</a>
      </div>
    </div>
    </>
  )
}
