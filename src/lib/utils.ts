/* eslint-disable @typescript-eslint/no-explicit-any */
import { PUBLIC_POCKETBASE_URL } from "$env/static/public";


export const getImageURL = (collectionId: unknown, recordId: unknown, fileName: unknown, size = '0x0') => {
	return `${PUBLIC_POCKETBASE_URL}/api/files/${collectionId}/${recordId}/${fileName}?thumb=${size}`;
};



export const validateData = async (formData:any, schema:any) => {
	const body = Object.fromEntries(formData);

	try {
		const data = schema.parse(body);
		return {
			formData: data,
			errors: null
		};
	} catch (err:any) {
		console.log('Error: ', err);
		const errors = err.flatten();
		return {
			formData: body,
			errors
		};
	}
};

export const formatNumber = (value: number): string => {
  // Round to two decimal places
  const roundedValue = value.toFixed(2);

  // Convert to a string and split into integer and decimal parts
  const [integerPart, decimalPart] = roundedValue.split('.');

  // Add commas to the integer part
  const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  // Combine integer and decimal parts
  return `${formattedIntegerPart}.${decimalPart}`;
}
