function App() {
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
      </section>
    </main>
  )
}

export default App
