const formatDate = (date: Date | string): string => {
  if (!(date instanceof Date)) {
    return date;
  }

  let month = '' + (date.getMonth() + 1);
  let day = '' + date.getDate();
  let year = date.getFullYear();

  if (month.length < 2)
    month = '0' + month;
  if (day.length < 2)
    day = '0' + day;

  return [year,month,day].join('-');
}
export default formatDate;

export const getAllInputValues = (form: HTMLFormElement): Record<string, string> => {
  const values: Record<string, string> = {};
  for (const element of Array.from(form.elements)) {
    if (element instanceof HTMLInputElement || element instanceof HTMLSelectElement) {
      if (element.type !== 'button' && element.type !== 'submit') {
        // Use name if available, otherwise use id
        const key = element.name || element.id;
        if (key) { // Ensure there's either a name or an id to use as a key
          values[key] = element.value;
        }
        else{
          console.log(key,element.value,element.id)
        }
      }
    }
  }
  return values;
};

export const clearAllInputValues = (form: HTMLFormElement)=> {
  for (const element of Array.from(form.elements)) {
    if ((element instanceof HTMLInputElement || element instanceof HTMLSelectElement) && element.name && element.type !== 'button' && element.type !== 'submit') {
      element.value = "";
    }
  }
};
export const setAllInputValues = (form: HTMLFormElement,initialData:any) => {
  for (const element of Array.from(form.elements)) {
    if ((element instanceof HTMLInputElement || element instanceof HTMLSelectElement) && element.name && element.type !== 'button' && element.type !== 'submit') {
      if (initialData.hasOwnProperty(element.name)) {
        element.value = initialData[element.name];
      }
    }
  }
};
