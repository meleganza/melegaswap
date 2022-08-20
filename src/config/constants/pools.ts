import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    stakingToken: tokens.cake,
    earningToken: tokens.cake,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x41D5487836452d23f2c467070244E5842B412794',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.00033',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 1,
    stakingToken: tokens.cake,
    earningToken: tokens.mxmx,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xea23501d093946581030f28681e1dd29b65ceb06',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.00076',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 2,
    stakingToken: tokens.cake,
    earningToken: tokens.gitto,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xd97082fa64c7664aa9d5510a72d0f04badebb327',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.00052',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 3,
    stakingToken: tokens.cake,
    earningToken: tokens.gcc2,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xb000bbb4ae5fedec2e06c731f50a187b306d0d8f',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.0000015',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 4,
    stakingToken: tokens.cake,
    earningToken: tokens.zoloto,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x7b072c20d2f03393145c6829175e9ac975fa2cfe',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '2.17',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 5,
    stakingToken: tokens.cake,
    earningToken: tokens.rmbr,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x15e55c315f893d77337cb1eb31ca320c4e95564c',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '1562500000',
    sortOrder: 1,
    isFinished: true,
    enableEmergencyWithdraw:true
  },
  {
    sousId: 6,
    stakingToken: tokens.cake,
    earningToken: tokens.m01,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x2bd7d2a773b525133c9a87910ae6baf8159d9484',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '2256.94',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 7,
    stakingToken: tokens.mxmx,
    earningToken: tokens.cake,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xf834505a40b1dbec182a82c94c6a58d9c364542d',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.000069',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 8,
    stakingToken: tokens.gitto,
    earningToken: tokens.cake,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xebe42336aee179b8f520b11daa8e9b455091bfd0',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.00069',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 9,
    stakingToken: tokens.gcc2,
    earningToken: tokens.cake,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x976057901564c3050ce521c9cbd0d6351a22bdea',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.00069',
    sortOrder: 1,
    isFinished: false,
  }

]

export default pools
