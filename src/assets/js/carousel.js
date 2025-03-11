document.addEventListener('DOMContentLoaded', function() {
    // Datos de ejemplo (reemplaza con tus datos reales)
    const headerData = [
        {
            title: "POR UN AMOR ETERNO",
            description: "Explora los regalos del día de San Valentín",
            image: "URL_DE_TU_IMAGEN_1"
        },
        {
            title: "NUEVA COLECCIÓN",
            description: "Descubre las últimas tendencias",
            image: "URL_DE_TU_IMAGEN_2"
        },
        // Agrega más objetos con datos si tienes más slides
    ];

    const carouselInner = document.querySelector('.carousel-inner');

    // Genera los items del carrusel dinámicamente
    headerData.forEach((item, index) => {
        const activeClass = index === 0 ? "active" : "";
        const carouselItem = `
            <div class="carousel-item ${activeClass}" style="background-image: url('${item.image}');">
                <div class="carousel-caption">
                    <h5>${item.title}</h5>
                    <p>${item.description}</p>
                    <button class="btn btn-primary">Inspírate</button>
                </div>
            </div>
        `;
        carouselInner.innerHTML += carouselItem;
    });
});