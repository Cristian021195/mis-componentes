import { InteractiveCard, InteractiveCardPro } from "../Components";
import { Section } from "../Components/Layout"
import { CircleWithRail, Clock, LeftRigthCircle, OutlinedPulse, SpiningTail } from "../Components/Loaders";

export const LoadersPage = () => {
  return (
    <div className="my-5">
        <Section title="Loaders" child={
            <Content subtitulo="Loaders" parrafo="Contenido asdasdals alksd alskd alskdn">
                <div className="d-flex gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" display="block" preserveAspectRatio="xMidYMid" viewBox="0 0 100 100">
                        <circle xmlns="http://www.w3.org/2000/svg" cx="50" cy="50" r="40" fill="none" stroke="red" strokeDasharray="174.35839227423352 60.119464091411174" strokeWidth="14">
                        <animateTransform attributeName="transform" dur="1s" keyTimes="0;1" repeatCount="indefinite" type="rotate" values="0 50 50;360 50 50"/>
                        </circle>
                    </svg>
                    <svg fill="red" xmlns="http://www.w3.org/2000/svg" width="50" height="50" display="block" preserveAspectRatio="xMidYMid" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="20">
                        <animate attributeType="XML" attributeName="r" from="0" to="40" dur="1s" stroke="red" fill="fill" keySplines="0.1 0.8 0.2 1;0.1 0.8 0.2 1; 0.1 0.8 0.2 1; 0.1 0.8 0.2 1; 0.1 0.8 0.2 1; 0.1 0.8 0.2 1" keyTimes="0;0.22;0.33;0.55;0.66;0.88;1" calcMode="spline" repeatCount="indefinite" />
                        </circle>
                    </svg>
                    <LeftRigthCircle/>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" display="block" preserveAspectRatio="xMidYMid" viewBox="0 0 40 10">
                        <rect fill="black" width="10" height="10" x="0" y="0">
                            <animateTransform attributeName="transform" begin="1s"dur="2s"type="translate"from="0 0"to="0 0"repeatCount="indefinite"fill="freeze"calcMode="spline"keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"values="0;30;0"/>
                        </rect>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" style={{backgroundColor:'red'}} width="50" height="25" display="block" preserveAspectRatio="xMidYMid" viewBox="0 0 100 100"/>
                    <img src={'https://cristian021195.github.io/portfolio/img/logos/clogo3.svg'} alt="alt" className="ipulse" style={{width:'10rem'}}/>
                    <div className="skeleton" style={{width:'10em', height:'5em'}}></div>
                    <div className="oskeleton" style={{width:'10em', height:'5em'}}></div>
                    <div className="circle pulse" style={{backgroundColor:'red', width:'1.2em', height:'1.2em'}}></div>
                    <div style={{backgroundColor:'dodgerblue', width:'3rem'}}><OutlinedPulse/></div>
                    <div style={{backgroundColor:'dodgerblue', width:'3rem'}}><CircleWithRail/></div>
                    <div style={{backgroundColor:'dodgerblue', width:'3rem'}}><SpiningTail/></div>
                    <div style={{backgroundColor:'dodgerblue', width:'3rem'}}><Clock/></div>
                </div>

            </Content>
        }/>
    </div>
  )//<img src="https://www.w3schools.com/tags/img_white_flower.jpg" alt="Flowers" style={{width:'auto'}}/>
}

interface IContentProps {
    parrafo?:string,
    subtitulo?:string,
    children?: JSX.Element|JSX.Element[];
}
function Content({parrafo="Contenido en construcción", subtitulo="Subtitulo", children}:IContentProps){
    return (
        <article>
            <h2>{subtitulo}</h2>
            <p>{parrafo}</p>
            {children}
        </article>
    );
}
