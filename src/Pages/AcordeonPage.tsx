import { Accordion, AccordionSimple, AccordionSimpleB, BAccordion } from '../Components'
import { Section } from '../Components/Layout'
export const AcordeonPage = () => {
  return (
    <Section title="Acordeon" child={<Content></Content>}/>
  )
}

function Content(){
    return (
        <article>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem facere recusandae impedit, aliquam, veritatis error repudiandae aperiam totam dolores unde, sunt non similique quasi tenetur consequuntur enim quis esse facilis.</p>
            <Accordion/>
            <BAccordion/>
            <AccordionSimple/>
            <AccordionSimpleB/>
        </article>
    )
}