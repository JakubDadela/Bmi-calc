var plec=document.getElementById('plec');
var waga=document.getElementById('waga');
var wzrost=document.getElementById('wzrost');
var klikacz=document.getElementById('btn');
var text=document.querySelector('p');
function Oblicz(event){
    event.preventDefault();
    let wp=plec.value;
    let wh=waga.value;
    let hg=wzrost.value;
    let res=0;
    res=wh/(Math.pow(hg/100,2));
    let bmi=res.toString();
    let str="";
     if(res<16) str='O nie twoje bmi wynosi: '+ bmi +'. Jesteś wygłodzony';
     else if(res>16 && res<17) str='Bmi: ' + bmi + '. Jesteś wychudony!!';
     else if(res>17 && res<18.5) str='Prawie dobrze bmi: '+bmi+ '. Delikatna niedowaga jedz więcej!';
     else if(res>18 && res<24.9) str='Super bmi: ' + bmi  +'.';
     else if(res>25 && res<29.8) str='Kurde bmi: '+ bmi +'. Nadwaga jedz mniej!';
     else if(res>29.8) str='Ojoj bmi: '+ bmi +'. Jesteś otyły!';
     else str="";
    text.innerText=str;
}

klikacz.addEventListener('click',Oblicz);