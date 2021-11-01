function likes(names) {
  // TODO
  let len = names.length;
  if(len == 0) return "no one likes this";
  if(len === 1) return names[0] + " likes this";
  if(len === 2) return names[0]+" and "+ names[1] + " like this";
  if(len === 3) return names[0]+", "+ names[1] + " and " + names[2] + " like this";
  if(len > 3)  return names[0]+", "+ names[1] + " and " + (names.length - 2) + " others like this";
  }
