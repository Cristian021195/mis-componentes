import { InteractiveCard, InteractiveCardPro } from "../Components";
import { Section } from "../Components/Layout"

export const CardsPage = () => {
  return (
    <div className="my-5">
        <Section title="Cards" child={
            <Content subtitulo="Cards Dinamicas" parrafo="Contenido asdasdals alksd alskd alskdn">
                <div className="d-flex gap-3">
                <InteractiveCard
                    bgColor="#C8E6C9"
                    width={15}
                    height={20}
                    srcs={[
                        <source media="(min-width:650px)" srcSet="https://cristian021195.github.io/portfolio/img/logos/clogo16.svg"/>,
                        <source media="(min-width:465px)" srcSet="https://cristian021195.github.io/portfolio/img/logos/clogo16.svg"/>
                    ]}
                    content="I reply mails, and messages quickly as possible, but remember I’m from Argentina (GMT-3). So if you not get any response now I’ll reply you next morning for sure."
                    title="Pregunta #4"
                    baseSrc="https://cristian021195.github.io/portfolio/img/logos/clogo16.svg"
                    baseAlt=""
                    baseClass="br-05"
                />
                <InteractiveCardPro
                    bgColor="#C8E6C9"
                    width={15}
                    height={20}
                    srcs={[
                        <source media="(min-width:650px)" srcSet="https://cristian021195.github.io/portfolio/img/logos/clogo16.svg"/>,
                        <source media="(min-width:465px)" srcSet="https://cristian021195.github.io/portfolio/img/logos/clogo16.svg"/>
                    ]}
                    content="I reply mails, and messages quickly as possible, but remember I’m from Argentina (GMT-3). So if you not get any response now I’ll reply you next morning for sure."
                    title="Pregunta #4"
                    baseSrc="https://cristian021195.github.io/portfolio/img/logos/clogo16.svg"
                    baseAlt=""
                    baseClass="br-05"
                ><div><button>Button A</button><button>Button B</button></div></InteractiveCardPro>
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
