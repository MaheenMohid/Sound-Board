const sounds = ['applause', 'boo', 'gasp', 'haha', 'victory', 'blurry']

sounds.forEach(sound => {
	const btn = document.createElement('button')
	btn.classList.add('btn')

	btn.innerText = sound

	btn.addEventListener("click", () => {
		stopsongs()

		document.getElementById(sound).play()
	})

	document.getElementById('button').
	appendChild(btn)
})

function stopsongs() {
	sounds.forEach(sound => {
		const song = document.getElementById(sound)

		song.pause()
		song.currentTime = 0;
	})
}