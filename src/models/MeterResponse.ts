export interface IDistance {
  date: string,
  distance: number
}

export default interface IMeterResponse {
  distances: IDistance[];
}
