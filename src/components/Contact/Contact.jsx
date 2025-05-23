import { useRef, useState } from 'react';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import LabeledDivider from "../LabeledDivider/LabeledDivider";
import Alert from '../Alert/Alert';

import SendIcon from '@mui/icons-material/Send';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';

import ReCAPTCHA from "react-google-recaptcha";
import { handleOnSubmit } from '../../hooks/useContactForm';

function Contact() {
  const recaptchaRef = useRef();
  const recaptchaKey = import.meta.env.VITE_RECAPTCHA_ID;
  const [recaptchaToken, setRecaptchaToken] = useState('');
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  return (
    <>
      <div className="contact" id="contact">

        <div className="flex">
          <h2 className="drop-shadow-h mx-auto my-5">
            Contact Me
          </h2>
        </div>

        <LabeledDivider label="<GetInTouch>" />

        <div className="body-paddings">
          <div className="flex flex-wrap">
            <div className="contact-card">
              <h6 className="my-5">
                Let's have a chat
              </h6>

              <form onSubmit={handleOnSubmit(recaptchaToken, setRecaptchaToken, recaptchaRef, setLoading, setAlert)}>
                <div className="contact-form">
                  <FormControl className="contact-form__section">
                    <TextField
                      id="from_name"
                      name="from_name"
                      className="contact__form__input"
                      label="Name"
                      variant="outlined"
                      required
                      slotProps={{
                        htmlInput: {
                          pattern: "^[a-zA-Z0-9\\s]+$",
                          title: "Only letters, numbers, and spaces are allowed",
                          maxLength: "50"
                        }
                      }}
                    />
                  </FormControl>

                  <FormControl className="contact-form__section">
                    <TextField
                      id="from_email"
                      name="from_email"
                      type="email"
                      className="contact__form__input"
                      label="Email"
                      variant="outlined"
                      required
                    />
                  </FormControl>

                  <FormControl className="contact-form__section">
                    <TextField
                      id="project_type"
                      name="project_type"
                      className="contact__form__input"
                      label="Subject"
                      variant="outlined"
                      required
                      slotProps={{
                        htmlInput: {
                          pattern: "^[a-zA-Z0-9\\s]+$",
                          title: "Only letters, numbers, and spaces are allowed",
                          maxLength: "100"
                        }
                      }}
                    />
                  </FormControl>

                  <FormControl className="contact-form__section">
                    <TextField
                      id="message"
                      name="message"
                      className="contact__form__input"
                      label="Message"
                      variant="outlined"
                      multiline
                      rows={4}
                      required
                      slotProps={{
                        htmlInput: {
                          maxLength: "255"
                        }
                      }}
                    />
                  </FormControl>

                  <ReCAPTCHA
                    sitekey={recaptchaKey}
                    ref={recaptchaRef}
                    onChange={(token) => setRecaptchaToken(token)}
                  />

                  <Button
                    variant="contained"
                    className="button-main button-main__contact"
                    type="submit"
                    endIcon={
                      loading ?
                        <HourglassEmptyIcon className="animate-loading-icon" />
                      :
                        <SendIcon className="animate-send-icon" />
                    }
                    disabled={loading}
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
        
        <Alert alert={alert} setAlert={setAlert} />
      </div>
    </>
  )
}

export default Contact
