import React, { FC } from 'react';
// import classnames from 'classnames';
import { cn as classnames } from "@/infrastructure/ui/helpers/cn";
import { usePagination, DOTS } from '@/infrastructure/ui/hooks/usePagination';
import ArrowIcon from '@/infrastructure/ui/components/atoms/icons/arrow-icon';
// import './pagination.scss';

interface PaginationProps {
	onPageChange: (page: number) => void;
	totalCount: number;
	siblingCount?: number;
	currentPage: number;
	pageSize: number;
	className?: string;
}

const Pagination: FC<PaginationProps> = props => {
	const {
		onPageChange,
		totalCount,
		siblingCount = 1,
		currentPage,
		pageSize,
		className = ""
	} = props;

	const paginationRange = usePagination({
		currentPage,
		totalCount,
		siblingCount,
		pageSize
	}) as (number | string)[] | null;;

	// If there are less than 2 times in pagination range we shall not render the component
	if (currentPage === 0 || !paginationRange || paginationRange.length < 2) {
		return null;
	}

	const onNext = () => {
		onPageChange(currentPage + 1);
	};

	const onPrevious = () => {
		onPageChange(currentPage - 1);
	};

	let lastPage = paginationRange[paginationRange.length - 1];
	return (
		<ul
			className={classnames('pagination-container', { [className]: className })}
		>
			{/* Left navigation arrow */}
			<li
				className={classnames('pagination-item button-arrow to-left', {
					disabled: currentPage === 1
				})}
				onClick={onPrevious}
			>
				{/* <div className="arrow left" /> */}
				<ArrowIcon className="arrow left" direction="left" />
				<span className="hidden lg:block">Anterior</span>
			</li>
			{paginationRange.map((pageNumber, i) => {

				// If the pageItem is a DOT, render the DOTS unicode character
				if (pageNumber === DOTS) {
					return <li key={i} className="pagination-item dots">&#8230;</li>;
				}

				// Render our Page Pills
				return (
					<li
						key={i}
						className={classnames('pagination-item', {
							selected: pageNumber === currentPage
						})}
						onClick={() => onPageChange(Number(pageNumber))}
					>
						{pageNumber}
					</li>
				);
			})}
			{/*  Right Navigation arrow */}
			<li
				className={classnames('pagination-item button-arrow to-right', {
					disabled: currentPage === lastPage
				})}
				onClick={onNext}
			>
				{/* <div className="arrow right" /> */}
				<span className="hidden lg:block">Siguiente</span>
				<ArrowIcon className="arrow right" direction="right" />
			</li>
		</ul>
	);
};

export default Pagination;