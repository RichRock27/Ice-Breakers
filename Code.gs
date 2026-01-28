function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
      .setTitle('Ice Breakers')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
      .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

function getQuestions() {
  return JSON.parse(HtmlService.createHtmlOutputFromFile('questions.json').getContent());
}
