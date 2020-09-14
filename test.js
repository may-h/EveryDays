solution2(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]);

function solution(participant, completion) {
  var answer = "";

  participant.sort();
  completion.sort();

  for (let i in participant) {
    let name = participant[i];
    if (!(name == completion[i])) {
      answer = name;
      break;
    }
  }
  console.log(answer);
  return answer;
}

function solution2(participant, completion) {
  const parMap = new Map();

  for (let i in participant) {
    parMap.set(i, participant[i]);
  }

  for (let [key, value] of parMap) {
    if (completion.includes(value)) {
      parMap.delete(key);
      completion.splice(completion.indexOf(value), 1);
    }
  }

  console.log([...parMap.values()].join());
}
