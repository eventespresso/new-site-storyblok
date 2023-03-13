import Link from 'next/link'
import React from 'react'

import type { SbBlokData } from "./types";


const Footer = () => {
	return (
		<footer className="py-6 px-2 text-white bg-gray-900 dark:bg-gray-900">
			<div className="max-w-5xl mx-auto grid grid-flow-row-dense grid-cols-2 md:grid-cols-3 lg:grid-cols-5 leading-4">

				<div className="flex flex-col items-start mt-4 mx-4">
					<h4 className='mb-2'>Features</h4>
					<Link href="/features/">
						<a className="text-sky-500 hover:text-sky-200 mb-2">Core Features</a>
					</Link>
					<Link href="/add-ons/">
						<a className="text-sky-500 hover:text-sky-200 mb-2">Available Add-ons</a>
					</Link>
				</div>

				<div className="flex flex-col items-start mt-4 mx-4">
					<h4 className='mb-2'>Products</h4>
					<Link href="/xxxxxxxxxxxxxx/">
						<a className="text-sky-500 hover:text-sky-200 mb-2">Pricing</a>
					</Link>
					<Link href="/xxxxxxxxxxxxxx/">
						<a className="text-sky-500 hover:text-sky-200 mb-2">Use Cases</a>
					</Link>
					<Link href="/xxxxxxxxxxxxxx/">
						<a className="text-sky-500 hover:text-sky-200 mb-2">Requirements</a>
					</Link>
					<Link href="/xxxxxxxxxxxxxx/">
						<a className="text-sky-500 hover:text-sky-200 mb-2">Testimonials</a>
					</Link>
					<Link href="/xxxxxxxxxxxxxx/">
						<a className="text-sky-500 hover:text-sky-200 mb-2">Demo Event Espresso</a>
					</Link>
				</div>

				<div className="flex flex-col items-start mt-4 mx-4">
					<h4 className='mb-2'>About</h4>
					<Link href="/xxxxxxxxxxxxxx/">
						<a className="text-sky-500 hover:text-sky-200 mb-2">Write For Us</a>
					</Link>
					<Link href="/xxxxxxxxxxxxxx/">
						<a className="text-sky-500 hover:text-sky-200 mb-2">About Event Espresso</a>
					</Link>
					<Link href="/xxxxxxxxxxxxxx/">
						<a className="text-sky-500 hover:text-sky-200 mb-2">Common Questions</a>
					</Link>
					<Link href="/xxxxxxxxxxxxxx/">
						<a className="text-sky-500 hover:text-sky-200 mb-2">Privacy Notice</a>
					</Link>
					<Link href="/xxxxxxxxxxxxxx/">
						<a className="text-sky-500 hover:text-sky-200 mb-2">Privacy Policy</a>
					</Link>
					<Link href="/xxxxxxxxxxxxxx/">
						<a className="text-sky-500 hover:text-sky-200 mb-2">Terms & Conditions</a>
					</Link>
				</div>

				<div className="flex flex-col items-start mt-4 mx-4">
					<h4 className='mb-2'>Support</h4>
					<Link href="/xxxxxxxxxxxxxx/">
						<a className="text-sky-500 hover:text-sky-200 mb-2">My Account</a>
					</Link>
					<Link href="/xxxxxxxxxxxxxx/">
						<a className="text-sky-500 hover:text-sky-200 mb-2">Contact Us</a>
					</Link>
					<Link href="/xxxxxxxxxxxxxx/">
						<a className="text-sky-500 hover:text-sky-200 mb-2">Support Resources</a>
					</Link>
					<Link href="/xxxxxxxxxxxxxx/">
						<a className="text-sky-500 hover:text-sky-200 mb-2">Support Forums</a>
					</Link>
					<Link href="/xxxxxxxxxxxxxx/">
						<a className="text-sky-500 hover:text-sky-200 mb-2">Developer Center</a>
					</Link>
					<Link href="/xxxxxxxxxxxxxx/">
						<a className="text-sky-500 hover:text-sky-200 mb-2">Github Profile</a>
					</Link>
					<Link href="/xxxxxxxxxxxxxx/">
						<a className="text-sky-500 hover:text-sky-200 mb-2">Tell a Friend</a>
					</Link>
				</div>

				<div className="flex flex-col items-start mt-4 mx-4">
					<h4 className='mb-2'>Resources</h4>
					<Link href="/xxxxxxxxxxxxxx/">
						<a className="text-sky-500 hover:text-sky-200 mb-2">Blog</a>
					</Link>
					<Link href="/xxxxxxxxxxxxxx/">
						<a className="text-sky-500 hover:text-sky-200 mb-2">Guides & Strategies</a>
					</Link>
					<Link href="/xxxxxxxxxxxxxx/">
						<a className="text-sky-500 hover:text-sky-200 mb-2">Competitor Comparison</a>
					</Link>
					<Link href="/xxxxxxxxxxxxxx/">
						<a className="text-sky-500 hover:text-sky-200 mb-2">Public Roadmap</a>
					</Link>
					<Link href="/xxxxxxxxxxxxxx/">
						<a className="text-sky-500 hover:text-sky-200 mb-2">Hire a Consultant</a>
					</Link>
					<Link href="/xxxxxxxxxxxxxx/">
						<a className="text-sky-500 hover:text-sky-200 mb-2">Change Log</a>
					</Link>
				</div>

			</div>
			<div className="flex justify-end text-gray-500 text-sm">
				<div className="flex justify-between align-center text-gray-500 text-sm">
					© {new Date().getFullYear()}{' '}
					<a href="https://eventespresso.com" className="mx-1 hover:text-sky-500">
						Event Espresso
					</a>
				</div>
			</div>
		</footer>
	)
}

export default Footer;
