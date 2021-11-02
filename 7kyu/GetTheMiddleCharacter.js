function getMiddle(s)
{
  //Code goes here!
  let l = s.length;
  if(l%2 ===0) return s[(s.length/2)-1] + s[s.length/2];
  if(l%2 ===1) return s[Math.floor(s.length/2)];
}
