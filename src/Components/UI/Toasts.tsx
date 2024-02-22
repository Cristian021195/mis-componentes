import { useEffect, useRef, useState } from "react"

interface IToast{
    title:string
    color?:string,
    bgColor?:string,
    initPos?:number
    close?:()=>void
}

interface IToastInteractive extends IToast{
    extra?:boolean,
    desc?:string
}

export const Toast = ({color="whitesmoke",bgColor, title="La accion se ejecutó con exito", initPos=1}:IToast) => {
    const [pos, setPos] = useState<number>(initPos ? initPos : 1 );
    const [cssCls, setCssCls] = useState("toast p-2 br-05 d-flex justify-content-between gap-1");
    const curr = useRef<HTMLDivElement>(null);
    useEffect(()=>{
        if(pos == 1){
            setCssCls("toast p-2 br-05 d-flex justify-content-between gap-1");
        }else if(pos == 2){
            setCssCls("toast-2 p-2 br-05 d-flex justify-content-between gap-1");
        }else if(pos == 3){
            setCssCls("toast-3 p-2 br-05 d-flex justify-content-between gap-1");
        }else{
            setCssCls("toast-4 p-2 br-05 d-flex justify-content-between gap-1");    
        }        
    },[pos]);
    return (
        <div ref={curr} className={cssCls} style={{backgroundColor:bgColor, color}}>
        <div>
            <b>{title}</b>
        </div>
        <div>
            <button className='btn p-1' style={{backgroundColor:bgColor, color}} onClick={()=>{
                pos == 1 ? setPos(2) : pos == 2 ? setPos(3) : pos == 3 ? setPos(4) : pos == 4 && setPos(1);
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" className={ pos == 1 ? "rtat-180" : pos == 2 ? "rtat-270" : pos == 3 ? "" : pos == 4 ? "rtat-90" : ""}
                width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1z"/>
                    <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                </svg>
            </button>
            <button className='btn p-1' style={{backgroundColor:bgColor, color}} onClick={()=>{curr.current?.remove()}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                </svg>
            </button>
        </div>
        </div>
    )
    }

export const ToastInteractive = ({color="whitesmoke",bgColor,title="La accion se ejecutó con exito", desc="descripcion larga",close}:IToastInteractive) => {
    const [expanded, setExpanded] = useState(false);
    const [yPos, setYPos] = useState(false);
    const [cssCls, setCssCls] = useState("toast d-flex br-05 pop-up");
    const curr = useRef<HTMLDivElement>(null);
    useEffect(()=>{
        if(expanded && yPos){
            setCssCls("xp-toast d-flex justify-content-between pop-up fx-top br-05-b");
        }else if(expanded && !yPos){
            setCssCls("xp-toast d-flex justify-content-between pop-up fx-btm br-05-t");   
        }else{
            setCssCls("toast d-flex br-05 pop-up");
        }
    },[expanded,yPos]);
    return (
        <div ref={curr} className={cssCls} style={{backgroundColor:bgColor, color}}>
            <div className='p-2 d-flex justify-content-between gap-1' >
                <div className="">
                    <div><b>La accion se ejecutó con exito</b></div>
                    <div><small>{desc}</small></div>
                    {
                        expanded && <div className="d-flex gap-1 my-2">
                            <button className="cls" onClick={()=>{setYPos(!yPos)}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5m-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5"/>
                                </svg>
                            </button>
                            <button className="cls"><small>Esperar</small></button>
                            <button className="cls"><small>Cancelar</small></button>
                            <button className="cls"><small>Copiar</small></button>
                        </div>
                    }
                </div>
            </div>
            <div className="mr-4" style={{backgroundColor:bgColor}}>
                <div className="toast-menu">
                    <button className='btn' style={{backgroundColor:bgColor, color}} onClick={()=>{curr.current?.remove()}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                        </svg>
                    </button>
                    <button className='btn' style={{backgroundColor:bgColor, color}} onClick={()=>{setExpanded(!expanded)}}>
                        { expanded ?
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M.172 15.828a.5.5 0 0 0 .707 0l4.096-4.096V14.5a.5.5 0 1 0 1 0v-3.975a.5.5 0 0 0-.5-.5H1.5a.5.5 0 0 0 0 1h2.768L.172 15.121a.5.5 0 0 0 0 .707M15.828.172a.5.5 0 0 0-.707 0l-4.096 4.096V1.5a.5.5 0 1 0-1 0v3.975a.5.5 0 0 0 .5.5H14.5a.5.5 0 0 0 0-1h-2.768L15.828.879a.5.5 0 0 0 0-.707"/>
                            </svg>
                         : 
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707m4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707"/>
                            </svg>
                         }
                    </button>
                </div>
            </div>
        </div>
    )
  }
