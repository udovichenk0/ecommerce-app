const steps = [
  { checkStep: 1, text: "Order Summary" },
  { checkStep: 2, text: "Shipping Details" },
  { checkStep: 3, text: "Payment" },
]

export const StepLine = ({ step }: { step: number }) => {
  return (
    <div className="after:content relative mb-10 flex w-full justify-between after:absolute after:top-[15px] after:z-0 after:ml-9 after:h-[2px] after:w-[95%] after:bg-[#e1e1e1]">
      {steps.map(({ checkStep, text }) => {
        return (
          <div key={checkStep}>
            <div className="relative z-10 flex w-full justify-center">
              <div className="inline-flex flex-col items-center">
                <div
                  className={`mb-2 flex h-[32px] w-[32px] items-center justify-center rounded-full text-[#818181]
								${checkStep == step ? "bg-black text-white" : "bg-[#e1e1e1]"}`}
                >
                  {checkStep}
                </div>
                <p className="text-sm">{text}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
