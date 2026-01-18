import React from 'react';
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label?: string;
  error?: string;
  multiline?: boolean;
}
export function Input({
  label,
  error,
  className = '',
  id,
  multiline = false,
  ...props
}: InputProps) {
  const inputId = id || props.name;
  const baseStyles = 'w-full rounded-lg border-2 border-chocolate-100 bg-white px-4 py-2.5 text-chocolate-900 placeholder:text-chocolate-100/50 focus:border-caramel-500 focus:outline-none focus:ring-1 focus:ring-caramel-500 transition-colors duration-200';
  const errorStyles = 'border-red-300 focus:border-red-500 focus:ring-red-500';
  return <div className="w-full">
      {label && <label htmlFor={inputId} className="mb-1.5 block text-sm font-medium text-chocolate-900">
          {label}
        </label>}
      {multiline ? <textarea id={inputId} className={`${baseStyles} ${error ? errorStyles : ''} ${className} min-h-[120px] resize-y`} {...props as React.TextareaHTMLAttributes<HTMLTextAreaElement>} /> : <input id={inputId} className={`${baseStyles} ${error ? errorStyles : ''} ${className}`} {...props as React.InputHTMLAttributes<HTMLInputElement>} />}
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>;
}