import React, { FC } from 'react'

const SkeletonBlog: FC = () => {
	return (
		<div className="animate-pulse">
			<div
				className="px-4 lg:px-[104px] pt-[46px] md:pt-16 md:rounded-t-[--border-top-radius-layout] overflow-hidden"
			>
				<div className="container">
					<div className="flex items-baseline flex-wrap gap-x-6 gap-y-1 mb-20 md:mb-[104px]">
						<div className="h-6 w-11 bg-light-gray-2 rounded" />
						<div className="h-6 w-28 bg-light-gray-2 rounded" />
						<div className="h-6 w-56 bg-light-gray-2 rounded" />
					</div>
				</div>
			</div>
			<div className="px-4 lg:px-[104px] bg-white pb-[80px] md:pb-[104px]">
				<div className="container">
					<div className="max-w-[814px] mx-auto">
						<div className="flex justify-center mb-2">
							<div className="h-6 w-20 bg-light-gray-2 rounded-md" />
						</div>
						<div className="h-12 bg-light-gray-2 rounded w-full mb-10 md:mb-16" />
						<div className="flex flex-col md:flex-row gap-y-6 gap-x-6 justify-center mb-14">
							<div className="space-y-2">
								<div className="h-6 w-24 bg-light-gray-2 rounded" />
								<div className="h-5 w-32 bg-light-gray-2 rounded" />
							</div>
							<div className="space-y-2">
								<div className="h-6 w-24 bg-light-gray-2 rounded" />
								<div className="h-5 w-20 bg-light-gray-2 rounded" />
							</div>
							<div className="space-y-2">
								<div className="h-6 w-24 bg-light-gray-2 rounded" />
								<div className="h-5 w-40 bg-light-gray-2 rounded" />
							</div>
						</div>
						<div className="h-px max-w-[203px] mx-auto bg-dark-white-3 mb-14"></div>
						<div>
							<div className="space-y-1 mb-5">
								<div className="h-5 bg-light-gray-2 rounded w-full" />
								<div className="h-5 bg-light-gray-2 rounded w-4/5" />
								<div className="h-5 bg-light-gray-2 rounded w-3/4" />
							</div>
							<div className="my-10 flex items-center justify-center w-full h-64 bg-light-gray rounded-sm dark:bg-light-gray-2">
								<svg className="w-10 h-10 text-gray dark:text-gray-2 fill-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 18">
									<path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
								</svg>
							</div>
							<div className="space-y-1">
								<div className="h-5 bg-light-gray-2 rounded w-full" />
								<div className="h-5 bg-light-gray-2 rounded w-4/5" />
								<div className="h-5 bg-light-gray-2 rounded w-3/4" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	  );
}

export default SkeletonBlog