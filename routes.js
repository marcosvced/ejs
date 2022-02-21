const express = require('express')

const router = express.Router()

const srcDirs = {
  assets: '/assets',
  image: '/assets/img',
  layout: `${process.cwd()}/lib/layouts`,
  component: `${process.cwd()}/lib/components`,
  view: `${process.cwd()}/views`,
}

const TITLE = 'B_System'

const ROUTES_NAMES = {
  QUICK_START: 'quick_start',
}

const ROUTES_PATHS = {
  QUICK_START: {
    HOME: '/home',
    HEADERS: '/headers',
    FOOTERS: {
      BASIC: '/footers/basic',
      CORPORATE: '/footers/corporate',
    },
    BUTTONS: '/buttons',
    ALERTS: '/alerts',
    ICONS: '/icons',
    LINKS: '/links',
    ILLUSTRATIONS: '/illustrations',
  },
}

/**
 * @param {string} view
 * @param {string} page
 * @param {array} children
 * @returns {string}
 */
function dir(view, page = 'home', children = []) {
  return `${view}/pages/${page}${children ? `/${children.join('/')}` : ''}/index.ejs`
}

/**
 * @param {Response} view
 * @param {string} path
 * @param {object} extras
 */
function render(view, path, extras = {}) {
  view.render(path, {
    title: TITLE,
    ...srcDirs,
    ...ROUTES_PATHS,
    layout: `${srcDirs.layout}/default`,
    ...extras,
  })
}

/* the default path "/" should redirect to Home */
router.get('/', (request, response) => {
  response.redirect(ROUTES_PATHS.QUICK_START.HOME)
})

/* home page. */
router.get(ROUTES_PATHS.QUICK_START.HOME, (request, response) => {
  render(response, dir(ROUTES_NAMES.QUICK_START))
})

/* headers page. */
router.get(ROUTES_PATHS.QUICK_START.HEADERS, (request, response) => {
  render(response, dir(ROUTES_NAMES.QUICK_START, 'modules', ['headers']))
})

/* footers page. */
router.get(ROUTES_PATHS.QUICK_START.FOOTERS.BASIC, (request, response) => {
  render(response, dir(ROUTES_NAMES.QUICK_START, 'modules', ['footers', 'basic']))
})

router.get(ROUTES_PATHS.QUICK_START.FOOTERS.CORPORATE, (request, response) => {
  render(response, dir(ROUTES_NAMES.QUICK_START, 'modules', ['footers', 'corporate']))
})

/* Buttons page. */
router.get(ROUTES_PATHS.QUICK_START.BUTTONS, (request, response) => {
  render(response, dir(ROUTES_NAMES.QUICK_START, 'components', ['buttons']))
})

/* Alerts page. */
router.get(ROUTES_PATHS.QUICK_START.ALERTS, (request, response) => {
  render(response, dir(ROUTES_NAMES.QUICK_START, 'components', ['alerts']))
})

/* Icons page. */
router.get(ROUTES_PATHS.QUICK_START.ICONS, (request, response) => {
  render(response, dir(ROUTES_NAMES.QUICK_START, 'components', ['icons']))
})

/* Links page. */
router.get(ROUTES_PATHS.QUICK_START.LINKS, (request, response) => {
  render(response, dir(ROUTES_NAMES.QUICK_START, 'components', ['links']))
})

/* Illustrations page. */
router.get(ROUTES_PATHS.QUICK_START.ILLUSTRATIONS, (request, response) => {
  render(response, dir(ROUTES_NAMES.QUICK_START, 'components', ['illustrations']))
})

module.exports = router
