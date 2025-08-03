export interface IAllData {
  body: string;
  id: number;
  title: string;
  userId: number;
}
type PageFetcher<T> = (page: number) => Promise<T> | T;

export interface usePaginationArg<T> {
  currentPage: number;
  maxPage: number;
  queryFn: PageFetcher<T>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  tag: string;
  refetchInterval?: number;
}
