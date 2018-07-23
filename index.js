function theBeatlesPlay(musicians, instruments) {
  for (var i = 0; i < musicians.length; i++) {
    console.log('${musicians[i]} plays ${instruments[i]}');
  }
  return theBeatlesPlay();
}
