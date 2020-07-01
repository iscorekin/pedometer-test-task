export default interface IResponse<T> {
  status: string,
  data: T;
}