import * as React from 'react';
import { TLCSettings } from './types';

type SettingsProps = {
  isDarkMode: boolean,
  settings: TLCSettings,
  onToggleSettingsCheckbox:(event: React.ChangeEvent<HTMLInputElement>, setting: keyof TLCSettings) => void,
}

export const Settings: React.FC<SettingsProps> = (props) => {
  const {
    isDarkMode,
    settings,
    onToggleSettingsCheckbox,
  } = props;
  
  return (
    <div className={`tlc-settings ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="settings">
        <div className="title">Settings</div>
        <div className="settingsItem">
          <label>
            <input
              name="addDeeplinks"
              type="checkbox"
              checked={settings.insertImage}
              onChange={(e) => onToggleSettingsCheckbox(e, 'insertImage')}
            />
            <span>Insert image</span>
          </label>
        </div>
      </div>
    </div>
  )
}