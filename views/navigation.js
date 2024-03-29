const {QUICK_START} = require('./quick_start/routePaths')
const {DEMOS} = require('./demos/routePaths')
const {PAGES} = require('./pages/routePaths')
const {TRANSITIONS} = require('./transitions/routePaths')

const navigation = [
    {
        label: 'Demos',
        key: 'demos',
        display: 'grid',
        repeat: '4',
        entries: [
            {
                group: [
                    {
                        label: 'Light mode demos',
                        entries: [
                            {
                                label: 'Startup',
                                href: DEMOS.STARTUP,
                            },
                            {
                                label: 'Design Studio',
                                href: DEMOS.DESIGN_STUDIO,
                            },
                            {
                                label: 'Branding Agency',
                                href: DEMOS.BRANDING,
                            },
                            {
                                label: 'Digital Product',
                                href: DEMOS.DIGITAL_PRODUCT,
                            },
                            {
                                label: 'Creative Studio',
                                href: DEMOS.CREATIVE_STUDIO,
                            },
                            {
                                label: 'Freelance',
                                href: DEMOS.FREELANCE,
                            },
                            {
                                label: 'Development Studio',
                                href: DEMOS.DEVELOPMENT_STUDIO,
                            },
                            {
                                label: 'Corporate',
                                href: DEMOS.CORPORATE,
                            },
                            {
                                label: 'Creative Agency',
                                href: DEMOS.CREATIVE_AGENCY,
                            },

                        ]
                    },
                    {
                        label: '',
                        entries: [
                            {
                                label: 'Furniture',
                                href: DEMOS.FURNITURE,
                            },
                            {
                                label: 'Modern Shop',
                                href: DEMOS.MODERN_SHOP,
                            },
                            {
                                label: 'Classic Shop',
                                href: DEMOS.CLASSIC_SHOP,
                            },
                            {
                                label: 'Legal',
                                href: DEMOS.LEGAL,
                            },
                            {
                                label: 'Fitness',
                                href: DEMOS.FITNESS,
                            },
                            {
                                label: 'Architecture',
                                href: DEMOS.ARCHITECTURE,
                            },
                            {
                                label: 'Marketplace',
                                href: DEMOS.MARKETPLACE,
                            },
                            {
                                label: 'Restaurant',
                                href: DEMOS.RESTAURANT,
                            },
                            {
                                label: 'Portfolio',
                                href: '#',
                            },
                        ]
                    }
                ],
            },
            {
                group: [
                    {
                        label: 'Dark mode demos',
                        entries: [
                            {
                                label: 'Startup',
                                href: `${DEMOS.STARTUP}?theme=dark`,
                            },
                            {
                                label: 'Design Studio',
                                href: `${DEMOS.DESIGN_STUDIO}?theme=dark`,
                            },
                            {
                                label: 'Branding Agency',
                                href: `${DEMOS.BRANDING}?theme=dark`,
                            },
                            {
                                label: 'Digital Product',
                                href: `${DEMOS.DIGITAL_PRODUCT}?theme=dark`,
                            },
                            {
                                label: 'Creative Studio',
                                href: `${DEMOS.CREATIVE_STUDIO}?theme=dark`,
                            },
                            {
                                label: 'Freelance',
                                href: `${DEMOS.FREELANCE}?theme=dark`,
                            },
                            {
                                label: 'Development Studio',
                                href: `${DEMOS.DEVELOPMENT_STUDIO}?theme=dark`,
                            },
                            {
                                label: 'Corporate',
                                href: `${DEMOS.CORPORATE}?theme=dark`,
                            },
                            {
                                label: 'Creative Agency',
                                href: `${DEMOS.CREATIVE_AGENCY}?theme=dark`,
                            },

                        ]
                    },
                    {
                        label: '',
                        entries: [
                            {
                                label: 'Furniture',
                                href: `${DEMOS.FURNITURE}?theme=dark`,
                            },
                            {
                                label: 'Modern Shop',
                                href: `${DEMOS.MODERN_SHOP}?theme=dark`,
                            },
                            {
                                label: 'Classic Shop',
                                href: `${DEMOS.CLASSIC_SHOP}?theme=dark`,
                            },
                            {
                                label: 'Legal',
                                href: `${DEMOS.LEGAL}?theme=dark`,
                            },
                            {
                                label: 'Fitness',
                                href: `${DEMOS.FITNESS}?theme=dark`,
                            },
                            {
                                label: 'Architecture',
                                href: `${DEMOS.ARCHITECTURE}?theme=dark`,
                            },
                            {
                                label: 'Marketplace',
                                href: `${DEMOS.MARKETPLACE}?theme=dark`,
                            },
                            {
                                label: 'Restaurant',
                                href: `${DEMOS.RESTAURANT}?theme=dark`,
                            },
                            {
                                label: 'Portfolio',
                                href: '#',
                            },
                        ]
                    }
                ],
            }
        ],
    },
    {
        label: 'Pages',
        key: 'pages',
        display: 'multilevel',
        entries: [
            {
                label: 'About',
                entries: [
                    {
                        href: PAGES.ABOUT_US,
                        label: 'About Us',
                    },
                    {
                        href: PAGES.ABOUT_ME,
                        label: 'About Me',
                    },
                    {
                        href: PAGES.ABOUT_B_SYSTEM,
                        label: 'About B_System',
                    },
                    {
                        href: PAGES.HOW_WE_WORK,
                        label: 'How we work',
                    },
                ]
            },
            {
                label: 'Services',
                entries: [
                    {
                        href: PAGES.OUR_SERVICES,
                        label: 'Our services',
                    },
                    {
                        href: PAGES.WHAT_WE_OFFER,
                        label: 'What we offer',
                    }
                ]
            },
            {
                label: 'Our work',
                entries: [
                    {
                        href: PAGES.PORTFOLIO_CLASSIC_GRID,
                        label: 'Portfolio classic grid',
                    },
                    {
                        href: PAGES.PORTFOLIO_CLASSIC_WIDE,
                        label: 'Portfolio classic wide',
                    },
                    {
                        href: PAGES.PORTFOLIO_GALLERY_WIDE,
                        label: 'Portfolio gallery wide',
                    },
                    {
                        href: PAGES.PORTFOLIO_MASONRY,
                        label: 'Portfolio masonry',
                    },
                    {
                        href: PAGES.PORTFOLIO_MASONRY_PATH,
                        label: 'Portfolio masonry path',
                    },
                    {
                        href: PAGES.PORTFOLIO_PATTERN,
                        label: 'Portfolio pattern',
                    },
                    {
                        href: PAGES.SERVICES_PORTFOLIO,
                        label: 'Services portfolio',
                    }
                ]
            },
            {
                label: 'Our team',
                entries: [
                    {
                        href: PAGES.TEAM_CLASSIC,
                        label: 'Team classic',
                    },
                    {
                        href: PAGES.TEAM_MODERN,
                        label: 'Team modern',
                    }
                ]
            },
            {
                label: 'Product',
                entries: [
                    {
                        href: PAGES.PRODUCT_CLASSIC,
                        label: 'Product classic',
                    },
                    {
                        href: PAGES.PRODUCT_MODERN,
                        label: 'Product modern',
                    },
                ]
            },
            {
                label: 'Customer',
                entries: [
                    {
                        href: PAGES.CUSTOMER_SUPPORT,
                        label: 'Customer Support',
                    },
                    {
                        href: PAGES.TESTIMONIALS,
                        label: 'Testimonials',
                    },
                ]
            },
            {
                label: 'Contact',
                entries: [
                    {
                        href: PAGES.CONTACT_CLASSIC,
                        label: 'Contact classic',
                    },
                    {
                        href: PAGES.PRODUCT_PACKS,
                        label: 'Product packs',
                    },
                ]
            },
        ]
    },
    {
        label: 'Modules',
        key: 'modules',
        display: 'multilevel',
        entries: [
            {
                label: 'Menus',
                entries: [
                    {
                        href: QUICK_START.HEADERS,
                        label: 'Header menus',
                    },
                    {
                        href: QUICK_START.CATEGORIES_MENU,
                        label: 'Categories menu',
                    },
                    {
                        href: QUICK_START.CONTACT_BAR,
                        label: 'Contact menu',
                    },
                ]
            },
            {
                label: 'Headers',
                entries: [
                    {
                        href: QUICK_START.MARQUEES.BASIC,
                        label: 'Marquee basic',
                    },
                    {
                        href: QUICK_START.MARQUEES.STANDAR,
                        label: 'Marquee standard',
                    },

                    {
                        href: QUICK_START.MARQUEES.EXTENDED,
                        label: 'Marquee extended',
                    },
                    {
                        href: QUICK_START.MARQUEES.ILLUSTRATION,
                        label: 'Marquee illustration',
                    },

                    {
                        href: QUICK_START.MARQUEES.IMAGE,
                        label: 'Marquee image',
                    },
                    {
                        href: QUICK_START.MARQUEES.CTA,
                        label: 'Marquee text',
                    },
                    {
                        href: QUICK_START.MARQUEES.TEXTIMAGE,
                        label: 'Marquee text + image',
                    },
                ]
            },
            {
                label: 'Content',
                entries: [
                    {
                        href: QUICK_START.BASIC_CONTENTS,
                        label: 'Basic Content',
                    },
                    {
                        href: QUICK_START.BUSINESS_CASES,
                        label: 'Business Cases',
                    },
                    {
                        href: QUICK_START.ICON_DESCRIPTION,
                        label: 'Icon description'
                    },
                    {
                        href: QUICK_START.ICON_SERVICES,
                        label: 'Services',
                    },
                    {
                        href: QUICK_START.ICONS_SOCIAL,
                        label: 'Social module',
                    },
                    {
                        href: QUICK_START.CTA,
                        label: 'Call to action',
                    },
                    {
                        href: QUICK_START.FAQS,
                        label: 'FAQs',
                    },
                    {
                        href: QUICK_START.STATISTICS,
                        label: 'Statistics',
                    },
                    {
                        href: QUICK_START.FEATURED_CONTENTS,
                        label: 'Featured content',
                    },
                    {
                        href: QUICK_START.BRANDS,
                        label: 'Brands',
                    },
                ]
            },
            {
                label: 'Grids',
                entries: [
                    {
                        href: QUICK_START.BASIC_GRID,
                        label: 'Basic grid',
                    },
                    {
                        href: QUICK_START.TEAM_GRIDS,
                        label: 'Team grid',
                    },
                    {
                        href: QUICK_START.SERVICE_GRIDS,
                        label: 'Service grid',
                    },
                    {
                        href: QUICK_START.PORTFOLIOS.BASIC,
                        label: 'Portfolio grid',
                    },
                    {
                        href: QUICK_START.PORTFOLIOS.DECOMPOSED,
                        label: 'Portfolio deconstructed',
                    },
                ]
            },
            {
                label: 'Cards',
                entries: [
                    {
                        href: QUICK_START.FEATURED_CARDS,
                        label: 'Featured',
                    },
                    {
                        href: QUICK_START.SERVICES,
                        label: 'Services',
                    },
                    {
                        href: QUICK_START.PRODUCT_GRIDS,
                        label: 'Product',
                    },
                    {
                        href: QUICK_START.TESTIMONIALS,
                        label: 'Testimonials',
                    },
                    {
                        href: QUICK_START.PRICES,
                        label: 'Prices',
                    },
                    {
                        href: QUICK_START.DIGITAL_PRODUCTS,
                        label: 'Digital Products',
                    },
                ]
            },
            {
                label: 'Forms',
                entries: [
                    {
                        href: QUICK_START.CONTACTS,
                        label: 'Contact',
                    },
                    {
                        href: QUICK_START.LOGINS,
                        label: 'Login',
                    },
                    {
                        href: QUICK_START.SEARCHERS,
                        label: 'Searchers',
                    },
                ]
            },
            {
                label: 'Footers',
                entries: [
                    {
                        href: QUICK_START.FOOTERS.BASIC,
                        label: 'Basic',
                    },
                    {
                        href: QUICK_START.FOOTERS.STANDARD,
                        label: 'Standard',
                    },
                    {
                        href: QUICK_START.FOOTERS.NEWSLETTER,
                        label: 'Newsletter',
                    },
                    {
                        href: QUICK_START.FOOTERS.CORPORATE,
                        label: 'Corporate',
                    },
                ]
            },
        ],
    },
    {
        label: 'Components',
        key: 'components',
        display: 'grid',
        repeat: 2,
        entries: [
            {
                group: [
                    {
                        label: 'Components',
                        entries: [
                            {
                                href: QUICK_START.BUTTONS,
                                label: 'Buttons',
                            },
                            {
                                href: QUICK_START.FORMS,
                                label: 'Forms',
                            },
                            {
                                href: QUICK_START.INTERACTION,
                                label: 'Interaction',
                            },
                            {
                                href: QUICK_START.CARDS,
                                label: 'Cards',
                            },
                            {
                                href: QUICK_START.PRODUCT_CARDS,
                                label: 'Product Cards',
                            },
                            {
                                href: QUICK_START.LINKS,
                                label: 'Links',
                            },
                            {
                                href: QUICK_START.GRID_CELLS,
                                label: 'Grid cells',
                            },
                            {
                                href: QUICK_START.ICON_DESCRIPTION_COMPONENT,
                                label: 'Icon + description',
                            },
                            {
                                href: QUICK_START.ACCORDIONS,
                                label: 'Accordions',
                            },
                            {
                                href: QUICK_START.ALERTS,
                                label: 'Alerts',
                            },
                        ]
                    }
                ]
            },
            {
                group: [
                    {
                        label: 'Brand elements',
                        entries: [
                            {
                                href: QUICK_START.ILLUSTRATIONS,
                                label: 'Illustrations',
                            },
                            {
                                href: QUICK_START.SCENES,
                                label: 'Illustrations Scenes',
                            },
                            {
                                href: QUICK_START.MICROILLUSTRATIONS,
                                label: 'Microillustrations',
                            },
                            {
                                href: QUICK_START.ICONS,
                                label: 'Icons',
                            },
                            {
                                href: QUICK_START.TEXTS,
                                label: 'Texts',
                            },
                        ]
                    }
                ]
            }
        ],
    },
    {
        label: 'Transitions',
        key: 'transitions',
        display: 'multilevel',
        entries: [
            {
                label: 'Attention seekers',
                entries: [
                    {
                        href: TRANSITIONS.BOUNCE,
                        label: 'Bounce',
                    },
                    {
                        href: TRANSITIONS.FLASH,
                        label: 'Flash',
                    },
                    {
                        href: TRANSITIONS.PULSE,
                        label: 'Pulse',
                    },
                    {
                        href: TRANSITIONS.RUBBERBAND,
                        label: 'RubberBand',
                    },
                    {
                        href: TRANSITIONS.SHAKEX,
                        label: 'ShakeX',
                    },
                    {
                        href: TRANSITIONS.SHAKEY,
                        label: 'ShakeY',
                    },
                    {
                        href: TRANSITIONS.HEADSHAKE,
                        label: 'HeadShake',
                    },
                    {
                        href: TRANSITIONS.SWING,
                        label: 'Swing',
                    },
                    {
                        href: TRANSITIONS.TADA,
                        label: 'Tada',
                    },
                    {
                        href: TRANSITIONS.WOBBLE,
                        label: 'Wobble',
                    },
                    {
                        href: TRANSITIONS.JELLO,
                        label: 'Jello',
                    },
                    {
                        href: TRANSITIONS.HEARTBEAT,
                        label: 'HeartBeat',
                    },
                ]
            },
            {
                label: 'Back entrances',
                entries: [
                    {
                        href: TRANSITIONS.BOUNCE,
                        label: 'BackInDown',
                    },
                    {
                        href: TRANSITIONS.FLASH,
                        label: 'BackInLeft',
                    },
                    {
                        href: TRANSITIONS.PULSE,
                        label: 'BackInRight',
                    },
                    {
                        href: TRANSITIONS.RUBBERBAND,
                        label: 'BackInUp',
                    },

                ]
            },
        ],
    },
]
module.exports = navigation












