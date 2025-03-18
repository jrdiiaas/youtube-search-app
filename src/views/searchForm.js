function renderSearchForm() {
    const form = document.createElement('form');
    const input = document.createElement('input');
    const button = document.createElement('button');

    input.type = 'text';
    input.placeholder = 'Buscar vídeos...';
    button.type = 'submit';
    button.textContent = 'Buscar';

    form.appendChild(input);
    form.appendChild(button);

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const query = input.value;
        const results = await searchVideos(query);
        const xmlResults = convertToXML(results);
        console.log(xmlResults); // Aqui você pode manipular os resultados XML como desejar
    });

    document.body.appendChild(form);
}

export { renderSearchForm };