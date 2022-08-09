import React from 'react'
import classnames from 'classnames'
import { UseFormRegister } from 'react-hook-form'

interface Props {
  id: string
  type?: string
  placeholder?: string
  label?: string
  hint?: string
  error?: string | false
  register: UseFormRegister<any>
  autoComplete?: string
}

export const TextInput: React.FC<Props> = ({ id, label, hint, error, register, ...props }) => (
  <div className="my-3">
    {label && (
      <label htmlFor={id} className="my-4 text-left">
        <p className="font-medium text-slate-700 pb-2">{label}</p>
      </label>
    )}
    <div className="mb-6">
      <input
        id={id}
        {...props}
        {...register(id)}
        className={classnames(
          'w-full p-3 mb-2 rounded-lg inputcs',
          error && '!border-orange-600/60'
        )}
      />
      {(error || hint) && (
        <p className={classnames('text-hint absolute', error && 'text-orange-600/60')}>
          {error ?? hint}
        </p>
      )}
    </div>
  </div>
)
