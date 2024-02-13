const accessoriesForm = [
  { label: 'Accessory Name', type: 'text', name: 'accessory_name' },
  { label: 'count', type: 'number', name: 'count' },
];
export default accessoriesForm;

export const assignAccessory = [
  { label: 'Accessory Name', type: 'text', name: 'accessory_name' },
  { label: 'Employee ID', type: 'number', name: 'emp_id' },
  { label: 'Assign Date', type: 'date', name: 'assign_date' },
];

export const editSingleAccessory = [
  { label: 'Accessory Name', type: 'text', name: 'accessory_name' },
  {
    label: 'Accessory Condition',type:'dropdown',name:'accessory_condition',
    options: [
      { value: '', label: '' },
      {name:'accessory_condition', value: 'Good', label: 'Good' },
      { name:'accessory_condition',value: 'Damaged', label: 'Damaged' },
    ],
  },
  { label: 'Return Date', type: 'date', name: 'return_date' },
  {
    label: 'Return Type',type:'dropdown',name:'return_type',
    options: [
      { value: '', label: '' },
      {name:'accessory_condition', value: 'Replaced', label: 'Replaced' },
      {name:'accessory_condition', value: 'Returned', label: 'Returned' },
    ],
  },
];
