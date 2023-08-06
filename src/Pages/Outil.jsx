import "./css/outils.css"
import "./Javascript/outils"
import { useState } from 'react'
import Data from "../Chart/Data";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import PieChart from "../Chart/PieChart";
import { useEffect } from "react";
Chart.register(CategoryScale);


const Outil = () => {
  const [pourcentage1, setPourcentage1] = useState(25);
  const [pourcentage2, setPourcentage2] = useState(70);
  const [pourcentage3, setPourcentage3] = useState(100);
  const [Salaire_global , SetSalaire_global] = useState('');
  const [Montant_quotidien , SetMontant_quotidien]= useState(500);
  const [Jours_travaillé , SetJours_travaillé]= useState(20);
  const [Nbre_de_mois , SetNbre_de_mois]= useState(12);
  const [Salaire_par_mois , SetSalaire_par_mois] = useState('') ;
  const [ Montant_honoraire , SetMontant_honoraire] = useState('');
  const [Reserve , SetReserve ] = useState('');
  const [Masse_Salariale , SetMasse_Salariale]= useState('');
  const [Charge_patronale , SetCharge_patronale ] = useState('');
  const [Salaire_brut , SetSalaire_brut] = useState('');
  const [Charge_Salariale , SetCharge_Salariale] = useState('');
  const [SalaireNet , SetSalaireNet] = useState('');



  

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

    const Salaire_par_mois = Math.floor(Montant_quotidien * Jours_travaillé);
    const Salaire_global = Math.floor(Salaire_par_mois * Nbre_de_mois);
    const Montant_honoraire = Math.floor(Montant_quotidien - (Montant_quotidien * 5 / 100))
    const Reserve = Math.floor(Salaire_par_mois * (5 / 100));
    const Masse_Salariale = Math.floor(Salaire_par_mois - Montant_honoraire - Reserve);
    const Charge_patronale = Math.floor(Masse_Salariale * (35 / 100));
    const Salaire_brut = Math.floor(Masse_Salariale - Charge_patronale);
    const Charge_Salariale = Math.floor(Salaire_brut * (21 / 100));
    const SalaireNet = Math.floor(Salaire_brut - Charge_Salariale);
    
    SetSalaire_global(Salaire_global);
    SetSalaire_par_mois(Salaire_par_mois)
    SetMontant_honoraire(Montant_honoraire)
    SetReserve(Reserve)
    SetMasse_Salariale(Masse_Salariale)
    SetSalaire_brut(Salaire_brut)
    SetCharge_patronale(Charge_patronale)
    SetCharge_Salariale(Charge_Salariale)
    SetSalaireNet(SalaireNet)

    // const newEntry = {
    //   id: Data.length+1 ,
    //   salaire_net : SalaireNet,
    //   charge_patronale : Charge_Salariale,
    //   charge_salariale : Charge_Salariale ,
    //   frais_gestion : 5 / 100 ,
    // }
    
    // Data.push(newEntry)

    // console.log(Data)
    // setChartData()
  
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
  // const [chartData, setChartData] = useState({
  //     labels: Data.map((data) => data.id), 
  //     datasets: [
  //       {
  //         label: "morose",
  //         data: Data.map((data) => data.salaire_net), 
  //         backgroundColor: [
  //           "rgba(75, 192, 192, 1)",
  //           "#ecf0f1",
  //           "#50AF95",
  //           "#f3ba2f",
  //           "#f3ba2f"
  //         ],
  //         borderColor: "black",
  //         borderWidth: 2,
  //       },
  // ],
  // });

  
  
  


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
               <h1>Votre revenu avec PAS</h1>
               <h1> {SalaireNet} </h1>
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
            <li><p> <b> Chiffre d'affaire Global encaissé HT </b></p> <p>{Salaire_global}</p> </li>
            <li> <p><b> Chiffre d'affaire mois encaissé HT </b></p><p>{Salaire_par_mois}</p></li>
            <li><p>  Montant honoraire </p> <p> {Montant_honoraire}</p></li>
            <li>Frais</li>
            <li> <p>Reserve</p> <p>{Reserve}</p></li>
            <li> <p>Masse Salarial</p><p>{Masse_Salariale}</p> </li>
            <li><p>Toute les cotisations </p> <p>{Charge_patronale}</p></li>
            <li> <p>Salaire brut / mois</p> <p>{Salaire_brut}</p> </li>
            <li> <p>Cotisation salariale</p> <p>{Charge_Salariale}</p> </li>
            <li> <p>Net payer avec PAS</p> <p> <h1>{SalaireNet}</h1> </p> </li>
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
