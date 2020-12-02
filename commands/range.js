const program = require('commander');

program.parse(process.argv);
const age = Number(program.args[0]);
if (age === 0 || Number.isNaN(age)) {
  throw Error('引数が正しくないか､指定されていません\nexample:\n$ node commands/range 20');
}

function* range(start, end) {
  while(start <= end) {
    yield start++;
  }
}

const result = [...range(0, age)].join(', ');
console.log(result, '\n');
