import React, { useState } from 'react'
import styles from './pwdgen.module.css'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const Pwdgen = () => {

    const [Value, setValue] = useState("")
    console.log(Value);

    function handleChange(e){
        setValue(e)
    }
    console.log(Value);
  return (
    <div className={styles.genBox}>
      <p className={styles.title}>Password Generator</p>
      <p className={styles.pwdField}></p>
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
          <input id="uppercase" type="checkbox" className={`${styles.checkbox} ${styles.checkbox1}`}/>
          <label for="uppercase" className={`${styles.labelText} ${styles.labelText1}`}>Include Uppercase Letters</label>
        </div>
        <div className={styles.options}>
          <input id="uppercase" type="checkbox" className={`${styles.checkbox} ${styles.checkbox2}`}/>
          <label for="uppercase" className={`${styles.labelText} ${styles.labelText2}`}>Include Lowercase Letters</label>
        </div>
        <div className={styles.options}>
          <input id="uppercase" type="checkbox" className={`${styles.checkbox} ${styles.checkbox3}`}/>
          <label for="uppercase" className={`${styles.labelText} ${styles.labelText3}`}>Include Numbers</label>
        </div>
        <div className={styles.options}>
          <input id="uppercase" type="checkbox" className={`${styles.checkbox} ${styles.checkbox4}`}/>
          <label for="uppercase" className={`${styles.labelText} ${styles.labelText4}`}>Include Symbols</label>
        </div>
        <div className={styles.strength}>
            <p>STRENGTH</p>
            <div className={styles.bars}>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
            </div>
        </div>
        <button className={styles.genBtn}>GENERATE</button>
      </div>
    </div>
  )
}

export default Pwdgen
