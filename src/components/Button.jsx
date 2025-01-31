import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ title, id, rightIcon, leftIcon, containerClass, href }) => {
  return (
    <button 
      id={id}
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass}`}
      onClick={() => window.open(href, '_blank')}
    >
      {leftIcon}
      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
        <div>{title}</div>
      </span>
      {rightIcon}
    </button>
  )
}

Button.propTypes = {
  href: PropTypes.string
}

export default Button