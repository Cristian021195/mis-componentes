interface IProps {
    box?:string,
    srcs: React.ReactElement[],
    title?:string,
    content?:string,
    baseSrc:string,
    baseAlt:string,
    baseClass:string,
    width:number,
    height:number,
    bgColor:string,
}

interface IPropsPro extends IProps {
    children: React.ReactElement
}

export const InteractiveCard = ({box = "interactive-card", srcs, title, content, baseSrc, baseAlt,baseClass, width, height,bgColor}:IProps) => {
  return (
    <div style={{position:'relative', width:width+"rem"}}>
        <div className={box} style={{backgroundColor:bgColor}}>
            <picture>
                {srcs.map((im, imi)=>{
                    return im
                })}
                <img src={baseSrc} alt={baseAlt} className={baseClass} style={{position:'relative', bottom:'-4px', width:width+"rem"}}/>
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
    </div>
  )
}

export const InteractiveCardPro = ({box = "interactive-card", srcs, title, content, baseSrc, baseAlt,baseClass, width, height,bgColor, children}:IPropsPro) => {
    return (
        <div style={{position:'relative', width:width+"rem"}}>
            <div className={box} style={{backgroundColor:bgColor}}>
                <picture>
                    {srcs.map((im, imi)=>{
                        return im
                    })}
                    <img src={baseSrc} alt={baseAlt} className={baseClass} style={{position:'relative', bottom:'-4px', width:width+"rem"}}/>
                </picture>
                <fieldset className="acc hc-w">
                    <legend ><h4>{title}</h4></legend>
                    <div className="acc-body">
                    <div>
                        {children}
                    </div>
                    </div>
                </fieldset>
            </div>
        </div>
    )
  }