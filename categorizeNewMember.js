const openOrSenior = (data) => {
  return data.map((data) => {
    if(data[0] >= 55 && data[1] > 7) {
      return "Senior";
    } else {
      return "Open";
    };
  })
}

