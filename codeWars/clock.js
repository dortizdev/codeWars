function past(h, m, s){
  s = s*1000
  m = m*60000
  h = h*3600000
  return h+m+s
}
