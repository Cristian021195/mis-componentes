export const Header = () => {
  return (// style="background-color: #1E90FF; position: absolute; width: 100%; border-radius: 0.3rem; margin-top: 0.3rem;"
  //<!-- position: relative; en caso de mobile -->
    <header className="mb-4 w-100">
      <ul className="d-flex justify-content-end py-4 px-2">
        <li className=""><a href="#">Inicio</a></li>
        <li className=""><a href="#">Sobre Mí</a></li>
        <li className=" acc" style={{position:'absolute'}}>
            <a href="#" className="btn p-2">Componentes</a>
            <div className="p-2">
                <div className="accs-body">
                <p>Sublink 1</p>
                </div>
                <div className="accs-body">
                <p>Sublink 2</p>
                </div>            
                <div className="accs-body">
                <p>Sublink 3</p>
                </div>
            </div>
        </li>
        <li className=""><a href="#">Contacto</a></li>
      </ul>
    </header>
  )
}
