module.exports = function toReadable(number) {

    const strNum = {
        toTen: ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'],
        twenty: ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'],
        toHundred: ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    }

    if (!number) { return `zero` }

    const dgt = number.toString().split('').map(Number).reverse()

    let numsToTen = strNum.toTen[dgt[0] - 1] ? `${strNum.toTen[dgt[0] - 1]}` : ``

    dgt[1] === 1 ? numsToTen = strNum.twenty[dgt[0] - 1] : numsToTen

    const numsToHundred = strNum.toHundred[dgt[1] - 2] ? `${strNum.toHundred[dgt[1] - 2]} ` : ``

    const hundreds = dgt.length > 2 ? `${strNum.toTen[dgt[2] - 1]} hundred${numsToHundred || numsToTen ? ` ` : ``}` : ``

    return `${hundreds}${numsToHundred}${numsToTen}`
}


