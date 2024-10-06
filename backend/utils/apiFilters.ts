/**
 * @class APIFilters
 * @classdesc APIFilters 是用來根據給定的查詢條件（`queryStr`）過濾和搜尋數據庫數據的工具。
 * 它提供了兩個主要的功能：搜尋特定位置（`search`），以及過濾掉不需要的條件（`filter`）。
 * @example
 * // 創建一個過濾器，並使用搜索和過濾功能來查找特定位置的數據
 * const filters = new APIFilters(query, queryStr).search().filter();
 */
class APIFilters {
  /**
   * @property {Object} query - 這是數據庫查詢對象，用於保存和應用過濾條件
   * @property {Object} queryStr - 這是用戶傳入的查詢條件，通常從 URL 或查詢參數中獲取
   * @constructor
   * @param {Object} query - 初始數據庫查詢對象
   * @param {Object} queryStr - 用戶的查詢參數
   */
  query: any;
  queryStr: any;

  constructor(query: any, queryStr: any) {
    this.query = query;
    this.queryStr = queryStr;
  }
  /**
   * 搜尋功能，用來過濾出符合特定位置的數據。
   * 如果 `queryStr` 中有 `location` 字段，它會根據這個地點來過濾數據，忽略大小寫。
   * @returns {APIFilters} 返回當前的過濾器實例，允許鏈式調用其他方法。
   * @example
   * // 如果傳入的查詢參數中有 location: 'New York'，這段代碼會搜尋地址包含 'New York' 的數據
   * filters.search();
   */
  search(): APIFilters {
    const location = this.queryStr?.location
      ? {
          address: {
            $regex: this.queryStr.location,
            $options: 'i',
          },
        }
      : {};

    this.query = this.query.find({ ...location });
    return this;
  }

  /**
   * 過濾功能，用來移除不需要的查詢參數，比如 `location`、`page` 和 `limit`，這些參數通常不應影響實際查詢的結果。
   * @returns {APIFilters} 返回當前的過濾器實例，允許鏈式調用其他方法。
   * @example
   * // 這段代碼會去掉 `location`、`page` 和 `limit` 字段後的查詢條件，應用到數據庫查詢
   * filters.filter();
   */
  filter(): APIFilters {
    const queryCopy = { ...this.queryStr };
    const removeFields = ['location', 'page', 'limit'];
    removeFields.forEach((el) => delete queryCopy[el]);
    this.query = this.query.find(queryCopy);
    return this;
  }

  pagination(resPerPage: number): APIFilters {
    const currentPage = Number(this.queryStr.page) || 1;
    const skip = resPerPage * (currentPage - 1);
    this.query = this.query.limit(resPerPage).skip(skip);
    return this;
  }
}

export default APIFilters;
