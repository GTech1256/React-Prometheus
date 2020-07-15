import React from 'react';

import { Repository } from '../../types';
import style from './style.module.scss'


type Props = Repository


const RepositoryView = ({
  node: {
    url,
    name,
    stargazers,
    owner,
  }
}: Props) => {
  return (
    <a href={url} className="list-group-item list-group-item-action">
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">{name}</h5>
        <span className={`badge ${style['badge-text-center']} badge-dark`}>{stargazers.totalCount}</span>
      </div>
      <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
      <small>{owner.login}</small>
    </a>
  )
}

export default RepositoryView;