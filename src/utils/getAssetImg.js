const imgModules = import.meta.glob('@/assets/img/**/*', {
  eager: true,
  query: '?url',
  import: 'default',
})

export function getAssetImg(path) {
  const normalized = path.replace(/^\//, '').replace(/\\/g, '/')
  const entry = Object.entries(imgModules).find(([k]) =>
    k.replace(/\\/g, '/').endsWith(normalized)
  )
  return entry ? entry[1] : ''
}
