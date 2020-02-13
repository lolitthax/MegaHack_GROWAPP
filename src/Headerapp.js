import React from 'react';

const Headrapp = props => {
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
          <a href='/login' title='Login'>Login</a>
          <label for='chk' className='hide-menu-btn'>
            <i className='fas fa-times'></i>
          </label>
        </ul>
      </header>
      
    
    </div>
  )


}
export default Headrapp