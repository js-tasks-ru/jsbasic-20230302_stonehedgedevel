function showSalary(users, age) {
  let resultArray = [],
      resultString = '';
  
  users.forEach((user) => {
    if (user.age <= age) {
      resultArray.push(user);
    }
  });

  resultString = resultArray[0].name + ', ' + resultArray[0].balance;

  for (let i = 1; i < resultArray.length; i++) {
    resultString = resultString + '\n' + resultArray[i].name + ', ' + resultArray[i].balance;
  }

  return resultString;
}
