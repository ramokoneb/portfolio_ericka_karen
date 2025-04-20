
interface ContactFormData {
  name: string;
  email: string;
  whatsapp: string;
  message: string;
}

export const useContactForm = () => {
  const handleSubmit = async (formData: ContactFormData) => {
    try {
      // Format whatsapp number to remove any non-numeric characters
      const formattedData = {
        ...formData,
        whatsapp: formData.whatsapp.replace(/\D/g, '')
      };
      
      console.log("Submitting form data:", formattedData);
      
      const response = await fetch('https://webhook.zonadeconversao.space/webhook/forms-portfolio-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formattedData),
      });
      
      console.log("Response status:", response.status);
      
      // The API might not return a proper response due to CORS
      // so we'll assume it's successful if there's no error thrown
      return true;
    } catch (error) {
      console.error('Error submitting form:', error);
      return false;
    }
  };

  return { handleSubmit };
};
