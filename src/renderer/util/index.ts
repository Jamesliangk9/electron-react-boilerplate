interface Config {
  orgid: string;
}

const configFileName = 'config.json';

async function getConfigFilePath(): Promise<string> {
  const userDataPath = await window.electron.getPath('userData');
  return window.electron.joinPath(userDataPath, configFileName);
}

export async function loadConfig(): Promise<Config | null> {
  const configPath = await getConfigFilePath();
  if (window.electron.existsSync(configPath)) {
    const configContent = window.electron.readFileSync(configPath);
    return JSON.parse(configContent) as Config;
  }

  return null;
}

export async function saveConfig(orgid: string): Promise<void> {
  const configPath = await getConfigFilePath();
  const config = { orgid };
  window.electron.writeFileSync(configPath, JSON.stringify(config));
}
