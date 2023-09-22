/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Storage {
  get(key: string): any;
  put(key: string, value: any): any;
  remove(key: string): any;
}
