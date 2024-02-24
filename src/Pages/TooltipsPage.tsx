import { Section } from "../Components/Layout"

export const TooltipsPage = () => {
  return (
    <Section title="Tooltips" child={<Content></Content>}/>
  )
}

function Content(){
    return (
        <article>
            <p>Los tooltips son pequeños elementos visuales que ayudan a describir un elemento, tal como lo hace el atributo title de HTML pero con mas estilo.</p>
            <br />
            <p>En este caso en particular estos tooltips no se acomodan automaticamente al viewport vigente, por ello estan las 4 versiones disponibles, .t-btm, 
              .t-top, .t-left, t-right
            </p>
            <br />
            <div className="row">
              <div className="col-12 col-md-3 my-4">
                <div className="ttip">Rigth Tooltip
                  <span className="ttiptext ttip-rgt ttip-al">Tooltip text</span>
                </div>
              </div>

              <div className="col-12 col-md-3 my-4">
                <div className="ttip">Top Tooltip
                  <span className="ttiptext ttip-top ttip-ab">Tooltip text</span>
                </div>
              </div>

              <div className="col-12 col-md-3 my-4">
                <div className="ttip">Bottom Tooltip
                  <span className="ttiptext ttip-btm ttip-at">Tooltip text</span>
                </div>
              </div>

              <div className="col-12 col-md-3 my-4">
                <div className="ttip">Left Tooltip
                  <span className="ttiptext ttip-lft ttip-ar">Tooltip text</span>
                </div>
              </div>              
            </div>
        </article>
    );
}
