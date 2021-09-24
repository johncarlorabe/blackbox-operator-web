export const checkErrors = (errors, name, label) => {
  //const errorMessage = (errors[`${name}`] && errors[`${name}`].message) || "";
  let errorMessage = "";
  switch (errors[`${name}`] && errors[`${name}`].type) {
    case "required":
      errorMessage = `Please provide ${label}`;
      break;
    case "pattern":
      errorMessage = `Invalid format of ${label}`;
      break;
    case "minLength":
      errorMessage = `${label} is below the minimum length of characters.`;
      break;
    case "maxLength":
      errorMessage = `${label} is above the maximum length of characters.`;
      break;
    case "min":
      errorMessage = `${label} is below the minimum value.`;
      break;
    case "max":
      errorMessage = `${label} is above the maximum value.`;
      break;
  }
  return {
    errorMessage,
    hasError: !!errorMessage,
  };
};
