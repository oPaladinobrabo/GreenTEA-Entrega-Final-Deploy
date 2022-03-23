import React from 'react';
import { useState } from 'react'

const WhiteNoise = () => {
	let Aquecedor = './src/assets/whiteNoises/Aquecedor.mp3'
	let Aspirador = './src/assets/whiteNoises/Aspirador.mp3'
	let Carro = './src/assets/whiteNoises/Carro.mp3'
	let Cascata = './src/assets/whiteNoises/Cascata.mp3'
	let Chuva = './src/assets/whiteNoises/Chuva.mp3'
	let Chuveiro = './src/assets/whiteNoises/Chuveiro.mp3'
	let Mar = './src/assets/whiteNoises/Mar.mp3'
	let Nebulizador = './src/assets/whiteNoises/Nebulizador.mp3'
	let Secador = './src/assets/whiteNoises/Secador.mp3'
	let Ulterino = './src/assets/whiteNoises/Ulterino.mp3'
	let Ventilador = './src/assets/whiteNoises/Ventilador.mp3'
	let audio
    let track = document.querySelector('.track')
	function player(track) {
		let audio = document.querySelector(this.track)
		const pauseGeral = document.querySelectorAll('audio')
		for (var i = 0; i < pauseGeral.length; i++) {
			pauseGeral[i].pause()
		}
		audio.play()
	}

	return (
		<div>
			<hr />
			<br />
			<div className="page gallery-page">
				<section className="clean-block clean-gallery dark">
					<div className="container">
						<div className="block-heading">
							<h1 className="text-info">White Noise</h1>
							<p>
								Escolha um tipo de som para ser ouvido como barulho de fundo.
							</p>
						</div>
						<div
							className=""
							style={{ alignItems: 'center', justifyContent: 'center' }}
						>
							<fieldset className="radio-image row d-flex">
								<div className="col-12 col-sm-6 col-md-4 col-lg-3  mb-2 rounded-lg d-flex wrap justify-content-center">
									<div style={{ width: '170', position: 'relative' }}>
										<label htmlFor="w7">
											<input
												type="radio"
												defaultChecked={true}
												name="w-noise"
												id="w7"
												className=" text-center "
												onClick={player('.track7')}
											/>
											<img src="./src/assets/icons/mute.png" />
											<span>Desliga</span>
											<audio
												preload="metadata"
												className="track7"
												src=""
											></audio>
										</label>
									</div>
								</div>
								<div className="col-12 col-sm-6 col-md-4 col-lg-3  mb-2 rounded-lg d-flex wrap justify-content-center">
									<div style={{ width: '170', position: 'relative' }}>
										<label htmlFor="w3">
											<input
												type="radio"
												name="w-noise"
												id="w3"
												className=" text-center"
												onClick={player('.track3')}
											/>
											<img src="./src/assets/icons/rain (1).png" />
											<span>Chuva</span>
											<audio
												loop
												preload="metadata"
												className="track3"
												src={Chuva}
											></audio>
										</label>
									</div>
								</div>
							</fieldset>
						</div>
					</div>
				</section>
			</div>
		</div>
	)
}
 
export default WhiteNoise;
