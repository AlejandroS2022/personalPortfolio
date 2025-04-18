import emailjs from '@emailjs/browser';

const sanitizeInput = (input, type) => {
  switch (type) {
    case 'name':
      return input.replace(/[^a-zA-Z0-9\s]/g, '').trim();
    case 'email':
      return input.replace(/[^\w@.-]/g, '').trim();
    default:
      return input.trim();
  }
};

export const handleOnSubmit = (
  recaptchaToken,
  setRecaptchaToken,
  recaptchaRef,
  setLoading,
  setAlert,
) => async (e) => {
    e.preventDefault();

    if (!recaptchaToken) {
      setAlert({
        open: true,
        message: "Please complete the CAPTCHA.",
        severity: 'error'
      });
      return;
    }

    setLoading(true);

    const formData = new FormData(e.target);
    const sanitizedData = {
      from_name: sanitizeInput(formData.get('from_name'), 'text'),
      from_email: sanitizeInput(formData.get('from_email'), 'email'),
      project_type: sanitizeInput(formData.get('project_type'), 'text'),
      message: sanitizeInput(formData.get('message'), 'text'),
    };

    const service_id  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const template_id = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const public_key  = import.meta.env.VITE_EMAILJS_PUB_ID;

    emailjs.send(service_id, template_id, sanitizedData, public_key)
      .then((result) => {
        setAlert({
          open: true,
          message: "Message sent successfully!",
          severity: 'success'
        });
        setRecaptchaToken('');
        recaptchaRef.current?.reset();
        setLoading(false);
      }, (error) => {
        setAlert({
          open: true,
          message: "Something went wrong. Please try again later.",
          severity: 'error'
        });
        setRecaptchaToken('');
        recaptchaRef.current?.reset();
        setLoading(false);
      });
    
    e.target.reset()
};
