export const keyCodeMap = "ABCEDFGHIJKLMNOPQRSTUVWXYZ".split("")
  .reduce((acc, letter, index) => ({
    ...acc,
    ...{
      [letter]: 65+index,
      [letter.toLowerCase()]: 91+index,
    }
  }), {});

export const matchCodeToKeyPress = (keyCode: number): IKeyPress => ({
  keyCode,
  keyName: String.fromCharCode(keyCode),
});