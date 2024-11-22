import React from 'react';

//TODO: Cambiar importación de imagen en bg por url proveniente de Gestor de Contenido de CCSM

const Hero: React.FC = () => {
	return (
		<>
			<div className="px-[104px] gap-5 bg-[url('https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/hero-image.jpg')] bg-no-repeat bg-cover h-[720px]">
				<div className="container h-full flex justify-start items-center">
					<h2 className="leading-[48px] w-[477px] font-messiri font-bold">
						<span className="text-[40px]">¡Descubre el</span>
						<br />
						<span className="text-[56px]">
							Centro Cultural San Marcos!
						</span>
					</h2>
				</div>
			</div>
		</>
	);
};

export default Hero;
