import { Controller, useForm } from "react-hook-form"

export const SearchInput = () => {
	const {register, handleSubmit, control} = useForm({
		defaultValues: {
			search: ''
		}
	})
	return (
		// <Controller
		// control={control}
		// name={'search'}
		// render={({{ field: { onChange, onBlur, value, ref }, formState, fieldState }) => (
		// 	<>
		// 	<input type="text" />
		// 	</>
		// )}
		// />
	)
}