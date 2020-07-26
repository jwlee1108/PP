function createElement(tag, props = {}, ...children) {
  const element = document.createElement(tag);

  Object.keys(props).forEach((key) => {
    if (typeof props[key] === 'function') {
      element[key] = props[key];
    } else {
      element.setAttribute(key, props[key]);
    }
  });

  children.forEach((child) => {
    if (child !== null && child !== undefined) {
      if (typeof child === 'string') {
        // eslint-disable-next-line no-param-reassign
        child = document.createTextNode(child);
      }

      element.appendChild(child);
    }
  });

  return element;
}

export default createElement;
