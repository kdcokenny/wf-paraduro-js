function handleParaduroEvent(eventType, variableName, actionName) {
  window.addEventListener('LR_DATA_OUTPUT', async e => {
    if (e.detail.ctx === eventType) {
      const cdnUrls = e.detail.data
        .filter(item => item.cdnUrl)
        .map(item => item.cdnUrl);

      await Wized.data.setVariable(variableName, cdnUrls);
      await Wized.request.execute(actionName);
    }
  });
}

handleParaduroEvent('paraduro-pfp', 'inputpfpurl', 'Onboarding pfp');
handleParaduroEvent('paraduro-hel', 'inputhelurl', 'Onboarding hel');
handleParaduroEvent('paraduro-side', 'inputsideurl', 'Onboarding side');
handleParaduroEvent(
  'paraduro-portfolio',
  'inputportfoliourl',
  'Onboarding portfolio'
);
