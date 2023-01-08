
var input1 = document.querySelector('textarea#txt-area1');
var input2 = document.querySelector('textarea#txt-area2');
var message = document.getElementById("msg")

var button1 = document.querySelector('button.btn-1');
button1.onclick = encode;

var button2 = document.querySelector('button.btn-2');
button2.onclick = decode;

document.getElementById('none').innerHTML = '';
input1.focus();

// Função codificar
function encode() {
    
    if (input1.value.length == 0) {
        document.getElementById('none').innerHTML = '<h2 id="none">Nenhuma mensagem encontrada</h2>';
        input1.focus();
    } else {
        //limpa textarea2 (descriptografar)//
        document.getElementById('none').innerHTML = '';
        document.querySelector('img.icone').style.display = 'none';

        //substituição de caracteres
        var text = input1.value;
        var txt =  text.replace(/a/igm, '%40%!!@').replace(/e/igm, '332541').replace(/i/igm, 'bcmrd').replace(/o/igm, 'DT@S2').replace(/u/igm, 'MP4%#');
		var txt = txt.replace(/s/igm, '%32%!!35@').replace(/r/igm, '43855').replace(/n/igm, '¨5').replace(/d/igm, 'DT@789').replace(/m/igm, 'MP4%#');

        document.getElementById('txt-area2').innerHTML = `${txt}`;
       
        // Botão copiar é exibido na tela quando é chamado a função criptograr() 
        document.getElementById('copy').innerHTML = '<button class="button btn-3" onclick="copy()">Copiar</button>';
       
    }
}
// função descodificar
function decode() {
    if (input1.value.length == 0) {
        document.getElementById('none').innerHTML = ' <h2 id="none">Nenhuma mensagem encontrada</h2>';
        document.querySelector('img.icone').style.display;
        input1.focus();
    } else {
        
        document.getElementById('none').innerHTML = '';
        document.querySelector('img.icone').style.display = 'none';
        document.getElementById('txt-area1').innerHTML = '';

        //substituição de caracteres
        var text = input1.value;
        var txt =  text.replace(/%40%!!@/igm, 'a').replace(/332541/igm, 'e').replace(/bcmrd/igm, 'i').replace(/DT@S2/igm, 'o').replace(/MP4%#/igm, 'u');
		var txt = txt.replace(/%32%!!35@/igm, 's').replace(/43855/igm, 'r').replace(/¨5/igm, 'n').replace(/DT@789/igm, 'd').replace(/MP4%#/igm, 'm');

        document.getElementById('txt-area2').innerHTML = `${txt}`;
     
    }
}



