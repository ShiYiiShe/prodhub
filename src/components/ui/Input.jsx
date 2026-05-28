export default function Input({
  label = '',
  error = '',
  id = '',
  className = '',
  ...rest
}) {
  return (
    <>
      {label && (
        <label
          htmlFor={id}
          className="mb-1 block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}
      <input
        id={id}
        // className={`w-full rounded border px-3 py-2 focus:outline-none ${error ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-violet-500'} ${className}`}
        className={`w-full rounded border px-3 py-2 transition duration-300 focus:outline-none ${
          error
            ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
            : 'border-gray-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20'
        } ${className}`}
        {...rest}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </>
  );
}
