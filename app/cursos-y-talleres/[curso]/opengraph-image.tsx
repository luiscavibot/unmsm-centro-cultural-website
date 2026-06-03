import { ImageResponse } from 'next/og'
import { getCurso } from '@/ui/lib/get-curso'

export const size = {
	width: 800,
	height: 420,
}

export const contentType = 'image/png'

// next/og only supports PNG and JPEG; WebP causes "Unsupported image type" errors
const SUPPORTED_IMAGE_TYPES = ['image/png', 'image/jpeg', 'image/jpg', 'image/gif']

// Strapi may return relative URLs like /uploads/img.jpg — make them absolute
// so next/og doesn't resolve them against localhost (which fails in Docker/Alpine)
function toAbsoluteUrl(url: string | undefined): string | undefined {
	if (!url) return undefined
	if (url.startsWith('http://') || url.startsWith('https://')) return url
	const strapiRoot = (process.env.NEXT_PUBLIC_STRAPI_BACK_URL ?? '').replace(/\/api$/, '')
	return strapiRoot ? `${strapiRoot}${url}` : undefined
}

async function resolveImageUrl(raw: string | undefined): Promise<string | undefined> {
	const url = toAbsoluteUrl(raw)
	if (!url) return undefined
	try {
		const res = await fetch(url, { method: 'HEAD' })
		const type = res.headers.get('content-type') ?? ''
		if (!SUPPORTED_IMAGE_TYPES.some(t => type.startsWith(t))) return undefined
		return url
	} catch {
		return undefined
	}
}

const fallback = (title: string | undefined) => (
	<div
		style={{
			width: '100%',
			height: '100%',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			backgroundColor: '#171a1d',
			color: '#fff',
			fontSize: 36,
			textAlign: 'center',
			padding: '0 2rem',
		}}
	>
		{title ?? 'Centro Cultural de San Marcos'}
	</div>
)

export default async function Image({ params }: { params: { curso: string } }) {
	const [curso] = await getCurso(params.curso)

	if (!curso) {
		return new ImageResponse(fallback(undefined), size)
	}

	const rawUrl =
		curso.imagen?.formats?.large?.url
		?? curso.imagen?.formats?.medium?.url
		?? curso.imagen?.formats?.small?.url
		?? curso.imagen?.url

	const imageUrl = await resolveImageUrl(rawUrl)

	if (imageUrl) {
		return new ImageResponse(
			(
				<div
					style={{
						width: '100%',
						height: '100%',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						position: 'relative',
						backgroundColor: '#171a1d',
					}}
				>
					<img
						src={imageUrl}
						alt="Imagen"
						style={{
							position: 'absolute',
							width: '100%',
							height: '100%',
							objectFit: 'contain',
							zIndex: 0,
						}}
					/>
				</div>
			),
			size
		)
	}

	return new ImageResponse(fallback(curso.titulo), size)
}
