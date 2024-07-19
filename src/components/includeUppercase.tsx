
type IncludeUpperCaseProps = {
  includeUpperCase:boolean;
  setIncludeUpperCase:(include:boolean)=>void;
}

export default function IncludeUppercase({includeUpperCase,setIncludeUpperCase}:IncludeUpperCaseProps) {
  function handleIncludeUppercaseChange(){
    setIncludeUpperCase(!includeUpperCase)
}

  return (
    <label className="container"><span className='optionText'>Include Uppercase Letters</span>
    <input type="checkbox" id='includeUppercase' checked={includeUpperCase} onChange={handleIncludeUppercaseChange}/>
    <span className="checkmark"></span>
    </label> 
  )
}
