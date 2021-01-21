import consts from "./consts";

export default {
  shuffleArray: (arr) => {
    return arr.sort(() => Math.random() - 0.5);
  }
}