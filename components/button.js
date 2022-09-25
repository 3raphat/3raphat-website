const Button = ({ children, className, onClick }) => {
  return (
    <button
      className={`p-3 rounded flex items-center justify-center ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button