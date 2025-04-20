
interface ContactFormData {
  name: string;
  email: string;
  whatsapp: string;
  message: string;
}

export const useContactForm = () => {
  const handleSubmit = async (formData: ContactFormData) => {
    try {
      const response = await fetch('https://webhook.zonadeconversao.space/webhook/forms-portfolio-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        throw new Error('Failed to submit form');
      }
      
      return true;
    } catch (error) {
      console.error('Error submitting form:', error);
      return false;
    }
  };

  return { handleSubmit };
};
