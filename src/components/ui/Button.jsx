const variantClasses = {
  primary: 'bg-violet-500 text-white hover:bg-violet-600',
  secondary: 'bg-neutral-200 text-neutral-800 hover:bg-neutral-300',
  danger: 'bg-rose-600 text-white hover:bg-rose-700',
};

const sizeClasses = {
  sm: 'px-2 py-1 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  children,
  className = '',
  ...rest
}) {
  return (
    <button
      className={`rounded font-medium transition-colors ${variantClasses[variant]} ${sizeClasses[size]} ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'} ${className}`}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
}
