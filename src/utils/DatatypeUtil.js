export const AlphabetWord = {
  required: true,
  minLength: 2,
  maxLength: 50,
  pattern: /^[a-zA-Z]+$/,
};

export const Email = {
  required: true,
  minLength: 10,
  maxLength: 2000,
  pattern:
    /^[_A-Za-z0-9-\+]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/,
};

export const AlphaNumeric = {
  required: true,
  minLength: 2,
  maxLength: 50,
  pattern: /^[0-9A-Za-z]+$/,
};

export const Decimal = {
  required: true,
  min: 0,
  max: 2147483647,
  pattern:
    /^([^\d,.]|^)\d{1,3}(,(\d{3}))*((?=[,.](\s|$))|(\.\d+)?(?=[^\d,.]|$))$/,
};

export const Msisdn = {
  required: true,
  minLength: 1,
  maxLength: 50,
  pattern: /^(09|\+639|00639|9|639)([0-9]{2})([0-9]{7})$/,
};

export const MultiWord = {
  required: true,
  minLength: 1,
  maxLength: 100,
  pattern: /^[a-zA-Z\s0-9\#\.\-\_\,\!\:\(\)Ññ\'\/]+$/,
};

export const Username = {
  required: true,
  minLength: 4,
  maxLength: 20,
  pattern: /^[a-zA-Z0-9]([._](?![._])|[a-zA-Z0-9]){2,18}[a-zA-Z0-9]$/,
};

export const Password = {
  required: true,
  minLength: 6,
  maxLength: 20,
  pattern: /^[\w\@\~\!\#\$\&\*\-\_\+\%\^\.\?\=]+$/,
};
