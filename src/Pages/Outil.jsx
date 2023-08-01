import "./css/outils.css"
import "./Javascript/outils"
import { useState } from 'react'
import Data from "../Chart/Data";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import PieChart from "../Chart/PieChart";

Chart.register(CategoryScale);


const Outil = () => {
  const [pourcentage1, setPourcentage1] = useState(25);
  const [pourcentage2, setPourcentage2] = useState(70);
  const [pourcentage3, setPourcentage3] = useState(100);
  const [Salaire_global , SetSalaire_global] = useState(0);
  const [Montant_quotidien , SetMontant_quotidien]= useState(500);
  const [Jours_travaillé , SetJours_travaillé]= useState(20);
  const [Nbre_de_mois , SetNbre_de_mois]= useState(12);


  const [OpenResult , SetOpenResult] = useState( false );

  const handleRangeChange = (e) => {
    const value = e.target.value;
    const max = e.target.max;
    const min = e.target.min;



    const inputId = e.target.id;
    const percentage = ((value - min) / (max - min)) * 100 ;

    if (inputId === 'rangeSlide') {
      setPourcentage1(percentage);
      SetMontant_quotidien(Number(value)); 
    } else if (inputId === 'rangeSlide2') {
      setPourcentage2(percentage);
      SetJours_travaillé(Number(value)); 
    } else if (inputId === 'rangeSlide3') {
      setPourcentage3(percentage);
      SetNbre_de_mois(Number(value));
    }
  };
  const calculateSalaire = (e) => {
    e.preventDefault()
    const Salaire_par_mois = Montant_quotidien * Jours_travaillé;
    const Salaire_global = Salaire_par_mois * Nbre_de_mois;
    SetSalaire_global(Salaire_global); 

    SetOpenResult(!OpenResult)

  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;

    if (id === 'Montant_quotidien') {
      SetMontant_quotidien(Number(value));
      setPourcentage1((Number(value) / 2000) * 100); 
    } else if (id === 'Jours_travaillé') {
      SetJours_travaillé(Number(value));
      setPourcentage2((Number(value) / 30) * 100); 
    } else if (id === 'Nbre_de_mois') {
      SetNbre_de_mois(Number(value));
      setPourcentage3((Number(value) / 12) * 100); 
    }
  
  };


  const datasets =  [
    {
      label: 'Popularity of colours' ,
      data: [55, 23, 96] ,
      backgroundColor: [
        'rgba(255, 255, 255, 0.6)' ,
        'rgba(255, 255, 255, 0.6)' ,
        'rgba(255, 255, 255, 0.6)'
      ],
      borderWidth: 1,
    }
]

  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year), 
    datasets: [
      {
        label: "Users Gained",
        data: Data.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75, 192, 192, 1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "black",
        borderWidth: 2
      }
    ]
  });
  

  
  

  return (
    <div className='wrap_outils'>
      <div className='wrap_par_outils'>
        <h1>Simulez votre salaire en portage salarial</h1>
        <div className='par_outils'>
          <p>
            <b> Découvrez votre salaire grâce à notre outil de simulation de salaire en portage salarial, sur la base de votre taux journalier moyen. </b>{' '}
          </p>
          <p>
            Pour en savoir plus sur notre simulation de salaire en ligne, n’hésitez pas à parcourir notre page pour plus d’informations.
          </p>
        </div>
        {/* simulateur */}
        <div className='wrap_simul'>
          <div className='simul'>
            <div className="simul_form">
            <form action=''>
              <div className="form-container">
              <div>
                <div>
                  <input type='number' name='' id='Montant_quotidien' placeholder='500' value={Montant_quotidien} onChange={handleInputChange} />
                  <label htmlFor=''>Montant quotidien souhaité</label>
                </div>
                <div className='rangeinput'>
                  <div className='range-fill' style={{ width: `${pourcentage1}%` }}></div>
                  <input
                    type='range'name=''id='rangeSlide'className='' min={'0'}max={'2000'}step={'1'} value={Montant_quotidien} onChange={handleRangeChange}
                  />
                </div>
              </div>
              <div>
                <div>
                  <input type='number' name='' id='Jours_travaillé' placeholder='20' value={Jours_travaillé} onChange={handleInputChange}  />
                  <label htmlFor=''>Jours travaillé par mois</label>
                </div>
                <div className='rangeinput'>
                  <input type='range' name='' id='rangeSlide2' min={'0'} max={'30'} step={'1'} value={Jours_travaillé} onChange={handleRangeChange} />
                  <div className='range-fill' style={{ width: `${pourcentage2}%` }}></div>
                </div>
              </div>
              <div>
                <div>
                  <input type='number' placeholder='12' id='Nbre_de_mois' value={Nbre_de_mois} onChange={handleInputChange}  />
                  <label htmlFor=''>Nombre de mois</label>
                </div>
                <div className='rangeinput'>
                  <input type='range' name='' id='rangeSlide3' min={'0'} max={'12'} step={'1'} value={Nbre_de_mois}  onChange={handleRangeChange} />
                  <div className='range-fill' style={{ width: `${pourcentage3}%` }}></div>
                </div>
              </div>
              <div className='btn_calcul'>
                <button  onClick={calculateSalaire} >Calcul mon salaire</button>
              </div>
              </div>
            </form>
            </div>
            { OpenResult && (
               <div className= { OpenResult ? "result" : "not_yet" } >
               <div className="result_contain">
               <h1>Votre revenu net optimisé</h1>
               <h1> {Salaire_global} </h1>
               <div className="btn_result_lance">
               <button>je me lance en portage salarial</button>
               </div>
               </div>
             </div>
            )}
          </div>
        </div>
        <div className="calcul">
          <div className="fiche">
          <h4>Calcul votre salaire</h4>

          <ul>
            <li>Chiffre d'affaire Global encaissé HT </li>
            <li>Chiffre d'affaire mois encaissé HT</li>
            <li>Montant honoraire</li>
            <li>Frais</li>
            <li>Reserve</li>
            <li>Masse Salarial</li>
            <li>Toute les cotisations</li>
            <li>Salaire brut / mois</li>
            <li>Cotisation salarial</li>
            <li>Net payer avec PAS </li>
          </ul>
          </div>

          <div className="Schema_outils">
            <PieChart chartData={chartData}/>

          </div>

        </div>
        
      </div>
    </div>
  );
};

export default Outil;
