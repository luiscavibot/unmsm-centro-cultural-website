import React from 'react'

const Libros = () => {
  	return (
	<>
		<p className="mb-4">
			Los libros son los recursos principales que componen la colección de la biblioteca. La temática de los libros gira en torno al área de humanidades, ya que es una biblioteca especializada en todas las artes y temas afines.
		</p>
		<p className="mb-4">
			Dentro de estos se distinguen diferentes tipos de colecciones:
		</p>
		<ul className="list-outside list-disc pl-6 space-y-4">
			<div>
				<li className="font-bold">Fondo reservado o libros valiosos</li>
				<p className="font-normal">Son libros de gran valor cultural y material, siendo el más antiguo de 1785.</p>
			</div>
			<div>
				<li className="font-bold">Colección Pablo de Madalengoitia y Aubry.</li>
				<p className="font-normal">Libros y folletos de ballet donados por la viuda del destacado presentador de televisión Pablo de Madalengoitia y Aubry.</p>
			</div>
			<div>
				<li className="font-bold">Colección del Teatro Universitario de San Marcos</li>
				<p className="font-normal">Libros de teatro que pertenecían a la antigua biblioteca del TUSM. Cuenta con diferentes obras del teatro nacional y extranjero realizadas por reconocidos autores y dramaturgos.</p>
			</div>
			<div>
				<li className="font-bold">Colección infantil</li>
				<p className="font-normal">
					Libros y folletos para niños en edad pre-escolar y escolar, compuesta por cuentos, libros de dibujos y aprendizaje.
					<br />
					Literatura infantil y juvenil en inglés. Destacadas obras literarias en lengua inglesa.
				</p>
			</div>
			<div>
				<li className="font-bold">Material de referencia</li>
				<p className="font-normal">Atlas, compendios estadísticos, diccionarios, enciclopedias y otros.</p>
			</div>
			<div>
				<li className="font-bold">Colección de teatro de títeres.</li>
				<p className="font-normal">Libros y folletos que tratan sobre el teatro de títeres y obras desarrolladas en diferentes países de América Latina y Europa.</p>
			</div>
		</ul>
	</>
  )
}

export default Libros