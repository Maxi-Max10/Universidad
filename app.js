const buttonCite = document.querySelector('#buttonCite');
const citeOutput = document.querySelector('#cite');
const authorOutput = document.querySelector('#author');

let cites = [
  'Continúa a pesar de que todos esperen que abandones. No dejes que se oxide el hierro que hay en ti.',
  'El genio se hace con un 1% de talento, y un 99% de trabajo.',
  'Hay una fuerza motriz más poderosa que el vapor, la electricidad y la energía atómica: la voluntad.',
  'Confía en ti mismo sin importar los que los demás piensen.',
  'No te amargues con tu propio fracaso ni se lo cargues a otro. Acéptate ahora o seguirás justificándote como un niño. Recuerda que cualquier momento es bueno para comenzar y que ninguno es tan terrible para claudicar.',
  'Si crees que puedes o crees que no puedes tienes razón. ',
  'Sólo existen dos días en el año en que no se puede hacer nada. Uno se llama ayer y otro mañana. Por lo tanto hoy es el dia ideal para amar, crecer, hacer y principalmente vivir.',
  'El placer y la acción hacen que las horas parezcan cortas.',
  'El éxito depende del esfuerzo.',
  'No busques los errores, busca un remedio.',
  'Nunca se ha logrado nada sin entusiasmo.',
  'Quien tiene paciencia, obtendrá lo que desea.',
  'No malgastes tu tiempo, pues de esa materia está formada la vida.',
  'La confianza en sí mismo es el primer secreto del éxito.',
  'La ocasión hay que crearla, no esperar a que llegue.',
  'Cuando el hombre no se encuentra a sí mismo, no encuentra nada.',
  'El fracaso es simplemente una nueva oportunidad de empezar de nuevo, esta vez de forma más inteligente.',
  'Una buena cabeza y un buen corazón son siempre combinaciones formidables.',
  'La mejor forma de predecir el futuro es crearlo.',
  'La inteligencia es la habilidad de adaptarse al cambio.'
];

let authors = [
  'Teresa de Calcuta',
  'Albert Einstein',
  'Albert Einstein',
  'Arnold Schwarzenegger',
  'Pablo Neruda',
  'Henry Ford',
  'Dalai Lama',
  'William Shakespeare',
  'Sófocles',
  'Henry Ford',
  'Albert Einstein',
  'Emerson',
  'Benjamin Franklin',
  'Emerson',
  'Francis Bacon',
  'Goethe',
  'Henry Ford',
  'Nelson Mandela',
  'Abraham Lincoln',
  'Stephen Hawking'
];

let lastNumber = 0;

function rand () {
  let rnd = Math.floor(Math.random() * cites.length);
  if (rnd != lastNumber) {
    citeOutput.innerText = `"${cites[rnd]}"`;
    authorOutput.innerText = authors[rnd];
    lastNumber = rnd;
  } else {
    rand(); // Recursion
  }
} // End rand function

buttonCite.addEventListener('click', rand); // Call the function, in events you can't do this -> rand() , parenthesis no!
s