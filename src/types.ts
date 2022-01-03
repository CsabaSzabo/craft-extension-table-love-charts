import { DevicePlatform } from '@craftdocs/craft-extension-api';

export type TLCSettings = {
  insertImage: boolean;
}

export type ChartConfig = {
  type: "line" | "bar";
  xColumnIndex: number;
  series: ChartConfigSeries[];
  useFirstRowAsSeriesLabels: boolean;
}

export type ChartConfigSeries = {
  yColumnIndex: number;
  label?: string;
}

export type CraftEnv = {
  isDarkMode: boolean;
  platform: DevicePlatform;
}