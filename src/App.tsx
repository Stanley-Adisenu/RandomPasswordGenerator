import { useState } from 'react'
import './index.css'
import PasswordLength from './components/PasswordLength';

import IncludeUppercase from './components/IncludeUppercase';
import IncludeLowercase from './components/IncludeLowercase';
import IncludeNumbers from './components/IncludeNumbers';
import IncludeSymbols from './components/IncludeSymbols';
import { generatePassword } from './utils/generatePassword';
import StrengthMeter from './components/StrengthMeter';


function App() {
  const [password,setPassword] = useState<string >('')
  const [passwordLength, setPasswordLength] =  useState<number>(0)
  const [includeUpperCase, setIncludeUppercase] = useState<boolean>(false)
  const [includeLowerCase, setIncludeLowercase] = useState<boolean>(false)
  const [includeNumbers, setincludeNumbers] = useState<boolean>(false)
  const [includeSymbols, setincludeSymbols] = useState<boolean>(false)
  const [copied,setCopied] = useState<boolean>(false)

  const [strength,setStrength]  = useState<string | null>('')
  
  
  function handleGeneratePassword(){
    const newPassword = generatePassword({
      length: passwordLength,     includeLowerCase,includeUpperCase,includeNumbers,includeSymbols
    });
    handleStrength()

    setPassword(newPassword)
  }



  const handleCopyClick = () => {

    if (password){
      navigator.clipboard.writeText(password)
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
      return
    }
    else{
      setCopied(false)
    }

    
  }


const handleStrength = ()=>{
  let lvl: number = 0;
  if (passwordLength>0  )lvl++;
  if(passwordLength>=8 && includeUpperCase)lvl++
  if(passwordLength>=8 && includeLowerCase)lvl++
  if(passwordLength>=8 && includeNumbers)lvl++
  if(passwordLength>=8 && includeSymbols)lvl++
  if (!includeLowerCase && !includeNumbers && !includeNumbers && !includeSymbols && passwordLength>0 &&!includeUpperCase) lvl = 0;
  if (includeLowerCase && includeNumbers && includeNumbers && includeSymbols && passwordLength>=5 && passwordLength<8 &&includeUpperCase) lvl = 4;

  switch(lvl){
    case 0:
      setStrength('');
      return '';
    case 1:
      setStrength('TOO WEAK!');
      return 'TOO WEAK!';
    case 2:
      setStrength('WEAK');
      return 'WEAK';
    case 3:
      setStrength('WEAK');
      return 'WEAK';
    case 4:
      setStrength('MEDIUM');
      return 'MEDIUM';
    case 5:
      setStrength('STRONG');
      return 'STRONG';
    default:
      setStrength('VERY WEAK!');
      return 'VERY WEAK!';
  }
  



}
 


 
  return (
    <>
      <div id='container' className='flex justify-center items-center min-h-screen '>

        <div id='headText'>Password Generator</div>

        <div id='card'>

        <div id='passSpace'>
        <input type="text"  placeholder='P4$5WOrD!' value={password} disabled />
        <div id="copier">
        {copied && <p id='copied'>COPIED</p>}
          <svg onClick={handleCopyClick} width="20" height="25" xmlns="http://www.w3.org/2000/svg"><path d="M20.341 3.091 17.909.659A2.25 2.25 0 0 0 16.319 0H8.25A2.25 2.25 0 0 0 6 2.25V4.5H2.25A2.25 2.25 0 0 0 0 6.75v15A2.25 2.25 0 0 0 2.25 24h10.5A2.25 2.25 0 0 0 15 21.75V19.5h3.75A2.25 2.25 0 0 0 21 17.25V4.682a2.25 2.25 0 0 0-.659-1.591ZM12.469 21.75H2.53a.281.281 0 0 1-.281-.281V7.03a.281.281 0 0 1 .281-.281H6v10.5a2.25 2.25 0 0 0 2.25 2.25h4.5v1.969a.282.282 0 0 1-.281.281Zm6-4.5H8.53a.281.281 0 0 1-.281-.281V2.53a.281.281 0 0 1 .281-.281H13.5v4.125c0 .621.504 1.125 1.125 1.125h4.125v9.469a.282.282 0 0 1-.281.281Zm.281-12h-3v-3h.451c.075 0 .147.03.2.082L18.667 4.6a.283.283 0 0 1 .082.199v.451Z"/></svg>

        </div>
        </div>

        <div id='downSide'>

        <PasswordLength passwordLength={passwordLength} setPasswordLength={setPasswordLength}/>
      


        <div id='options'>

          <IncludeUppercase includeUpperCase={includeUpperCase} setIncludeUpperCase={setIncludeUppercase}/>

          <IncludeLowercase includeLowerCase={includeLowerCase} setIncludeLowerCase={setIncludeLowercase}/>

          <IncludeNumbers includeNumbers={includeNumbers} setIncludeNumbers={setincludeNumbers}/>

          <IncludeSymbols includeSymbols={includeSymbols} setIncludeSymbols={setincludeSymbols}/>


       
       
        </div>


        	<div >
            <div id='strength'>
              <p>STRENGTH</p>

              <StrengthMeter strength={strength} />


            </div>
          </div>

          <div onClick={handleGeneratePassword} id='generate'>
            <p>GENERATE</p>
            <span>
            <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg"><path d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"/></svg>
            </span>
          </div>

          </div>

          </div>

      </div>

    </>
  )
}

export default App
