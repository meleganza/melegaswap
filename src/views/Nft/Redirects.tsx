import useActiveWeb3React from 'hooks/useActiveWeb3React'
import React from 'react'
import { Redirect, RouteComponentProps } from 'react-router-dom'
import BuyNFT from './buy/BuyNFT'
import SellNFT from './sell/SellNFT'

// Redirects to swap but only replace the pathname


// Redirects from the /swap/:outputCurrency path to the /swap?outputCurrency=:outputCurrency format
export function RedirectToSell(props: RouteComponentProps<{ tid: string }>) {
  const {account}=useActiveWeb3React()
  console.log(account)
    const {
    location,
    location: { search },
    match: {
      params: { tid },
    },
  } = props

  
  return (
      account&&account.startsWith("0x")?
    <SellNFT/>:<Redirect
    to="/viewNFTs"
/>
  )
  
}
export function RedirectToBuy(props: RouteComponentProps<{ tid: string }>) {
    const {account}=useActiveWeb3React()
  console.log(account)
    const {
    location,
    location: { search },
    match: {
      params: { tid },
    },
  } = props

  
  return (
      account&&account.startsWith("0x")?
    <BuyNFT/>:<Redirect
    to="/nftmarket"
/>
  )
  }
