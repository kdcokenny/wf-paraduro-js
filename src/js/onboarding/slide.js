window.addEventListener('load', async () => {
  console.log("you shouldn't see this message");
  const nextButtons = document.querySelectorAll('[wized="onboard_next"]');
  const nextSlides = document.querySelectorAll('[wized="onboard_click"]');
  const backButtons = document.querySelectorAll('[wized="onboard_back"]');
  let currentSlide = 1;
  let isRequesting = false;

  const executeOnboarding = async (requestName, dataPath) => {
    await Wized.request.execute(requestName);
    return await Wized.data.get(dataPath);
  };

  const handleClick = async nextSlide => {
    if (isRequesting) {
      console.log('already requesting');
      return;
    }

    isRequesting = true;
    let response;

    if (currentSlide === 1) {
      response = await executeOnboarding('Onboarding one', 'r.26.$');
    } else if (currentSlide === 2) {
      response = await executeOnboarding('Onboarding two', 'r.27.$');
    } else if (currentSlide === 3) {
      response = await executeOnboarding('Onboarding three', 'r.28.$');
    }

    if (response.statusCode === 200) {
      nextSlide.click();
      currentSlide += 1;
    } else {
      throw new Error('Request failed');
    }

    isRequesting = false;
  };

  const handleBackClick = backSlide => {
    if (isRequesting || currentSlide <= 1) {
      console.log('cannot go back');
      return;
    }

    isRequesting = true;
    backSlide.click();
    currentSlide -= 1;
    isRequesting = false;
  };

  nextButtons.forEach((nextButton, index) => {
    nextButton.addEventListener('click', async () => {
      await handleClick(nextSlides[index]);
    });
  });

  backButtons.forEach((backButton, index) => {
    backButton.addEventListener('click', () => {
      handleBackClick(nextSlides[index - 1]);
    });
  });
});
