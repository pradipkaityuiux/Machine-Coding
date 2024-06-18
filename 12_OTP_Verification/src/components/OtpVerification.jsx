import React, { useEffect, useRef, useState } from 'react'
import "./otp.css"

const OtpVerification = () => {
    const [otp, setOtp] = useState(["", "", "", ""]);
    const inputRef = [useRef(), useRef(), useRef(), useRef()];

    function handleInput(i, e) {
        if (e <= "9" && e >= "0") {
          setOtp((otp) => {
            let temp = [...otp];
            temp[i] = e;
            return temp;
          });
          if (i < otp.length - 1) {
            inputRef[i + 1].current.focus();
          }
        } else {
          if (e == "Backspace") {
            if (otp[i] == "") {
              if (i > 0) {
                inputRef[i - 1].current.focus();
              }
            } else {
              setOtp((otp) => {
                let temp = [...otp];
                temp[i] = "";
                return temp;
              });
            }
          }
        }
    }
    
  return (
    <div className='otp_parent'>
        <h1>OTP Verification</h1>
        <div className="otpContainer">
          {otp.map((value, index) => (
            <input
              key={index}
              type={"number"}
              name={index}
              ref={inputRef[index]}
              value={value}
              onKeyDown={(e) => handleInput(index, e.key)}
            />
          ))}
      </div>
    </div>
  )
}

export default OtpVerification