type scaleOpt = 'scale-xy-1' | 'scale-x-1' | 'scale-y-1';
interface IProps {
  animation?: 'fset-anm' | 'fset-anm-1',
  direction?: scaleOpt,
  box?: string,
  content?: string,
  contentLgd?: scaleOpt
  children?: React.ReactElement
}

export const Fieldset = ({animation, direction, box, content, contentLgd}:IProps) => {
  return (
    <fieldset className={`${box} ${direction}`}>
        <legend className={` ${contentLgd} ${animation}`}>Legend: (-1,-1)</legend>
        <div className={`${content} ${direction}`}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, iure.</p>
        </div>
    </fieldset>
  )
}

export const FieldsetWithChild = ({animation, direction, box, content, contentLgd, children}:IProps) => {
  return (
    <fieldset className={`${box} ${direction}`}>
        <legend className={` ${contentLgd} ${animation}`}>Legend: (-1,-1)</legend>
        <div className={`${content} ${direction}`}>
          {children}
        </div>
    </fieldset>
  )
}
