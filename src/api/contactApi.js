import BaseApi from './baseApi';

/**
 * API class for handling contact and inquiry related endpoints
 */
class ContactApi extends BaseApi {
    async submitContactForm(formData) {
        return this.post('/contact', formData);
    }

    async requestQuote(contactFormData, projectRequestData) {
        // The backend expects a DTO with contactForm and projectRequest properties
        const requestBody = {
            contactForm: contactFormData,
            projectRequest: projectRequestData
        };

        return this.post('/contact/quotes', requestBody);
    }

    async submitProjectRequirements(projectRequirements) {
        return this.post('/contact/projects', projectRequirements);
    }

    async scheduleConsultation(consultationDetails) {
        return this.post('/contact/consultations', consultationDetails);
    }

    async subscribeToNewsletter(subscriptionData) {
        return this.post('/contact/newsletter', subscriptionData);
    }
}

export default new ContactApi();