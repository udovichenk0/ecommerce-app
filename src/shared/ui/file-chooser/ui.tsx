export const FileChooser = ({register, label, name}:any) => {
	return (
		<label htmlFor="editor" className="w-[30px] h-[30px] bg-black rounded-full cursor-pointer">
			<input id="editor"
			{...register(name)}
		className="hidden w-[30px] h-[30px]"
		type="file" />
		</label>
	)
}