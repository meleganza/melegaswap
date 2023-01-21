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
  ,
  {
    pid: 26,
    lpSymbol: 'MARCO-VAI LP',
    lpAddresses: {
      97: '',
      56: '0x4c4666572E3A315fA3Cf732E455Da77073ce5b2B',
    },
    token: tokens.vai,
    quoteToken: tokens.cake,
  }
  ,
  {
    pid: 27,
    lpSymbol: 'MARCO-ETH LP',
    lpAddresses: {
      97: '',
      56: '0x82a1Bb35955a5eAc598665F4255817e13f1E6A7E',
    },
    token: tokens.eth,
    quoteToken: tokens.cake,
  }
  ,
  {
    pid: 28,
    lpSymbol: 'MARCO-BTCB LP',
    lpAddresses: {
      97: '',
      56: '0x84f6372D7e53C75C2D505Bb6D67aEBf116850A08',
    },
    token: tokens.btcb,
    quoteToken: tokens.cake,
  }
  ,
  {
    pid: 29,
    lpSymbol: 'MARCO-DOT LP',
    lpAddresses: {
      97: '',
      56: '0x3bc28dEe541413D37A212C4ccC4b743C6B904c53',
    },
    token: tokens.dot,
    quoteToken: tokens.cake,
  }
  ,
  {
    pid: 30,
    lpSymbol: 'VOLT-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xf1D2a396848d81616d650b099ddD639331b552b1',
    },
    token: tokens.volt,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 31,
    lpSymbol: 'VOLT-MARCO LP',
    lpAddresses: {
      97: '',
      56: '0xc5c866268b2F02C8074A2bf6dF2908cEe1172A83',
    },
    token: tokens.volt,
    quoteToken: tokens.cake,
  },
  {
    pid: 32,
    lpSymbol: 'FBTC-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x9152995AEc7C2dEBCc6e2d34c5E30d3d25D4cEa4',
    },
    token: tokens.fbtc,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 33,
    lpSymbol: 'GWT-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xDcf86B2472aFd4C16132d9A4C9891A16aF439be5',
    },
    token: tokens.gwt,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 34,
    lpSymbol: 'MARCO-QCWC LP',
    lpAddresses: {
      97: '',
      56: '0x4142B4a2857E1D8cD2cdCBCcB5D2fE871c7b4E80',
    },
    token: tokens.qcwc,
    quoteToken: tokens.cake,
  },
  {
    pid: 35,
    lpSymbol: 'MARCO-OSTRICH LP',
    lpAddresses: {
      97: '',
      56: '0x24d0aC1D7a12835d013cb6386F1a13C41fF7F2ce',
    },
    token: tokens.ostrich,
    quoteToken: tokens.cake,
  }
  ,
  {
    pid: 36,
    lpSymbol: 'KOALA-USDT LP',
    lpAddresses: {
      97: '',
      56: '0xbd19ebeC69eB3D70EAF840a24FC599bba9d1052A',
    },
    token: tokens.koala,
    quoteToken: tokens.usdt,
  } ,
  {
    pid: 37,
    lpSymbol: 'KOALA-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x005ab723E40401dFe81C4d427DA62b4ea89Ec4eA',
    },
    token: tokens.koala,
    quoteToken: tokens.wbnb,
  } ,
  {
    pid: 38,
    lpSymbol: 'FROGE-MARCO LP',
    lpAddresses: {
      97: '',
      56: '0xe2c1D33a6b38E750F7C327a75e8bCF801722Fb7d',
    },
    token: tokens.froge,
    quoteToken: tokens.cake,
  }
  ,
  {
    pid: 39,
    lpSymbol: 'ROTTO-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xef2e91559b3360e5c287fAC62c9034A5ea4AE1E0',
    },
    token: tokens.rotto,
    quoteToken: tokens.busd,
  },
  {
    pid: 40,
    lpSymbol: 'GPAY-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x53B134E5B12D2BF914d23f556465B3b14efcdE69',
    },
    token: tokens.gpay,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 41,
    lpSymbol: 'GGW-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x9819ba5974E5A5062d9cC91ED1a39E5eeb8D43F8',
    },
    token: tokens.ggw,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 42,
    lpSymbol: 'HBIT-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x2415807a26c84C35Ff8898142556c4A41738f138',
    },
    token: tokens.hbit,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 43,
    lpSymbol: 'MARCO-KOALA LP',
    lpAddresses: {
      97: '',
      56: '0x8d0ba725A53048b946ADA25423117F209A4Cb36C',
    },
    token: tokens.koala,
    quoteToken: tokens.cake,
  }
]

export default farms
