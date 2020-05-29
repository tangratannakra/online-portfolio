class CertificateEntry {
  constructor(data) {
    return this.buildCertEntry(data);
  }

  buildCertEntry(data) {
    const certEntry = document.createElement('div');
    certEntry.className = 'certificates-entry';

    certEntry.innerHTML = `
    <div class="certificates-entry__thumb">
      <img src="${data.img}" alt="certificate image"/>
    </div>
    <div class="certificates-entry__title"><h1><a href="${data.url}" target="_blank">${data.title}</a></h1></div>
    `;
    return certEntry;
  }
}

export default CertificateEntry;

{
  /* <div class="certificates-entry__description">
        <p>d${data.description}</p>
      </div> */
}