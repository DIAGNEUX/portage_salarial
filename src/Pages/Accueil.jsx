import React, { useState } from 'react'
import SimpleMap from '../maps';
import GoogleMapReact from 'google-map-react';
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
import { useInView } from 'react-intersection-observer';
import rate from '../Assets/rate.png'
import no_rate from '../Assets/no-rate.png'
import half_rate from '../Assets/half_rate.png'
import question from '../Assets/question.jpg'
import up from '../Assets/chevron_up.png'
import down from '../Assets/chevron_down.png'
import developpeur from '../Assets/developpeur web.jpg'
import directeur from '../Assets/directeur.jpg'
import analyst from '../Assets/analyst.jpg'
import immobilier from '../Assets/mandataire-immobilier.jpg' 
import rate1 from '../Assets/rate1.jpg'
import rate2 from '../Assets/rate2.jpg'
import rate3 from '../Assets/rate3.jpg'
import rate4 from '../Assets/rate4.jpg'



const Accueil = () => {
  const [ Open1 , setOpen1 ] = useState(false)
  const [ Open2 , setOpen2 ] = useState(false)
  const [ Open3 , setOpen3 ] = useState(false)
  const [ Open4 , setOpen4 ] = useState(false)

  const toggle1 = () => {
    setOpen1(!Open1)
  } 
  const toggle2 = () => {
    setOpen2(!Open2)
  } 
  const toggle3 = () => {
    setOpen3(!Open3)
  } 
  const toggle4 = () => {
    setOpen4(!Open4)

  } 

const [selectoption , Setselectoption] = useState(null)
const handleoptionchange = (event) => {
  const {value} = event.target
  Setselectoption(value === selectoption ? null : value);

} 
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
          <h1>Comment fonctionne le portage salarial ?</h1>
          <div className='fonc'>
            <div className='par_fonc'>
              <p>
              Le portage salarial est une forme d'emploi qui permet à des professionnels indépendants d'exercer leur activité en bénéficiant des avantages du salariat <br />
              Le portage salarial s’articule en trois relations ou contrats distincts :
              <ul>
                <li>Entre <b> l’entreprise de portage salarial </b> et <b> le salarié porté </b> : Ils sont liés par un contrat de travail à durée déterminée ou indéterminée au choix. Le consultant est considéré comme salarié porté de SENTECHS.</li>
                <li>Entre <b> l’entreprise de portage salarial </b> et <b> l’entreprise cliente </b> : Elles sont liées par un contrat de prestation. Celui-ci définit les conditions de réalisation de la prestation de services et le tarif.</li>
                <li> Entre <b> le salarié porté </b> et <b> l’entreprise cliente </b> : Il effectue les missions chez l’entreprise cliente comme convenu dans le contrat de prestation.</li>
              </ul>
              
                Les entreprises de portage salarial gèrent toute la gestion administrative liée aux missions de son consultant en portage salarial en échange d’une commission. Le consultant porté cotise au régime général et peut bénéficier des avantages et de la protection qu’offre le salariat.
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
        <div className='metiers'>
          <div className='par_metiers'>
            <div>
            <h1>Les metiers du portage salarial</h1>
            <p>
            Le portage salarial s’adresse aux professionnels bénéficiant d’une
            expertise, c’est pourquoi on retrouve beaucoup de formateurs ou de consultants en portage. Pour 
            généraliser, on peut dire que le portage salarial concerne les professions de prestations
            intellectuelles. Ces professions peuvent concerner de nombreux domaines très divers
            allant de l’informatique à l’immobilier.
            </p>
            </div>
          </div>

          <div className='temp_metiers'>
            <div className='grid_metiers'>
            <div className='card_metiers' >
              <img src={developpeur} alt="" />
              <div className='wrap_branche'>
                <button className='branche' >Developpeur web </button>
              </div>
            </div>
            <div className='card_metiers'>
              <img src={analyst} alt="" />
              <div className='wrap_branche' >
                <button className='branche'>Data analyst </button>
              </div>
            </div>

            <div className='card_metiers'>
              <img src={directeur} alt="" />
              <div className='wrap_branche' >
                <button className='branche'>Directeur de projet</button>
              </div>
            </div>
            

            <div className='card_metiers'>
              <img src={immobilier} alt="" />
              <div className='wrap_branche' >
                <button className='branche' >Immobilier </button>
              </div>
            </div>

            

          </div>
          <button className='autre_metiers' >Decouvrez tous les metiers</button>
          </div>     
        </div>

        {/* temoignages */}
        <div className='temoignages'>
          <h1>Que penses nos freelancers</h1>
          <div className="wrap_temcards">
          <div className='tem_cards'>
            <div className='tem_card'>
              <div className="img_temcard">
                <img src={rate1} alt="" />
              </div>
              <p className='name_tem'>john Doe</p>
              <q>
              Sentech a simplifié ma vie de freelance. Leur expertise 
              en portage salarial m'a libéré des tâches administratives 
              et m'a permis de me consacrer pleinement à la création de sites web
              </q>
              <div className='rate_client'>
              <ul>
                <li><img src={rate} alt="" /></li>
                <li><img src={rate} alt="" /></li>
                <li><img src={rate} alt="" /></li>
                <li><img src={rate} alt="" /></li>
                <li><img src={no_rate} alt="" /></li>
              </ul>

            </div>
            </div>
            <div className='tem_card'>
            <div className="img_temcard">
              <img src={rate2} alt="" />  
            </div>
            <p className='name_tem'>john Doe</p>
            <q>
            Grâce à Sentech, j'ai trouvé des missions passionnantes sans me soucier
            des formalités administratives. Leur équipe dédiée a pris en charge tout
            le côté administratif, me permettant de me concentrer sur ma créativité
            </q>
            <div className='rate_client'>
              <ul>
                <li><img src={rate} alt="" /></li>
                <li><img src={rate} alt="" /></li>
                <li><img src={rate} alt="" /></li>
                <li><img src={rate} alt="" /></li>
                <li><img src={no_rate} alt="" /></li>
              </ul>

            </div>
            </div>
            <div className='tem_card'>
            <div className="img_temcard">
              <img src={rate3} alt="" />
            </div>
            <p className='name_tem'>john Doe</p>
            <q>
            Sentech a propulsé ma carrière de freelance en consulting.
            Leur expertise et leur réseau m'ont ouvert de nouvelles
            opportunités professionnelles, tandis qu'ils s'occupaient de
            tous les aspects administratifs pour moi
            </q>
            <div className='rate_client'>
              <ul>
                <li><img src={rate} alt="" /></li>
                <li><img src={rate} alt="" /></li>
                <li><img src={rate} alt="" /></li>
                <li><img src={rate} alt="" /></li>
                <li><img src={no_rate} alt="" /></li>
              </ul>

            </div>
            </div>
            <div className='tem_card'>
            <div className="img_temcard">
              <img src={rate4} alt="" />
            </div>
            <p className='name_tem'>john Doe</p>
            <q>
            Sentech m'a offert une tranquillité d'esprit totale.
            Leur équipe s'est occupée de toute la gestion administrative,*
            me permettant de me concentrer sur mes missions de marketing digital avec confiance.
            </q>
            <div className='rate_client'>
              <ul>
                <li><img src={rate} alt="" /></li>
                <li><img src={rate} alt="" /></li>
                <li><img src={rate} alt="" /></li>
                <li><img src={no_rate} alt="" /></li>
                <li><img src={no_rate} alt="" /></li>
              </ul>

            </div>
            </div>
          </div>
          </div>
        </div>

        <div className='wrap_questions'>
          <h1>Questions fréquentes</h1>
          <div className='questions'>
          <div className='img_question'>
            <img src={question} alt="" />
          </div>
          <div className='par_question'>
            <div className='question'>
              <div>
              <p >Combien gagne-t-on en portage salarial ?</p>
              <img src={ Open1 ? up :down } alt="" onClick={toggle1} />
              </div>
              {Open1 && (
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed 
                error aliquam saepe sit qui? Eum explicabo dignissimos expedita 
                accusamus labore, nesciunt cum dolores voluptatibus, commodi</p>
              )}
              
            </div>
            <div className='question'>
              <div>
                <p>Qu'est-ce-que le portage salarial ?</p>
                <img src={ Open2 ? up :down } alt="" onClick={toggle2} />
                </div>
                {Open2 && (
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed 
                error aliquam saepe sit qui? Eum explicabo dignissimos expedita 
                accusamus labore, nesciunt cum dolores voluptatibus, commodi</p>
              )}
            </div >
            <div className='question'>
                <div>
                <p>Qui peut faire du portage salarial ?</p>
                <img src={ Open3 ? up :down } alt="" onClick={toggle3} />
                </div>
                {Open3 && (
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed 
                error aliquam saepe sit qui? Eum explicabo dignissimos expedita 
                accusamus labore, nesciunt cum dolores voluptatibus, commodi</p>
              )}
                
                
            </div>
            <div className='question'>
              <div>
                <p>Pourquoi choisir le portage salarial pour devenir indépendant ?</p>
                <img src={ Open4 ? up :down } alt="" onClick={toggle4} />
              </div>
              {Open4 && (
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed 
                error aliquam saepe sit qui? Eum explicabo dignissimos expedita 
                accusamus labore, nesciunt cum dolores voluptatibus, commodi</p>
              )}
            </div>
          </div>
        </div>
        </div>

        {/* contact */}
        <div className="wrapper_contact">
        <div className='wrap_contact'>
          <div className="contact_us">
          <div className='par_contact'>
            <div>
              <h1>Contact nous</h1>
              <div>
                <SimpleMap />
              </div>
            </div>

          </div>
          <div className='form_contact'>
            <div className='be_wrapcont'>
              <form action="">
                <div className='nom_prenom'>
                  <div>
                  <label htmlFor="">Prenom </label>
                  <input type="text" />
                  </div>
                  <div>
                  <label htmlFor="">Nom</label>
                  <input type="text" />
                  </div>
                </div>
                <div className='email_num'>
                  <div>
                  <label htmlFor="">Email</label>
                  <input type="text" />
                  </div>
                  <div>
                  <label htmlFor="">Numero de tel</label>
                  <input type="text" />
                  </div>
                </div>
                <div className='motif'>
                  <label htmlFor="">Objet</label>
                  <ul>
                    <div>
                    <li  className={selectoption === 'portage-salarial' ? 'selected' : ''}>
                       <input type="radio" name="object" id="" value="portage-salarial" onChange={handleoptionchange} /> Portage salarial </li>
                    <li className={selectoption === 'prix' ? 'selected' : ''} > 
                    <input type="radio" name="object" id="" value="prix" onChange={handleoptionchange} /> Prix </li>       
                    </div>
                    <div>
                    <li className={selectoption === 'rendez-vous' ? 'selected' : ''} >
                      <input type="radio" name="object" id="" value="rendez-vous" onChange={handleoptionchange} />Rendez vous</li>
                    <li className={selectoption === 'autre' ? 'selected' : '' }>
                      <input type="radio" name="object" id="" value="autre" onChange={handleoptionchange} />Autre</li>
                    </div>
                  </ul>
                </div>
                <div className='areatext'>
                  <label htmlFor="">Message</label>
                  <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
                <div className='btn_form'>
                  <button>Soumettre</button>
                </div>

              </form>
            </div>

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