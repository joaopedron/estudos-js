var book = new Object();

book.title    = 'Design patterns with JS';
book.author   = 'João Pedro N.';
book.pages    = '678';
book.price    = '$109';

book.location = function (orgin, dest, light) {
  var priceLocation = '';
  return priceLocation;
}


book.chapters = new Object();

book.chapters.chapterOne   =  'Literals';
book.chapters.chapterOne   =  'Arrays';
book.chapters.chapterTwo   =  'Objects';
book.chapters.chapterTree  =  'Resquest Ajax';
book.chapters.chapterFour  =  'Resquest Json';
book.chapters.chapterFive  =  'Events and functions';


var books = {

  'title':  'Design patterns with JS',
  'author': 'João Pedro N.',
  'pages':  '678',
  'price':  '$109',
  
  'location' : function (orgin, dest, light) {
    var priceLocation = '';
    return priceLocation;
   },

   'chapters': {
    'chapterOne': 'Literals',
    'chapterTwo': 'Arrays',
    'chapterTree': 'Resquest Ajax',
    'chapterFour': 'Resquest Json',
    'chapterFive': 'Events and functions'
    }

};

var pares = '';

for (var prop in books) {
  
  if (typeof books[prop] == 'object') {

    for (var prop1 in books[prop]) {
      pares += prop1 + ": " + books[prop][prop1] + "\n";
    }

  } else {
     pares += prop + ": " + books[prop] + "\n";
  }

}

console.log(pares);

