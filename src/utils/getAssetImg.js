const imgModules = import.meta.glob('@/assets/img/**/*', {
  eager: true,
  query: '?url',
  import: 'default',
})

export function getAssetImg(path) {
  // Normalize incoming path so callers can pass '/foo.jpg' or 'foo.jpg'.
  const normalized = path.replace(/^\//, '').replace(/\\/g, '/')
  // Resolve by suffix to keep call sites clean and independent from absolute module keys.
  const entry = Object.entries(imgModules).find(([k]) =>
    k.replace(/\\/g, '/').endsWith(normalized)
  )
  return entry ? entry[1] : ''
}
