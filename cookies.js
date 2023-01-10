  // Make sure that the properties exist on the window.
  window.googlefc = window.googlefc || {};
  window.googlefc.ccpa = window.googlefc.ccpa || {}
  window.googlefc.callbackQueue = window.googlefc.callbackQueue || [];

  // Queue the callback on the callbackQueue.
  googlefc.callbackQueue.push({
    'AD_BLOCK_DATA_READY':
    () => {
      switch (googlefc.getAllowAdsStatus()) {
        case googlefc.AllowAdsStatusEnum.ADS_NOT_ALLOWED:
          // Insert handling for cases where the user has not allowed ads.
          // The user may have never been an ad blocker.
          break;
        case googlefc.AllowAdsStatusEnum.ADS_ALLOWED:
          // Insert handling for cases where the user saw the ad blocking
          // message and allowed ads on the site.
          break;
        case googlefc.AllowAdsStatusEnum.UNKNOWN:
          // Insert handling for unknown cases.
          break;
      }
    }
  });
