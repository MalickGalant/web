// Make sure that the properties exist on the window.
  window.googlefc = window.googlefc || {};
  window.googlefc.ccpa = window.googlefc.ccpa || {}
  window.googlefc.callbackQueue = window.googlefc.callbackQueue || [];

  // Queue the callback on the callbackQueue.
  googlefc.callbackQueue.push({
    'AD_BLOCK_DATA_READY':
    () => {
      switch (googlefc.getAdBlockerStatus()) {
          case googlefc.AdBlockerStatusEnum.EXTENSION_LEVEL_AD_BLOCKER:
          case googlefc.AdBlockerStatusEnum.NETWORK_LEVEL_AD_BLOCKER:
            // Insert handling for cases where the user is blocking ads.
            break;
          case googlefc.AdBlockerStatusEnum.NO_AD_BLOCKER:
            // Insert handling for cases where the user is not blocking ads.
            break;
          case googlefc.AdBlockerStatusEnum.UNKNOWN:
            // Insert handling for unknown cases.
            break;
      }
    }
  });
