function calcularTiempo(){
    let tiempo= new Date();

    let hora = tiempo.getHours();
    let minuto = tiempo.getMinutes();
    let segundo = tiempo.getSeconds();

    hora = hora < 10 ? "0" + hora : hora;
    minuto = minuto < 10? "0" + minuto: minuto;
    segundo = segundo < 10? "0" + segundo: segundo;

    let ampm = hora >= 12 ? 'pm' : 'am';
    hora = hora % 12;
    hora = hora ? hora : 12;

    let pantallaReloj = hora + ":" + minuto + ":" + segundo + " " + ampm;
    let relojdigital = document.querySelector(".reloj2");
    relojdigital.innerHTML = pantallaReloj;

}
setInterval(calcularTiempo, 1000);

    const deg = 6;

    let horas = document.querySelector('.hora')
    let minuto = document.querySelector('.minuto')
    let segundo = document.querySelector('.segundo')
    setInterval(()=>{

        let tiempo = new Date ();

    let hr = tiempo.getHours() * 30;
    let min = tiempo.getMinutes()* deg;
    let seg = tiempo.getSeconds()* deg;

    horas.style.transform =`rotate(${(hr)+(min/12)}deg)`;
    minuto.style.transform = `rotate(${min}deg)`;
    segundo.style.transform = `rotate(${seg}deg)`;

     })

