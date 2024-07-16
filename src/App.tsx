import { useState } from 'react'
import './index.css'
import PasswordLength from './components/PasswordLength'


function App() {
  const [password,setPassword] = useState<string | null>(null)
  const [passwordLength, setPasswordLength] =  useState<number>(4)
  const [includeUppercase, setincludeUppercase] = useState<boolean>(true)
  const [includeLowercase, setincludeLowercase] = useState<boolean>(true)
  const [includeNumbers, setincludeNumbers] = useState<boolean>(true)
  const [includeSymbols, setincludeSymbols] = useState<boolean>(false) 
 
  return (
    <>
      <div className='flex justify-center items-center min-h-screen '>

        <div>Password Generator</div>

        <div>
        <input type="text"  placeholder='P4$5WOrD!' disabled />
        <div>
          <p>copied</p>
          <i>copied icon</i>
        </div>
        </div>

        <div>
          <div>
            <p>Character Length</p>
            <p>10</p>
          </div>
          <div>
            <input type="range" min="4" max="12" />
          </div>
        </div>

        <div>
          <input type="checkbox" name="Uppercase" id="Uppercase" />
          <label htmlFor="Uppercase">Include Uppercase Letters</label>

          <input type="checkbox" name="Lowercase" id="Lowercase" />
          <label htmlFor="Lowercase">Include Lowercase Letters</label>

          <input type="checkbox" name="Numbers" id="Numbers" />
          <label htmlFor="Numbers">Include Numbers Letters</label>

          <input type="checkbox" name="Symbols" id="Symbols" />
          <label htmlFor="Symbols">Include Symbols Letters</label>
        </div>


        	<div>
            <div>
              <p>STRENGTH</p>
              <div>strength meter</div>
            </div>
          </div>

          <div>
            <p>Generate</p><span>arrow</span>
          </div>



        {/* <div className='w-[20rem] bg-gray p-4'>

          <PasswordLength passwordLength={passwordLength} setPasswordLength={setPasswordLength}/>
          
        </div>  */}
      </div>

    </>
  )
}

export default App
