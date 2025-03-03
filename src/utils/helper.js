function splitByFirstSpace(str) {
  const index = str.indexOf(" "); //find index of first space
  if (index === -1) return [str, ""]; //if not exsit space in str do this
  return [str.slice(0, index), str.slice(index + 1)];
}

export { splitByFirstSpace };
