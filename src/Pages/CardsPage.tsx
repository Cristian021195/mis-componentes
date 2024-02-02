import { InteractiveCard } from "../Components";
import { Section } from "../Components/Layout"

export const CardsPage = () => {
  return (
    <div className="my-5">
        <Section title="Cards" child={
            <Content subtitulo="Cards Dinamicas" parrafo="Contenido asdasdals alksd alskd alskdn">
                <InteractiveCard
                    srcs={[
                        <source media="(min-width:650px)" srcSet="https://www.w3schools.com/tags/img_pink_flowers.jpg"/>,
                        <source media="(min-width:465px)" srcSet="https://www.w3schools.com/tags/img_white_flower.jpg"/>
                    ]}
                    content="I reply mails, and messages quickly as possible, but remember I’m from Argentina (GMT-3). So if you not get any response now I’ll reply you next morning for sure."
                    title="Pregunta #4"
                    baseSrc="https://www.w3schools.com/tags/img_white_flower.jpg"
                    baseAlt=""
                    baseClass="br-05"
                />
            </Content>
        }/>
    </div>
  )//<img src="https://www.w3schools.com/tags/img_white_flower.jpg" alt="Flowers" style={{width:'auto'}}/>
}

interface IContentProps {
    parrafo?:string,
    subtitulo?:string,
    children?: React.ReactElement
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
