import React from 'react'
import TheHeader from '@components/TheHeader'

export default function Base(props) {
	return (
		<div className="h-screen w-screen bg-gray-900 overflow-hidden text-serif">
			{/* Header component */}
			<TheHeader />
			{props.children}
		</div>
	)
}