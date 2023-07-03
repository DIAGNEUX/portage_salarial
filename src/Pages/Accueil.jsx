import React from 'react'
import "../App.css"
import CountUp from 'react-countup';
import autonome from '../Assets/laptop.png'
import metier from '../Assets/work.png'
import fonc from '../Assets/schema.png'
import vrai from '../Assets/jeune-femme-bureau-travail-sourire.png'
import support from '../Assets/customer-support.png'
import salesforce from '../Assets/salesforce.png'
import health from '../Assets/onehandhealth.png'
import revenue from '../Assets/revenue.png'
import bill from '../Assets/facturation.png'
import free from '../Assets/free.png'
import calendar from '../Assets/calendar.png'
import phone from '../Assets/phone.png'
import email from '../Assets/email.png'
import chatbot from '../Assets/chatbot.png'

const Accueil = () => {
  return (
    <>
    <div className='wrap_accueil'>
      {/* Section 1 */}
      <div className="wrap">
    <div className='contain'>
      <div>
      <h1>Sentechs : Votre chemin vers l'indépendance professionnelle et la réussite.</h1>
      <p>Explorez le monde du reportage salarial et saisissez l'opportunité unique d'être à la fois freelance et salarié.</p>
      <div className='btn_contain'>
        <button>
          Deposez votre demande
        </button>
      </div>
      </div>
    </div>
    <div className='image'>
      <div>
      <img src={vrai} alt="" width={"600px"} height={"450px"} />
      </div>
    </div>
    </div>
    </div>

    <div className='contact'>
      <ul>
        <li><img src={phone} alt="" /></li>
        <li><img src={email} alt="" /></li>
        <li><img src={calendar} alt="" /></li>
      </ul>

    </div>

    <div className='chatbot'>
      <img src={chatbot} alt="" />
    </div>

    <div className='chiffre'>
    <div>
    <h1><CountUp start={0} end={20} duration={2.5} /><sup>+</sup></h1>
    <p>Experience</p>
    </div>
    <div>
    <h1><CountUp start={0} end={10} duration={2.5} /><sup>+</sup></h1>
    <p>pays d'activité</p>
    </div>
    <div>
    <h1><CountUp start={0} end={2500} duration={2.5} /><sup>+</sup></h1>
    <p>Independants accompagnés</p>
    </div>
    <div>
    <h1><CountUp start={0} end={4} duration={2.5} />/5</h1>
    <p>Satisfaction client</p>
    </div>
    </div>
    <div className="main">
      <div className='wrap_eligible'>
        <h1 className='eligible_title'>Êtes-vous éligible à nos offres ?</h1>
        <div className='eligible'>
        <div className='card'>
          <div className='icon_eligible'>
           <h1> 18<sup>+</sup></h1>
          </div>
          <h2>Vous êtes majeur et résident fiscal dans la zone EMEA</h2>
          <p>
          Même si vous êtes ressortissant étranger, aucun souci tant que vous
           pouvez nous justifier de votre carte de séjour valide.
          </p>
        </div>
        <div className='card'>
          <div className='card_img'>
            <img src={metier} alt="" />
          </div>
          
          <h2>Votre métier est bien couvert par le portage salarial</h2>
          <p>
          Consultants, formateurs, développeurs, métiers du marketing, pro.
          de l'immobilier... notre assurance couvre une multitude de métiers.
          Si vous avez un doute, consultez la liste.
          </p>
        </div>
        <div className='card'>
          <div className='card_img'>
            <img src={autonome} alt="" />
          </div>
          <h2>Vous êtes autonome dans le métier exercé</h2>
          <p>De la recherche & négociation de missions, à la gestion
            quotidienne avec vos clients, vous devez être en capacité
            d'exercer votre métier en toute autonomie. Nous serons là
            pour vous conseiller mais n'intervenons pas directement auprès 
            de vos clients.</p>
        </div>
        </div>
        <div className='wrap_fonctionnement'>
          <h1>Comment ça marche ?</h1>
          <div className='fonc'>
            <div className='par_fonc'>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio praesentium voluptates dolorem, repellat atque rerum veniam maiores sit repellendus ea doloribus incidunt modi nesciunt s
                uscipit? Fuga totam voluptates laboriosam labore!
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, laboriosam doloremque aliquam tempora eaque, quos, neque expedita sunt nulla tenetur optio et. Eum numquam nostrum
                laborum, ipsam eius repellendus at.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat neque, atque totam sequi officia magni voluptas illo, vitae velit dolorem dolore quae eius cum 
                mollitia ducimus ipsum, minima optio saepe.
                </p>
            </div>
            <div className='img_fonc'>
              <img src={fonc} alt="" />
            </div>
          </div>
        </div>

        <div className='wrap_pourquoi'>
          <div className='wrap_wrapper_pourquoi'>
          <h1>Pourquoi sentechs ?</h1>
          <div className='wrap_pourquoi_card'>
          <div class="pourquoi_card">
            <div>
            <img src={salesforce} alt="" />
            </div>
          <p>
          <b> Simplifiez la gestion de votre activité avec Salesforce </b> : SENTECHS utilise Salesforce, une plateforme leader dans les solutions applicatives,
          pour simplifier la gestion quotidienne de votre activité. Après validation de votre inscription, vous aurez accès à votre espace mon.SENTECHS
          sur ordinateur, mobile et application Salesforce. Cet espace intuitif et convivial regroupe toutes les fonctionnalités nécessaires à la gestion
          ... <a href="">en savoir plus</a> {/* de votre activité au même endroit. Créez vos devis et factures, déclarez vos frais professionnels, choisissez vos options de paiement, téléchargez vos bulletins de salaire et justificatifs, le tout grâce à une interface simple et efficace. */}
          </p>
          </div>
          <div class="pourquoi_card">
          <div>
          <img src={free} alt="" />
          </div>
          <p>
          <b> Indépendance sans concession </b> : Avec SENTECHS, vous bénéficiez d'une grande liberté en tant qu'indépendant, sans compromis.
          Nous n'imposons aucun minimum de chiffre d'affaires, aucun engagement contractuel et aucun frais caché. Nous croyons en 
          la simplicité et la transparence pour vous permettre de vous concentrer sur votre activité.
          </p>
          </div>
          <div class="pourquoi_card">
            <div>
            <img src={revenue} alt="" />
            </div>
          <p>
          <b> Optimisation de vos revenus </b> : Grâce à notre expertise en portage salarial, 
          nous vous aidons à optimiser vos revenus. Notre équipe vous accompagne dans 
          la gestion fiscale et sociale de votre activité, afin de maximiser vos gains 
          et de garantir une rémunération juste et équitable.
          </p>
          </div>
          <div class="pourquoi_card">
            <div>
            <img src={support} alt="" />
            </div>
          <p>
          <b> Service client de qualité </b> : Nous nous engageons à fournir un service client de premier ordre.
          Notre équipe est disponible pour répondre à vos questions, vous guider dans les démarches administratives
          et vous offrir un support personnalisé tout au long de votre parcours avec SENTECHS. Notre objectif est de vous
          offrir une expérience client exceptionnelle.
          </p>
          </div>
          <div class="pourquoi_card">
            <div>
            <img src={bill} alt="" />
            </div>
          <p>
          <b> Outil de facturation intégré </b>: Pour simplifier encore davantage votre activité, nous mettons à votre
          disposition un outil de facturation intégré. Vous pouvez facilement créer, gérer et envoyer vos
          factures à vos clients, tout en gardant une trace de vos paiements et en respectant les obligations légales.
          </p>
          </div>
          <div class="pourquoi_card">
            <div>
            <img src={health} alt="" />
            </div>
          <p>
          <b> Couverture sociale complète </b>: En choisissant SENTECHS, vous bénéficiez d'une couverture sociale complète.
          Nous prenons en charge les démarches administratives liées à votre protection sociale, vous offrant ainsi
          la tranquillité d'esprit et la sécurité nécessaire pour exercer votre activité en toute confiance.
          </p>
          </div>
          </div>
          </div>
        </div>

      </div>
    </div>
  </>
  )
}

export default Accueil