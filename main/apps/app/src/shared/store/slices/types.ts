export enum EThemes {
  Dark = "dark",
  Light = "light",
}

export interface ISettingsState {
  theme: EThemes;
  pcapName: string | undefined;
  userName: string | undefined;
}
