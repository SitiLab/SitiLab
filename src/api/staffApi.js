// src/api/staffApi.js
import BaseApi from './baseApi';

/**
 * API class for handling staff-related endpoints
 */
class StaffApi extends BaseApi {
    /**
     * Get all staff members
     * @param {Object} params - Query parameters
     * @param {number} params.limit - Maximum number of staff to return
     * @param {number} params.offset - Number of staff to skip
     * @param {string} params.role - Filter staff by role
     * @returns {Promise<Array>} - List of staff members
     */
    async getStaffList(params = {}) {
        return this.get('/staff', params);
    }

    /**
     * Get a specific staff member by ID
     * @param {string} id - Staff member ID
     * @returns {Promise<Object>} - Staff member details
     */
    async getStaffMember(id) {
        return this.get(`/staff/${id}`);
    }

    /**
     * Get staff members featured for the home page
     * @returns {Promise<Array>} - List of featured staff members
     */
    async getFeaturedStaff() {
        return this.get('/staff/featured');
    }

    /**
     * Get staff members grouped by department
     * @returns {Promise<Object>} - Staff members organized by department
     */
    async getStaffByDepartment() {
        return this.get('/staff/departments');
    }
}

export default new StaffApi();