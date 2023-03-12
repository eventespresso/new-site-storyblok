import Link from 'next/link'
import React from 'react'

const Header: React.FC = () => (
	<header className="ee-bg-logo-blue sm:h-20 py-2 sm:sticky top-0">
		<div className="max-w-5xl mx-auto px-6">
			<div className="w-full flex flex-col sm:flex-row justify-center sm:justify-between items-center">
				<div className="flex flex-col sm:flex-row items-center mb-4 sm:mb-0">
					<div className="sm:ml-8 flex space-x-5 text-center">
						<Link href="/">
							<span className="flex items-center">
								<img src="/event-espresso-cup-logo.png"
									className="logo-image w-16"
									alt="Event Espresso"
								/>
								<span className='ee-wordmark text-white hover:text-slate-800 text-4xl font-black transition duration-200'>event espresso</span>
							</span>
						</Link>
					</div>
					<div className="sm:ml-8 flex justify-around text-center">
						<Link href="/pricing">
							<span className="text-white hover:bg-slate-800 py-0.5 px-2 rounded-sm mx-1 transition duration-200">Pricing</span>
						</Link>
						<Link href="/features">
							<span className="text-white hover:bg-slate-800 py-0.5 px-2 rounded-sm mx-1 transition duration-200">Features</span>

						</Link>
						<Link href="/use-cases">
							<span className="text-white hover:bg-slate-800 py-0.5 px-2 rounded-sm mx-1 transition duration-200">Use Cases</span>

						</Link>
						<Link href="/add-ons">
							<span className="text-white hover:bg-slate-800 py-0.5 px-2 rounded-sm mx-1 transition duration-200">Add-ons</span>

						</Link>
					</div>
				</div>
				<Link
					href="/admin"
					prefetch={false}
					className="py-1 px-1 rounded text-white font-medium border border-white hover:bg-slate-800 hover:border-slate-800 transition duration-200"
				>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
						<path fillRule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" clipRule="evenodd" />
					</svg>
				</Link>
			</div>
		</div>
	</header>
)

export default Header
