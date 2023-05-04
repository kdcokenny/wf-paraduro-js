async function loadDateModule() {
  await import('./register/date');
}

async function loadChartJsModule() {
  await import('./chartjs/dashboard');
}

async function loadShimmerScssModule() {
  await import('./scss/shimmer.scss');
}

// async function loadOnboardingSlideModule() {
//   await import('./onboarding/slide');
// }

// async function loadOnboardingUploadImageModule() {
//   await import('./onboarding/uploadImage');
// }

function getCurrentPath() {
  return window.location.pathname;
}

// Load modules based on the current URL path
document.addEventListener('DOMContentLoaded', () => {
  const currentPath = getCurrentPath();

  if (currentPath === '/register') {
    loadDateModule();
  }

  // if (currentPath === '/velkommen/person') {
  //   loadOnboardingSlideModule();
  // }

  // Load the rest of the modules on every page
  loadChartJsModule();
  loadShimmerScssModule();
  loadOnboardingUploadImageModule();
});

console.log('init');
