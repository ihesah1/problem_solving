function isLanguageDiverse(list) {
    list = [
      list.filter(el => el.language==='Python').length,
      list.filter(el => el.language==='Ruby').length,
      list.filter(el => el.language==='JavaScript').length
    ]
    const max = Math.max(...list);
    return list.every(el => max / el <= 2);
  }
  