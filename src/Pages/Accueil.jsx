import React from 'react'
import "../App.css"
import CountUp from 'react-countup';
import autonome from '../Assets/laptop.png'
import metier from '../Assets/work.png'
import fonc from '../Assets/schema.png'
import vrai from '../Assets/jeune-femme-bureau-travail-sourire.png'

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
    <div className='chiffre'>
    <div>
    <h1><CountUp start={0} end={20} duration={2.5} /><sup>+</sup></h1>
    <p>Experience</p>
    </div>
    <div>
    <h1><CountUp start={0} end={2500} duration={2.5} /><sup>+</sup></h1>
    <p>Experience</p>
    </div>
    <div>
    <h1><CountUp start={0} end={4} duration={2.5} />/5</h1>
    <p>Experience</p>
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
      </div>
    </div>
  </>
  )
}

export default Accueil