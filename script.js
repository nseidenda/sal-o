const services = [
  { id:'corte-infantil', name:'Corte Infantil', price:'R$ 55', duration:'40 min', icon:'✂️', accent:'#fa9481', description:'Corte pensado para deixar os pequenos confortáveis e felizes.' },
  { id:'penteado-infantil', name:'Penteado Infantil', price:'R$ 65', duration:'45 min', icon:'🎀', accent:'#c394cb', description:'Penteados divertidos para dias comuns ou ocasiões especiais.' },
  { id:'manicure-kids', name:'Manicure Kids', price:'R$ 45', duration:'30 min', icon:'💅', accent:'#69c7be', description:'Um momento colorido de cuidado e diversão para as unhas.' },
  { id:'corte-adulto', name:'Corte Adulto', price:'R$ 70', duration:'45 min', icon:'💇', accent:'#c394cb', description:'Corte com atenção aos detalhes para mães, pais e responsáveis.' },
  { id:'escova', name:'Escova', price:'R$ 60', duration:'40 min', icon:'✨', accent:'#fcd770', description:'Finalização leve para deixar os cabelos ainda mais bonitos.' },
  { id:'manicure', name:'Manicure', price:'R$ 50', duration:'40 min', icon:'🌸', accent:'#fa9481', description:'Cuidado completo para unhas com acabamento caprichado.' }
];

const professionals = [
  { name:'Ana Clara', role:'Especialista em beleza infantil', emoji:'👩🏻‍🎨', a:'#fcd770', b:'#fa9481', tags:['Cortes infantis','Penteados'] },
  { name:'Julia Martins', role:'Manicure & Nail Designer', emoji:'💅🏻', a:'#c394cb', b:'#69c7be', tags:['Manicure','Manicure Kids'] },
  { name:'Carlos Henrique', role:'Cabeleireiro', emoji:'💇🏻‍♂️', a:'#69c7be', b:'#fcd770', tags:['Cortes','Escova'] }
];

const servicesGrid = document.querySelector('#services-grid');
servicesGrid.innerHTML = services.map(s => `
  <article class="service-card" style="--card-accent:${s.accent}">
    <div class="service-icon">${s.icon}</div>
    <h3>${s.name}</h3>
    <p>${s.description}</p>
    <div class="price"><strong>${s.price}</strong><span>${s.duration}</span></div>
  </article>
`).join('');

const professionalsGrid = document.querySelector('#professionals-grid');
professionalsGrid.innerHTML = professionals.map(p => `
  <article class="prof-card">
    <div class="avatar" style="--avatar-a:${p.a};--avatar-b:${p.b}">${p.emoji}</div>
    <h3>${p.name}</h3>
    <p class="prof-role">${p.role}</p>
    <div class="tags">${p.tags.map(t => `<span>${t}</span>`).join('')}</div>
  </article>
`).join('');

const serviceSelect = document.querySelector('#service');
serviceSelect.innerHTML = '<option value="">Selecione um serviço</option>' + services.map(s => `<option value="${s.id}">${s.name} — ${s.price}</option>`).join('');

document.querySelector('#professional').innerHTML = '<option value="">Selecione um profissional</option>' + professionals.map(p => `<option value="${p.name}">${p.name} — ${p.role}</option>`).join('');

const dateInput = document.querySelector('#date');
const today = new Date();
dateInput.min = today.toISOString().split('T')[0];

document.querySelector('#booking-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const service = services.find(s => s.id === serviceSelect.value);
  const professional = document.querySelector('#professional').value;
  const date = document.querySelector('#date').value;
  const time = document.querySelector('#time').value;
  const name = document.querySelector('#name').value.trim();
  if (!service || !professional || !date || !time || !name) return;
  const formattedDate = new Date(`${date}T12:00:00`).toLocaleDateString('pt-BR');
  const confirmation = document.querySelector('#confirmation');
  confirmation.hidden = false;
  confirmation.innerHTML = `✨ <strong>Pedido recebido, ${name}!</strong><br>Seu horário para <strong>${service.name}</strong> com <strong>${professional}</strong> foi selecionado para <strong>${formattedDate} às ${time}</strong>.<br><small>Este projeto é uma demonstração front-end; para confirmar e salvar reservas de verdade, conecte o formulário a um backend ou serviço de agendamento.</small>`;
  confirmation.scrollIntoView({ behavior:'smooth', block:'center' });
});

const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
menuBtn.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));
