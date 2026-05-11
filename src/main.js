import './style.css'

/* =========================
   COUNTDOWN
========================= */

const countdownContainer = document.getElementById('countdownContainer')

const targetDate = new Date()
targetDate.setDate(targetDate.getDate() + 10)

function updateCountdown() {

  const now = new Date().getTime()
  const distance = targetDate - now

  const days = Math.floor(distance / (1000 * 60 * 60 * 24))
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((distance / (1000 * 60)) % 60)
  const seconds = Math.floor((distance / 1000) % 60)

  countdownContainer.innerHTML = `
    ${createBox(days, 'Días')}
    ${createBox(hours, 'Horas')}
    ${createBox(minutes, 'Min')}
    ${createBox(seconds, 'Seg')}
  `
}

function createBox(value, label) {
  return `
    <div class="glass-card rounded-2xl px-5 py-4 min-w-[90px] text-center">
      <div class="text-3xl font-black text-white">${value}</div>
      <div class="text-xs uppercase tracking-wider text-indigo-300 mt-1">${label}</div>
    </div>
  `
}

setInterval(updateCountdown, 1000)
updateCountdown()

/* =========================
   PARTICLES CANVAS
========================= */

const canvas = document.getElementById('particleCanvas')
const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let particles = []

for(let i = 0; i < 80; i++){

  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2,
    dx: (Math.random() - .5) * .5,
    dy: (Math.random() - .5) * .5
  })
}

function animate(){

  ctx.clearRect(0,0,canvas.width,canvas.height)

  particles.forEach(p => {

    ctx.beginPath()
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2)
    ctx.fillStyle = 'rgba(255,255,255,.5)'
    ctx.fill()

    p.x += p.dx
    p.y += p.dy

    if(p.x < 0 || p.x > canvas.width) p.dx *= -1
    if(p.y < 0 || p.y > canvas.height) p.dy *= -1
  })

  requestAnimationFrame(animate)
}

animate()

/* =========================
   BUTTON ACTION
========================= */

document.getElementById('notifyBtn')
.addEventListener('click', () => {

  alert('✨ Gracias. Te notificaremos cuando Joionova Digital esté online.')
})