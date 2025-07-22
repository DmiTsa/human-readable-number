module.exports = function toReadable(number) {
  const toTen = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
  ];
  const twenty = [
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
    'twenty',
  ]; // 11-20
  const toHundred = [
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  if (!number) {
    return `zero`;
  }

  const upToHng = number % 100;

  let upToHngString;

  if (upToHng === 0) {
    upToHngString = ``;
  } else if (upToHng <= 10) {
    upToHngString = toTen[upToHng - 1];
  } else if (upToHng <= 20) {
    upToHngString = twenty[upToHng - 10 - 1];
  } else if (upToHng % 10 === 0) {
    upToHngString = toHundred[upToHng / 10 - 1];
  } else {
    upToHngString = `${toHundred[Math.floor(upToHng / 10) - 1]} ${toTen[(upToHng % 10) - 1]}`;
  }

  const hng = (number - (number % 100)) / 100;

  let hngString;

  if (hng !== 0) {
    hngString = `${toTen[hng - 1]} hundred `;
  } else {
    hngString = ``;
  }

  return `${hngString}${upToHngString}`.trim();
};
