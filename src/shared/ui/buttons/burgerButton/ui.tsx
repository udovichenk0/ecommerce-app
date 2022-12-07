export const BurgerButton = ({onHandle, isNavOpened}: {onHandle: () => void, isNavOpened: boolean}) => {
	return (
		<button onClick={() => onHandle()} className={`z-[30] relative w-[30px] h-[27px] after:transition-all duration-300 after:content-[''] ${isNavOpened && 'after:rotate-45 after:translate-y-3'} after:absolute after:left-0 after:top-0 after:w-full after:h-[0.2rem] after:bg-main-dark
		before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:transition-all before:h-[0.2rem] before:bg-main-dark ${isNavOpened && 'before:-rotate-45 before:-translate-y-3'}`}>
			<span className={`absolute left-0 top-1/2 w-full transition-all h-[0.2rem] bg-main-dark ${isNavOpened && 'scale-0'} -translate-y-1/2`}></span>
		</button>
	)
}