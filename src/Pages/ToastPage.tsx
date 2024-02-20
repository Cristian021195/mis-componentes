import { Section } from '../Components/Layout'
import { Fieldset, FieldsetWithChild } from '../Components/UI/Fieldset';
export const ToastPage = () => {
  return (
    <Section title="Toasts" child={<Content></Content>}/>
  )
}
/*
<label htmlFor="file"><b>Downloading progress:</b></label>
            <progress id="file" value="32" max="100"> 32% </progress>
*/

function Content(){
    return (
        <article>
            <p>Los Toast son alertas simples y pequeñas que suelen aparecer en la parte inferior derecha de la pantalla y 
              desaparecen luego de un tiempo o si las cerramos nosotros, pero para hacerlo mas dinamico haremos las cuatro variantes de posicion.
              
            </p>
            <p>Ademas una variante mas que anule el cierre de dicho Toast para que el usuario pueda ver la informacion del error con mas tiempo</p>
            <p>La ultima variante sera la que nos permite posicionar el toast a lo largo de la pantalla en la parte inferior 
              fijandolo para que se puedan ver mensajes de mayor longitud
            </p>
            <FieldsetWithChild title='Simples'>
              <p>Son aquellos que se cierran luego de 3 segundos por defecto, tienen color rojo y letras blancas por defecto y no pueden hacer
                otra cosa mas que cerrarse
              </p>
            </FieldsetWithChild>
            <FieldsetWithChild title='Iteractivos'>
              <p>Similares a los Simples, estos nos permiten fijarlos y cancelar el cierre automatico y tambien nos permite cambiar 
                su posicion por defecto tocando un boton
              </p>
            </FieldsetWithChild>
            <FieldsetWithChild title='Super'>
              <p>Cumple todo lo de los anteriores, pero cuando se fijan, se hacen mas grande, ocupando una parte inferior de 
                la pantalla, haciendo mayor su alto pero no tanto. y nos brinda la opcion de copiar su contenido.
              </p>
            </FieldsetWithChild>
        </article>
    )
}