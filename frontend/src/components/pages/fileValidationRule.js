export default function validate(values) {
  let errors = {};
  if (!values.author) {
    errors.author = 'Author is required';
  } 
  if (!values.creation_date) {
    errors.creation_date = 'Creation date is required';
  } 
  if (!values.affects) {
    errors.affects = 'Affect is required';
  }
  if (!values.document_keywords) {
    errors.document_keywords = 'Document keywords is required';
  }
  if (!values.description) {
    errors.description = 'Write the description of your document';
  }
  if (!values.extended) {
    errors.extended = 'Extended document information is required';
  }
  if (!values.priority_content) {
    errors.priority_content = 'Priority content is required';
  }
  // if (!values.inspected) {
  //   errors.inspected = 'Inspected is required';
  // }
  // if (!values.urgent_review) {
  //   errors.urgent_review = 'Urgent review is required';
  // }
  // if (!values.phonenumber) {
  //   errors.phonenumber = 'Phonen umber is required';
  // }
  // if (!values.billingname) {
  //   errors.billingname = 'Billing name is required';
  // }
  // if (!values.billingaddress) {
  //   errors.billingaddress = 'Billing address is required';
  // }
  // if (!values.tax) {
  //   errors.tax = 'Tax is required';
  // }
  // if (!values.bankaccount) {
  //   errors.bankaccount = 'Bank account is required';
  // }
  return errors;
};
