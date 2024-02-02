interface IProps {
    box?:string,
    srcs: React.ReactElement[],
    title?:string,
    content?:string,
    baseSrc:string,
    baseAlt:string,
    baseClass:string,
}

export const InteractiveCard = ({box = "interactive-card", srcs, title, content, baseSrc, baseAlt,baseClass}:IProps) => {
  return (
    <div className={box}>
        <picture>
            {srcs.map((im, imi)=>{
                return im
            })}
            <img src={baseSrc} alt={baseAlt} className={baseClass} style={{position:'relative', bottom:'-4px'}}/>
        </picture>
        <fieldset className="acc hc-w">
            <legend ><h4>{title}</h4></legend>
            <div className="acc-body">
            <div>
                <p>{content}</p>
            </div>
            </div>
        </fieldset>
    </div>
  )
}