import { useState } from "react"

interface IProps {
    val?:number,
    color?:string
}

export const ProgressBarSimple = ({val=75,color}:IProps) => {
    const [value, setVal] = useState(val);
    return (
      <label htmlFor="file" style={{position:'relative'}}>
          <b className='l-progress' style={{color}}>{value}%</b>
          <progress id="file" value={value} max="100"></progress>
      </label>
    )
}
