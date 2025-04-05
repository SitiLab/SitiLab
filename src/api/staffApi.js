import BaseApi from './baseApi';

class StaffApi extends BaseApi {
    async getStaffList(params = {}) {
        return this.get('/staff', params);
    }

    async getStaffMember(id) {
        return this.get(`/staff/${id}`);
    }

    async getFeaturedStaff() {
        return this.get('/staff/featured');
    }

    async getStaffByDepartment() {
        return this.get('/staff/departments');
    }
}

export default new StaffApi();