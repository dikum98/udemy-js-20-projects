function solution(a, b) {
  const day = new Date(2016, a - 1, b).getDay();
  switch (day) {
    case 0:
      return "SUN";
      break;
    case 1:
      return "MON";
      break;
    case 2:
      return "TUE";
      break;
    case 3:
      return "WED";
      break;
    case 4:
      return "THU";
      break;
    case 5:
      return "FRI";
      break;
    case 6:
      return "SAT";
      break;
  }
}

function solution(a, b) {
  return ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"][
    new Date(2016, a - 1, b).getDay()
  ];
}

function solution(a, b) {
  const dayArr = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  const monthArr = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let days = 0;
  for (let i = 1; i < a; i++) {
    days += monthArr[i - 1];
  }
  const answer = dayArr[(days + b - 1) % 7];
  return answer;
}
