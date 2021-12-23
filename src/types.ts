import { DevicePlatform } from '@craftdocs/craft-extension-api';

export type TLCSettings = {
  insertImage: boolean;
}

export type CraftEnv = {
  isDarkMode: boolean;
  platform: DevicePlatform;
}