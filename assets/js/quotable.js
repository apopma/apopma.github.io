/* jshint multistr: true */

(function($) {

  var $window = $(window);
  $window.on('load', addRandomQuote);

  function addRandomQuote() {
    var rand = Math.floor(Math.random() * quotes.length);
    $("#quotable").html(quotes[rand]);
  }

  var quotes = [
    "When I heard the learn’d astronomer,<br>\
    When the proofs, the figures,<br> were ranged in columns before me,<br>\
    When I was shown the charts and diagrams,<br> to add, divide, and measure them,<br>\
    When I, sitting, heard the astronomer where he lectured with much applause in the lecture-room,<br>\
    How soon, unaccountable, I became tired and sick,<br>\
    Till rising and gliding out I wander’d off by myself,<br>\
    In the mystical moist night-air, and, from time to time,<br>\
    Look’d up in perfect silence at the stars.<br>\
    <br>\
    — Walt Whitman",

    "Life is short,<br>\
    and pleasures few,<br>\
    and holed the ship,<br>\
    and drowned the crew,<br>\
    But O! But O!<br>\
    How very blue<br>\
    the sea is!<br>\
    <br>\
    — Clive Barker",

    "I must be nuts. Sense left with shoes and house,<br>\
    my guts are cramped. I’ll stumble through the green<br>\
    back to my roots, and leaves and thorns and buds,<br>\
    and shiver.<br>\
    <br>\
    I’ll leave the way of words to walk the wood<br>\
    I’ll be the forest’s man, and greet the sun,<br>\
    And feel the silence blossom on my tongue<br>\
    like language.<br>\
    <br>\
    — Neil Gaiman",

    "Bullshit makes the flowers grow<br>\
    and that's beautiful.<br>\
    <br>\
    — The Dishonest Book of Lies",

    "<code>this</code> is the daughter of <strong>BABALON</strong> the Beautiful,\
    that she hath borne unto the Father of All. And unto all hath she borne her.\
    <code>this</code> is the Daughter of the King.\
    <code>this</code> is the Virgin of Eternity.\
    <code>this</code> is she that the Holy One hath wrested from the Giant Time,\
    and the prize of them that have overcome Space.\
    <code>this</code> is she that is set upon the Throne of Understanding.\
    Holy, Holy, Holy is her name, not to be spoken among men.\
    For Kore they have called her, and Malkuth, and Betulah, and Persephone.<br>\
    <br>\
    — Aleister Crowley",

    "There's no getting away from yourself, is there?<br>\
    Not even in Fillory.<br>\
    <br>\
    — Lev Grossman"
  ];

})(jQuery);
