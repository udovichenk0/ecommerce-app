import style from './style.module.scss'
interface IProps {
	action: () => void
	label: string
	disabled?: boolean
	size: 'md' | 'lg' | 'xl'
}

export const BaseButton = ({action, label, disabled, size}:IProps) => {
	return (
		<button disabled={disabled} onClick={action}
		className={`${style[size]} font-bold text-base py-[15px] px-[20px] bg-[#101010] border-2 border-[#101010] text-white ${disabled && 'opacity-50'}`}>
			{label}
		</button>
	)
}