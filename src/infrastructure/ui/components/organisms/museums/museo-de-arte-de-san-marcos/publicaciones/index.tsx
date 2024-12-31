import React from 'react'

const Publicaciones = () => {
	return (
		<>
			<div className="px-4 lg:px-[104px] bg-dark-white-2 pt-[24px] pb-[56px]">
				<div className="container">
					<div className="max-w-[603px] leading-[24px] text-dark-blue-2 mb-8">
						<p className="mb-2">El área de Investigación del museo elabora publicaciones que contienen información clave acerca de cada exposición temporal llevada a cabo desde el año 2018, durante la gestión de su actual director Augusto del Valle Cárdenas. Los Cuadernillos MASM, nombre de estas publicaciones, cumplen el objetivo de resaltar la propuesta del artista o colectivo que expone en cualquiera de los espacios temporales bajo la administración del MASM: la Sala Juan Acha, Sala Vinatea Reinoso o Sala José María Arguedas.</p>
						<p>En sus páginas el lector encuentra textos, fotografías, planos y documentos sobre las propuestas del arte actual difundido en los espacios del MASM. Se busca cubrir diversos puntos de vista: del curador, del museógrafo, del artista, de la institución (el museo) y también de escritores invitados a colaborar. El resultado es una publicación sencilla pero interesante por su mirada reflexiva y académica, diferente al de otras que abundan en el medio artístico peruano.</p>
					</div>
					<div className="relative overflow-x-auto max-w-[813px]">
						<table className="max-w-full w-full">
							<thead className="text-green bg-light-green">
								<tr>
									<th>N°</th>
									<th className="text-left">Publicaciones</th>
									<th>Títulos</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td className="text-center">1</td>
									<td>CUADERNILLO MASM Nº 1- 2018</td>
									<td><a href="#" className="link">Bajo el lente del museo I. Carlos Caamaño Proyecto Fotográfico.</a></td>
								</tr>
								<tr>
									<td className="text-center">2</td>
									<td>CUADERNILLO MASM Nº 2- 2018</td>
									<td><a href="#" className="link">Bajo el lente del museo II. Taller de Artes Integradas ENSABAB 2015-2017 de Angie Bonino. Artistas: Amaro Serruche, Damaris Paredes, Andrés Yaques.</a></td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</>
	)
}

export default Publicaciones