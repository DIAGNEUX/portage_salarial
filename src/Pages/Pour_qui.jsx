import React from 'react'
import "./css/Qui.css"
import it_support from  "../Assets/illustrator/lawyer-c.png"
import CRM from "../Assets/illustrator/chef CRM.png" ;
import Directeur from '../Assets/illustrator/Directeur de projet.png'
import Data_Analyst from "../Assets/illustrator/Data-analyst.png" ;
import Dev_back from "../Assets/illustrator/dev backend.png"
import Dev_front from "../Assets/illustrator/dev Front.png"
import Dev_full from "../Assets/illustrator/developpeur full.png"
import devOps from "../Assets/illustrator/devOps.png"
import Owner from "../Assets/illustrator/Product Owner.png"
import project_manager from "../Assets/illustrator/Project Manager.png"

const Pour_qui = () => {
  const informatique = [
    {nom: "consultant informatique " , image : it_support } ,
    {nom: "Data Analyst " , image : Data_Analyst },
    {nom: "DevOps " , image : devOps },
    {nom: "Developpeur FullStack " , image : Dev_full },
    {nom: "Developpeur BackEnd " , image : Dev_back },
    {nom: "Developpeur FrontEnd " , image : Dev_front },
    {nom: "Product Owner " , image : Owner },
    {nom: "Directeur de projet " , image : Directeur},
    {nom: "Chef de projet CRM " , image : CRM }
    

  ]
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

         <div className='wrap_jobs'>
         <div className='jobs'>
          {informatique.map((metiers_info)=> (
            <div className='it' key={metiers_info.nom}>        
            <img src={metiers_info.image} alt="" />
            <p> {metiers_info.nom}  </p>
            </div>

          ))}
          
         </div>
         </div>

      </div>
    </div>
  )
}

export default Pour_qui