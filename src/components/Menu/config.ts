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
    {
     label: t('Charts'),
     icon: 'InfoIcon',
     href: '/',
     items: [

    {
     label: t('Coingecko'),
      href: 'https://www.coingecko.com/en/exchanges/melegaswap',
   },
      {
        label: t('Dex Guru'),
        href: 'https://dex.guru/markets/melegaswap/tvl',
      }
      ,
      {
        label: t('DexStein'),
        href: 'https://dexstein.com/app/dex/6372705b07e89ec0b5ac6902',
      }
      ],
      }
    ],
  }
  
]

export default config
