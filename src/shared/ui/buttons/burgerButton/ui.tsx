export const BurgerButton = ({
  onHandle,
  isNavOpened,
}: {
  onHandle: () => void
  isNavOpened: boolean
}) => {
  return (
    <button
      onClick={() => onHandle()}
      className={`relative z-[30] h-[27px] w-[30px] duration-300 after:transition-all after:content-[''] ${
        isNavOpened && "after:translate-y-3 after:rotate-45"
      } before:absolute before:bottom-0 before:left-0 before:h-[0.2rem] before:w-full before:bg-main-dark
		before:transition-all before:content-[''] after:absolute after:left-0 after:top-0 after:h-[0.2rem] after:w-full after:bg-main-dark ${
      isNavOpened && "before:-translate-y-3 before:-rotate-45"
    }`}
    >
      <span
        className={`absolute left-0 top-1/2 h-[0.2rem] w-full bg-main-dark transition-all ${
          isNavOpened && "scale-0"
        } -translate-y-1/2`}
      ></span>
    </button>
  )
}
