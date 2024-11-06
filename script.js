const Reponses = {
  reponse1: 'SSR',
  reponse2: 'Cache front/back',
  reponse3: 'Lazy loading',
  reponse4: 'Utiliser un framework modulaire',
  reponse5: 'Batch plutôt que unitaire',
  reponse6: 'Traitement asynchrone',
  reponse7: 'Image AVIF/WEBP',
  reponse8: 'Compression/minification CSS',
};

function displayReponse(reponseNumber) {
  for (const reponse in Reponses) {
    if (reponse === reponseNumber) {
      document.getElementById(`${reponse}`).classList.toggle('flipped');
    }
  }
}