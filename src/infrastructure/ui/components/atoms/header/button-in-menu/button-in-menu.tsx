import Link from 'next/link';
import CalendarHeaderIcon from '@/infrastructure/ui/components/atoms/icons/calendar-header-icon';

const ButtonInMenu = () => {
	return (
		<Link className="flex flex-row gap-2 items-center justify-center px-[12px] py-[13px] border-[1px] border-white rounded-lg" href="/agenda">
			<CalendarHeaderIcon />
			<span className="text-sm">Agenda cultural</span>
		</Link>
	)
}

export default ButtonInMenu;