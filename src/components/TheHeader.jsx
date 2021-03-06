import React from 'react'

export default function TheHeader(props) {
	const menu = [
		{ label: 'Home', path: '/home', icon: '' },
		{ label: 'About', path: '/about', icon: '' },
		{ label: 'Teams', path: '/teams', icon: '' },
		{ label: 'Media', path: '/home', icon: '' },
		{ label: 'Join', path: '/home', icon: '' },
	]

	return (
		<div className="absolute top-0 w-screen overflow-hidden bg-gray z-50">
			<div className="max-w-screen-xl mx-auto flex flex-row items-center justify-between px-4">
				<div className="flex items-center">
					<div className="h-20 w-20 flex items-center justify-center overflow-hidden text-purple-700 cursor-pointer hover:text-purple-500 transition-colors">
						<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11368.53 6084.8">
							<title>LOGO</title>
							<path fill="currentColor" d="M3553.79,800.54c-817.83-395.59-1543,694.79-1543,694.79,141.35-155.67,902.23-804.51,1280.61-100.82,1043.93,499.16,1631.13-120.25,1631.13-120.25C4613.46,1335.17,4371.61,1196.09,3553.79,800.54Z" transform="translate(4724.53 2502.59)" />
							<path fill="currentColor" d="M-176.34,1501.24S-907.37,414.79-1723,814.78s-1056.78,540.35-1366.19,481.11c0,0,590.53,616.23,1631.75,111.43C-1082.9,701.6-318.53,1346.33-176.34,1501.24Z" transform="translate(4724.53 2502.59)" />
							<path fill="currentColor" d="M3233.89,528.09c3278.61-320,2547.28-3030.68,2547.28-3030.68S5572-1236.62,4019.33-740.89C3732.43,263.85,3179.12,538.05,3233.89,528.09Z" transform="translate(4724.53 2502.59)" />
							<path fill="currentColor" d="M-1404.62,540.61c54.82,9.66-500-261.54-792.28-1264.72-1555.35-487.35-1771.33-1752.16-1771.33-1752.16S-4684.92,238.3-1404.62,540.61Z" transform="translate(4724.53 2502.59)" />
							<path fill="currentColor" d="M4664.17,399.5Q4277.79,581.81,3792,679.25C5087.56,1484,6147,460.06,6147,460.06,5712.26,765.76,4897.32,510.69,4664.17,399.5Z" transform="translate(4724.53 2502.59)" />
							<path fill="currentColor" d="M-1961.92,694.78q-485.85-94.74-873.65-275c-232.56,112.44-871.75,371.43-1308.07,68.08C-4143.64,487.83-3253.11,1506.47-1961.92,694.78Z" transform="translate(4724.53 2502.59)" />
							<path fill="currentColor" d="M5646.4-404.46c-181.35,258.22-414.74,474.83-697.92,650C5213.44,306.12,6312,447.64,6644-765.32,6257-286.77,5781.89-357.21,5646.4-404.46Z" transform="translate(4724.53 2502.59)" />
							<path fill="currentColor" d="M-3120.71,267.32Q-3546.9,6.86-3822.13-378.91c-135.23,48-512.83,120.73-902.4-355.73C-4386,476.51-3385.34,329.32-3120.71,267.32Z" transform="translate(4724.53 2502.59)" />
							<path fill="currentColor" d="M1729.27,1555.68l1.82-3.12q5.54-9.4,11.14-18.8c182.48-305.09,441.5-592.29,811.53-811.48C3889.11-68.94,3872.57-1464.56,3872.57-1464.56,3638.28-626.35,2399,58.45,2399,58.45c-175.75,99.71-324.39,239.66-449.89,406.16l-.25,0-5.72-.83,105.1-310.44L1827.7,309.48,1729.58,379,1693.28-162,1663-643c412-95,515-299,515-299l-545,23,545-383c-381-59-666,124-666,124l-295.68-189.52c-70.08-9.43-138.09-8-202.26.57-75.64,10-145.95,30-208,53.43-160.16,60.56-265.64,145-266.92,146,84-39.38,167.62-65.21,244-82A1294.8,1294.8,0,0,1,1045-1279.76c44.88-.44,71.24,2,71.24,2l-64,17.81-296.24,82.46L679-1156,450.85-546.28v0L122.63,331.05l-7.93,21.2L110.31,349l-3.1-2.31-1.75-1.3L65.4,315.49-188.92,125.94-52.33,564.45Q-56,559-59.69,553.59C-198.35,350.9-367,181.3-572.23,66.4c0,0-1243-678.2-1481.9-1515,0,0-9,1395.83,1330.76,2179.67C-368.53,938.7-114.76,1209,67.68,1497.92q12.64,20,24.83,40.17l-4.2,3-2.63,1.86-992,702.2,1330.94,16.3,2.6,0,39.14.48,10,.12,108.31,347.86,6.94,22.3v0l295.79,950,61.17-180.71,382.2-1129,125.68,1.54,1257,15.39-953.33-710.64Z" transform="translate(4724.53 2502.59)" />
						</svg>
					</div>
					{/* <span className="text-purple-700 text-2xl font-black">RAVENS Gaming</span> */}
				</div>
				<nav className="text-white font-bold uppercase tracking-widest text-sm">
					<ul className="flex flex-row gap-4 items-center">
						{menu.map((el, index) => (
							<li key={index}>
								<a href={el.path} className="py-4 px-2 block">{el.label}</a>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</div>
	)
}