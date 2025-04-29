// app/noticias/[noticia]/opengraph-image.ts
import { ImageResponse } from 'next/og'
import { getNoticia } from '@/ui/lib/get-noticias' // reutilizas tu función cacheada

export const size = {
	width: 800,
	height: 420,
}

export const contentType = 'image/png'

export default async function Image({ params }: { params: { noticia: string } }) {
	const [noticia] = await getNoticia(params.noticia)

	const imageUrl = noticia.imagen?.formats?.large?.url
	|| noticia.imagen?.formats?.medium?.url
	|| noticia.imagen?.formats?.small?.url
	|| noticia.imagen?.url;

	// Si hay imagen, usarla como fondo
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
				{/* <div
					style={{
						zIndex: 1,
						background: 'rgba(0,0,0,0.5)',
						color: '#fff',
						padding: '1rem 2rem',
						borderRadius: '8px',
						fontSize: 36,
						textAlign: 'center',
						maxWidth: '90%',
					}}
				>
					{noticia.titulo}
				</div> */}
			</div>
		),
		size
		)
	}

	// Si no hay imagen, solo mostrar el título
	return new ImageResponse(
		(
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
			{noticia.titulo}
		</div>
		),
		size
	)
}
