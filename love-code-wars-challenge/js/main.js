
function howMuchILoveYou(nbPetals) {
    // your code
  let phrases = ['I love you', 'a little', 'a lot', 'passionately','madly', 'not at all']
  let index = (nbPetals-1) % (phrases.length)
  let phrase = phrases[index];
  return phrase
  }