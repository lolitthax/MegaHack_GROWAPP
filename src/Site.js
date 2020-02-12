import React from 'react'
const Site = props => {
  return (
    <div>

      <header className='header'>
        <h2 className='logo' title='GrowApp'>GrowApp</h2>
        <input type='checkbox' id='chk' />
        <label for='chk' className='show-menu-btn'>
          <i className='fas fa-ellipsis-h'></i>
        </label>

        <ul className='menu'>
          <a href='#' title='Sobre'>Sobre</a>
          <a href='#' title='Contato'>Contato</a>
          <a href='#' title='Login'>Login</a>
          <label for='chk' className='hide-menu-btn'>
            <i className='fas fa-times'></i>
          </label>
        </ul>
      </header>
      <main className='page-content'>
         <div className='Parallax'>
           <h1>Teste</h1>
           <p>teste de subtítulo</p>
         </div>
      </main>
      <footer>
        <section className='footer-container'>
          <div className='center-col'>
            <h2 className='logo-footer'>GrowApp</h2>
            <hr className='border' />
            <p className='rights-text'>© 2020 Created By Tempo 16 All Rights Reserved.</p>
          </div>

        </section>
      </footer>
    </div>
  )


}
export default Site