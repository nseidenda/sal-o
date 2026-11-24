const services=[
 {id:"corte-infantil",name:"Corte Infantil",desc:"Cortes divertidos e pensados para o conforto dos pequenos.",price:"R$ 55",icon:"✂",duration:"40 min",type:"Crianças"},
 {id:"penteado",name:"Penteado Infantil",desc:"Penteados especiais para festas, fotos e momentos mágicos.",price:"R$ 65",icon:"✿",duration:"45 min",type:"Crianças"},
 {id:"manicure-kids",name:"Manicure Kids",desc:"Um momento de cuidado com cores e muita diversão.",price:"R$ 45",icon:"♡",duration:"30 min",type:"Crianças"},
 {id:"corte-adulto",name:"Corte Adulto",desc:"Corte personalizado para pais e responsáveis.",price:"R$ 70",icon:"✂",duration:"45 min",type:"Adultos"},
 {id:"escova",name:"Escova",desc:"Finalização leve para você sair se sentindo incrível.",price:"R$ 60",icon:"✦",duration:"40 min",type:"Adultos"},
 {id:"manicure",name:"Manicure",desc:"Cuidado e acabamento para deixar suas mãos impecáveis.",price:"R$ 50",icon:"♡",duration:"40 min",type:"Adultos"}
];
const professionals=[
 {id:"ana",name:"Ana Clara",role:"Especialista em beleza infantil",emoji:"👩🏻‍🦰",tags:["Cortes infantis","Penteados"]},
 {id:"julia",name:"Julia Martins",role:"Manicure & Nail Designer",emoji:"👩🏻‍🎨",tags:["Manicure","Manicure Kids"]},
 {id:"carlos",name:"Carlos Henrique",role:"Cabeleireiro",emoji:"👨🏻‍🦱",tags:["Cortes","Escova"]}
];

const serviceGrid=document.querySelector("#serviceGrid");
serviceGrid.innerHTML=services.map(s=>`<article class="service"><div class="service-icon">${s.icon}</div><h3>${s.name}</h3><p>${s.desc}</p><div class="service-bottom"><span class="price">${s.price}</span><a href="#agendamento" data-service="${s.id}">AGENDAR →</a></div></article>`).join("");

document.querySelector("#professionalGrid").innerHTML=professionals.map(p=>`<article class="pro"><div class="avatar">${p.emoji}</div><h3>${p.name}</h3><p>${p.role}</p><div class="tags">${p.tags.map(t=>`<span class="tag">${t}</span>`).join("")}</div></article>`).join("");

const bookingServices=document.querySelector("#bookingServices");
bookingServices.innerHTML=services.map(s=>`<button type="button" class="option" data-id="${s.id}"><span class="icon">${s.icon}</span><span><strong>${s.name}</strong><small>${s.type} • ${s.duration} • ${s.price}</small></span><span class="right">›</span></button>`).join("");

const bookingProfessionals=document.querySelector("#bookingProfessionals");
bookingProfessionals.innerHTML=professionals.map(p=>`<button type="button" class="option" data-id="${p.id}"><span class="icon">${p.emoji}</span><span><strong>${p.name}</strong><small>${p.role}</small></span><span class="right">›</span></button>`).join("");

let state={service:null,professional:null,date:null,time:null};
function bindOptions(selector,key){
 document.querySelectorAll(`${selector} .option`).forEach(btn=>btn.addEventListener("click",()=>{
   document.querySelectorAll(`${selector} .option`).forEach(x=>x.classList.remove("selected"));
   btn.classList.add("selected"); state[key]=btn.dataset.id;
 }));
}
bindOptions("#bookingServices","service"); bindOptions("#bookingProfessionals","professional");

let currentStep=1;
function showStep(n){
 currentStep=n;
 document.querySelectorAll(".form-step").forEach(s=>s.classList.toggle("active",Number(s.dataset.step)===n));
 document.querySelectorAll(".steps span").forEach((s,i)=>s.classList.toggle("active",i<n));
}
document.querySelectorAll(".next").forEach(btn=>btn.addEventListener("click",()=>{
 if(currentStep===1&&!state.service)return alert("Escolha um serviço para continuar.");
 if(currentStep===2&&!state.professional)return alert("Escolha um profissional para continuar.");
 if(currentStep===3){
   state.date=document.querySelector("#bookingDate").value; state.time=document.querySelector("#bookingTime").value;
   if(!state.date||!state.time)return alert("Escolha uma data e um horário.");
 }
 if(currentStep<4)showStep(currentStep+1);
 updateSummary();
}));
document.querySelectorAll(".prev").forEach(btn=>btn.addEventListener("click",()=>showStep(currentStep-1)));

function updateSummary(){
 if(!state.service||!state.professional)return;
 const s=services.find(x=>x.id===state.service), p=professionals.find(x=>x.id===state.professional);
 document.querySelector("#bookingSummary").innerHTML=`<strong>Resumo:</strong> ${s.name} com ${p.name}${state.date?` em ${new Date(state.date+"T12:00").toLocaleDateString("pt-BR")}`:""}${state.time?` às ${state.time}`:""} — ${s.price}.`;
}
document.querySelectorAll("[data-service]").forEach(a=>a.addEventListener("click",()=>{
 const id=a.dataset.service; document.querySelector(`#bookingServices .option[data-id="${id}"]`)?.click();
 showStep(1);
}));
document.querySelector("#bookingDate").min=new Date().toISOString().split("T")[0];

document.querySelector("#bookingForm").addEventListener("submit",e=>{
 e.preventDefault();
 const name=document.querySelector("#clientName").value.trim(), phone=document.querySelector("#clientPhone").value.trim();
 if(!name||!phone)return alert("Preencha seu nome e WhatsApp.");
 const s=services.find(x=>x.id===state.service),p=professionals.find(x=>x.id===state.professional);
 const date=new Date(state.date+"T12:00").toLocaleDateString("pt-BR");
 document.querySelector("#successText").textContent=`${name}, recebemos sua solicitação para ${s.name} com ${p.name}, no dia ${date} às ${state.time}. O salão entrará em contato pelo WhatsApp ${phone} para confirmar o horário.`;
 document.querySelector("#bookingForm").classList.add("hidden");document.querySelector("#successBox").classList.remove("hidden");
});

document.querySelector(".menu-toggle").addEventListener("click",()=>document.querySelector("#mainNav").classList.toggle("open"));
document.querySelectorAll("#mainNav a").forEach(a=>a.addEventListener("click",()=>document.querySelector("#mainNav").classList.remove("open")));
document.querySelector("#year").textContent=new Date().getFullYear();
