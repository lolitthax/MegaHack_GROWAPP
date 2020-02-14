import React from 'react';

const Primary = props => {
  return (
    <div>
      <section className="services-section">
        <div className="inner-width-primary">
          <h1 className="section-title">Oferecemos:</h1>
          <div className="border-primary"></div>
          <div className="services-container">

            <div className="service-box">
              <div className="service-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h2 className="service-title">Dashboard</h2>
              <p className="service-desc">
                Dashboard totalmente amigável que se adapta com seu tipo de empresa.
            </p>
            </div>

            <div className="service-box">
              <div className="service-icon">
                <i className="fas fa-box-open"></i>
              </div>
              <h2 className="service-title">Estoque</h2>
              <p className="service-desc">
                Sugestão de preços, cadastro produtos e notificação de quando um produto está em ausência.
            </p>
            </div>

            <div className="service-box">
              <div className="service-icon">
                <i className="fas fa-piggy-bank"></i>
              </div>
              <h2 className="service-title">Financeiro</h2>
              <p className="service-desc">
                Administração de funcionários, análise de lucros, alerta de contas a pagar e a receber.
            </p>
            </div>

            <div className="service-box">
              <div className="service-icon">
                <i className="fas fa-bullhorn"></i>
              </div>
              <h2 className="service-title">Marketing</h2>
              <p className="service-desc">
                Integração com o Facebook e Instagram.
            </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  )


}
export default Primary