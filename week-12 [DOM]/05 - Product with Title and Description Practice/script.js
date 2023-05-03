for (let i = 1; i <= 100; i++) {
    let containerDiv = document.createElement('div');
    containerDiv.className = 'product';

    let titleHeading = document.createElement('h3');
    let descriptionPara = document.createElement('p');

    let headingContent = document.createTextNode(`[${i}] Product Title Here`);
    let paraContent = document.createTextNode(
        'Product description Product description Product description Product description Product description Product description Product description Product description Product description Product description Product description Product description Product description Product description Product description Product description Product description Product description Product description Product description'
    );

    containerDiv.appendChild(titleHeading);
    containerDiv.appendChild(descriptionPara);
    titleHeading.appendChild(headingContent);
    descriptionPara.appendChild(paraContent);
    document.body.appendChild(containerDiv);
}
