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

export const Input = ({ labelText, name, ...props }) => {
  return (
    <div className="group">
      <label
        className="text-fore-secondary group-hover:text-accent text-sm font-medium transition-colors duration-200"
        htmlFor={name}
      >
        {labelText}
      </label>
      <input
        className="border-back-subtle bg-back-primary focus:border-accent text-primary mt-1 block w-full rounded-md border p-3 outline-none disabled:opacity-50"
        name={name}
        {...props}
      />
    </div>
  )
}

export const TextArea = ({ labelText, name, ...props }) => {
  return (
    <div className="group">
      <label
        className="text-fore-secondary group-hover:text-accent text-sm font-medium transition-colors duration-200"
        htmlFor={name}
      >
        {labelText}
      </label>
      <textarea
        className="border-back-subtle bg-back-primary focus:border-accent text-fore-primary mt-1 block w-full rounded-md border p-3 outline-none disabled:opacity-50"
        style={{ minHeight: '80px' }}
        name={name}
        {...props}
      />
    </div>
  )
}
