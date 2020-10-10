/* eslint-disable no-useless-escape */
import { toast } from 'react-toastify';

const validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@\']+(\.[^<>()[\]\\.,;:\s@\']+)*)|(\'.+\'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const validatePhoneNumber = (phone) => {
  var re = /^\(?([0-9]{3})\)?(?:[0-9]??).{6,10}[0-9]$/;
  return re.test(phone);
};

const notify_success = () => {
  toast.success('Register success');
};

const notify_warning = (error) => {
  toast.warn(error);
};

const handleRegisterForm = (fields) => {
  var errors = {
    account: '',
    password: '',
    fullname: '',
    email: '',
    phone: '',
  };
  if (
    fields['account'] !== '' &&
    fields['fullname'] !== '' &&
    fields['email'] !== '' &&
    fields['password'] !== '' &&
    fields['phone'] !== '' &&
    validateEmail(fields['email']) === true &&
    validatePhoneNumber(fields['phone']) === true
  ) {
    console.log(
      `Account: ${fields['account']} || Password: ${fields['password']} || FullName: ${fields['fullname']} || Email: ${fields['email']} || Phone: ${fields['phone']}`
    );
    notify_success();
    return;
  } else {
    //Account
    if (!fields['account']) {
      errors['account'] = 'Account field cannot be empty';
      return notify_warning(errors['account']);
    }

    //Email

    if (!fields['email']) {
      errors['email'] = 'Email field cannot be empty';
      return notify_warning(errors['email']);
    } else {
      if (!validateEmail(fields['email'])) {
        errors['email'] = 'Invalid Email';
        return notify_warning(errors['email']);
      }
    }

    //Password
    if (!fields['password']) {
      errors['password'] = 'Password field cannot be empty';
      return notify_warning(errors['password']);
    }

    //Username
    if (!fields['fullname']) {
      errors['fullname'] = 'Fullname field cannot be empty';
      return notify_warning(errors['fullname']);
    }

    //Phone
    if (!fields['phone']) {
      errors['phone'] = 'Phone filed cannot be empty';
      return notify_warning(errors['phone']);
    } else {
      if (!validatePhoneNumber(fields['phone'])) {
        errors['phone'] = 'Phone number at least 10-15 numbers';
        return notify_warning(errors['phone']);
      }
    }
  }
};

const handleLoginForm = (fields) => {
  var errors = {
    email: '',
    password: ''
  };

  if (
    fields['email'] !== '' &&
    fields['password'] !== '' &&
    validateEmail(fields['email']) === true
  ) {
    console.log(
      `Email: ${fields['email']} || Password: ${fields['password']}`
    );
    notify_success();
    return;
  } else {
    //Email
    if (!fields['email']) {
      errors['email'] = 'Email field cannot be empty';
      return notify_warning(errors['email']);
    }else {
      if (!validateEmail(fields['email'])) {
        errors['email'] = 'Invalid Email';
        return notify_warning(errors['email']);
      }
    }

    //Password
    if (!fields['password']) {
      errors['password'] = 'Password field cannot be empty';
      return notify_warning(errors['password']);
    }
  }
}

export { handleRegisterForm, validateEmail, handleLoginForm };
