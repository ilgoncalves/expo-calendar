const leftPad = (value: number, totalWidth: number, paddingChar?: string) => {
  var length = totalWidth - value.toString().length + 1;
  return Array(length).join(paddingChar || "0") + value;
};

const addAlpha = (color: string, opacity: number): string => {
  const _opacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255);
  return color + _opacity.toString(16).toUpperCase();
};

export { leftPad, addAlpha };
