import { Accordion, BAccordion } from "./Components"

function App() {
  /*Siguientes componentes - forms, inputs, selects, dropdowns, navbar, transate divs up-down-left-right*/
  return (
    <main className="container">
      <h1 className="mb-4">Mis Componentes</h1>
      <section className="p-2">
        <h2>Botones</h2>
        <fieldset>
          <legend className="m-2">Principales</legend>
          <button className="btn p-2" style={{backgroundColor:'dodgerblue'}}>Azul</button>
        </fieldset>
        <fieldset>
          <legend className="m-2">Outlined</legend>
          <button className="o-btn p-2" style={{border:'2px solid dodgerblue'}}>Azul</button>
        </fieldset>
      </section>
      <hr />
      <section className="p-2">
        <h2>Acordeon</h2>
        <fieldset>
          <legend className="m-2">Hover Only</legend>
          <div className="mb-2">
            <p>(no Javascript neccesary, nice to small devices)</p>
          </div>

          <article className="p-3 b-shadow mb-4 w-100">
            <div className="acc">
              <h4>I can get in touch with you any time?</h4>
              <span className="">▼</span>
              <div className="acc-body">
                <div>
                  <p>I reply mails, and messages quickly as possible, but remember I’m from Argentina (GMT-3). So if you not get any response now I’ll reply you next morning for sure.</p>
                </div>
              </div>
            </div>
          </article>

          <article className="p-3 b-shadow mb-4 w-100">
            <div className="acc">
              <div className="acc-body">
                <div>
                  <p>I reply mails, and messages quickly as possible, but remember I’m from Argentina (GMT-3). So if you not get any response now I’ll reply you next morning for sure.</p>
                </div>
              </div>
              <h4>I can get in touch with you any time?</h4>
            </div>
          </article>

        </fieldset>

        <fieldset>
          <legend className="m-2">Click Only</legend>
          <div className="mb-2">
            <p>(Single state preserves)</p>
          </div>
          <Accordion/>
          <BAccordion/>
        </fieldset>
      </section>
    </main>
  )
}

export default App
