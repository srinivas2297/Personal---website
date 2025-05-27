export function Button({ children, onClick, variant = 'default', className = '' }) {
  let baseStyle = 'px-4 py-2 rounded text-white';
  if (variant === 'outline') {
    baseStyle = 'px-4 py-2 rounded border border-gray-500 text-gray-700';
  } else if (variant === 'link') {
    baseStyle = 'text-blue-600 underline';
  }
  return <button onClick={onClick} className={baseStyle + ' ' + className}>{children}</button>;
}