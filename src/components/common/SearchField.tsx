import { forwardRef } from 'react'
import { Search as SearchIcon } from 'lucide-react'
import TextInput from './TextInput'
import type { TextInputProps } from './TextInput'

export interface SearchFieldProps extends Omit<TextInputProps, 'leftIcon' | 'type'> {}

const SearchField = forwardRef<HTMLInputElement, SearchFieldProps>(
  (props, ref) => {
    return (
      <TextInput
        ref={ref}
        type="search"
        leftIcon={<SearchIcon size={15} />}
        placeholder={props.placeholder ?? 'Search...'}
        {...props}
      />
    )
  }
)

SearchField.displayName = 'SearchField'
export default SearchField
