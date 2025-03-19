import React, { useState, useEffect } from 'react';
import useDebounce from '@/ui/hooks/useDebounce';
import SearchFilterIcon from '@/ui/components/atoms/icons/search-filter-icon';

interface SearchProps {
	onSearch: (query: string) => void;
	placeholder?: string;
	className?: string;
}

const Search: React.FC<SearchProps> = ({
	onSearch,
	placeholder,
	className,
}) => {
	const [searchTerm, setSearchTerm] = useState('');

	// Hook personalizado para retrasar la búsqueda
	const debouncedSearchTerm = useDebounce(searchTerm, 500);

	useEffect(() => {
		if (debouncedSearchTerm.trim() !== '') {
			onSearch(debouncedSearchTerm);
		}
	}, [debouncedSearchTerm, onSearch]);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value);
	};

	return (
		<div className={`flex items-center gap-2 relative ${className}`}>
			<span className="absolute right-4 flex items-center pointer-events-none">
				<SearchFilterIcon />
			</span>
			<input
				type="search"
				placeholder={placeholder}
				value={searchTerm}
				onChange={handleInputChange}
				className="flex w-full items-center justify-between gap-4 p-4 pr-12 ring-1 ring-inset ring-light-gray-2 hover:ring-dark-blue-2 focus:ring-2 focus:ring-dark-red focus-visible:ring-2 focus-visible:ring-dark-red outline-none transition-all duration-200 rounded-lg text-left leading-[24px] font-medium text-dark-blue-2 bg-white placeholder:text-dark-blue-2/70"
			/>
		</div>
	);
};

export default Search;
