/**
 * @file somthing
 * @lastModifiedTime 2019-11-13 20:55:30
 * @author KaiKaio <https://github.com/KaiKaio>
*/

const Development = 'http://localhost:4000/api'
const Production = 'https://www.rcment.top/api'

const apiConfig = {
  proxyUrl: '/proxy/',
  // baseUrl: Production,
  baseUrl: Development
}

export default apiConfig

