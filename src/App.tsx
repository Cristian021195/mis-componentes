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
      <hr />
      <section className="p-2">
        <h2>Forms and Input fields</h2>
        <fieldset>
          <legend className="m-2">Input text</legend>
          <label htmlFor="text-field">Text Field: </label>
          <input type="text" name="text-field" id="text-field" className="p-2"/>
          <label htmlFor="text-area">Text Area: </label>
          <textarea name="text-area" id="text-area" cols={30} rows={10}></textarea>
          <label htmlFor="numbers">Numbers: </label>
          <input type="number" name="numbers" id="numbers" className="p-2"/>

        </fieldset>
        <fieldset>
          <legend className="m-2">Input radio</legend>
          <div style={{border:'1px solid #000'}} className="p-2">
            <label className="m-2 custom-radio-btn">
              <span className="label">Opcion A</span>
              <input type="radio" name="two-ways" value={1}/>
              <span className="checkmark"></span>
            </label>
            <label className="m-2 custom-radio-btn left">
              <span className="label">Opcion B</span>
              <input type="radio" name="two-ways" value={2}/>
              <span className="checkmark"></span>
            </label>
          </div>
        </fieldset>
        <fieldset>
          <legend className="m-2">Input range</legend>
          <div style={{border:'1px solid #000'}} className="p-2">
            <label htmlFor="range-value" className="m-2">Horizontal
              <input type="range" id="range-value" name="range-value" min={0} max={10} step={0.5}/>
            </label>
          </div>
          <div style={{border:'1px solid #000', height:'10em', display:'flex', alignItems:'center'}} className="p-2">
            <label htmlFor="range-value-v" className="m-2">Vertical
              <input type="range" id="range-value-v" name="range-value-v" min={0} max={10} step={0.5} style={{transform:'rotate(270deg)'}}/>
            </label>
          </div>
        </fieldset>
        <fieldset>
          <legend className="m-2">Select</legend>
          <div style={{border:'1px solid #000'}} className="p-2">
            <label htmlFor="selects" className="m-2">Select values: 
              <select name="select-values" id="select-values" className="p-1">
                <optgroup label="123" style={{outline:'solid #000'}}>
                  <option value="1">1</option>
                  <option value="1">2</option>
                  <option value="1">3</option>
                </optgroup>
                <optgroup label="45">
                  <option value="4">4</option>
                  <option value="5">5</option>
                </optgroup>
                <option value="6">6</option>
                <optgroup label="123" style={{backgroundColor:'red'}}>final</optgroup>
              </select>
            </label>
          </div>
        </fieldset>
      </section>
    </main>
  )
}

export default App
