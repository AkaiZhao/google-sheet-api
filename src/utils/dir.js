const fs = require('fs').promises
const rimraf = require('rimraf')

// 移除資料夾
const removeDir = async dirPath => {
  const isTargetDirExist = await fs.readdir(dirPath)
    .then(() => true)
    .catch(() => false)
  if (isTargetDirExist) return rimraf.sync(dirPath)
}

// 建立資料夾
const createDir = async dirPath => {
  const isTargetDirExist = await fs.readdir(dirPath)
    .then(() => true)
    .catch(() => false)
  if (!isTargetDirExist) return fs.mkdir(dirPath, { recursive: true })
}

// 把資料夾刪除在重建
const resetDir = async (path) => {
  await removeDir(path)
  await createDir(path)
  console.log('重置資料夾\n---')
}

module.exports = { removeDir, createDir, resetDir }
