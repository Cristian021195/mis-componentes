import { Accordion, BAccordion } from "./Components"
import reactlogo from "./assets/react.svg"

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
      <hr />
      <section className="p-2">
        <h2>Loaders</h2>
        <fieldset>
          <legend className="m-2">Window</legend>
          <svg xmlns="http://www.w3.org/2000/svg" style={{ margin: "auto" }} width="50" height="50" display="block" preserveAspectRatio="xMidYMid" viewBox="0 0 100 100">
            <circle xmlns="http://www.w3.org/2000/svg" cx="50" cy="50" r="40" fill="none" stroke="#000" strokeDasharray="174.35839227423352 60.119464091411174" strokeWidth="14">
              <animateTransform attributeName="transform" dur="1s" keyTimes="0;1" repeatCount="indefinite" type="rotate" values="0 50 50;360 50 50"/>
            </circle>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" style={{ margin: "auto" }} width="50" height="50" display="block" preserveAspectRatio="xMidYMid" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="20">
              <animate
                attributeType="XML"
                attributeName="r"
                from="0"
                to="40"
                dur="1s"
                fill="fill"
                keySplines="0.1 0.8 0.2 1;0.1 0.8 0.2 1; 0.1 0.8 0.2 1; 0.1 0.8 0.2 1; 0.1 0.8 0.2 1; 0.1 0.8 0.2 1"
		            keyTimes="0;0.22;0.33;0.55;0.66;0.88;1"
		            calcMode="spline"
                repeatCount="indefinite" />
            </circle>
          </svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="50" display="block" preserveAspectRatio="xMidYMid" viewBox="0 0 40 10" style={{margin:'auto'}}>
            <rect fill="black" width="10" height="10" x="0" y="0">
                <animateTransform attributeName="transform" 
                                  begin="1s"
                                  dur="2s"
                                  type="translate"
                                  from="0 0"
                                  to="0 0"
                                  repeatCount="indefinite"
                                  fill="freeze"
                                  calcMode="spline"
                                  keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
                                  values="0;30;0"/>
            </rect>
          </svg>

          <svg xmlns="http://www.w3.org/2000/svg" style={{ margin: "auto", backgroundColor:'red' }} width="50" height="25" display="block" preserveAspectRatio="xMidYMid" viewBox="0 0 100 100">
            <circle cx="0" cy="50" r="40" fill="black" x="0" y="0">
                <animateTransform attributeName="transform" 
                                  begin="1s"
                                  dur="2s"
                                  type="translate"
                                  from="0 0"
                                  to="0 0"
                                  repeatCount="indefinite"
                                  fill="freeze"
                                  calcMode="spline"
                                  keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
                                  values="0;100;0"/>
            </circle>
          </svg>
          <div>
            <img src={reactlogo} alt="alt" className="ipulse" style={{display:'block', margin: "auto"}}/>
          </div>

          <div>
            <div className="skeleton" style={{width:'10em', height:'5em', display:'block', margin:'auto'}}></div>
          </div>
          <div>
            <div className="oskeleton" style={{width:'10em', height:'5em', display:'block', margin:'auto'}}></div>
          </div>

          <div>
              <div className="circle pulse" style={{backgroundColor:'red', width:'1.2em', height:'1.2em', display:'block'}}></div>
          </div>

        </fieldset>
        <fieldset>
          <legend className="m-2">Contained</legend>
        </fieldset>
      </section>
      <hr />
      <section className="p-2">
        <h2>Offcanvas & Translate elements</h2>
        <fieldset className="d-flex" style={{gap:'1rem'}}>
          <legend className="m-2">Basic Card</legend>
          <article className="card">
            <div className="card-h d-flex">
              <img src="https://fastly.picsum.photos/id/220/300/200.jpg?hmac=hSpCnndQS-mcDCoNofXR1qu9UvK-W1OnP6212H6w8Ds" alt="alt"/>
            </div>
            <div className="card-b p-3 d-flex">
              <small>TRAVEL</small>
              <b>Trip planing for total begginers</b>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, iure.</p>
            </div>
          </article>
          <article className="vcard pt-3">
            <div className="card-h d-flex">
              <img src="https://fastly.picsum.photos/id/111/200/300.jpg?hmac=bXXQTtXTex0m2Ogp23o7VFcNHAllTfE-8eSPYK2GeGM" alt="alt"/>
            </div>
            <div className="card-b p-3 d-flex">
              <small>TRAVEL</small>
              <b>Trip planing for total begginers</b>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, iure.</p>
            </div>
          </article>
        </fieldset>
        <fieldset className="d-flex" style={{gap:'1rem'}}>
          <legend className="m-2">Hovered / Active Cards</legend>
        </fieldset>
        <fieldset className="d-flex" style={{gap:'1rem'}}>
          <legend className="m-2">Directional Offcanvas</legend>
          <article className="mb-4" style={{borderRadius:'0.5rem', width:'15rem', height:'15rem', position:'relative', backgroundImage:'url(https://picsum.photos/200)',
          backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
            <fieldset className="acc" style={{borderRadius:'0.5rem', position:'absolute', bottom: '0px',border:'none',backgroundColor:'rgba(255, 255, 255, 0.5)'}}>
              <legend style={{backgroundColor:'white',border:'none'}}><h4>Product #1</h4></legend>
              <div className="acc-body">
                <div>
                  <p>I reply mails, and messages quickly as possible, but remember I’m from Argentina (GMT-3). So if you not get any response now I’ll reply you next morning for sure.</p>
                </div>
              </div>
            </fieldset>
          </article>
        </fieldset>
        <fieldset className="d-flex" style={{gap:'1rem'}}>
          <legend className="m-2">Title Card</legend>
          <div className="crd card--examples card--examples--3" style={{borderTop:'4px solid blue', display:'flex',flexDirection:'column', justifyContent:'space-between'}}>
            <div className="p-1">
              <p className="card__title">C Library Function</p>
              <p className="card__description">C isxdigit()</p>
            </div>
            <div style={{position:'relative'}}>
              <img src="https://www.programiz.com/sites/all/themes/programiz/dist/images/7711e5083bb90c72322258533cdd8881.svg" alt="corner" style={{position:'absolute', right:0, bottom:'0', borderBottomRightRadius:'0.5rem'}}/>
            </div>
          </div>
        </fieldset>
      </section>
      <hr />
      <section className="p-2">
        <h2>Fieldets</h2>
        <fieldset>
          <legend className="m-2 fset-anm">Legend: (0,0)</legend>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, iure.</p>
        </fieldset>
        <fieldset className="scale-x-1">
          <legend className="m-2 scale-x-1 fset-anm-1">Legend: (-1,0)</legend>
          <div className="scale-x-1">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, iure.</p>
          </div>
        </fieldset>
        <fieldset className="scale-y-1">
          <legend className="m-2 scale-y-1 fset-anm-1">Legend: (0,-1)</legend>
          <div className="scale-y-1">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, iure.</p>
          </div>
        </fieldset>
        <fieldset className="scale-xy-1">
          <legend className="m-2 scale-xy-1 fset-anm">Legend: (-1,-1)</legend>
          <div className="scale-xy-1">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, iure.</p>
          </div>
        </fieldset>
      </section>
    </main>
  )
}

export default App
