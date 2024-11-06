const Reponses = {
  reponse1: 'réponse 1',
  reponse2: 'réponse 2',
  reponse3: 'réponse 3',
  reponse4: 'réponse 4',
  reponse5: 'réponse 5',
  reponse6: 'réponse 6',
  reponse7: 'réponse 7',
  reponse8: 'réponse 8',
};

function displayReponse(reponseNumber) {
  for (const reponse in Reponses) {
    if (reponse === reponseNumber) {
      console.log(Reponses[reponse]);
      document.getElementById(reponse).innerHTML = Reponses[reponse];
    }
  }
}