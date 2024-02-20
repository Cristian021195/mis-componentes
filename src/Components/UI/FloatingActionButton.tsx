interface IProps {
    bgColor?:string,
    items?: JSX.Element[],//svg
    children?: React.ReactElement,//svg
    width:number,
    horizontal?: "left" | "right"
}

export const FloatingActionButton = ({bgColor="dodgerblue", items, children, width, horizontal="right"}:IProps) => {
  return (
    <div className={"fabtn "+horizontal}>
        {   <div id="ufabc">
            {
                items?.map(it=>{
                    return (
                        <button className="btnl d-flex circle mb-2 d-flex justify-content-center align-items-center" style={{backgroundColor:'black',width:width-0.5+"rem", height:width-0.5+"rem", margin:'0 auto'}}>
                            {it}
                        </button>
                    )
                })
            }
            </div>
        }
        <input type="checkbox" name="ufab" id="ufab" />
        <label htmlFor="ufab" className="r-btn btnl d-flex circle d-flex justify-content-center align-items-center" style={{backgroundColor:bgColor, width:width+"rem", height:width+"rem"}}>{children}</label>
    </div>
  )
}//<button className="r-btn btnl d-flex circle d-flex justify-content-center align-items-center" style={{backgroundColor:bgColor, width:width+"rem", height:width+"rem"}}>{children}</button>
/*
<div class="wrap-collabsible">
            <input id="collapsible" class="toggle" type="checkbox">
            <label for="collapsible" class="lbl-toggle">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707m4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707"/>
              </svg>
            </label>
            <div class="collapsible-content">
              <div class="content-inner">
                  <button>1</button>
                  <button>2</button>
                  <button>3</button>
                  <button>4</button>
                  <button>5</button>
              </div>
            </div>
        </div>
*/

interface IPropsCss {
    bgColor?:string,
    items?: JSX.Element[],//svg
    children?: React.ReactElement,//svg
    width:number,
    horizontal?: "left" | "right" | "",
    variant?: 1 | 2 | 3 | 4
}

export const FloatingActionButtonCSS = ({bgColor="dodgerblue", items, children, width, horizontal="", variant=1}:IPropsCss) => {
    const clss = "wrap-collabsible "+horizontal;
    
    return (
        <div className={variant === 1 ? clss+" t-r-180" : clss+""} style={{width:width+"rem"}}>
            <input id="collapsible" className="toggle" type="checkbox"/>
            <label htmlFor="collapsible" className="btn lbl-toggle" style={{width:width+"rem", height:width+"rem"}}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707m4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707"/>
              </svg>
            </label>
            <div className="collapsible-content">
              <div className="content-inner">
                  <button className={variant === 1 ? "btnfab r-btn circle btnl t-r-180" : "btnfab r-btn circle btnl"} 
                    style={{backgroundColor:'purple', width:width-1+"rem", height:width-1+"rem"}}
                  >1
                  </button>
                  <button className={variant === 1 ? "btnfab r-btn circle btnl t-r-180" : "btnfab r-btn circle btnl"} 
                    style={{backgroundColor:'purple', width:width-1+"rem", height:width-1+"rem"}}
                  >2
                  </button>
                  <button className={variant === 1 ? "btnfab r-btn circle btnl t-r-180" : "btnfab r-btn circle btnl"} 
                    style={{backgroundColor:'purple', width:width-1+"rem", height:width-1+"rem"}}
                  >3
                  </button>
                  <button className={variant === 1 ? "btnfab r-btn circle btnl t-r-180" : "btnfab r-btn circle btnl"} 
                    style={{backgroundColor:'purple', width:width-1+"rem", height:width-1+"rem"}}
                  >4
                  </button>
                  <button className={variant === 1 ? "btnfab r-btn circle btnl t-r-180" : "btnfab r-btn circle btnl"} 
                    style={{backgroundColor:'purple', width:width-1+"rem", height:width-1+"rem"}}
                  >5
                  </button>
              </div>
            </div>
        </div>
    );
}