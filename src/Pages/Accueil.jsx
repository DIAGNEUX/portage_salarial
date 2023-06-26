import React from 'react'
import "../App.css"
import CountUp from 'react-countup';

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
      <h1>image</h1>
      </div>
    </div>
    </div>
    </div>
    <div className='chiffre'>
    <h1>
      <CountUp start={0} end={17} duration={2.5} />
      experience
    </h1>
    </div>
    <div className="main">
      
    </div>
  </>
  )
}

export default Accueil