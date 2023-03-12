import Link from 'next/link'
import React from 'react'

const Footer = () => {
	return (
		<footer className="py-6 px-2 text-white bg-gray-900 dark:bg-gray-900">
			<div className="max-w-5xl mx-auto grid grid-flow-row-dense grid-cols-2 md:grid-cols-3 lg:grid-cols-5 leading-4">

				<div className="flex flex-col items-start mt-4 mx-4">
					<h4 className='mb-2'>Features</h4>
					<Link href="/features/" className="text-sky-500 hover:text-sky-200 mb-2">
						Core Features
					</Link>
					<Link href="/add-ons/" className="text-sky-500 hover:text-sky-200 mb-2">
						Available Add-ons
					</Link>
				</div>

				<div className="flex flex-col items-start mt-4 mx-4">
					<h4 className='mb-2'>Products</h4>
					<Link href="/xxxxxxxxxxxxxx/" className="text-sky-500 hover:text-sky-200 mb-2">
						Pricing
					</Link>
					<Link href="/xxxxxxxxxxxxxx/" className="text-sky-500 hover:text-sky-200 mb-2">
						Use Cases
					</Link>
					<Link href="/xxxxxxxxxxxxxx/" className="text-sky-500 hover:text-sky-200 mb-2">
						Requirements
					</Link>
					<Link href="/xxxxxxxxxxxxxx/" className="text-sky-500 hover:text-sky-200 mb-2">
						Testimonials
					</Link>
					<Link href="/xxxxxxxxxxxxxx/" className="text-sky-500 hover:text-sky-200 mb-2">
						Demo Event Espresso
					</Link>
				</div>

				<div className="flex flex-col items-start mt-4 mx-4">
					<h4 className='mb-2'>About</h4>
					<Link href="/xxxxxxxxxxxxxx/" className="text-sky-500 hover:text-sky-200 mb-2">
						Write For Us
					</Link>
					<Link href="/xxxxxxxxxxxxxx/" className="text-sky-500 hover:text-sky-200 mb-2">
						About Event Espresso
					</Link>
					<Link href="/xxxxxxxxxxxxxx/" className="text-sky-500 hover:text-sky-200 mb-2">
						Common Questions
					</Link>
					<Link href="/xxxxxxxxxxxxxx/" className="text-sky-500 hover:text-sky-200 mb-2">
						Privacy Notice
					</Link>
					<Link href="/xxxxxxxxxxxxxx/" className="text-sky-500 hover:text-sky-200 mb-2">
						Privacy Policy
					</Link>
					<Link href="/xxxxxxxxxxxxxx/" className="text-sky-500 hover:text-sky-200 mb-2">
						Terms & Conditions
					</Link>
				</div>

				<div className="flex flex-col items-start mt-4 mx-4">
					<h4 className='mb-2'>Support</h4>
					<Link href="/xxxxxxxxxxxxxx/" className="text-sky-500 hover:text-sky-200 mb-2">
						My Account
					</Link>
					<Link href="/xxxxxxxxxxxxxx/" className="text-sky-500 hover:text-sky-200 mb-2">
						Contact Us
					</Link>
					<Link href="/xxxxxxxxxxxxxx/" className="text-sky-500 hover:text-sky-200 mb-2">
						Support Resources
					</Link>
					<Link href="/xxxxxxxxxxxxxx/" className="text-sky-500 hover:text-sky-200 mb-2">
						Support Forums
					</Link>
					<Link href="/xxxxxxxxxxxxxx/" className="text-sky-500 hover:text-sky-200 mb-2">
						Developer Center
					</Link>
					<Link href="/xxxxxxxxxxxxxx/" className="text-sky-500 hover:text-sky-200 mb-2">
						Github Profile
					</Link>
					<Link href="/xxxxxxxxxxxxxx/" className="text-sky-500 hover:text-sky-200 mb-2">
						Tell a Friend
					</Link>
				</div>

				<div className="flex flex-col items-start mt-4 mx-4">
					<h4 className='mb-2'>Resources</h4>
					<Link href="/xxxxxxxxxxxxxx/" className="text-sky-500 hover:text-sky-200 mb-2">
						Blog
					</Link>
					<Link href="/xxxxxxxxxxxxxx/" className="text-sky-500 hover:text-sky-200 mb-2">
						Guides & Strategies
					</Link>
					<Link href="/xxxxxxxxxxxxxx/" className="text-sky-500 hover:text-sky-200 mb-2">
						Competitor Comparison
					</Link>
					<Link href="/xxxxxxxxxxxxxx/" className="text-sky-500 hover:text-sky-200 mb-2">
						Public Roadmap
					</Link>
					<Link href="/xxxxxxxxxxxxxx/" className="text-sky-500 hover:text-sky-200 mb-2">
						Hire a Consultant
					</Link>
					<Link href="/xxxxxxxxxxxxxx/" className="text-sky-500 hover:text-sky-200 mb-2">
						Change Log
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

export default Footer
