function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
      .setTitle('Ice Breakers')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
      .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

function getQuestions() {
  return JSON.parse(HtmlService.createHtmlOutputFromFile('questions.json').getContent());
}

function getSheetConfig() {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    return { url: ss.getUrl(), name: ss.getName() };
  } catch (e) {
    return { url: null, name: null };
  }
}
