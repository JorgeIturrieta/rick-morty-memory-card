const getRandomIds = (totalCharacters: number) => {
  const arr = []
  while (arr.length < totalCharacters) {
    const r = Math.floor(Math.random() * 826) + 1
    if (arr.indexOf(r) === -1) {
      arr.push(r)
    }
  }
  return arr
}

export default getRandomIds
