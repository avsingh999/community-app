/**
 * Actions relevant to the design submission page only.
 */

import { createActions } from 'redux-actions';
import { isWebUri } from 'valid-url';

/**
 * Holds a set of validation errors for a stock art record.
 */
export const STOCK_ART_RECORD_ERROR = {
  INVALID_URL: 'INVALID_URL',
};

/**
 * Validates a stock art record.
 * @param {Object} record
 * @return {Object} An object with keys of detected errors. If you just need to
 *  check that there is no errors, you can do _.isEmpty(res).
 */
export function isValidStockArtRecord(record) {
  const res = {};
  if (!isWebUri(record.url) && !isWebUri(`http://${record.url}`)) {
    res[STOCK_ART_RECORD_ERROR.INVALID_URL] = true;
  }
  return res;
}

isValidStockArtRecord({ url: 'edwed' });

/**
 * Noop payload creator that just resets this segment of state to the initial
 * state.
 */
function reset() {}

/**
 * Payload creator for the actions that allows to edit stock art records.
 * @param {Number} index Optional. 0-based index of the record to edit /
 *  remove. If larger than the maximal valid index, null, or undefined, a new
 *  record will be appended.
 * @param {Object} record Optional. Holds the following fields:
 *  - url {String} - Stock art's URL.
 *  If null or undefined, the record on the specified index will be removed.
 */
function setStockArtRecord(index, record) {
  return { index, record };
}

export default createActions({
  PAGE: {
    SUBMISSION: {
      DESIGN: {
        RESET: reset,
        SET_STOCK_ART_RECORD: setStockArtRecord,
      },
    },
  },
});
