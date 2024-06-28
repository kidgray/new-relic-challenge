// A small note about this interface: Typically I would use camelCase for
// TypeScript property names and parse the data received from the backend (which would
// be in snake_case due to SQL's column naming conventions) such that the
// snake_case is converted to camelCase, but I am a bit short on time, so
// I will just use snake_case here instead
export interface Customer {
  id: number;
  first_name: string;
  last_name: string;
  company: string;
}
