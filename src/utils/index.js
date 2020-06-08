export const getStateProxy = (component) =>
  new Proxy(component, {
    set(comp, prop, value) {
      comp.setState({ [prop]: value });
      return true;
    },
  });

export const parseDollarPrice = (dollarPrice) =>
  parseFloat(dollarPrice.slice(1));

/**
 * Remove duplicates from an Array
 * @param {Array} arr
 * @returns {Array}
 */
export const removeDuplicates = (arr) => [...new Set(arr)];
