import {useState} from 'react'


export const Accordion = () => {
    const [state,setState] = useState<boolean>(false);
  return (
    <article className="p-3 b-shadow mb-4 w-100">
        <div className="cacc" onClick={()=>setState(!state)}>
          <h4>I can get in touch with you any time?</h4>
          <span style={{transform: state ? 'rotate(180deg)' : ''}}>▼</span>
          <div className={state ? "cacc-body cacc-active" : "cacc-body"}>
            <div>
              <p>I reply mails, and messages quickly as possible, but remember I’m from Argentina (GMT-3). So if you not get any response now I’ll reply you next morning for sure.</p>
            </div>
          </div>
        </div>
    </article>
  )
}

export const BAccordion = () => {
    const [state,setState] = useState<boolean>(false);
  return (
    <article className="p-3 b-shadow mb-4 w-100" onClick={()=>setState(!state)}>
        <div className="cacc">
          <div className={state ? "cacc-body cacc-active" : "cacc-body"}>
            <div>
              <p>I reply mails, and messages quickly as possible, but remember I’m from Argentina (GMT-3). So if you not get any response now I’ll reply you next morning for sure.</p>
            </div>
          </div>
          <h4>I can get in touch with you any time?</h4>
        </div>
    </article>
  )
}
