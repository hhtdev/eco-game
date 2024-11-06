const Reponses = {
  reponse1: 'réponse 1',
  reponse2: 'réponse 2',
  reponse3: 'réponse 3',
};

function displayReponse(reponseNumber) {
  for (const reponse in Reponses) {
    if (reponse === reponseNumber) {
      console.log(Reponses[reponse]);
    }
  }
}