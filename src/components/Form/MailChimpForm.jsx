import MailChimpSubscribe from "react-mailchimp-subscribe";
import Newsletter from "./Newsletter";
import React from 'react'

const MailChimpForm = () => {
  const postUrl = `${import.meta.env.VITE_MAILCHIMP_URL}?u=${
    import.meta.env.VITE_MAILCHIMP_U
  }&id=${import.meta.env.VITE_MAILCHIMP_ID}`;

  return (
    <div>
      <MailChimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
            <Newsletter
              onValidated={(formData) => subscribe(formData)}
              status={status}
              message={message}
            />
        )}
      />
    </div>
  );
};

export default MailChimpForm;
