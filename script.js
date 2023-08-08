function aparecerFaq1() {
    let faq1 = document.getElementById("faq1");
    let faq1Title = document.getElementById('faq1-title');

    if (faq1.style.display === 'block') {
        faq1.style.display = 'none';
        faq1Title.style.color = '';
        faq1Title.style.fontWeight = '';
    } else {
        faq1.style.display = 'block';
        faq1Title.style.color = 'hsl(238, 29%, 16%)';
        faq1Title.style.fontWeight = 'bold';
    }
}

function aparecerFaq2() {
    let faq2 = document.getElementById("faq2");
    let faq2Title = document.getElementById('faq2-title');

    if (faq2.style.display === 'block') {
        faq2.style.display = 'none';
        faq2Title.style.color = '';
        faq2Title.style.fontWeight = '';
    } else {
        faq2.style.display = 'block';
        faq2Title.style.color = 'hsl(238, 29%, 16%)';
        faq2Title.style.fontWeight = 'bold';
    }
}


function aparecerFaq3() {
    let faq3 = document.getElementById("faq3");
    let faq3Title = document.getElementById('faq3-title');

    if (faq3.style.display === 'block') { // se o conteúdo for estritamente igual block você me retorna isso
        faq3.style.display = 'none'; // aqui não é estritamente igual block, então ele me retorna o valor padrão
        faq3Title.style.color = '';
        faq3Title.style.fontWeight = '';
    } else {
        faq3.style.display = 'block'; // aqui é estritamente igual block, então me retorna esses dados
        faq3Title.style.color = 'hsl(238, 29%, 16%)';
        faq3Title.style.fontWeight = 'bold';
    }
}

function aparecerFaq4() {
    let faq4 = document.getElementById("faq4");
    let faq4Title = document.getElementById('faq4-title');

    if (faq4.style.display === 'block') {
        faq4.style.display = 'none';
        faq4Title.style.color = '';
        faq4Title.style.fontWeight = '';
    } else {
        faq4.style.display = 'block';
        faq4Title.style.color = 'hsl(238, 29%, 16%)';
        faq4Title.style.fontWeight = 'bold';
    }
}

function aparecerFaq5() {
    let faq5 = document.getElementById("faq5");
    let faq5Title = document.getElementById('faq5-title');

    if (faq5.style.display === 'block') {
        faq5.style.display = 'none';
        faq5Title.style.color = '';
        faq5Title.style.fontWeight = '';
    } else {
        faq5.style.display = 'block';
        faq5Title.style.color = 'hsl(238, 29%, 16%)';
        faq5Title.style.fontWeight = 'bold';
    }
}

