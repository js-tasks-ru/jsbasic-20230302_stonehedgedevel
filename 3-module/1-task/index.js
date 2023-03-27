function namify(users) {
  let names = [];

  users.forEach((user) => {
    Object.entries(user).forEach(([key, value]) => {
      if (key === 'name') {
        names.push(value);
      }
    });
  });

  return names;
}
