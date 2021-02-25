import React from 'react';
import moment from 'moment';

import './Post.css';

const post = (props) => (
    <article className="Post" onClick={props.clicked}>
        <h1>{props.name}</h1>
        <div className="Info">
            <img className="Image" src={props.image}/>
            <p>{props.description}</p>
            <a className="Date">{moment(props.createdAt).format('YYYY/MM/DD')}</a>
        </div>
    </article>
);

export default post;