import addresses from 'config/constants/contracts'
import { Address } from 'config/constants/types'

const chainId = process.env.REACT_APP_CHAIN_ID

export const getAddress = (address: Address): string => {
  return address[chainId]
}

export const getCakeAddress = () => {
  return addresses.cake[chainId]
}
export const getMintAddress = () => {
  return addresses.mint[chainId]
}
export const getTeaSportAddress = () => {
  return addresses.teaSport[chainId]
}
export const getMasterChefAddress = () => {
  return addresses.masterChef[chainId]
}
export const getMasterMintAddress = () => {
  return addresses.masterMint[chainId]
}
export const getMasterTeaSportAddress = () => {
  return addresses.masterTeaSport[chainId]
}
export const getVaultChefAddress = () => {
  return addresses.vaultChef[chainId]
}
export const getVaultMintAddress = () => {
  return addresses.vaultMint[chainId]
}
export const getVaultTeaSportAddress = () => {
  return addresses.vaultTeaSport[chainId]
}
export const getMulticallAddress = () => {
  return addresses.mulltiCall[chainId]
}
export const getWbnbAddress = () => {
  return addresses.wbnb[chainId]
}
export const getLotteryAddress = () => {
  return addresses.lottery[chainId]
}
export const getLotteryTicketAddress = () => {
  return addresses.lotteryNFT[chainId]
}

export const getLotteryAddressTeasport = () => {
  return addresses.lotteryTeasport[chainId]
}
export const getLotteryTicketAddressTeasport = () => {
  return addresses.lotteryNFTTeasport[chainId]
}
