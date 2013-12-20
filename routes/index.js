
/*
 * GET home page.
 */

exports.index = function(req, res) {
  var crypto = require('crypto');

  var cards = [
    {
      id: getUid(),
      message: 'Happy Christmas and a very Merry New Year!',
      photo: 'Nadzeya_Kerus'
    },
    {
      id: getUid(),
      message: 'Merry Christmas and Happy New Year!',
      photo: 'Alex-Simanovich'
    },
    {
      id: getUid(),
      message: 'Congratulations on Christmas and New Year! Christmas fills the world with the magic of believing. Wishing you a joyous Christmas and a bright and beautiful New Year!',
      photo: 'Alena-Mikhina'
    },
    {
      id: getUid(),
      message: 'May the Christmas cheer, run throughout the year... Merry Christmas and Happy New Year!',
      photo: 'Tatsiana'
    },
    {
      id: getUid(),
      message: 'The magic of Christmas never ends…Wishing you all the wonder and beauty of Christmas!<br>May beautiful moments and happy memories surround you with joy.<br>Happy Christmas and Merry New Year!',
      photo: 'Yadviha-Lukashyk'
    },
    {
      id: getUid(),
      message: 'The magic of Christmas never ends…Wishing you all the wonder and beauty of Christmas!<br>May beautiful moments and happy memories surround you with joy.<br>Happy Christmas and Merry New Year!',
      photo: 'Taras-Fishchuk'
    },
    {
      id: getUid(),
      message: 'Wish you a very happy New Year, let the most courageous dreams come true!',
      photo: 'Siarhey-Churilo'
    },
    {
      id: getUid(),
      message: 'foreach ($nbcTeam as $teamMember) {<br>' +
          'do {<br>' +
            '$gift = GiftFactory::generateCoolGift();<br>' +
            '$teamMember->addGift($gift);<br>' +
          '}<br>' +
        'while (!$teamMember->isHappy());<br>' +
        '}',
      className: 'small code',
      photo: 'Aliaksei-Yakhnenka'
    },
    {
      id: getUid(),
      message: 'May this year brings success to all your projects and beginnings!',
      photo: 'Rastsislau-Siarheyankou'
    },
    {
      id: getUid(),
      message: 'Happy Christmas and a very Merry New Year!',
      photo: 'Yauheni-Pas'
    },
    {
      id: getUid(),
      message: '"Merry Christmas and Happy New Year! Best wishes for the holidays and for prosperity throughout the coming year for NBC team! :)"',
      photo: 'Andrey-Tsirkun'
    },
    {
      id: getUid(),
      message: 'Happy Christmas and a very Merry New Year!',
      photo: 'Dzmitry-Svirydonau'
    },
    {
      id: getUid(),
      message: 'Happy Christmas and a very Merry New Year!',
      photo: 'Ivan-Straltsou'
    }
  ];

  res.render('index', {
    year: (new Date()).getFullYear() + 1,
    cards: cards
  });

  function getUid() {
    return crypto.randomBytes(20).toString('hex');
  }
};