import React from 'react';


type Props = {
  className?: string
}

export const Loader = ({ className = '' }: Props) => (
  <div className={'text-center ' + className}>
    <div className="spinner-border" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div>
)