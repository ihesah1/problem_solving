function isLanguageDiverse(list) {
    const obj = {
      Python: 0,
      Ruby: 0,
      JavaScript: 0
    };
    const arr = [];
    for (let el in list) {
      for (let key in obj) {
        if (list[el].language === key) obj[key]++;
      }
    }
    for (let key in obj) {
      arr.push(obj[key]);
    }
    const max = Math.max(...arr);
    return arr.every(el => max / el <= 2);
  }