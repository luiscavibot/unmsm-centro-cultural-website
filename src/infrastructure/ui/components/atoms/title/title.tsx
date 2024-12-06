import React, { FC } from 'react';

type TitleProps = {
	tag?: keyof React.JSX.IntrinsicElements;
	children: React.ReactNode;
	className?: string;
};

const Title: FC<TitleProps> = ({ tag: Tag = 'h1', children, className, ...props }) => {
	return (
		<Tag className={`font-messiri text-dark-blue font-bold leading-[48px] text-[40px] mb-10 ${className}`} {...props}>
			{children}
		</Tag>
	);
};

export default Title;