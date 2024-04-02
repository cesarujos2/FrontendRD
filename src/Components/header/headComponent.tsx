import './headComponent.css'
function HeadComponent() {
  return (
    <div className='headerContainer'>
      <div className="container-header">
        <a href="http://www.gob.pe">
          <img src="https://www.gob.pe/assets/escudo_text_gobpe_bicentenario-b3f3c1757eef6fb41bfd4faa9f55f49ebe39cbdbc70f57cb40e9f767af9a969b.svg" alt="Logo Gob.pe" />
        </a>
        <div className="mtc-container">
          <p>Plataforma digital única del Estado Peruano</p>
        </div>
      </div>
    </div>
  )
}

export default HeadComponent