export default ({ app }, inject) => {
  inject('path', (path) => {
    const arr = path.split('.')
    arr.pop()
    const res = arr.join('.')
    return res + '.jpg'
  })
}
