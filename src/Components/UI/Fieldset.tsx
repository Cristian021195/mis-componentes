type scaleOpt = 'scale-xy-1' | 'scale-x-1' | 'scale-y-1';
interface IProps {
  animation?: 'fset-anm' | 'fset-anm-1',
  direction?: scaleOpt,
  box?: string,
  title?: string,
  description?:string,
  content?: string,
  contentLgd?: scaleOpt
  children?: React.ReactElement
}

export const Fieldset = ({animation, direction, box, content, contentLgd, title="Legend: (-1,-1)", description="description..."}:IProps) => {
  return (
    <fieldset className={`${box} ${direction} my-4`}>
        <legend className={` ${contentLgd} ${animation}`}>{title}</legend>
        <div className={`${content} ${direction}`}>
          <p>{description}</p>
        </div>
    </fieldset>
  )
}

export const FieldsetWithChild = ({animation, direction, box, content, contentLgd, children, title="Legend: (-1,-1)"}:IProps) => {
  return (
    <fieldset className={`${box} ${direction} my-4`}>
        <legend className={` ${contentLgd} ${animation}`}>{title}</legend>
        <div className={`${content} ${direction}`}>
          {children}
        </div>
    </fieldset>
  )
}
