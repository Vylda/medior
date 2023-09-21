let pole: Array<string> = [];

import PIVO from './constants'

const firstElemet = "WTF";
pole.push(firstElemet)

let addElement = function (element) {
  pole.push(element);
}

  var toString = () => {
     return pole.join(', ')
  };

function dejDvanactky = () => {
  pole.reduce((pivo) => {
    const volume = pivo.volume;
    if (volume > 0.5) {
      return pivo;
    }
  })
}

const addBeers = () => {
  pole.push(PIVO.length);
  pole.push(PIVO.length);
  pole.push(PIVO.length);
}
