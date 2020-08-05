
function highlighted(strings, ...values) {
    let temp = ''
    strings.forEach((str, x) => {
      temp += str
      if (values[x]) {
        temp += `<mark>${values[x]}</mark>`
      }
    })
    return temp
  }
  
  const author = 'Nik'
  const statement = 'I am ver fond of fishes and I love to keep different kinds of them such as goldfish, betta and many more'
  const quote = highlighted `${author} once said ${statement}`
  console.log(quote);