function getSize(width, height, depth){
  let area = 2 * ((height * width) + (width * depth) + (height * depth));
  let volume = (width * height * depth);

  return [area, volume]
}
