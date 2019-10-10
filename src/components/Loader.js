import React from 'react';

export const Loader = ({className = ''}) => (
  <div className={'text-center ' + className}>
    <div className="spinner-border" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div>
)