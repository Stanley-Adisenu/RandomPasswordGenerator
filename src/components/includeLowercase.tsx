
type IncludeLowerCaseProps = {
  includeLowerCase:boolean;
  setIncludeLowerCase:(include:boolean)=>void;
}

export default function IncludeUppercase({includeLowerCase,setIncludeLowerCase}:IncludeLowerCaseProps) {
  function handleIncludeLowercaseChange(){
    setIncludeLowerCase(!includeLowerCase)
}

  return (
    <label className="container"><span className='optionText'>Include Lowercase Letters</span>
    <input type="checkbox" id='includeLowercase' checked={includeLowerCase} onChange={handleIncludeLowercaseChange}/>
    <span className="checkmark"></span>
    </label> 
  )
}
