// colorText.js

const ANSI_CODES = {
  reset: '\x1b[0m',

  colors: {
    black: '\x1b[30m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    magenta: '\x1b[35m',
    cyan: '\x1b[36m',
    white: '\x1b[37m',
  },

  effects: {
    bold: '\x1b[1m',
    italic: '\x1b[3m',
    underline: '\x1b[4m',
    inverse: '\x1b[7m'
  }
};

const RAINBOW_SEQUENCE = [
  ANSI_CODES.colors.red,
  ANSI_CODES.colors.yellow,
  ANSI_CODES.colors.green,
  ANSI_CODES.colors.cyan,
  ANSI_CODES.colors.blue,
  ANSI_CODES.colors.magenta,
];

export function color(text, colorName = null, effects = []) {
  if (!Array.isArray(effects)) effects = [effects];

  if (effects.includes('rainbow')) {
    return applyRainbow(text, effects);
  }

  let style = '';

  if (colorName && ANSI_CODES.colors[colorName]) {
    style += ANSI_CODES.colors[colorName];
  }

  for (const effect of effects) {
    if (ANSI_CODES.effects[effect]) {
      style += ANSI_CODES.effects[effect];
    }
  }

  return style + text + ANSI_CODES.reset;
}

function applyRainbow(text, otherEffects = []) {
  const extraStyle = otherEffects
    .filter(e => e !== 'rainbow')
    .map(e => ANSI_CODES.effects[e] || '')
    .join('');

  let out = '';
  for (let i = 0; i < text.length; i++) {
    const color = RAINBOW_SEQUENCE[i % RAINBOW_SEQUENCE.length];
    out += color + extraStyle + text[i];
  }
  return out + ANSI_CODES.reset;
}
