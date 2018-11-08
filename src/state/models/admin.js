import request from '../../helpers/request';
import Auth from './auth';

class Admin {
  static getMostUsedSupplies = async () => {
    const shop_id = await Auth._authenticatedRequest();
    const response = await request(`/admin_supplies/most_used/${shop_id}`);
    return response.data.data;
  };

  static getPurchaseHistory = async () => {
    const shop_id = await Auth._authenticatedRequest();
    const response = await request(`/admin_purchases/purchase_history/${shop_id}`);
    return response.data.data;
  };

  static getMostOrderedSupplies = async () => {
    const shop_id = await Auth._authenticatedRequest();
    const response = await request(`/admin_supplies/most_ordered/${shop_id}`);
    return response.data.data;
  };

  static getCurrentStaff = async () => {
    const shop_id = await Auth._authenticatedRequest();
    const response = await request(`/admin_staff/current_working_staff/${shop_id}`);
    return response.data.data;
  };

  static getPurchaseStatuses = async () => {
    const shop_id = await Auth._authenticatedRequest();
    const response = await request(`/admin_purchases/purchases_status/${shop_id}`);
    return response.data.data;
  };

  static getCurrentStaffActivity = async () => {
    const shop_id = await Auth._authenticatedRequest();
    const response = await request(`/admin_staff/current_staff/${shop_id}`);
    return response.data.data;
  };

  static getTotalProductsSold = async () => {
    const shop_id = await Auth._authenticatedRequest();
    const response = await request(`/admin_products/total_product_sold/${shop_id}`);
    return response.data.data;
  };

  static getNewPurchases = async () => {
    const shop_id = await Auth._authenticatedRequest();
    const response = await request(`/admin_purchases/new_purchases/${shop_id}`);
    return response.data.data;
  };

  static getTotalStaff = async () => {
    const shop_id = await Auth._authenticatedRequest();
    const response = await request(`/admin_staff/total_staff/${shop_id}`);
    return response.data.data;
  };

  static getCompletedStaff = async () => {
    const shop_id = await Auth._authenticatedRequest();
    const response = await request(`/admin_staff/past_staff/${shop_id}`);
    return response.data.data;
  };

  static getTotalBundlesSold = async () => {
    const shop_id = await Auth._authenticatedRequest();
    const response = await request(`/admin_products/total_bundle_sold/${shop_id}`);
    return response.data.data;
  };

  static getTotalItemsSold = async () => {
    const shop_id = await Auth._authenticatedRequest();
    const response = await request(`/admin_products/total_item_sold/${shop_id}`);
    return response.data.data;
  };

  static getCompletedPurchases = async () => {
    const shop_id = await Auth._authenticatedRequest();
    const response = await request(`/admin_purchases/completed_purchases/${shop_id}`);
    return response.data.data;
  };

  static getInProductionPurchases = async () => {
    const shop_id = await Auth._authenticatedRequest();
    const response = await request(`/admin_purchases/production_purchases/${shop_id}`);
    return response.data.data;
  };

  static getTotalItemsSoldChart = async () => {
    const shop_id = await Auth._authenticatedRequest();
    const response = await request(`/admin_products/item_qty/${shop_id}`);
    return response.data.data;
  };

  static getTotalBundlesSoldChart = async () => {
    const shop_id = await Auth._authenticatedRequest();
    const response = await request(`/adminProducts/bundleQTY/${shop_id}`);
    return response.data.data;
  };
};

export default Admin;
