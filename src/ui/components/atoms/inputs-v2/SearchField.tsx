import { useFieldContext } from '@/lib/form/form-context';
import { useStore } from '@tanstack/react-form';
import { useMemo, useEffect } from 'react';
import debounce from 'lodash/debounce'; // o import { debounce } from 'lodash';
import SearchFilterIcon from '../icons/search-filter-icon';

export function SearchField({
	placeholder,
	className,
	onSearch,
	debounceMs = 300,
}: {
	placeholder?: string;
	className?: string;
	onSearch?: (value: string) => void;
	debounceMs?: number;
}) {
	const field = useFieldContext<string>();
	const errors = useStore(field.store, (state) => state.meta.errors);

	const debouncedChange = useMemo(
		() =>
			debounce((value: string) => {
				field.handleChange(value);
				onSearch?.(value);
			}, debounceMs),
		[field, onSearch, debounceMs]
	);

	useEffect(() => () => debouncedChange.cancel(), [debouncedChange]);

	return (
		<div className={`flex items-center gap-2 relative ${className}`}>
			<span className="absolute right-4 flex items-center pointer-events-none">
				<SearchFilterIcon />
			</span>
			<input
				type="search"
				placeholder={placeholder}
				defaultValue={field.state.value}
				onChange={(e) => debouncedChange(e.target.value)}
				className="flex w-full items-center justify-between gap-4 p-4 pr-12 ring-1 ring-inset ring-light-gray-2 hover:ring-dark-blue-2 focus:ring-2 focus:ring-dark-red focus-visible:ring-2 focus-visible:ring-dark-red outline-none transition-all duration-200 rounded-lg text-left leading-[24px] font-medium text-dark-blue-2 bg-white placeholder:text-dark-blue-2/70"
			/>
			{errors.map((error) => (
				<div key={error} style={{ color: 'red' }}>
					{error}
				</div>
			))}
		</div>
	);
}
