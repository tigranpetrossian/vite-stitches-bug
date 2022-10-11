import { createStitches } from '@stitches/react';
import type Stitches from '@stitches/react';

export type { VariantProps as StitchesVariants } from '@stitches/react';

const config = createStitches({
  theme: {},
});

export type CSS = Stitches.CSS<typeof config>;
export type CSSProp = { css?: CSS };

export const { styled, css, globalCss, keyframes, theme, createTheme } = config;
