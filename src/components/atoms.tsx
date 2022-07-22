import {
  AnchorHTMLAttributes,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from 'react'
import Link from 'next/link'
import classNames from 'classnames'

export const NavLink = ({ to, title = 'Link', selected = false, ...props }) => {
  return (
    <Link {...props} href={to}>
      <a
        className={classNames(
          'font-semibold tracking-wide text-sm hover:text-accent transition duration-150 focus-visible:outline-accent',
          {
            'text-accent': selected,
            'text-fore-secondary': !selected,
          }
        )}
      >
        {title}
      </a>
    </Link>
  )
}

export const ExtLink = ({
  children,
  link,
}: {
  children: React.ReactNode
  link: string
}) => {
  return (
    <a
      href={link}
      className="font-medium text-accent hover:underline focus-visible:outline-accent focus:text-accent"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
}

interface ButtonProps {
  children: React.ReactNode
  className?: string
  link?: string
}

export const Button = ({
  children,
  className,
  link,
  ...props
}: ButtonProps & AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <a
      {...props}
      className={classNames(
        'px-20 py-2 rounded bg-gradient-to-r from-teal-500 to-blue-500 bg-200 bg-left hover:bg-right transition-all text-back-secondary duration-[0.5s] ease-out focus-visible:outline-accent focus:text-accent',
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

export const Blob = () => {
  return (
    <div aria-hidden="true">
      <div className="relative h-48 blob md:h-56 lg:h-64">
        <svg
          className="h-full fill-current animate-blob-spin text-back-accent"
          viewBox="0 0 278 279"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M137.896 0.127761C167.59 -0.638578 198.383 1.62824 222.877 18.4301C247.738 35.4836 263.129 63.014 271.706 91.9151C280.118 120.258 280.513 150.661 270.364 178.43C260.457 205.538 239.342 225.92 216.353 243.372C192.903 261.174 167.336 278.631 137.896 278.994C108.28 279.358 81.0666 263.928 58.0226 245.322C35.8955 227.455 20.5343 203.415 11.0775 176.594C1.41508 149.191 -4.23875 119.749 3.91245 91.8587C12.2111 63.4638 31.6331 39.4483 56.0438 22.7357C79.9856 6.34414 108.89 0.876363 137.896 0.127761Z" />
        </svg>
      </div>
    </div>
  )
}

export const CustomArrowDown = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10 animate-bounce mx-auto my-32"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export const Input = ({
  labelText,
  name,
  onChange,
  ...props
}: { labelText: string } & InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div className="group">
      <label
        className="text-sm font-medium transition-colors duration-200 text-fore-secondary group-hover:text-accent"
        htmlFor={name}
      >
        {labelText}
      </label>
      <input
        className="block w-full p-3 mt-1 border rounded-md outline-none border-back-subtle bg-back-primary focus:border-accent text-primary disabled:opacity-50"
        name={name}
        onChange={onChange}
        {...props}
      />
    </div>
  )
}

export const TextArea = ({
  labelText,
  name,
  onChange,
  ...props
}: { labelText: string } & TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  return (
    <div className="group">
      <label
        className="text-sm font-medium transition-colors duration-200 text-fore-secondary group-hover:text-accent"
        htmlFor={name}
      >
        {labelText}
      </label>
      <textarea
        className="block w-full p-3 mt-1 border rounded-md outline-none border-back-subtle bg-back-primary focus:border-accent text-fore-primary disabled:opacity-50"
        style={{ minHeight: '80px' }}
        name={name}
        onChange={onChange}
        {...props}
      />
    </div>
  )
}
