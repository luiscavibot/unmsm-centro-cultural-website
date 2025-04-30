import { ImageResponse } from 'next/og'
import { getCurso } from '@/ui/lib/get-curso' // reutilizas tu función cacheada

export const size = {
	width: 800,
	height: 420,
}

export const contentType = 'image/png'

export default async function Image({ params }: { params: { curso: string } }) {
	const [curso] = await getCurso(params.curso)

	const imageUrl = curso.imagen?.formats?.large?.url
	|| curso.imagen?.formats?.medium?.url
	|| curso.imagen?.formats?.small?.url
	|| curso.imagen?.url;

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
					{curso.titulo}
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
			{curso.titulo}
		</div>
		),
		size
	)
}
