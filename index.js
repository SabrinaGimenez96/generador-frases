
var frases = [
    {
        frase: 'Es justicia y no caridad lo que el mundo necesita.',
        autor: 'Mary Wollstonecraft'
    },
    {
        frase: 'Dos cosas llenan mi ánimo de admiración y respeto: el cielo estrellado sobre mí y la moral que habita en mí.',
        autor: 'Immanuel Kant'
    },
    {
        frase: 'El corazón tiene razones que la razón ignora.',
        autor: 'Pascal'
    },
    {
        frase: 'La cosa más difícil es conocernos a nosotros mismos; la más fácil es hablar mal de los demás.',
        autor: 'Tales de Mileto'
    },
    {
        frase: 'No puedo enseñar nada a nadie. Solo puedo hacerles pensar.',
        autor: 'Sócrates'
    },
    {
        frase: 'No juzgamos a las personas que amamos.',
        autor: 'Jean-Paul Sartre'
    },
    {
        frase: 'Exígete mucho a ti mismo y espera poco de los demás. Así te ahorrarás disgustos.',
        autor: 'Confucio'
    },
    {
        frase: 'No lastimes a los demás con lo que te causa dolor a ti mismo.',
        autor: 'Buda'
    },
    {
        frase: 'Nunca moriría por mis creencias porque podría estar equivocado.',
        autor: 'Bertrand Russell'
    },
    {
        frase: 'Todo el mundo ve lo que aparentas ser, pocos experimentan lo que realmente eres.',
        autor: 'Maquiavelo'
    },
    {
        frase: 'El deseo es la verdadera esencia del hombre.',
        autor: 'Spinoza'
    },
    {
        frase: 'La paciencia es amarga, pero su fruto es dulce.',
        autor: 'Jean-Jacques Rousseau'
    },
    {
        frase: 'Aquel que tiene un porqué para vivir se puede enfrentar a todos los "cómos".',
        autor: 'Friedrich Nietzsche'
    },
    {
        frase: 'Cree que tu vida merece la pena ser vivida y esa creencia ayudará a crear el hecho.',
        autor: 'William James'
    },
    {
        frase: 'Vemos las cosas, no como son, sino como somos nosotros.',
        autor: 'Kant'
    },
    {
        frase: 'Cuando buscamos a alguien, buscamos en nuestro entorno algo que está dentro de todos.',
        autor: 'Hermann Hesse'
    },
    {
        frase: 'Quien sabe de dolor, todo lo sabe.',
        autor: 'Dante Alighieri'
    },
    {
        frase: 'No hay teoría revolucionaria sin práctica revolucionaria.',
        autor: 'Lenin'
    },
    {
        frase: 'Hay quienes se consideran perfectos, pero es sólo porque exigen menos de sí mismos.',
        autor: 'Hermann Hesse'
    },
    {
        frase: 'La religión es excelente para mantener callada a la gente común.',
        autor: 'Frank Zappa'
    },
    {
        frase: 'Aceptar y respetar la diferencia es una de esas virtudes sin las cuales la escucha no se puede dar.',
        autor: 'Paulo Freire'
    },
    {
        frase: 'Si un individuo es pasivo intelectualmente, no conseguirá ser libre moralmente.',
        autor: 'Jean Piaget'
    },
    {
        frase: 'La libertad está en ser dueños de la propia vida.',
        autor: 'Platón'
    },
    {
        frase: 'No hay que confundir la verdad con la opinión de la mayoría.',
        autor: 'Jean Cocteau'
    },
    {
        frase: 'El progreso social puede ser medido por la posición social del sexo femenino.',
        autor: 'Karl Marx'
    },
    {
        frase: 'Nadie debería creerse perfecto, ni preocuparse demasiado por el hecho de no serlo.',
        autor: 'Bertrand Russell'
    },
    {
        frase: 'Cuanto más de sí mismo el hombre le atribuye a Dios, menos deja para sí mismo.',
        autor: 'Karl Marx'
    },
];



var indice = 0;
document.getElementById('contenido').innerHTML = frases[indice].frase;
document.getElementById('nom-autor').innerHTML = '- ' + frases[indice].autor;
var boton = document.getElementById('btnFrase');

boton.addEventListener("click", nuevaFrase);

var colores = ["#90EE90", "#F08080" , "#87CEFA", "#FFB6C1", "#9370D8", "#FFDEAD", "#B0E0E6", "#708090", "#9400D3", "#ADFF2F", "#FF69B4", "#20B2AA", "#FFA07A", "#800000", "#BA55D3", "#3CB371", "#191970", "#FF4500", "#DA70D6", "#FFA500", "#CD853F", "#DDA0DD", "#FF0000", "#F4A460", "#6A5ACD", "#D8BFD8", "#40E0D0"];
document.body.style.backgroundColor = colores[indice];
document.getElementById('btnFrase').style.backgroundColor = colores[indice];
document.getElementById('contenido').style.color = colores[indice];
document.getElementById('comillas').style.color = colores[indice];
document.getElementById('nom-autor').style.color = colores[indice];
document.getElementById('twitter').style.backgroundColor = colores[indice];
document.getElementById('facebook').style.backgroundColor = colores[indice];

function nuevaFrase(){
    if(indice === frases.length){   
        indice = 0;   
    }
    document.getElementById('contenido').innerHTML = frases[indice].frase; 
    document.getElementById('nom-autor').innerHTML = '- ' + frases[indice].autor;
    document.body.style.backgroundColor = colores[indice];
    document.getElementById('btnFrase').style.backgroundColor = colores[indice];
    document.getElementById('contenido').style.color = colores[indice];
    document.getElementById('comillas').style.color = colores[indice];
    document.getElementById('nom-autor').style.color = colores[indice];
    document.getElementById('twitter').style.backgroundColor = colores[indice];
    document.getElementById('facebook').style.backgroundColor = colores[indice];
    indice ++;     
};

