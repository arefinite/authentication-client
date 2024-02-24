interface ITextField {
  type: 'password' | 'email' | 'text'
  placeholder: string
  inputProps: unknown
  error?: string
}

const TextField = ({ type, placeholder, inputProps, error }: ITextField) => {
  return (
    <div className='space-y-1'>
      <input
        type={type}
        placeholder={placeholder}
        {...(inputProps ?? {})}
        className='text-field w-full'
      />
      {error && <p className='ml-1 text-red-500'>{error}</p>}
    </div>
  )
}
export default TextField
