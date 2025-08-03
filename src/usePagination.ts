
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { usePaginationArg } from "./types";

export const usePagination = <T,>({
  currentPage,
  maxPage,
  queryFn,
  setCurrentPage,
  tag,
  refetchInterval }: usePaginationArg<T>) => {

  const QueryClient = useQueryClient()

  const queryData = useQuery<T>({
    queryKey: [tag, currentPage],
    queryFn: () => queryFn(currentPage),
    //haw mach time(mile sec ) will pass until the data is referred as stale 
    staleTime: 1250,
    refetchInterval: refetchInterval
  });

  useEffect(() => {
    if (currentPage < maxPage) {
      const nextPage = currentPage + 1;
      QueryClient.prefetchQuery({
        queryKey: [tag, nextPage],
        queryFn: () => queryFn(nextPage),
      });
    }
  }, [currentPage, maxPage, queryFn, tag, QueryClient]);

  const add1Page = () => {
    if (currentPage < maxPage) {
      setCurrentPage(prev => prev + 1)
    }
  }

  return { queryData, add1Page, setCurrentPage, tag }
}