"use client"
import { instance } from '@/hooks/instance'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

const getRequest = (api:string, queryKey:string, params?:any) => {
  const {data, isLoading} = useQuery({
    queryKey:[queryKey],
    queryFn:() => instance().get(api, {params}).then(res => res.data)
  })
  return {data, isLoading}
}

export default getRequest