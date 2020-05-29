class RecentProject {
  constructor(data) {
    return this.buildProjectElement(data);
  }

  buildProjectElement(data) {
    const recentPrElement = document.createElement('div');
    recentPrElement.className = 'recentPr-entry';

    recentPrElement.innerHTML = `
    <div class="recentPr-entry__thumb">
      <a href="${data.url}" target="__blank"><img src="${data.thumb}"alt ="project thumb"></a>
    </div>
    <div class="recentPr-entry__title"><h1>${data.title}</h1></div>
    <div class="recentPr-entry__description">
      <p>${data.description}</p>
    </div>
    `;
    return recentPrElement;

  }
}

export default RecentProject;