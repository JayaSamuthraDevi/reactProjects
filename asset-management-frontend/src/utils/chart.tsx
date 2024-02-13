import { CenterTextPluginOptions } from '../types/sidebar';
import { Chart } from 'chart.js';
export const getRandomColor = (): string => {
  const lightLetters = '89ABCDEF'; // lighter shades
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += lightLetters[Math.floor(Math.random() * 8)]; // Use 8 since there are 8 characters in lightLetters
  }
  return color;
};

export const centerTextPlugin = {
  afterDraw: (
    chart: Chart,
    args: any,
    pluginOptions: CenterTextPluginOptions
  ) => {
    const { ctx, width, height } = chart;
    const centerX = width / 2;
    const centerY = height / 2;

    const { text } = pluginOptions;

    const calculatedFontSize = 30;
    ctx.save();
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = `Arial ${calculatedFontSize}rem`;
    ctx.fillText(text, centerX, centerY);
    ctx.restore();
  },
};
