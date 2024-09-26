function writeCards(names) {
    const messages = [];
  
    for (const name of names) {
      const message = `Thank you, ${name}, for the wonderful surprise gift!`;
      messages.push(message);
    }
  
    return messages;
  }
  
  function countDown(number) {
    for (let i = number; i >= 0; i--) {
      console.log(i);
    }
  }
  
  module.exports = { writeCards, countDown };