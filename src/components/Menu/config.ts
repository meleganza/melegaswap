import { MenuEntry } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

const config: (t: ContextApi['t']) => MenuEntry[] = (t) => [
  {
    label: t('Home'),
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: t('Trade'),
    icon: 'TradeIcon',
    items: [
      {
        label: t('Exchange'),
        href: '/swap',
      },
      {
        label: t('Liquidity'),
        href: '/pool',
      }
    ],
  },
  {
    label: t('Farms'),
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: t('Pools'),
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: t('ILO'),
    icon: 'IfoIcon',
    href: '/ilo',
  },
  {
    label: t('NFT'),
    icon: 'NftIcon',
    href: '/nft',
    items: [
      
      {
        label: t('Mint it NOW'),
        href: '/nft',
      },
      {
        label: t('NFT wallet'),
        href: '/viewNFTs',
      }
      ,
      {
        label: t('Market'),
        href: '/nftmarket',
      }
     ],
  }
  
]

export default config
