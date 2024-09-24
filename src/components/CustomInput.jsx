const CustomInput = ({ placeholder, label }) => {
    return (
        <div className="flex flex-col gap-y-2">
           <span className="text-sm font-medium text-text-300">{label}</span>
           <input className="focus:outline-none focus:border-none bg-surface-100 p-2 rounded-md" placeholder={placeholder}/>
           <div className="w-full bg-white"/>
        </div>
    )
}

export default CustomInput;