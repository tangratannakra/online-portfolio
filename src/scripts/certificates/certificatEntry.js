class CertificateEntry {
    constructor(data) {
        return this.buildCertEntry(data);
    }

    buildCertEntry(data) {
        const certEntry = document.createElement('div');
        certEntry.className = 'certificates-entry';

        certEntry.innerHTML = `
    <div class="certificates-entry__thumb">
      <h1>${data.title}</h1>
    </div>
    <div class="certificates-entry__date">${data.date}</div>
    <div class="cv-entry__description">
      <p>d${data.description}</p>
    </div>
    `;
        return certEntry;
    }
}

export default CertificateEntry;