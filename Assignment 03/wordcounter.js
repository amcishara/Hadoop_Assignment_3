const fs = require('fs');


function countWords() {
  
  fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the file:', err);
      return;
    }

   
    const words = data.toLowerCase().split(/\s+/); 
    const wordCounts = {};

    
    words.forEach((word) => {
      word = word.replace(/[^a-zA-Z0-9]/g, ''); 
      if (word) { 
        wordCounts[word] = (wordCounts[word] || 0) + 1;
      }
    });

   
    console.log('Word counts:');
    for (const [word, count] of Object.entries(wordCounts)) {
      console.log(`${word}: ${count}`);
    }
  });
}


countWords();