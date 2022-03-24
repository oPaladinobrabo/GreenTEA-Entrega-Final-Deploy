import ReactAudioPlayer from 'react-audio-player'
import React from 'react'

const Player = () => {
	return (
		<>
			<ReactAudioPlayer
				src="./src/assets/whiteNoises/Aquecedor.mp3"
				controls
				loop
			/>
			<ReactAudioPlayer
				src="./src/assets/whiteNoises/Aspirador.mp3"
				controls
				loop
			/>
			<ReactAudioPlayer
				src="./src/assets/whiteNoises/Carro.mp3"
				controls
				loop
			/>
			<ReactAudioPlayer
				src="./src/assets/whiteNoises/Cascata.mp3"
				controls
				loop
			/>
			<ReactAudioPlayer
				src="./src/assets/whiteNoises/Chuva.mp3"
				controls
				loop
			/>
			<ReactAudioPlayer
				src="./src/assets/whiteNoises/Chuveiro.mp3"
				controls
				loop
			/>
			<ReactAudioPlayer src="./src/assets/whiteNoises/Mar.mp3" controls loop />
			<ReactAudioPlayer
				src="./src/assets/whiteNoises/Nebulizador.mp3"
				controls
				loop
			/>
			<ReactAudioPlayer
				src="./src/assets/whiteNoises/Secador.mp3"
				controls
				loop
			/>
			<ReactAudioPlayer
				src="./src/assets/whiteNoises/Ulterino.mp3"
				controls
				loop
			/>
			<ReactAudioPlayer
				src="./src/assets/whiteNoises/Ventilador.mp3"
				controls
				loop
			/>
		</>
	)
}

export default Player
