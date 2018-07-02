import request from '../helpers/request';

export const EDIT_SUPPLY = 'EDIT_SUPPLY';
export const EDIT_ITEM = 'EDIT_ITEM';
export const GET_LISTS = 'GET_LISTS';

export const editSupply = (id, stock_qty) => (
  dispatch => {
    request('/auth/token')
    .then(response => {
      const shop_id = response.data.shops_id;
      request(`/supplies/${id}`, 'put', {stock_qty})
      .then(response => {
        return request(`/supplies/${shop_id}/allSupplies`);
      })
      .then(response => {
        dispatch({
          type: EDIT_SUPPLY,
          payload: response.data.data
        });
      });
    });
  }
);

export const editItem = (id, stock) => (
  dispatch => {
    request('/auth/token')
    .then(response => {
      const shop_id = response.data.shops_id;
      request(`/items/${id}`, 'put', {stock})
      .then(response => {
        return request(`/items/${shop_id}/allItems`);
      })
      .then(response => {
        dispatch({
          type: EDIT_ITEM,
          payload: response.data.data
        });
      });
    });
  }
);

export const getLists = () => (
  dispatch => {
    request('/auth/token')
    .then(response => {
      const shop_id = response.data.shops_id;
      request(`/lists/${shop_id}/allLists`)
      .then(response => {
        dispatch({
          type: GET_LISTS,
          payload: response.data.data
        });
      });
    });
  }
);
