module.exports = [
	{
		id: 'henesys-erp',
		timeline: "Jan, 2019 - Present",
		title: 'Henesys ERP',
		link: '/projects/henesys-erp',
		description: 'Henesys ERP is an enterprise software that was built to migrate and replace an existing legacy system built on MS-DOS. The platform allows wholesalers to quote, create, pick, invoice, and ship orders to their vendors while maintaining inventory management for various sales and accounting reports.',
		sections: [
			{
				title: 'Henesys ERP',
				titleDescriptions: [
					"Resources are managed and displayed in modular, robust, and flexible tabular views, while taking advantage of server side pagination, and query building with advanced filtering capabilities.", 
					"Furthermore, all resource oriented endpoints are built with authentication middleware. The permissions module allows the wholesale owners to create custom user roles for their employees, and attach the appropriate CRUD operations for each necessary resource. Once altered, the resource automatically takes into effect returning 401 status responses upon an unauthorized request or page navigation.",
					"The platform stack involves MongoDB, Express, Node, Vue, Docker, and AWS. Additionally technology frameworks and utility libraries include Vuetify, Tailwindcss, Postcss, and Webpack."
				],
				slides: [
					{ title: 'Henesys ERP Login', src: '/images/projects/henesys-erp/login.png' },
					{ title: 'Henesys ERP Orders', src: '/images/projects/henesys-erp/orders.png' },
					{ title: 'Henesys ERP Customer Management', src: '/images/projects/henesys-erp/customer-management.png' },
					{ title: 'Henesys ERP User Roles', src: '/images/projects/henesys-erp/administration-roles.png' },
				],
			}
		],
	},
	{
		id: 'websites',
		timeline: "June, 2020 - Present",
		title: 'Websites',
		link: '/projects/websites',
		description: 'The following listing are websites i\'ve developed over the years for freelance clients and close friends. The websites range from e-commerce to portfolio or content management related solutions. Technology involved in the development of these websites include Vue, Nuxt, Node, Express, MongoDB, and the payment processing SDK, Square.',
		sections: [
			{ 
				title: 'Henesys Group',
				titleDescriptions: ["The Henesys Group website is a Nuxt based project built to display and highlight the solutions and overview of Henesys Group Consulting. The site is generated and hosted statically on an AWS S3 bucket.","One of the solutions provided by Henesys Group Consulting include free shipping quotes with the option to purchase shipping labels for small to medium packages. Shipping providers integrated include Canpar, Canada Post, Purolator, and DHL."],
				link: 'https://henesysgroup.com/',
				slides: [
					{
						title: 'Henesys Group Homepage',
						src: '/images/projects/websites/henesys-group-homepage.png'
					},
					{
						title: 'Henesys Group Shipping Quote',
						src: '/images/projects/websites/henesys-group-shipping.png'
					},
					{
						title: 'Henesys Group Contact',
						src: '/images/projects/websites/henesys-group-contact.png'
					},
				]
			},
			{
				title: 'Gladiator Bikes',
				titleDescriptions: ["Gladiator Bikes is a Richmond based bike company that also serve as a client to Henesys Group's ERP platform. Inventory and store settings are pulled directly from the Henesys ERP via privately accessed endpoints. This site was built strictly on the Nuxt framework utilizing postcss, tailwindcss, and hosted statically on AWS S3.","Gladiator Bikes also integrates the Square API for secure online payments via credit/debit card or digital wallets like Google or Apple Pay."],
				link: 'https://gladiatorbikes.ca/',
				slides: [
					{
						title: 'Gladiator Bikes Homepage',
						src: '/images/projects/websites/gladiator-homepage.png'
					},
					{
						title: 'Gladiator Bikes Product Detail',
						src: '/images/projects/websites/gladiator-product-detail.png'
					},
					{
						title: 'Gladiator Bikes Checkout',
						src: '/images/projects/websites/gladiator-checkout.png'
					},
				]
			},
			{
				title: 'Vancouver Bitcoin',
				titleDescriptions: ["Vancouver Bitcoin is a Wordpress website built for a crypto brokerage. The site utilizes HTML, CSS, Javascript, PHP, MariaDB, Docker, and Node hosted on an AWS infrastructure including Route53, ACM, EC2, ALB, and RDS.", "Requirements defined in the mockup of this project included custom page templates, wordpress ajax actions for formatted data, and custom short codes for allowing the client to build custom secondary pages."],
				link: 'https://vancouverbitcoin.com/',
				slides: [
					{
						title: 'Vancouver Bitcoin Homepage',
						src: '/images/projects/websites/vb-home.png',
					},
					{
						title: 'Vancouver Bitcoin Blog',
						src: '/images/projects/websites/vb-blog.png',
					},
					{
						title: 'Vancouver Bitcoin OTC',
						src: '/images/projects/websites/vb-secondary-page.png',
					},
					{
						title: 'Vancouver Bitcoin Ledger',
						src: '/images/projects/websites/vb-ledger-template.png',
					}
				]
			},
			{
				title: 'Neelam Woolley',
				titleDescriptions: ["Neelam Woolley is a portfolio website built for a designer of Henesys Group. The website was built on the Nuxt framework taking advantage of postcss plugins and tailwindcss. The site is statically hosted on S3 via CloudFront and Route53."],
				link: 'https://neelamwoolley.com/',
				slides: [
					{
						title: 'Neelam Woolley Homepage',
						src: '/images/projects/websites/nw-homepage.png'
					},
					{
						title: 'Neelam Woolley Design',
						src: '/images/projects/websites/nw-design-page.png'
					},
					{
						title: 'Neelam Woolley Project Detail',
						src: '/images/projects/websites/nw-project-detail-page.png'
					},
					{
						title: 'Neelam Woolley Illustration',
						src: '/images/projects/websites/nw-illustrations-page.png'
					}
				]
			}
		],
	},
	{
		id: 'bittreo',
		timeline: "Jan, 2018 - Dec, 2021",
		title: 'Bittreo',
		link: '/projects/bittreo',
		description: 'Bittreo is a Vancouver based over-the-counter buy & sell cryptocurrency platform. The platform is solely used by the owners, and employees of Bittreo to expedite their daily business operations. Additionally, services and data structure in the platform conform with Fintrac regulations and provide in-depth support for BI reporting.',
		sections: [
			{
				title: 'Bittreo',
				titleDescriptions: ["The Bittreo platform incorporates core market functionalities from an online cryptocurrency exchange, Binance. Market orders based on customer variables and asset details are performed and displayed appropriately to improve the daily processes of a Bittreo platform user.", "Technology used for the development of Bittreo include Node, Express, MongoDB, Vue and AWS."],
				slides: [
					{ 
						title: 'Bittreo Login',
						src: '/images/projects/bittreo/login.png',
					},
					{ 
						title: 'Bittreo Customer Management',
						src: '/images/projects/bittreo/customer-management.png',
					},
					{ 
						title: 'Bittreo Customer Profile',
						src: '/images/projects/bittreo/customer-profile.png',
					},
					{ 
						title: 'Bittreo Cash Management',
						src: '/images/projects/bittreo/cash-management.png',
					},
				],
			},
		],
	},
	{
		id: 'chatso',
		timeline: "Nov, 2019 - Mar, 2021",
		title: 'Chatso',
		link: '/projects/chatso',
		description: "Chatso is a chat platform built as an alternative to Zendesk providing analytic tools catered to Advesa Digital's e-commerce solutions. The platform provides agents real-time readily available data to help understand their customers and their needs.",
		sections: [
			{
				title: 'Chatso',
				titleDescriptions: ["With a robust, flexible, and secure socket.io architecture, Chatso allows agents to handle one to many clients from variable ranges of store access. Agents are able to pull up product information about the client or store at hand, and perform actions like coupon generation, file uploads, and chat transferring.", "Additionally, Chatso takes advantage of in-house analytics and Google Analytics to provide a combination of valuable chat and website data on a per store basis.", "Core technology used to develop Chatso include React, Node, Express, Socket.io, Mongo, AWS, and the React component library, Material UI."],
				slides: [
					{
						title: 'Chatso Login',
						src: '/images/projects/chatso/chatso-login.png',
					},
					{
						title: 'Chatso Dashboard',
						src: '/images/projects/chatso/chatso-dashboard.png',
					},
					{
						title: 'Chatso Live Chat',
						src: '/images/projects/chatso/chatso-live-chat.png',
					},
					{
						title: 'Chatso Analytics',
						src: '/images/projects/chatso/chatso-analytics.png',
					},
					{
						title: 'Chatso Agents',
						src: '/images/projects/chatso/chatso-agents.png',
					}
				],
			},
		],
	},
	{
		id: 'client-portal',
		timeline: "Dec, 2017 - Dec, 2019",
		title: 'Client Portal',
		link: '/projects/client-portal',
		description: "A portal providing clients an interactive, user-friendly, powerful analytics tool for measuring their online performance with Convertus Digital. The platform facilitates and optimizes the client's decision making ability in the online automotive industry.",
		sections: [
			{
				title: 'Client Portal',
				titleDescriptions: ["Segments of the Client Portal uses the Google Analytics API to fetch organic statistics essential to clients who have a dealership website.", "Additionally, Google Adwords' campaign reporting API was used to grab campaign leads, costs, impressions, clicks, average cost per click, and cost per acquisition", "The portal was built on the Wordpress framework taking advantage of front-end libraries jQuery, AmCharts, and Bootstrap."],
				slides: [
					{
						title: 'Client Portal Summary',
						src: '/images/projects/client-portal/summary.jpg',
					},
					{
						title: 'Client Portal Tour',
						src: '/images/projects/client-portal/bootstrap-tour.jpg',
					},
					{
						title: 'Client Portal Organic Search',
						src: '/images/projects/client-portal/organic-search.jpg',
					},
					{
						title: 'Client Portal Paid Search',
						src: '/images/projects/client-portal/paid-search.jpg',
					},
					{
						title: 'Client Portal Inventory',
						src: '/images/projects/client-portal/inventory.jpg',
					},
					{
						title: 'Client Portal Leads',
						src: '/images/projects/client-portal/leads.jpg',
					},
				],
			}
		],
	},
	{
		id: 'migration-script',
		timeline: "Dec, 2018 - Nov, 2019",
		title: 'Migration Script',
		link: '/projects/migration-script',
		description: "A project developed to migrate legacy dealership websites into a modern wordpress platform. Successfully migrating 1500 websites and mapping their widgets, page templates, and any custom feature requested by the clientele.",
		sections: [
			{
				title: 'Migration Script',
				titleDescriptions: [
					"The purpose of the script was to parse website data from an XML feed provided via FTP access, map it appropriately to the new platform's wordpress widget templates, theme settings, and other core data structures, then uses the WP-CLI commands to perform the website migration",
					"Technology used includes Node, SQL, AWS, and the Wordpress CLI."
				],
				slides: [
					{ 
						title: 'Migration Script Lexus On The Park (Before)',
						src: '/images/projects/migration-script/lexusonthepark-before.jpg',
					},
					{ 
						title: 'Migration Script Lexus On The Park (After)',
						src: '/images/projects/migration-script/lexusonthepark-after.jpg',
					},
					{ 
						title: 'Migration Script Midtown Ford (Before)',
						src: '/images/projects/migration-script/midtown-before.jpg',
					},
					{ 
						title: 'Migration Script Midtown Ford (After)',
						src: '/images/projects/migration-script/midtown-after.jpg',
					},
				],
			}
		],
	},
	{
		id: 'achilles-portal',
		timeline: "June, 2019 - Nov, 2019",
		title: 'Achilles Portal',
		link: '/projects/achilles-portal',
		description: "Online portal to monitor, query, and update AutoTrader's dealership websites and AWS infrastructure. The Achilles Portal is an automation and monitoring tool in regards to the 1500 websites migrated and developed by Convertus Digital for Autotrader.",
		sections: [
			{
				title: 'Achilles Portal',
				titleDescriptions: [
					"Achilles Portal allows the ability to manage SSL certificates, update wordpress database plugins and options, and provides private endpoints for website analytics.",
					"Main technology incorporated are Node, Express, MongoDB, and Vue as an in-house API for Convertus Digital. Technology used for development include Node, Express, Vue, MySQL, and AWS."
				],
				slides: [
					{
						title: 'Achilles Portal Login',
						src: '/images/projects/achilles-portal/ap-login.jpg',
					},
					{
						title: 'Achilles Portal Query',
						src: '/images/projects/achilles-portal/ap-mass-query.jpg',
					},
					{
						title: 'Achilles Portal SSL Certificate',
						src: '/images/projects/achilles-portal/ap-ssl-cloud-front.jpg',
					},
					{
						title: 'Achilles Portal Selenium',
						src: '/images/projects/achilles-portal/ap-selenium.jpg',
					},
					{
						title: 'Achilles Portal Networks',
						src: '/images/projects/achilles-portal/ap-networks.jpg',
					}
				],
			}
		],
	},
	{
		id: 'vehicle-reference-system',
		timeline: "June, 2019 - Nov, 2019",
		title: 'Vehicle Reference API',
		link: '/projects/vehicle-reference-system',
		description: "A web service providing vehicle reference system data. Data provided range from any OEM make, model, trim or style data. Privately developed as an in-house API for Convertus Digital.",
		sections: [
			{
				title: 'Vehicle Reference System',
				titleDescriptions: ["In-house documentation allowing Convertus developers query building for vehicle data when developing font-end features for dealership websites.", "Technology used for development include Node, Express, Vue, MySQL, and AWS."],
				slides: [
					{
						title: 'VRS Introduction',
						src: '/images/projects/convertus-vrs/intro.png',
					},
					{
						title: 'VRS Styles',
						src: '/images/projects/convertus-vrs/styles.png',
					}
				],
			}
		],
	},
]