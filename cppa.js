// Make sure that the properties exist on the window.

  window.googlefc = window.googlefc || {};
  window.googlefc.ccpa = window.googlefc.ccpa || {}
  window.googlefc.callbackQueue = window.googlefc.callbackQueue || [];

  // Queue the callback on the callbackQueue.
  googlefc.callbackQueue.push({
    'INITIAL_CCPA_DATA_READY':
    () => {
      switch (googlefc.ccpa.getInitialCcpaStatus()) {
        case googlefc.ccpa.InitialCcpaStatusEnum.CCPA_DOES_NOT_APPLY:
          // Insert handling for cases where the user is not CCPA eligible.
          break;
        case googlefc.ccpa.InitialCcpaStatusEnum.NOT_OPTED_OUT:
          // Insert handling for cases where the user is CCPA eligible and has
          // not opted out.
          break;
        case googlefc.ccpa.InitialCcpaStatusEnum.OPTED_OUT:
          // Insert handling for cases where the user is CCPA eligible and has
          // opted out.
          break;
      }
    }
  });
