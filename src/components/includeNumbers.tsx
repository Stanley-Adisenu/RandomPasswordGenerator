
type IncludeNumbersProps = {
  includeNumbers:boolean;
  setIncludeNumbers:(include:boolean)=>void;
}

export default function IncludeNumbers({includeNumbers,setIncludeNumbers}:IncludeNumbersProps) {
  function handleIncludeNumbersChange(){
    setIncludeNumbers(!includeNumbers)
}

  return (
    <label className="container"><span className='optionText'>Include Numbers</span>
    <input type="checkbox" id='includeNumbers' checked={includeNumbers} onChange={handleIncludeNumbersChange}/>
    <span className="checkmark"></span>
    </label> 
  )
}
