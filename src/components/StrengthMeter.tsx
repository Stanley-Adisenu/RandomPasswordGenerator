type StrengthMeterProps = {
    strength: string | null
}

export default function StrengthMeter({strength}:StrengthMeterProps) {
    switch (strength) {
        case '':
            return (
                <div id='strengthMeter'>
                    <h6 id='safety'>{strength}</h6>
                    <div id='indicator'>
                    <div className="box" ></div>
                    <div className="box" ></div>
                    <div className="box" ></div>
                    <div className="box" ></div>
                    </div>  
                  </div>
              );
        case 'TOO WEAK!':
          return (
            <div id='strengthMeter'>
            <h6 id='safety'>{strength}</h6>
            <div id='indicator'>
            <div className="box" style={{backgroundColor:'#F64A4A'}}></div>
            <div className="box" ></div>
            <div className="box" ></div>
            <div className="box "></div>
            </div>  
          </div>
          );
        case 'WEAK':
          return (
            <div id='strengthMeter'>
            <h6 id='safety'>{strength}</h6>
            <div id='indicator'>
            <div className="box" style={{backgroundColor:'#FB7C58'}}></div>
            <div className="box" style={{backgroundColor:'#FB7C58'}}></div>
            <div className="box" ></div>
            <div className="box"></div>
            </div>  
          </div>
          );
        case 'MEDIUM':
          return (
            <div id='strengthMeter'>
                <h6 id='safety'>{strength}</h6>
                <div id='indicator'>
                <div className="box" style={{backgroundColor:'#F8CD65'}}></div>
                <div className="box" style={{backgroundColor:'#F8CD65'}}></div>
                <div className="box" style={{backgroundColor:'#F8CD65'}}></div>
                <div className="box"></div>
                </div>  
              </div>
          );
        case 'STRONG':
          return (
            <div id='strengthMeter'>
                <h6 id='safety'>{strength}</h6>
                <div id='indicator'>
                <div className="box" style={{backgroundColor:'#A4FFAF'}}></div>
                <div className="box" style={{backgroundColor:'#A4FFAF'}}></div>
                <div className="box" style={{backgroundColor:'#A4FFAF'}}></div>
                <div className="box" style={{backgroundColor:'#A4FFAF'}}></div>
                </div>  
              </div>
          );
       
        default:
            return (
                <div id='strengthMeter'>
                    <h6 id='safety'>{strength}</h6>
                    <div id='indicator'>
                    <div className="box" ></div>
                    <div className="box" ></div>
                    <div className="box" ></div>
                    <div className="box" ></div>
                    </div>  
                  </div>
              );
      }
  
}
