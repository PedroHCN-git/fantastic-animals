export default function initFuncionamento(){
    const funcionamento = document.querySelector('[data-semana]')
    const diasSemana = funcionamento.dataset.semana.split(',').map(Number)
    const horarios = funcionamento.dataset.horario.split(',').map(Number)
    
    const dataAgora = new Date();
    
    const diaAgora = dataAgora.getDate();
    const horaAgora = dataAgora.getHours();
    
    const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;
    
    const horarioAberto = horaAgora >= horarios[0] && horaAgora < horarios[1] ? true : false
    
    if(semanaAberto && horarioAberto){
        funcionamento.classList.add('aberto')
    }
}
