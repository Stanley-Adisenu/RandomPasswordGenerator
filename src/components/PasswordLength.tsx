type PasswordLengthProps = {
    passwordLength: number
    setPasswordLength: (length:number)=> void
}

export default function PasswordLength({passwordLength,setPasswordLength}:PasswordLengthProps) {

    function handlePasswordLengthChange(event: any){
        setPasswordLength(parseInt(event.target.value,10) )
    }
  return (
    <div id='lengthSlide'>
    <div id='charLength'>
      <p id='text'>Character Length</p>
      <p id='digit'>{passwordLength}</p>
    </div>
    <div  >
      <div className='range'></div>
      <input className='range' type="range" min="0" max="20"  value={passwordLength} onChange={handlePasswordLengthChange}/>
    </div>
  </div>
  )
}
