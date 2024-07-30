module.exports = function toReadable(number) {

    const toTen = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']
    const twenty = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'] //11-20
    const toHundred = ['', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']


    if (!number) { return `zero` }

    const upToHng = number % 100

    const upToHngString =
        upToHng === 0
            ? ``
            : upToHng <= 10
                ? toTen[upToHng - 1]
                : upToHng <= 20
                    ? twenty[upToHng - 10 - 1]
                    : upToHng % 10 === 0
                        ? toHundred[upToHng / 10 - 1]
                        : `${toHundred[Math.floor(upToHng / 10) - 1]} ${toTen[upToHng % 10 - 1]}`


    const hng = (number - number % 100) / 100

    const hngString = hng !== 0 ? `${toTen[hng - 1]} hundred ` : ``

    return `${hngString}${upToHngString}`.trim()
}



