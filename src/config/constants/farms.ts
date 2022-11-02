import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
   {
    pid: 0,
    lpSymbol: 'MARCO',
    lpAddresses: {
      97: '0x9C21123D94b93361a29B2C2EFB3d5CD8B17e0A9e',
      56: '0x963556de0eb8138E97A85F0A86eE0acD159D210b',
    },
    token: tokens.syrup,
    quoteToken: tokens.wbnb,
  } 
  ,
  {
    pid: 1,
    lpSymbol: 'MARCO-BNB LP',
    lpAddresses: {
      97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      56: '0x7286c16c3c05d4c17B689bE7948Ec4Fa4e861d1E',
    },
    token: tokens.cake,
    quoteToken: tokens.wbnb,
  }
 

  ,
  {
    pid: 2,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x564863b0267d9fed9c7d414113d7dd60cf4b253e',
    },
    token: tokens.busd,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 3,
    lpSymbol: 'GIOTTO-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x443f2e9A5877e2896d1248288c73AA6B7402fbBe',
    },
    token: tokens.gitto,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 4,
    lpSymbol: 'ZLT-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xD656C120E843012C33187E8732B83F0c1FC1f858',
    },
    token: tokens.zoloto,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 5,
    lpSymbol: 'MXMX-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x8481c346D5348A7b543Cb3755beBB68799d375d0',
    },
    token: tokens.mxmx,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 6,
    lpSymbol: 'MM72-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x7825da4753eb52d918dAc368f59D1FB734daFB72',
    },
    token: tokens.mm72,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 7,
    lpSymbol: '2GCC-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xfEf01a730432A74d359B01CA9a6c51e2583E4224',
    },
    token: tokens.gcc2,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 8,
    lpSymbol: 'M01-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x2E1B5FdDa0A20e1cd8E4131408a0BbEF4FAeB8a2',
    },
    token: tokens.m01,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 9,
    lpSymbol: 'RMBR-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xBd47F3a3D0B7C21Ab393a157d0A46a1733eC1b01',
    },
    token: tokens.rmbr,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 10,
    lpSymbol: 'MARCO-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x0c655F723F8765009016426aa454950216B5Bc08',
    },
    token: tokens.cake,
    quoteToken: tokens.busd,
  }
  ,
  {
    pid: 11,
    lpSymbol: 'MARCO-USDT LP',
    lpAddresses: {
      97: '',
      56: '0xb1857b7A6650C5711cCFae451d79bF86C6CbAca4',
    },
    token: tokens.usdt,
    quoteToken: tokens.cake,
  }
  ,
  {
    pid: 12,
    lpSymbol: 'MARCO-USDC LP',
    lpAddresses: {
      97: '',
      56: '0x6804D8b2be83f8e38b26552aD445906C696a671C',
    },
    token: tokens.usdc,
    quoteToken: tokens.cake,
  }
  ,
  {
    pid: 13,
    lpSymbol: 'MARCO-CAKE LP',
    lpAddresses: {
      97: '',
      56: '0x75E6E495a4bDA582CbEd52dbfCb6F69D39C2cAeA',
    },
    token: tokens.pancake,
    quoteToken: tokens.cake,
  }
  ,
  {
    pid: 14,
    lpSymbol: 'MXMX-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x17313681251d12e0d7df38168E18B6B19367Bd09',
    },
    token: tokens.mxmx,
    quoteToken: tokens.busd,
  },
  {
    pid: 15,
    lpSymbol: 'MXMX-USDT LP',
    lpAddresses: {
      97: '',
      56: '0xD4C94859046693E670D6008886A2cD75aA4B2Db4',
    },
    token: tokens.usdt,
    quoteToken: tokens.mxmx,
  }
  ,
  {
    pid: 16,
    lpSymbol: 'MARCO-DOGE LP',
    lpAddresses: {
      97: '',
      56: '0xd36421fdF280bA36Db6FBb67F4985aF91b47d16c',
    },
    token: tokens.doge,
    quoteToken: tokens.cake,
  }
  ,
  {
    pid: 17,
    lpSymbol: 'MARCO-DAI LP',
    lpAddresses: {
      97: '',
      56: '0x42d6B0155d1c9cb480ed30c331e32DD08c49541e',
    },
    token: tokens.dai,
    quoteToken: tokens.cake,
  },
  {
    pid: 18,
    lpSymbol: 'MARCO-SHIB LP',
    lpAddresses: {
      97: '',
      56: '0x004EdaC5B404Cad0a0E77F87EB2B99E130a346B3',
    },
    token: tokens.shib,
    quoteToken: tokens.cake,
  }
  ,
  {
    pid: 19,
    lpSymbol: 'MARCO-USDD LP',
    lpAddresses: {
      97: '',
      56: '0x0A6477716f1a2682EC0442Cc07Ae7E329aaE4EA2',
    },
    token: tokens.usdd,
    quoteToken: tokens.cake,
  }
  ,
  {
    pid: 20,
    lpSymbol: 'MARCOLP-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x9209c62C7A0Fa63919b48Ab4d18942b0BDF646c5',
    },
    token: tokens.marcobnb,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 21,
    lpSymbol: 'MXMXLP-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x92D67958e922d46EceA95d0C8AC9446b83aF5075',
    },
    token: tokens.mxmxbnb,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 22,
    lpSymbol: 'MM72LP-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x5B610D743CeeC54EDccD5E724d75A768E30D2a45',
    },
    token: tokens.mm72bnb,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 23,
    lpSymbol: 'MM72-USDT LP',
    lpAddresses: {
      97: '',
      56: '0xA3f45B7C666883F06C88906E76Dfa9831c5545D0',
    },
    token: tokens.usdt,
    quoteToken: tokens.mm72,
  }
  ,
  {
    pid: 24,
    lpSymbol: 'MM19-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x56c52BBcDCE21C49f8944301694fbFF2c71A397F',
    },
    token: tokens.mm19,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 25,
    lpSymbol: 'BEAR-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x0Fdd8f7F59C2995595A07323C6555d4b4417eB38',
    },
    token: tokens.bear,
    quoteToken: tokens.wbnb,
  }
]

export default farms
