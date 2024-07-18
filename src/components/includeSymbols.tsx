
type IncludeSymbolsProps = {
  includeSymbols:boolean;
  setIncludeSymbols:(include:boolean)=>void;
}

export default function IncludeSymbols({includeSymbols,setIncludeSymbols}:IncludeSymbolsProps) {
  function handleIncludeSymbolsChange(event: ChangeEvent<HTMLInputElement>){
    setIncludeSymbols(!includeSymbols)
}

  return (
    <label className="container"><span className='optionText'>Include Symbols</span>
    <input type="checkbox" id='includeSymbols' checked={includeSymbols} onChange={handleIncludeSymbolsChange}/>
    <span className="checkmark"></span>
    </label> 
  )
}
