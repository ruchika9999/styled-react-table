export enum TextAlign {
  START = 'start',
  END = 'end',
  CENTER = 'center',
  JUSTIFY = 'justify',
  FLEX_END = 'flex-end',
}

export enum TableSelectType {
  MULTI = 'MULTI',
  SINGLE = 'SINGLE',
  DEFAULT = 'DEFAULT',
}

export interface ThemeType {
  tableStyle: {
    breakpoints: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    colors: {
      primary: string;
      secondary: string;
      dark: string;
      light: string;
      primaryColorScaleOne: string;
      primaryColorScaleTwo: string;
      fontColor: string;
      grayScaleLevelOne: string;
      grayScaleLevelTwo: string;
      tableHeader: string;
      tableBorderColor: string;
    };
    fontSize: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  };
}
