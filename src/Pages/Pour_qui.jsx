import React from 'react'
import "./css/Qui.css"
import it_support from  "../Assets/illustrator/lawyer-c.png"

const Pour_qui = () => {
  return (
    <div className='wrap_who'>
      <div>
        <h1>Les metiers en portage salarial</h1>
        <p><b> Le portage salarial </b> est ouvert aux professionnels issus de <b> différents secteurs d’activité</b>.
         Il leur permet de conserver leur indépendance tout en bénéficiant des avantages dédiés
         aux salariés. Avec ce système, ils profitent d’une couverture sociale plus élargie et 
         de revenus stables et constants. Nombreux sont les métiers compatibles avec ledit dispositif.
        </p> 
         <p>
         <b>Cadres</b>, <b>ingénieurs</b>, <b>retraités actifs</b>, <b>jeunes diplômés</b>  qui voient dans ce 
         mode d’emploi la possibilité de développer une activité basée sur la prestation
         intellectuelle qu’ils délivrent à leur client.
         SENTECHS a considérablement fait évoluer le service du portage salarial
         en y ajoutant des prestations pour une meilleure protection
         des consultants et un meilleur support à leur développement.
         </p>

         <div className='jobs'>
          <div className='it'>        
          <img src={it_support} alt="" />
          <p>IT consulting</p>
          </div>
         </div>
      </div>
    </div>
  )
}

export default Pour_qui