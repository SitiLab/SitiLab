// src/api/contactApi.js
import BaseApi from './baseApi';

/**
 * API class for handling contact and inquiry related endpoints
 */
class ContactApi extends BaseApi {
    /**
     * Submit a contact form
     * @param {Object} formData - Contact form data
     * @returns {Promise<Object>} - Response with confirmation details
     */
    async submitContactForm(formData) {
        return this.post('/contact', formData);
    }

    /**
     * Request a quote with detailed project information
     * @param {Object} projectData - Project details for quote
     * @returns {Promise<Object>} - Response with quote reference number
     */
    async requestQuote(contactFormData, projectRequestData) {
        // The backend expects a DTO with contactForm and projectRequest properties
        const requestBody = {
            contactForm: contactFormData,
            projectRequest: projectRequestData
        };

        return this.post('/contact/quotes', requestBody);
    }

    /**
     * Submit detailed project requirements
     * @param {Object} projectRequirements - Detailed project specifications
     * @returns {Promise<Object>} - Response with project reference
     */
    async submitProjectRequirements(projectRequirements) {
        return this.post('/contact/projects', projectRequirements);
    }

    /**
     * Schedule a consultation call
     * @param {Object} consultationDetails - Details for scheduling a call
     * @param {string} consultationDetails.name - Client name
     * @param {string} consultationDetails.email - Client email
     * @param {string} consultationDetails.phone - Client phone
     * @param {string} consultationDetails.preferredDate - Preferred date for call
     * @param {string} consultationDetails.preferredTime - Preferred time for call
     * @param {string} consultationDetails.projectType - Type of project to discuss
     * @returns {Promise<Object>} - Response with booking confirmation
     */
    async scheduleConsultation(consultationDetails) {
        return this.post('/contact/consultations', consultationDetails);
    }

    /**
     * Send a newsletter subscription request
     * @param {Object} subscriptionData - Newsletter subscription data
     * @param {string} subscriptionData.email - Subscriber email
     * @param {boolean} subscriptionData.acceptsMarketing - Marketing consent flag
     * @returns {Promise<Object>} - Subscription confirmation
     */
    async subscribeToNewsletter(subscriptionData) {
        return this.post('/contact/newsletter', subscriptionData);
    }
}

export default new ContactApi();