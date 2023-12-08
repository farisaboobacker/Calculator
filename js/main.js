// Dispaly
var Dispaly=document.getElementById('display');

//numbers
function numbers(val) {
    let txt=Dispaly.value;
    if (txt.startsWith('0')) {
        Dispaly.value=val;
    } else {
        Dispaly.value+=val
    }
}

// operators
function operators(op) {
    let txt=Dispaly.value;
    if (txt==''||txt.endsWith('+')||txt.endsWith('-')||txt.endsWith('/')||txt.endsWith('*')) {
        Dispaly.value+=''
    } else {
        Dispaly.value+=op
    }
}

//dot key
function dot() {
    let txt=Dispaly.value;
    if (txt==''||txt.endsWith('+')||txt.endsWith('-')||txt.endsWith('/')||txt.endsWith('*')) {
        Dispaly.value+='0.'
    } else if(txt.endsWith('.')){
        Dispaly.value+=''
    }else {
        Dispaly.value+='.'
    }
}

// zero key
function zero() {
    let txt=Dispaly.value;
    if (txt=='0'||txt.endsWith('+')||txt.endsWith('-')||txt.endsWith('/')||txt.endsWith('*')) {
        Dispaly.value+=''
    } else{
        Dispaly.value+='0'
    }
}
// Display clear
function allClear() {
    Dispaly.value=''
}

// Display clear one
function clearOne() {
    let txt=Dispaly.value;
    Dispaly.value=txt.slice(0,txt.length-1)
}
// Result
function result() {
    if (Dispaly.value=='') {
        Dispaly.value='0'
    } else {
        Dispaly.value= eval(Dispaly.value);
    }
}