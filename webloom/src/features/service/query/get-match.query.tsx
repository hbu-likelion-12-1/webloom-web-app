import React from 'react';
import { useQuery } from "@tanstack/react-query";
import { Server } from "@/service/api";

const useMatchQuery = () => {
  return useQuery({
    queryKey: ["match_details", "get"],
    queryFn: Server.Match.getMatch,
    refetchInterval: 5000,
  });
};

export default useMatchQuery;
