import { Fieldset } from "../Components";
import { Section } from "../Components/Layout"

export const FieldsetsPage = () => {
  return (
    <Section title="Fieldsets" child={<Content></Content>}/>
  )
}

function Content(){
    return (
        <article>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem facere recusandae impedit, aliquam, veritatis error repudiandae aperiam totam dolores unde, sunt non similique quasi tenetur consequuntur enim quis esse facilis.</p>
            <Fieldset box="my-4" content="p-2" animation="fset-anm"/>
            <Fieldset animation="fset-anm-1" content="p-2" direction="scale-x-1" contentLgd="scale-x-1" box="my-4"/>
            <Fieldset animation="fset-anm-1" content="p-2" direction="scale-y-1" contentLgd="scale-y-1" box="my-4"/>
            <Fieldset animation="fset-anm-1" content="p-2" box="my-4" direction="scale-xy-1" contentLgd="scale-xy-1"/>
        </article>
    );
}
