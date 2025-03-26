import React, { FC } from 'react';

type TitleProps = {
	tag?: keyof React.JSX.IntrinsicElements;
	children: React.ReactNode;
	className?: string;
	theme?: 'dark' | 'light';
};

const Title: FC<TitleProps> = ({ tag: Tag = 'h1', children, className, theme = "light", ...props }) => {
	return (
		<Tag className={`font-messiri ${theme == "dark" ? "text-white" : "text-dark-blue"} font-bold leading-[48px] text-2xl md:text-[40px] mb-10 ${className}`} {...props}>
			{children}
		</Tag>
	);
};

export default Title;