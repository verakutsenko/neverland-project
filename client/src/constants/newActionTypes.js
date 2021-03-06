const actionTypes = {
  address: {
    SET_DEFAULT_SHIPPING_ADDRESS: 'SET_DEFAULT_SHIPPING_ADDRESS',
    SET_ALL_SHIPPING_ADDRESSES: 'SET_ALL_SHIPPING_ADDRESSES',
    GET_SHIPPING_ADDRESS: 'GET_SHIPPING_ADDRESS',
    UPDATE_SHIPPING_ADDRESS: 'UPDATE_SHIPPING_ADDRESS',
    ADD_SHIPPING_ADDRESS: 'ADD_SHIPPING_ADDRESS',
    DELETE_SHIPPING_ADDRESS: 'DELETE_SHIPPING_ADDRESS',
  },
  ui: {
    SHOW_MESSAGE: 'SHOW_MESSAGE',
    REMOVE_MESSAGE: 'REMOVE_MESSAGE',
    REMOVE_FIRST_MESSAGE: 'REMOVE_FIRST_MESSAGE',
  },
  auth: {
    AUTHORIZE_FIREBASE: 'AUTHORIZE_FIREBASE',
    LOGOUT: 'LOGOUT',
    SET_INITIAL_LOGIN_FINISHED: 'SET_INITIAL_LOGIN_FINISHED',
    SET_IS_AUTHORIZED: 'SET_IS_AUTHORIZED',
    SET_IS_PROFILE_COMPLETE: 'SET_IS_PROFILE_COMPLETE',
    SET_USER: 'SET_USER',
    SET_ONBOARDING_STEP_ID: 'SET_ONBOARDING_STEP_ID',
  },
  bundle: {
    ADD_TO_BUNDLE: 'ADD_TO_BUNDLE',
    SET_IS_LOADING_BUNDLES: 'SET_IS_LOADING_BUNDLES',
    LOAD_BUNDLES: 'LOAD_BUNDLES',
  },
  cart: {
    LOAD_OR_CREATE_CART: 'LOAD_OR_CREATE_CART',
    ADD_TO_CART: 'ADD_TO_CART',
    DELETE_FROM_CART: 'DELETE_FROM_CART',
  },
  checkout: {
    INITIALIZE_CHECKOUT: 'INITIALIZE_CHECKOUT',
    SET_CHECKOUT: 'SET_CHECKOUT',
    SET_CHECKOUT_SHIPPING_ADDRESS: 'SET_CHECKOUT_SHIPPING_ADDRESS',
    SET_CHECKOUT_PAYMENT_METHOD: 'SET_CHECKOUT_PAYMENT_METHOD',
  },
  coupon: {},
  error: {
    SET_ERROR: 'SET_ERROR',
    CLEAR_ERROR: 'CLEAR_ERROR',
  },
  init: {
    INITIALIZE_APP: 'INITIALIZE_APP',
  },
  loading: {
    ADD_LOADING_ACTION: 'ADD_LOADING_ACTION',
    DELETE_LOADING_ACTION: 'DELETE_LOADING_ACTION',
  },
  marketplace: {
    SET_HOME_FEED: 'SET_HOME_FEED',
    UPDATE_BUNDLE: 'UPDATE_BUNDLE',
  },
  mixpanel: {
    TRACK_BUTTON_PRESSED: 'TRACK_BUTTON_PRESSED',
    TRACK_EVENT: 'TRACK_MIXPANEL_EVENT',
    TRACK_SCREEN_OPENED: 'TRACK_SCREEN_OPENED',
    TRACK_SCREEN_BLUR: 'TRACK_SCREEN_BLUR',
  },
  order: {
    SET_ALL_ORDERS: 'SET_ALL_ORDERS',
    CREATE_ORDER: 'CREATE_ORDER',
    UPDATE_TRACKING: 'UPDATE_TRACKING'
  },
  payment: {
    SET_DEFAULT_PAYMENT_METHOD: 'SET_DEFAULT_PAYMENT_METHOD',
    SET_ALL_PAYMENT_METHODS: 'SET_ALL_PAYMENT_METHODS',
    DELETE_PAYMENT_METHOD: 'DELETE_PAYMENT_METHOD',
    UPDATE_PAYMENT_METHOD: 'UPDATE_PAYMENT_METHOD',
    ADD_PAYMENT_METHOD: 'ADD_PAYMENT_METHOD',
  },
  products: {
    ADD_OR_REPLACE_SELLER_PRODUCT: 'ADD_OR_REPLACE_SELLER_PRODUCT',
    ADD_PRODUCT: 'ADD_PRODUCT',
    ADD_RECENTLY_VIEWED_PRODUCT: 'ADD_RECENTLY_VIEWED_PRODUCT',
    LOAD_PRODUCTS_BY_TAG: 'LOAD_PRODUCTS_BY_TAG',
    SET_ALL_PRODUCT_TAGS: 'SET_ALL_PRODUCT_TAGS',
    ADD_TEST_SELLER_PRODUCT: 'ADD_TEST_SELLER_PRODUCT',
    UPDATE_PRODUCT: 'UPDATE_PRODUCT',
    GET_PRODUCTS_SEARCH_META_DATA_LIST: 'GET_PRODUCTS_SEARCH_META_DATA_LIST',
    GET_PRODUCT_LIST: 'GET_PRODUCT_LIST',
    SET_SELLER_PRODUCTS: 'SET_SELLER_PRODUCTS'
  },
  reset: {
    RESET_APP: 'RESET_APP',
  },
  seller: {
    CLEAR_CURRENT_PRODUCT: 'CLEAR_CURRENT_PRODUCT',
    CLEAR_ACCOUNT_LINKS: 'CLEAR_ACCOUNT_LINKS',
    SET_ACCOUNT_LINKS: 'SET_ACCOUNT_LINKS',
    SET_ALL_PRODUCTS: 'SET_ALL_PRODUCTS',
    SET_ALL_PRODUCT_TAGS: 'SET_ALL_PRODUCT_TAGS',
    SET_ALL_PRODUCT_CATEGORIES: 'SET_ALL_PRODUCT_CATEGORIES',
    SET_CURRENT_PRODUCT: 'SET_CURRENT_PRODUCT',
    SUBMIT_SELLER_ONBOARDING_STEP: 'SUBMIT_SELLER_ONBOARDING_STEP',
    TOGGLE_VISIBILITY: 'TOGGLE_VISIBILITY',
    UPDATE_PRODUCT: 'UPDATE_PRODUCT',
    CLEAR_TAGS_AND_CATEGORIES: 'CLEAR_TAGS_AND_CATEGORIES',
    GET_SELLER_PRODUCTS: 'GET_SELLER_PRODUCTS',
    CHAHGE_SELLER_PRODUCTS_PAGE: 'CHAHGE_SELLER_PRODUCTS_PAGE',
    UPDATE_SINGLE_ORDER: 'UPDATE_SINGLE_ORDER'
  },
  shopNavigation: {
    SET_NAVIGATION: 'SET_NAVIGATION',
    LOAD_NAVIGATION: 'LOAD_NAVIGATION',
  },
  store: {
    GET_STORES: 'GET_STORES',
    GET_STORE_FOR_USER: 'GET_STORE_FOR_USER',
    UPDATE_STORE: 'UPDATE_STORE',
    ADD_PACKAGE_PROFILE: 'ADD_PACKAGE_PROFILE',
    LOAD_PACKAGE_PROFILES: 'LOAD_PACKAGE_PROFILES',
    UPDATE_PACKAGE_PROFILE: 'UPDATE_PACKAGE_PROFILE',
    UPDATE_SHIPPING_PREFERENCE: 'UPDATE_SHIPPING_PREFERENCE',
    REMOVE_PACKAGE_PROFILE: 'REMOVE_PACKAGE_PROFILE',
    SET_CURRENT_STORE: 'SET_CURRENT_STORE'
  }
};

export default actionTypes;
