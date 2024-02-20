import { ProgressBar, ProgressBarSimple } from '../Components'
import { Section } from '../Components/Layout'
export const ProgressPage = () => {
  return (
    <Section title="Progress" child={<Content></Content>}/>
  )
}
/*
<label htmlFor="file"><b>Downloading progress:</b></label>
            <progress id="file" value="32" max="100"> 32% </progress>
*/

function Content(){
    return (
        <article>
            <p>Pueden alguna de estas barras de progreso ser usadas como loaders. Aunque no es lo ideal ya que no es el proposito. De todas formas
              quedan listadas en esta seccion.
            </p>
            <ProgressBar/>
            <ProgressBarSimple val={50} color='black'/>
        </article>
    )
}