const sizeClasses = {
  sm: 'h-4 w-4 border-2',
  md: 'h-6 w-6 border-2',
  lg: 'h-10 w-10 border-[3px]',
};

export default function Spinner({ size = 'md', className = '' }) {
  const [height, width] = sizeClasses[size].split(' ');

  return (
    <div
      role="status"
      aria-label="Loading"
      className={`relative ${height} ${width} ${className}`}
    >
      <div
        className={`absolute inset-0 rounded-full border-gray-200 ${sizeClasses[size]}`}
      />
      <div
        className={`absolute inset-0 animate-spin rounded-full border-transparent border-t-violet-500 border-r-violet-500 ${sizeClasses[size]}`}
      />
    </div>
  );
}
