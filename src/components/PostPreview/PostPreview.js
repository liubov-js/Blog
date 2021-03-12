import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

import './PostPreview.css';

const postPreview = (props) => (
    <Link className="Link" to={`/articles/${props.id}`}>
        <article className="PostPreview" onClick={props.clicked}>
            <h1>{props.name}</h1>
            <div className="Info">
                <img className="Image" src={props.image}/>
                <p>{props.description}</p>
                <p className="Date">{moment(props.createdAt).format('YYYY/MM/DD')}</p>
            </div>
        </article>
    </Link>
);

export default postPreview;