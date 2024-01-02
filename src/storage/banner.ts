const IS_BANNER_CLOSED_KEY = 'IS_BANNER_CLOSED';

export const isClosed = () => {
  return !!localStorage.getItem(IS_BANNER_CLOSED_KEY);
}

export const close = () => {
  localStorage.setItem(IS_BANNER_CLOSED_KEY, String(true));
}
