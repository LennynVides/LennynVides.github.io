AOS.init({
    duration: 1000,
    once: false,
    mirror: true
});

const cortes = [
    // Cortes Modernos
    {
        id: 'taper-fade',
        nombre: 'Taper Fades',
        descripcion: 'Degradado moderno con volumen en la parte superior. Ideal para un look limpio y fresco.',
        imagen360: '../cortes/fade.avif',
        categoria: 'moderno'
    },
    {
        id: 'mullet',
        nombre: 'Mullet',
        descripcion: 'Corte moderno con estilo retro, corto adelante y largo atrás.',
        imagen360: '../cortes/mullet.jpeg',
        categoria: 'moderno'
    },
    {
        id: 'mohicano2',
        nombre: 'Mohicano',
        descripcion: 'Estilo rebelde con los laterales rapados y cresta al centro.',
        imagen360: '../cortes/mohicano-redondo.jpeg',
        categoria: 'moderno'
    },

    // Cortes Clásicos
    {
        id: 'francesa-clara',
        nombre: 'Francesa Clara',
        descripcion: 'Corte francés con una apariencia ligera y limpia.',
        imagen360: '../cortes/francesa-clara.jpeg',
        categoria: 'clasico'
    },
    {
        id: 'francesa-oscura',
        nombre: 'Francesa Oscura',
        descripcion: 'Versión más marcada del corte francés, ideal para rostros definidos.',
        imagen360: '../cortes/francesa-oscura.jpeg',
        categoria: 'clasico'
    },
    {
        id: 'buzzcut',
        nombre: 'Buzz Cut',
        descripcion: 'Corte al ras, fácil de mantener y muy masculino.',
        imagen360: '../cortes/buzz-cut.jpeg',
        categoria: 'clasico'
    },
    {
        id: 'side-part',
        nombre: 'Side Part',
        descripcion: 'Partido de lado con elegancia, ideal para un look profesional.',
        imagen360: '../cortes/side-part.jpeg',
        categoria: 'clasico'
    },
    {
        id: 'slick-back',
        nombre: 'Slick Back',
        descripcion: 'Cabello peinado hacia atrás con gel para un acabado pulido.',
        imagen360: '../cortes/Slick-back-con-degradación.jpeg',
        categoria: 'clasico'
    },
    {
        id: 'undercut',
        nombre: 'Under Cut',
        descripcion: 'Lados rapados con parte superior más larga. Versátil y clásico.',
        imagen360: '../cortes/under-cut.jpeg',
        categoria: 'clasico'
    },
    {
        id: 'tijera',
        nombre: 'Corte Clásico a Tijera',
        descripcion: 'Corte completamente a tijera para un look natural y tradicional.',
        imagen360: '../cortes/clasico-tijeras.jpeg',
        categoria: 'clasico'
    },

    // Cortes con Diseños (NO SE TOCAN)
    {
        id: 'low-fade-diseno',
        nombre: 'Low Fade Artístico',
        descripcion: 'Desvanecido bajo con diseños personalizados para destacar tu estilo.',
        imagen360: '../cortes/fade-diseno1.jpeg',
        categoria: 'diseno'
    },
    {
        id: 'mid-fade-diseno',
        nombre: 'Mid Fade con Textura',
        descripcion: 'Desvanecido medio con textura superior y diseño lateral llamativo.',
        imagen360: '../cortes/mid-diseno1.jpeg',
        categoria: 'diseno'
    },
    {
        id: 'high-fade-diseno',
        nombre: 'High Fade Detallado',
        descripcion: 'Desvanecido alto con diseños definidos. Perfecto para resaltar el perfil.',
        imagen360: '../cortes/high-diseno1.jpeg',
        categoria: 'diseno'
    },
    {
        id: 'taper-fade-diseno',
        nombre: 'Taper Fade Creativo',
        descripcion: 'Corte sutil con detalles artísticos para un look elegante pero atrevido.',
        imagen360: '../cortes/taper-diseno1.jpeg',
        categoria: 'diseno'
    },
    {
        id: 'mullet-diseno',
        nombre: 'Mullet Moderno',
        descripcion: 'Regreso del mullet con diseño gráfico en los lados para un look vintage renovado.',
        imagen360: '../cortes/mullet-diseno1.jpeg',
        categoria: 'diseno'
    },
    {
        id: 'mohicano-diseno',
        nombre: 'Mohicano con Diseño',
        descripcion: 'Versión moderna del mohicano, con laterales rapados y detalles geométricos.',
        imagen360: '../cortes/mohicano-diseno1.jpeg',
        categoria: 'diseno'
    }
];


const categorias = {
    moderno: document.getElementById('modernos'),
    clasico: document.getElementById('clasicos'),
    diseno: document.getElementById('disenos'),
};

cortes.forEach((corte, index) => {
    const col = document.createElement('div');
    col.className = 'col-md-4';
    col.setAttribute('data-aos', 'fade-up');
    col.setAttribute('data-aos-delay', index * 100);

    const card = document.createElement('div');
    card.className = 'card text-center hidden';

    // Verifica si el corte es 'taper-fade'
    const enlace = (corte.id === 'taper-fade') ? 'catalogofade.html' : `detalle.html?id=${corte.id}`;

    card.innerHTML = `
        <img src="${corte.imagen360}" alt="${corte.nombre}" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title">${corte.nombre}</h5>
            <p>${corte.descripcion}</p>
            <a href="${enlace}" class="btn btn-custom">Ver detalles</a>
        </div>
    `;

    col.appendChild(card);

    const container = categorias[corte.categoria];
    if (container) {
        container.appendChild(col);
    }
});

// Intersection Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const card = entry.target;
        if (entry.isIntersecting) {
            card.classList.add('visible');
            card.classList.remove('hidden');
        } else {
            card.classList.remove('visible');
            card.classList.add('hidden');
        }
    });
}, {
    threshold: 0.1
});

setTimeout(() => {
    document.querySelectorAll('.card').forEach(card => {
        observer.observe(card);
    });
}, 1000);