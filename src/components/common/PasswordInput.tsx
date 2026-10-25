import { forwardRef, useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import TextInput from './TextInput'
import type { TextInputProps } from './TextInput'

export interface PasswordInputProps extends Omit<TextInputProps, 'type' | 'rightIcon'> {}

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  (props, ref) => {
    const [visible, setVisible] = useState(false)

    return (
      <TextInput
        ref={ref}
        type={visible ? 'text' : 'password'}
        rightIcon={
          <button
            type="button"
            onClick={() => setVisible((v) => !v)}
            className="text-slate-500 hover:text-slate-300 transition-colors focus:outline-none"
            aria-label={visible ? 'Hide password' : 'Show password'}
            tabIndex={-1}
          >
            {visible ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        }
        {...props}
      />
    )
  }
)

PasswordInput.displayName = 'PasswordInput'
export default PasswordInput
