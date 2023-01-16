import React, { useState } from 'react'
import styles from './pwdgen.module.css'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Pwdgen = () => {

    const [count, setcount] = useState(0)
    const [Value, setValue] = useState(0)
    const [encPwd, setencPwd] = useState("P4$sW0rD")
    const [rcntpwd, setrcntpwd] = useState(["Empty", "Empty", "Empty"])
    const [err, seterr] = useState(false)

    const [upper, setupper] = useState(false)
    const [lower, setlower] = useState(false)
    const [num, setnum] = useState(false)
    const [symbol, setsymbol] = useState(false)

    function submitHandler(){
      if(Value<5){
        seterr(true)
      }
      else{
        seterr(false)
        var characters = ""
        var result = '';
        var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        var lowerChar = "abcdefghijklmnopqrstuvwxyz"
        var numChar = "1234567890"
        var symbolChar = "!@#$%^&*"

        if(upper){
          characters = upperChar
        }
        if(lower){
          characters = lowerChar
        }
        if(num){
          characters = numChar
        }
        if(symbol){
          characters = symbolChar
        }
        if(upper && lower){
          characters = upperChar + lowerChar
        }
        if(upper && num){
          characters = upperChar + numChar
        }
        if(upper && symbol){
          characters = upperChar + symbolChar
        }
        if(lower && num){
          characters = lowerChar + numChar
        }
        if(lower && symbol){
          characters = lowerChar + symbolChar
        }
        if(num && symbol){
          characters = numChar + symbolChar
        }
        if(upper && lower && num){
          characters = upperChar + lowerChar + numChar
        }
        if(lower && num && symbol){
          characters = lowerChar + numChar + symbolChar
        }
        if(num && symbol && upper){
          characters = numChar + symbolChar + upperChar
        }
        if(symbol && upper && lower){
          characters = symbolChar + upperChar + lowerChar
        }
        if(upper && lower && num && symbol){
          characters = upperChar + lowerChar + numChar + symbolChar
        }

        var charactersLength = characters.length;
        for ( var i = 0; i < Value; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        setencPwd(result)
  
        setrcntpwd((prev)=>{
          return [...prev, result]
        })
        console.log(rcntpwd);
  
        if(rcntpwd.length>=4){
          rcntpwd.shift(1)
        }
      }
    }


    function handleChange(e){
        setValue(e)
    }

    function copytoclip(){
      navigator.clipboard.writeText(`${encPwd}`)
      toast.success('Copied to Clipboard', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }


    function copytocliprcnt1(e){
      navigator.clipboard.writeText(`${rcntpwd[2]}`)
      toast.success('Copied to Clipboard', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }
    function copytocliprcnt2(e){
      navigator.clipboard.writeText(`${rcntpwd[1]}`)
      toast.success('Copied to Clipboard', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }
    function copytocliprcnt3(e){
      navigator.clipboard.writeText(`${rcntpwd[0]}`)
      toast.success('Copied to Clipboard', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }


    function checked(e){
      if(e.target.id === "uppercase"){
        setupper(!upper)
      }
      if(e.target.id === "lowercase"){
        setlower(!lower)
      }
      if(e.target.id === "number"){
        setnum(!num)
      }
      if(e.target.id === "symbol"){
        setsymbol(!symbol)
      }

      if(e.target.checked){
        setcount(count+1)
      }
      else{
        setcount(count-1)
      }
      
    }

  return (
    <div className={styles.main}>
      <div className={styles.genBox}>
        <p className={styles.title}>Password Generator</p>
        <p className={styles.pwdField}>{encPwd} <ContentCopyIcon onClick={copytoclip} className={styles.copyBtn} /> </p>
        <div className={styles.adjustment}>
          <div className={styles.lengthVal}>
            <p className={styles.text}>Character Length</p>
            <p className={styles.slidevalue}>{`${Value}`}</p>
          </div>
          <Slider className={styles.slider}
              min={0}
              max={15}
              step={1}
              handleStyle={{
                  borderColor: 'blue',
                  height: 28,
                  width: 28,
                  marginLeft: -14,
                  marginTop: -9,
                  backgroundColor: 'white',
              }}
              railStyle={{ backgroundColor: '#19171F', height: 10}}
              trackStyle={{ backgroundColor: '#A4FFAF', height: 10}}
              ariaValueTextFormatterForHandle={handleChange}
          />
          <div className={styles.options}>
            <input onChange={checked} id="uppercase" type="checkbox" className={`${styles.checkbox} ${styles.checkbox1}`}/>
            <label for="uppercase" className={`${styles.labelText} ${styles.labelText1}`}>Include Uppercase Letters</label>
          </div>
          <div className={styles.options}>
            <input onChange={checked} id="lowercase" type="checkbox" className={`${styles.checkbox} ${styles.checkbox2}`}/>
            <label for="lowercase" className={`${styles.labelText} ${styles.labelText2}`}>Include Lowercase Letters</label>
          </div>
          <div className={styles.options}>
            <input onChange={checked} id="number" type="checkbox" className={`${styles.checkbox} ${styles.checkbox3}`}/>
            <label for="number" className={`${styles.labelText} ${styles.labelText3}`}>Include Numbers</label>
          </div>
          <div className={styles.options}>
            <input onChange={checked} id="symbol" type="checkbox" className={`${styles.checkbox} ${styles.checkbox4}`}/>
            <label for="symbol" className={`${styles.labelText} ${styles.labelText4}`}>Include Symbols</label>
          </div>
          <div className={styles.strength}>
              <p>STRENGTH</p>
              <div className={styles.bars}>
                {count>0?<p className={styles.positive}></p>:<p className={styles.negative}></p>}
                {count>1?<p className={styles.positive}></p>:<p className={styles.negative}></p>}
                {count>2?<p className={styles.positive}></p>:<p className={styles.negative}></p>}
                {count>3?<p className={styles.positive}></p>:<p className={styles.negative}></p>}
              </div>
          </div>
          <div>
            <button onClick={submitHandler} className={styles.button}><span>GENERATE</span></button><br/>
            {err?<label className={styles.error}>Enter Character length greater than 5</label>:""}
          </div>
          
        </div>
        <ToastContainer />
      </div>

      <div className={styles.recentpwd}>
      <p className={styles.title}>Recent Passwords</p>
        <p className={styles.recentpwdField}>{rcntpwd[2]} <ContentCopyIcon onClick={copytocliprcnt1} className={styles.copyBtn} /> </p>
        <p className={styles.recentpwdField}>{rcntpwd[1]} <ContentCopyIcon onClick={copytocliprcnt2} className={styles.copyBtn} /> </p>
        <p className={styles.recentpwdField}>{rcntpwd[0]} <ContentCopyIcon onClick={copytocliprcnt3} className={styles.copyBtn} /> </p>
      </div>
    </div>
  )
}

export default Pwdgen
