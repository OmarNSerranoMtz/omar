import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hola Lili y Daniel</h1>
        <h3>Les agradezco mucho que hayan dedicado una hora de su tiempo a conocerme, 
         en ese momento estaba muy emocionado me senti privilegiado
         y me di cuenta que puedo incrementar mis habilidades en desarrollo de Software y Metodologias Agiles. 
         Por eso, desde ese dia decidi estudiar y practicar. 
         Esta pagina es una app React, en JavaScript, usando un repositorio GITHUB y utilizando AWS.</h3>
        <h3>Yo creo que todo lo que puedes visualizar es posible, pero eso no significa que sea facil, la clave para mi es el compromiso a la excelencia,
         o como dicen los principios de Grupo Modelo: complacencia cero</h3>
        <h3>Si quiero ser un excelente Product Manager, ademas de captar bien las necesidades del consumidor, tengo que hablar a la prefeccion
         el lenguaje tecnico, por eso me di a la tarea de re-aprender a programar... no me queda de otra; no hay atajos.</h3>
        <h3>Mi siguiente paso sera hacer una pagina mas dinamica, con autenticacion y de base de datos en el back end para captar informacion de mis visitantes,
        aprender eso me llevara mas tiempo, pero estoy seguro de que pronto lo aprendere a hacer pues deseo estar a un nivel digno de Grupo Modelo.</h3>
        <h3>En cuanto a Metodologias Agiles, este 21 y 28 de noviembre tendre un curso por el PMI en metodologias agiles de 8 horas diarias y si necesitara mas conocimiento buscare desarrollarlo.</h3>
        <h3>Gracias por tomarse un tiempo y leerme! Ojala aun este a tiempo de poder ser parte de su equipo. Disculpen las faltas de acentuacion, no es por descuido, tengo un bug con los caracteres especiales que no he corregido y prefiero ponerlo sin acento para que sea legible.</h3>
      </header>
    </div>
  );
}

export default App;