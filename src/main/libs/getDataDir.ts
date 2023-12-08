/**
 * @author: oldj
 * @homepage: https://oldj.net
 */

import * as path from 'path'
import { homedir } from 'os'
import { existsSync } from 'fs'

export function getDefaultDataDir() {
  const hDrivePath = 'H:\\'

  // 检查H盘是否存在
  if (existsSync(hDrivePath)) {
    return path.join(hDrivePath, '.SwitchHosts')
  }
  
  // 如果H盘不存在，则返回默认路径（用户的主目录）
  return path.join(homedir(), '.SwitchHosts')
}

export default (): string => {
  // todo data folder should be current working dir for portable version

  return global.data_dir || getDefaultDataDir()
}
