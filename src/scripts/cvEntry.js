class cvEntry {
  constructor(data) {
    return this.buildCvContent(data);
  }

  buildCvContent(data) {
    const cvEntryElement = document.createElement('div');
    cvEntryElement.className = 'cv-entry';

    cvEntryElement.innerHTML = `
    <div class="cv-entry__title">
      <h1>${data.title}</h1>
    </div>
    <div class="cv-entry__date">${data.date}</div>
    <div class="cv-entry__description">
      <p>d${data.description}</p>
    </div>
    `;
    return cvEntryElement;
  }

}


export default cvEntry;