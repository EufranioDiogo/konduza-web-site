const quotes = [ 
    
    {
        img: '20201017_152921.jpg',
        name: 'Creuma Matias',
        quote: 'Escolher LIG  como a minha escola de condução foi a melhor escolha, e hoje tenho a minha habilitação na mão'
    },
    {
        img: 'cibelly-roberta-SE4Xc1WvIkU-unsplash.jpg',
        name: 'Oliver Jonathan',
        quote: 'Uma escola excelente em todos os sentidos, desde as condições de ensino até aos entusiasmados funcionários. Recomendo '
    },
    
    {
        img: 'michael-dam-mEZ3PoFGs_k-unsplash.jpg',
        name: 'Suzete Lukeny',
        quote: 'Eu gostei tanto de estudar na LIG porque os meus professores eram super pacientes e profissionais.'
    }
]


let quoteIndex = 0;
const basePictureUrl = '../assets/image/'
const quoteCircles = document.querySelectorAll('.div-fifth-section-description-div-circles--item')
setInterval(() => {
    quoteCircles[quoteIndex].classList.add('active-item-quote')
    renderQuote(quotes[quoteIndex])

    if(quoteIndex==0) {
        quoteCircles[2].classList.remove('active-item-quote')
    }
    else if(quoteIndex!=0)
    {
        quoteCircles[quoteIndex-1].classList.remove('active-item-quote')
    }

    if(quoteIndex == 2){
        quoteIndex = 0;
    } else {
        quoteIndex++;
    }

    

<<<<<<< HEAD
}, 5000)
=======
}, 3000)
>>>>>>> cabdb797ea931109c6c522b98fe1e62217842b64

function renderQuote(quote){

    imagem = document.querySelector('.div-fifth-section-description-img')
    imagem.src =`${basePictureUrl}${quote.img}`

    document.querySelector('.div-fifth-section-description-p-name').innerText = quote.name
    document.querySelector('.div-fifth-section-description-p-description').innerText = quote.quote
}