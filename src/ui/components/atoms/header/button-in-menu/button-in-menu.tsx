import Link from 'next/link';
import CalendarHeaderIcon from '@/ui/components/atoms/icons/calendar-header-icon';
import { FC } from 'react';

interface ButtonInMenuProps {
	setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const ButtonInMenu: FC<ButtonInMenuProps> = ({ setOpenMenu }) => {
	return (
		<Link
			className="flex flex-row gap-2 items-center justify-center px-[12px] py-[13px] border-[1px] border-white leading-[14px] rounded-lg h-[40px] bg-orange-custom"
			href="/agenda-cultural"
			onClick={() => setOpenMenu(false)}
		>
			<CalendarHeaderIcon />
			<span className="text-sm text-white">Agenda cultural</span>
		</Link>
	);
};

export default ButtonInMenu;
