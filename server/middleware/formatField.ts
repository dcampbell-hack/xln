import ErrorResponse from '../utils/errorResponse.ts';

export const formatField = (value: string) =>  value.split(', ').map(input => input.trim().replace(/ /g, '-')).map(f => f.toLowerCase() );



