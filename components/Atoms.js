import classNames from 'classnames'

export const ExtLink = ({ children, link }) => {
  return (
    <a
      href={link}
      className="text-pink-600 hover:bg-pink-400 hover:text-white"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
}

export const Button = ({ children, className, link, ...props }) => {
  return (
    <a
      {...props}
      className={classNames(
        'bg-200 focus-visible:outline-accent focus:text-accent rounded bg-gradient-to-r from-teal-500 to-blue-500 bg-left px-20 py-2 transition-all duration-[0.5s] ease-out hover:bg-right',
        className
      )}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
}
