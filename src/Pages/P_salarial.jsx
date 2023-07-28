import React, { useState } from 'react'
import "./P_salarial.css"
import schema from '../Assets/schema.png'
import { Link, Element } from 'react-scroll';

const P_salarial = () => {
  const [toggleState , SettoggleState] = useState(1)
  const toggletab = (index) => {
    SettoggleState(index)
    
  }
  const [toggleState1 , SettoggleState1] = useState(1)
  const toggletab1 = (index) => {
    SettoggleState1(index)
  }
  

  return (
    <>
    {/* sommaire */}
    <div className='wrap_sommaire'>
        <div className='sommaire'>
          <h3>Sommaire</h3>
          <ul>
            <li><Link to="definition" smooth={true} duration={1000}>Definition</Link></li>
            <li><Link to="fonctionnement" smooth={true} duration={1000}>Fonctionnement</Link></li>
            <li><Link to="contrat" smooth={true} duration={1000}>Contrat</Link></li>
            <li><Link to="objectif" smooth={true} duration={1000}>Objectif</Link></li>
            <li><Link to="international" smooth={true} duration={1000}>International</Link></li>
            <li><Link to="remuneration" smooth={true} duration={1000}>Remuneration</Link></li>
          </ul>

        </div>
      </div>
    <div className=' wrap_portage' >
    <Element name="definition" className="element">
      {/* c'est quoi */}
      <h2>Definition du portage salarial </h2>
      <div className='portage_container'>
      <div className='portage_par'>
      <div>
      <p>
      Le <b>portage salarial</b>  est une relation contractuelle tripartite dans laquelle un salarié porté d'une entreprise
      de portage salarial effectue une prestation pour le compte d'entreprises
      clientes. D'une part, un contrat de travail est établi entre le salarié porté
      et l'entreprise de portage salarial. D'autre part, un contrat commercial est établi entre l'entreprise de
      portage salarial et l'entreprise cliente.
      </p>
      <div className='btn_portage'>
        <button>Déposez votre demande</button>
      </div>
      </div>

      </div>
      <div className='video_part'>
      <iframe title="Qu'est-ce que le portage salarial ?"
      width="640" height="360"
      src="https://www.youtube.com/embed/tFNJ5jO0OY4?feature=oembed"
      frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe>
      </div>
      </div>
      </Element>
      {/* c'est quoi */}

      {/* def portage */}
      <Element name="fonctionnement" className="element">
      <h2 >Comment marche le portage salarial ? </h2>
      <div className='def_portage'>
        <div>
          <img src={schema} alt="" />
        </div>
        <div>
        <p>Le portage salarial est une forme de relation de travail qui lie à la fois le
           salariat et l'entrepreneuriat. Il s'agit d'une relation
           contractuelle entre trois intervenants : 
        </p>
        <ul>
          <li><b> une entreprise de portage salarial </b></li>
          <li> <b> le salarié porté, </b></li>
          <li> <b> une entreprise cliente </b> </li>
        </ul>
        <p>Le salarié porté signe un contrat de travail avec l'entreprise de portage et réalise une prestation pour le compte d’une entreprise cliente qui a signé un contrat commercial
           avec l'entreprise de portage salarial.
        </p>
        </div>       
      </div>
      </Element>
      
      {/* def portage */}
      <div className='wrap_part_intervenants'>
      <div className='part_intervenants'>
      <div className='bloc-tabs'>
        <div 
        className={ toggleState === 1 ? "tab active_tab" : "tabs" } onClick={() => toggletab(1)}>  Le salarié de porté</div>
        <div 
        className={ toggleState === 2 ? "tab active_tab" : "tabs" } onClick={() => toggletab(2)}> societe de portage </div>
        <div 
        className={ toggleState === 3 ? "tab active_tab" : "tabs" } onClick={() => toggletab(3)}> L'entreprise cliente </div>
      </div>

      <div className='wrap_intervenants'>
        <div className='content_tab intervenants'>
        <div className={ toggleState === 1 ? "content active_content" : "contents" }>
        <p>
        Le portage salarial est ouvert à toute personne ayant les compétences et 
        l'autonomie nécessaires pour rechercher des clients, négocier les conditions
        d'exécution de sa prestation avec l'entreprise cliente et fixer son prix.
        Le salarié porté est seul décisionnaire quant au choix de l’entreprise de 
        portage salarial. Après avoir signé un contrat avec la société de portage,
         il exécute sa prestation auprès des clients qu'il trouve et rend compte de
        son activité à la société de portage au minimum une fois par mois.
        </p>
        </div>

      <div className={ toggleState === 2 ? "content active_content" : "contents" }>
      <p> L'entreprise de portage salarial exerce cette activité à titre exclusif et est la seule à avoir la capacité de conclure des contrats de travail en portage salarial. Elle rédige le contrat de travail et le signe avec le salarié porté et accompli, comme tout employeur, l’ensemble des formalités liées à l’embauche (déclaration d’embauche, versement d'une rémunération et des cotisations sociales, etc.). Dans le cadre de ses missions, l’entreprise de portage :</p>
      <ul>
        <li>ouvre et gère un compte d'activité pour le salarié porté ;</li>
        <li>souscrit une assurance de responsabilité civile professionnelle pour le compte du salarié porté ;</li>
        <li>vérifie la bonne adaptation du salarié porté à son poste de travail.</li>
      </ul>
      <p>En revanche, l'entreprise de portage n'a pas pour rôle de fournir du travail au salarié porté à qui il appartient
        de trouver sa clientèle.</p>
      </div>

      <div className={ toggleState === 3 ? "content active_content" : "contents" }>
      <p>Toute entreprise ayant besoin d’un prestataire pour des tâches occasionnelles ne relevant pas de son activité normale peut avoir recours au portage salarial. En aucun cas le recours au portage salarial ne doit avoir pour objet de remplacer un salarié en grève ou
        pour effectuer des travaux particulièrement dangereux.</p>
      <p>L’entreprise cliente signe un contrat commercial avec la société de portage. Cependant, elle négocie la nature et le prix de la prestation avec le salarié porté. Le prix de la prestation 
        est versé à l’entreprise de portage.</p>
      </div>
      </div>
      </div>
      </div>
      
      
      <Element name="contrat" className="element">
      <div className='wrap_contrat' >
        <div className='Contrat'>
        <h2>Les différents contrats de portage salarial</h2>
        <p>petite explication</p>
        <div className='wrap_type_contrat'>
        <div className='les_type_contrats'>
          <div className={ toggleState1 === 1 ? "contrat active_contrat" : "contrats" } onClick={() => toggletab1(1)}>Contrat de travail avec le salarié porté</div>
          <div className={ toggleState1 === 2 ? "contrat active_contrat" : "contrats" } onClick={() => toggletab1(2)}>Contrat Commercial avec l’entreprise cliente</div>
        </div>

        <div className={ toggleState1 === 1 ? "cont_contrat active_cont_contrat" : "cont_contrats" }>
        <p>Le contrat de travail signé avec le salarié porté peut
           être à durée déterminé <b>(CDD)</b> ou indéterminée <b>(CDI)</b>.
        </p>
        <p>Si <b> le contrat de travail est à durée déterminée </b>, il est conclu pour la durée de réalisation de la prestation sans pouvoir excéder 18 mois. La fin du contrat peut être reportée pour une durée maximale de 3 mois en cas d’accord entre les parties. L’ensemble des règles relatives au CDD classique s’applique (période
           d'essai, conditions de rupture, indemnités de fin de contrat, etc.).
        </p>
        <p>
        Si <b> le contrat de travail est à durée indéterminée </b>, il est conclu pour la réalisation d’une prestation auprès d’une ou plusieurs entreprises. Les périodes pendant lesquelles aucune prestation n’est réalisée auprès 
        d’une entreprise cliente ne sont pas rémunérées. L’ensemble des règles relatives aux CDI classiques s’applique.
        </p>
        <p>
        À noter : le salarié porté acquiert de l'ancienneté dans l’entreprise de portage. Celle-ci se calcule en accumulant les périodes pendant lesquelles il a exécuté des prestations.
        </p>
        </div>
        
        <div className={ toggleState1 === 2 ? "cont_contrat active_cont_contrat" : "cont_contrats" }>
          <p>L'entreprise de portage salarial rédige et signe un contrat commercial de prestation de service avec l’entreprise cliente.
             Ce contrat commercial comporte les mentions suivantes : 
          </p>
          <ul>
            <li>identité des parties,</li>
            <li>compétences et qualification du salarié porté,</li>
            <li>caractéristiques de la prestation à exécuter par le salarié porté,</li>
            <li>responsabilité de l'entreprise cliente,</li>
            <li>nom et numéro d'assurance pour la responsabilité civile professionnelle.</li>
          </ul>
          <p>
          À noter: toute rupture du contrat commercial n'a pas pour conséquence la
           rupture du contrat de travail du salarié.
          </p>
        </div>
        </div>
        </div>
        </div>
        </Element>

        <Element name="objectif" className="element">
        <div className='wrap_objectif' >
          <div className='objectif'>
            <h2>L'objectif du portage salarial </h2>
            <p>Le portage salarial est né pour répondre à différents besoins
               et objectifs à destination du professionnel et de l’entreprise 
               cliente.
            Pour le professionnel cela permet <b> d’évoluer dans un cadre administratif légal et rassurant </b>, mais surtout d’avoir la possibilité de jouir
            de tous les avantages liés au statut de salarié notamment au niveau de la protection sociale et des droits au chômage.
            Pour l’entreprise cliente, faire appel au portage salarial permet de ne pas passer par l’embauche d’un
            salarié tout en ayant la capacité de pouvoir acquérir avec plus de facilité des consultants qualifiés, ces derniers
            n’ayant plus la nécessité de créer leur entreprise et donc de gérer toute la partie administrative qui en découle.
            </p>
          </div>

        </div>
        </Element>

        <Element name="international" className="element">
        <div className="wrap_international">
          <div className='international'>
            <h2>Peut-on faire du portage salarial à l’international ?</h2>
            <p>
            Le portage salarial à l’international est possible dans le cas où le salarié porté veut répondre à des missions proposées à l'international tout en bénéficiant des caractéristiques du portage salarial.
            L’accord tripartite est de ce fait conservé. Toutefois; il est qualifié de deux manières différentes selon la durée de la mission :
            S’il s’agit d’une mission temporaire d’une durée inférieure ou égale à 24 mois, le salarié porté est dit salarié porté détaché. Il bénéficiera tout de même de la sécurité sociale française si un accord bilatéral est mis en place entre la France et le pays ou la mission est effectué.
            Si cela concerne une mission à durée indéterminée d’au moins 6 mois, l'indépendant aura le statut de salarié expatrié et dépendra alors du régime social appliqué dans le pays où il exerce son activité professionnelle.
            </p>
          </div>
        </div>
        </Element>
        <Element name="remuneration" className="element">
        <div className='wrap_remuneration' >
          <div className='remuneration'>
          <h2>Portage salarial : rémunération</h2>
          <p>Le salarié porté est rémunéré par la société de portage, il reçoit donc une fiche
            de paie. Le montant de son salaire correspond à un pourcentage du chiffre d’affaires
            facturé à la société cliente. Le reliquat de ce pourcentage étant destiné à couvrir 
            les frais de gestion de la société de portage. Le montant de ce pourcentage est négocié entre le salarié et la société de portage mais en tout état de cause la rémunération du salarié porté ne peut pas être inférieure à 2.517,13 euros brut par mois. Cette rémunération minimale correspond à un salaire mensuel garanti comprenant le salaire de base, les indemnités de congés payés et la prime d’apport d’affaires de 5 % et à une réserve financière destinée à financer les périodes d’intermissions. Cette réserve financière correspond à 10 % du salaire de base de la dernière mission pour les salariés 
            en CDI et à l'indemnité de précarité pour les salariés en CDD.</p>
        </div>
        </div>
        </Element>
      </div>
    </div>
    </>

  )
}

export default P_salarial