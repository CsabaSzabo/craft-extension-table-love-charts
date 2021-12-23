import * as React from "react"
import * as ReactDOM from 'react-dom'
import {
  DevicePlatform,
  CraftTextRun,
  CraftTextBlock,
  CraftTextBlockInsert,
  TextStyle,
  ListStyle,
} from '@craftdocs/craft-extension-api';
import { getCurrentDocument } from "./craftdata";
import { init, track, trackPages, parameters } from "insights-js";

// Constants
declare const INSIGHTS_PROJECT_KEY: string | null; // from webpack
declare const IS_DEV_MODE: boolean; // from webpack

// Types
import { CraftEnv, TLCSettings } from "./types"

// Components
import { Settings } from "./Settings";

const App: React.FC<{}> = () => {
  const craftEnv = useCraftEnv();
  
  // TLC loading and error states
  const [loading, setLoading] = React.useState(true);
  const [documentError, setDocumentError] = React.useState<Error | null>(null);

  // TLC content
  const [settings, setSettings] = React.useState<TLCSettings>({
    insertImage: true
  });
  const [currentPageId, setCurrentPageId] = React.useState<string | null>(null);

  function onToggleSettingsCheckbox(event: React.ChangeEvent<HTMLInputElement>, setting: keyof TLCSettings) {
    const newSettings = {
      ...settings,
      [setting]: event.target.checked,
    };
    setSettings(newSettings);
  }

  function reloadChart() {
    setLoading(true);
    loadDocumentItems()
      .then(tableOfContentsRootBlock => {
        const textSubBlocks = tableOfContentsRootBlock.subblocks as CraftTextBlock[];
        // TODO: generate chart
        setCurrentPageId(tableOfContentsRootBlock.id);
      })
      .catch(err => {
        setDocumentError(err);
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  React.useEffect(() => {
    reloadChart();
  }, [settings]);

  React.useEffect(() => {
    if (craftEnv.isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [craftEnv.isDarkMode]);

  function getAnalyticsParamters() {
    return {
      isDarkMode: craftEnv.isDarkMode ? 'dark' : 'light',
      platform: craftEnv.platform,
      settingsInsertImage: settings.insertImage.toString(),
    }
  }

  return (
    <div id="app">
      <header className={craftEnv.isDarkMode ? 'header-dark' : 'header-light'}>
        <div></div>
        <div className="title">Table ❤️ Charts</div>
        <div></div>
      </header>
      <main>
        { loading ? (
          <div className="loading-container">
            <div className={`loading-spinner ${craftEnv.isDarkMode ? 'dark' : 'light'}`} />
            <label>Loading...</label>
          </div>
        ) : documentError ?
          (<p className={`error-message ${craftEnv.isDarkMode ? 'dark' : 'light'}`}>Error happened in document download. Please try again</p>) :
          (
            <>
              <Settings
                isDarkMode={craftEnv.isDarkMode}
                settings={settings}
                onToggleSettingsCheckbox={onToggleSettingsCheckbox}
              />

              {
                <p>TODO: Generated Chart</p>
              }
            </>
          )
        }
      </main>
      <footer className={craftEnv.isDarkMode ? 'footer-dark' : 'footer-light'}>
        <span>Created by <a className={craftEnv.isDarkMode ? 'authorlink-dark' : 'authorlink-light'} href="https://csabaszabo.dev/" target="_blank">csabaszabo</a></span>
      </footer>
    </div>
  )

  
}

function useCraftEnv(): CraftEnv {
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const [platform, setPlatform] = React.useState<DevicePlatform>("Web");

  React.useEffect(() => {
    craft.env.setListener(env => {
      setIsDarkMode(env.colorScheme === "dark")
      setPlatform(env.platform)
    });
  }, []);

  return {
    isDarkMode,
    platform
  };
}

async function loadDocumentItems() {
  return await getCurrentDocument(IS_DEV_MODE);
}

export function initApp() {
  if (!IS_DEV_MODE && INSIGHTS_PROJECT_KEY) {
    init(INSIGHTS_PROJECT_KEY);
    trackPages();
  }
  ReactDOM.render(<App />, document.getElementById('react-root'))
}
