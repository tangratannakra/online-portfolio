class RecentProject {
  constructor(data) {
    return this.buildProjectElement(data);
  }

  buildProjectElement(data) {
    const recentPrElement = document.createElement('div');
    recentPrElement.className = 'recentPr-entry';

    recentPrElement.innerHTML = `
    <div class="recentPr-entry__thumb">
      <img src="${data.thumb}"alt ="project thumb">
    </div>
    <div class="recentPr-entry__hover">
      <div class="recentPr-entry__title">
        <h1><a href="${data.url}" target="__blank">${data.title}</a></h1>
      </div>
      <div class="recentPr-entry__description">
        <p>${data.description}</p>
      </div>
    </div>
    `;
    return recentPrElement;
  }
}

export default RecentProject;