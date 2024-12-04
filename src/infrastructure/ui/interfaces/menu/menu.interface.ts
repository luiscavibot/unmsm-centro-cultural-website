interface LinkMenu {
	title: string,
	url: string,
}

interface Menu extends LinkMenu {
	'sub-menu'?: LinkMenu[]
}

export type { LinkMenu, Menu };