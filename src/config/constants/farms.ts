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
    lpSymbol: 'GIOTTO-BNB LP',multiplier:"0X",
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
    lpSymbol: 'ZLT-BNB LP',multiplier:"0X",
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
    lpSymbol: '2GCC-BNB LP',multiplier:"0X",
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
    lpSymbol: 'M01-BNB LP',multiplier:"0X",
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
    lpSymbol: 'RMBR-BNB LP',multiplier:"0X",
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
    lpSymbol: 'MARCO-CAKE LP',multiplier:"0X",
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
    lpSymbol: 'MXMX-BUSD LP',multiplier:"0X",
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
    lpSymbol: 'MARCO-DOGE LP',multiplier:"0X",
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
    lpSymbol: 'MARCO-SHIB LP',multiplier:"0X",
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
    lpSymbol: 'MARCOLP-BNB LP',multiplier:"0X",
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
    lpSymbol: 'MXMXLP-BNB LP',multiplier:"0X",
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
    lpSymbol: 'MM72LP-BNB LP',multiplier:"0X",
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
    lpSymbol: 'MM19-BNB LP',multiplier:"0X",
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
    lpSymbol: 'BEAR-BNB LP',multiplier:"0X",
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
    lpSymbol: 'MARCO-ETH LP',multiplier:"0X",
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
    lpSymbol: 'MARCO-BTCB LP',multiplier:"0X",
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
    lpSymbol: 'MARCO-DOT LP',multiplier:"0X",
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
    lpSymbol: 'VOLT-MARCO LP',multiplier:"0X",
    lpAddresses: {
      97: '',
      56: '0xc5c866268b2F02C8074A2bf6dF2908cEe1172A83',
    },
    token: tokens.volt,
    quoteToken: tokens.cake,
  },
  {
    pid: 32,
    lpSymbol: 'FBTC-BNB LP',multiplier:"0X",
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
    lpSymbol: 'GWT-BNB LP',multiplier:"0X",
    lpAddresses: {
      97: '',
      56: '0xDcf86B2472aFd4C16132d9A4C9891A16aF439be5',
    },
    token: tokens.gwt,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 34,
    lpSymbol: 'MARCO-QCWC LP',multiplier:"0X",
    lpAddresses: {
      97: '',
      56: '0x4142B4a2857E1D8cD2cdCBCcB5D2fE871c7b4E80',
    },
    token: tokens.qcwc,
    quoteToken: tokens.cake,
  },
  {
    pid: 35,
    lpSymbol: 'MARCO-OSTRICH LP',multiplier:"0X",
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
    lpSymbol: 'KOALA-USDT LP',multiplier:"0X",
    lpAddresses: {
      97: '',
      56: '0xbd19ebeC69eB3D70EAF840a24FC599bba9d1052A',
    },
    token: tokens.koala,
    quoteToken: tokens.usdt,
  } ,
  {
    pid: 37,
    lpSymbol: 'KOALA-BNB LP',multiplier:"0X",
    lpAddresses: {
      97: '',
      56: '0x005ab723E40401dFe81C4d427DA62b4ea89Ec4eA',
    },
    token: tokens.koala,
    quoteToken: tokens.wbnb,
  } ,
  {
    pid: 38,
    lpSymbol: 'FROGE-MARCO LP',multiplier:"0X",
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
    lpSymbol: 'ROTTO-BUSD LP',multiplier:"0X",
    lpAddresses: {
      97: '',
      56: '0xef2e91559b3360e5c287fAC62c9034A5ea4AE1E0',
    },
    token: tokens.rotto,
    quoteToken: tokens.busd,
  },
  {
    pid: 40,
    lpSymbol: 'GPAY-BNB LP',multiplier:"0X",
    lpAddresses: {
      97: '',
      56: '0x53B134E5B12D2BF914d23f556465B3b14efcdE69',
    },
    token: tokens.gpay,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 41,
    lpSymbol: 'GGW-BNB LP',multiplier:"0X",
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
    lpSymbol: 'MARCO-KOALA LP',multiplier:"0X",
    lpAddresses: {
      97: '',
      56: '0x8d0ba725A53048b946ADA25423117F209A4Cb36C',
    },
    token: tokens.koala,
    quoteToken: tokens.cake,
  }
  ,
  {
    pid: 44,
    lpSymbol: 'LIRA-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x51D3e3B8Fc52B34466F19d1f9Cdba7F28DF95181',
    },
    token: tokens.lira,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 45,
    lpSymbol: 'MARCO-LIRA LP',
    lpAddresses: {
      97: '',
      56: '0x79Ccd7f1687f71a45d3746374236061CE677c12b',
    },
    token: tokens.lira,
    quoteToken: tokens.cake,
  },
  {
    pid: 46,
    lpSymbol: 'MARCO-SPX LP',multiplier:"0X",
    lpAddresses: {
      97: '',
      56: '0x45fF0D167289A92df343535E4ECfFB9FF0C702c7',
    },
    token: tokens.spx,
    quoteToken: tokens.cake,
  }
  ,
  {
    pid: 47,
    lpSymbol: 'MARCO-LOIS LP',multiplier:"0X",
    lpAddresses: {
      97: '',
      56: '0xf83Fc461E9BF886cF6a60256cA1Fb4eeBeEeF2ce',
    },
    token: tokens.lois,
    quoteToken: tokens.cake,
  },
  {
    pid: 48,
    lpSymbol: 'MARCO-DOG LP',multiplier:"0X",
    lpAddresses: {
      97: '',
      56: '0x110fc3c2BE135553Aee5A132BBf30cb858a3dA8c',
    },
    token: tokens.dogebit,
    quoteToken: tokens.cake,
  }
  ,
  {
    pid: 49,
    lpSymbol: 'MARCO-C4Cv2 LP',multiplier:"0X",
    lpAddresses: {
      97: '',
      56: '0x1BbdBB9306b0F3a62981BEa3A67336180d4ad935',
    },
    token: tokens.C4Cv2,
    quoteToken: tokens.cake,
  }
  ,
  {
    pid: 50,
    lpSymbol: 'LIRA-HBIT LP',multiplier:"0X",
    lpAddresses: {
      97: '',
      56: '0x53eD8B7E8f2D221c28337FFe89BF89D16fcf5ED1',
    },
    token: tokens.lira,
    quoteToken: tokens.hbit,
  }
  ,
  {
    pid: 51,
    lpSymbol: 'MARCO-MXMX LP',
    lpAddresses: {
      97: '',
      56: '0x1e090805D6A9CEa65e61aF67e272377CfDfD564D',
    },
    token: tokens.mxmx,
    quoteToken: tokens.cake,
  }
  ,
  {
    pid: 52,
    lpSymbol: 'MARCO-2GCC LP',multiplier:"0X",
    lpAddresses: {
      97: '',
      56: '0x68daD1b10fbED92EDec1Afd9c5ffD7f6D78f7065',
    },
    token: tokens.gcc2,
    quoteToken: tokens.cake,
  }
  ,
  {
    pid: 53,
    lpSymbol: 'MARCO-BEAR LP',
    lpAddresses: {
      97: '',
      56: '0x3fD9C2CD6186A0e90d0357CE100b3C13Bc2accDA',
    },
    token: tokens.bear,
    quoteToken: tokens.cake,
  }
  ,
  {
    pid: 54,
    lpSymbol: 'GPAY-2GCC LP',multiplier:"0X",
    lpAddresses: {
      97: '',
      56: '0xc09ecE1ECee683Cc53D19CB4CE27eaa6Ef3141ff',
    },
    token: tokens.gcc2,
    quoteToken: tokens.gpay,
  }
  ,
  {
    pid: 55,
    lpSymbol: 'SFE-MARCO LP',multiplier:"0X",
    lpAddresses: {
      97: '',
      56: '0x7755F749F5b16d2335D928EcBc9Da3aF210546fe',
    },
    token: tokens.sfe,
    quoteToken: tokens.cake,
  }
  ,
  {
    pid: 56,
    lpSymbol: 'BEFX-BNB LP',multiplier:"0X",
    lpAddresses: {
      97: '',
      56: '0x9C7D868232B503DD23C5bD57D1F42564f43117C1',
    },
    token: tokens.befxold,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 57,
    lpSymbol: 'FWC-BUSD LP',multiplier:"0X",
    lpAddresses: {
      97: '',
      56: '0xe923F39def21c2BA761A973f4c87B2c656b310e1',
    },
    token: tokens.fwc,
    quoteToken: tokens.busd,
  }
  ,
  {
    pid: 58,
    lpSymbol: 'BORZ-MARCO LP',multiplier:"0X",
    lpAddresses: {
      97: '',
      56: '0x61ef3c8f0463921a76b0e20f717BfCA9F634C56E',
    },
    token: tokens.borz,
    quoteToken: tokens.cake,
  }
  ,
  {
    pid: 59,
    lpSymbol: 'FAS-BNB LP',multiplier:"0X",
    lpAddresses: {
      97: '',
      56: '0xaa1634C5e09B2F8855e7646edE3c01B1B0d3CeC7',
    },
    token: tokens.fas,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 60,
    lpSymbol: 'LIRA-2GCC LP',multiplier:"0X",
    lpAddresses: {
      97: '',
      56: '0xFe4651cc36905E71511b881f7bdB8250606Cd704',
    },
    token: tokens.lira,
    quoteToken: tokens.gcc2,
  }
  ,
  {
    pid: 61,
    lpSymbol: 'GPAY-M01 LP',multiplier:"0X",
    lpAddresses: {
      97: '',
      56: '0x4B12EA1fc357Db0957a364d07B71d7236612722a',
    },
    token: tokens.gpay,
    quoteToken: tokens.m01,
  }
  ,
  {
    pid: 62,
    lpSymbol: 'CTI-MARCO LP',multiplier:"0X",
    lpAddresses: {
      97: '',
      56: '0x4cF18Cef70147c8659d10227577B0377Ef211ABf',
    },
    token: tokens.cti,
    quoteToken: tokens.cake,
  }
  ,
  {
    pid: 63,
    lpSymbol: 'CVL-MARCO LP',multiplier:"0X",
    lpAddresses: {
      97: '',
      56: '0xeBa697Bd9588fF34061AD47cFe9017A29341EC8f',
    },
    token: tokens.cvl,
    quoteToken: tokens.cake,
  }
  ,
  {
    pid: 64,
    lpSymbol: 'GIOTTO-M01 LP',multiplier:"0X",
    lpAddresses: {
      97: '',
      56: '0x91012f390EC692Bcdd4356bbBD0c021AE6dF62ce',
    },
    token: tokens.gitto,
    quoteToken: tokens.m01,
  }
  ,
  {
    pid: 65,
    lpSymbol: 'ZLT-M01 LP',
    lpAddresses: {
      97: '',
      56: '0x5b7abe34510Ec0D0cdb062CC52a6399d40F81DFA',
    },
    token: tokens.zoloto,
    quoteToken: tokens.m01,
  }
  ,
  {
    pid: 66,
    lpSymbol: 'POOP-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x4e6D297f9Cd3e93D0Ae5BbD8330bBD751996F03c',
    },
    token: tokens.poop,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 67,
    lpSymbol: 'LUCK-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x5a19fde41461eb998e74839e8a7527e7dc376850',
    },
    token: tokens.luck,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 68,
    lpSymbol: 'HSE-BNB LP',multiplier:"0X",
    lpAddresses: {
      97: '',
      56: '0x0F329A55e665686c1153C7157441BeEb04174679',
    },
    token: tokens.hse,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 69,
    lpSymbol: 'TPCV3-BNB LP',multiplier:"0X",
    lpAddresses: {
      97: '',
      56: '0xA8C3FD42A5bAc6418D01f7889B3d4FD01e542cA2',
    },
    token: tokens.tpcv3,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 70,
    lpSymbol: 'SPACEAPE-BNB LP',multiplier:"0X",
    lpAddresses: {
      97: '',
      56: '0x8cD571B07df38460DCDEC21a95Cb36127593Ea3B',
    },
    token: tokens.spaceape,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 71,
    lpSymbol: 'SFEA-SFE LP',multiplier:"0X",
    lpAddresses: {
      97: '',
      56: '0x33Da61a585b9341F511698637ED0B4cFE61ab47b',
    },
    token: tokens.sfea,
    quoteToken: tokens.sfe,
  }
  ,
  {
    pid: 72,
    lpSymbol: 'SFE-BNB LP',multiplier:"0X",
    lpAddresses: {
      97: '',
      56: '0xCd6Ee29017F14dBe79f26968874Cf502347450F8',
    },
    token: tokens.sfe,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 73,
    lpSymbol: 'GGTKN-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x99C47A3C9895c47ab1a5F18341b8fC1720DD022e',
    },
    token: tokens.ggtkn,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 74,
    lpSymbol: 'SBDEX-BNB LP',multiplier:"0X",
    lpAddresses: {
      97: '',
      56: '0x6521d46A2dEA6580095956D697Dc72E480CD26B6',
    },
    token: tokens.sbdex,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 75,
    lpSymbol: 'RUG-BNB LP',multiplier:"0X",
    lpAddresses: {
      97: '',
      56: '0x079C06834F9575a2BE909D187084513622ca27F2',
    },
    token: tokens.rug,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 76,
    lpSymbol: 'LCSTOKEN-BNB LP',multiplier:"0X",
    lpAddresses: {
      97: '',
      56: '0x40Ec919bc6052C810ef31a8d5737c830114EF288',
    },
    token: tokens.lcsc,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 77,
    lpSymbol: 'BORZ-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xA5427dc9E81a8d51Fdb0A8A7CD9AEDa9591a5B43',
    },
    token: tokens.borz,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 78,
    lpSymbol: 'DYN-BNB LP',multiplier:"0X",
    lpAddresses: {
      97: '',
      56: '0x58b80D19A2d74aAb63a888a4e0891b696d071074',
    },
    token: tokens.dyn,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 79,
    lpSymbol: 'IPL-BNB LP',multiplier:"0X",
    lpAddresses: {
      97: '',
      56: '0xD84A8D737dcD790FB14618501CdDb4fAE0F49778',
    },
    token: tokens.ipl,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 80,
    lpSymbol: 'SUSU-BUSD LP',multiplier:"0X",
    lpAddresses: {
      97: '',
      56: '0x0676f0b348C60437Eb530a9d864581ecAecffB7b',
    },
    token: tokens.susu,
    quoteToken: tokens.busd,
  }
  ,
  {
    pid: 81,
    lpSymbol: 'WHEXDAO-BNB LP',multiplier:"0X",
    lpAddresses: {
      97: '',
      56: '0x32e7f908145E96E0dF986E1E662b4d110C78c184',
    },
    token: tokens.WHEXDAO,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 82,
    lpSymbol: 'DIGA-BNB LP',multiplier:"0X",
    lpAddresses: {
      97: '',
      56: '0x9C8be4d92021C9669D3a526D51d131bFfbb78203',
    },
    token: tokens.diga,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 83,
    lpSymbol: 'SWEEP-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xBc96d691dc546391E115d17aC050a22D651FA401',
    },
    token: tokens.sweep,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 84,
    lpSymbol: 'XPHX-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x6F47AEAA25267321CD499d8Da11f54175e392d90',
    },
    token: tokens.XPHX,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 85,
    lpSymbol: 'HYPEC-BNB LP',multiplier:"0X",
    lpAddresses: {
      97: '',
      56: '0x410FFBD6f6ff6364416EA5e3bE6CDFbA0558AcD7',
    },
    token: tokens.HYPEC,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 86,
    lpSymbol: 'DOGEUM-BNB LP',multiplier:"0X",
    lpAddresses: {
      97: '',
      56: '0x51DE40396691D9FfaF78a9eD13Dd9d1090D97F27',
    },
    token: tokens.DOGEUM,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 87,
    lpSymbol: 'HELP-BNB LP',multiplier:"0X",
    lpAddresses: {
      97: '',
      56: '0x84BF506f3b519ef1cc8889D211e56B046896A2c6',
    },
    token: tokens.help,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 88,
    lpSymbol: 'ALT-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x3B743d85aEE0F27aCB5154cdf453cce27acD41A8',
    },
    token: tokens.alt,
    quoteToken: tokens.busd,
  }
  ,
  {
    pid: 89,
    lpSymbol: 'BEP40-BNB LP',multiplier:"0X",
    lpAddresses: {
      97: '',
      56: '0xe2A68B1C1dfA3ab427E1f4E6FA6943944741291d',
    },
    token: tokens.BEP40,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 90,
    lpSymbol: 'WHEX-BNB LP',multiplier:"0X",
    lpAddresses: {
      97: '',
      56: '0x3E91c7AB0BeE50881d8805690D020CcC1be101fd',
    },
    token: tokens.WHEX,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 91,
    lpSymbol: 'BTCF-BUSD LP',multiplier:"0X",
    lpAddresses: {
      97: '',
      56: '0xC20652C24A23b0aadce0915a72A16202E6EA8D6c',
    },
    token: tokens.BTCF,
    quoteToken: tokens.busd,
  }
  ,
  {
    pid: 92,
    lpSymbol: 'DOWA-BNB LP',multiplier:"0X",
    lpAddresses: {
      97: '',
      56: '0xD0808Ef15d37346E29031ab91F98Df049192eA1b',
    },
    token: tokens.DOWA,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 93,
    lpSymbol: 'BEFX-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x0f9793160960f33b402BdDfCB6cd410D361e6624',
    },
    token: tokens.befx,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 94,
    lpSymbol: 'MRABBIT-BNB LP',multiplier:"0X",
    lpAddresses: {
      97: '',
      56: '0x36F32642Ab0C815709eE131e239CCC0ee51B7f82',
    },
    token: tokens.MRABBIT,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 95,
    lpSymbol: 'FNT-BNB LP',multiplier:"0X",
    lpAddresses: {
      97: '',
      56: '0xbF34cdE9D1225f43cCC5080Db2F80C4bE884ECE5',
    },
    token: tokens.FNT,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 96,
    lpSymbol: 'wCHK-BNB LP',multiplier:"0X",
    lpAddresses: {
      97: '',
      56: '0xc1abc7bEc45faadD806647b9B211973e7B4814c3',
    },
    token: tokens.wCHK,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 97,
    lpSymbol: 'YKS-BNB LP',multiplier:"0X",
    lpAddresses: {
      97: '',
      56: '0x1cE423C43CA549B94C5277748B033C653d4a54E8',
    },
    token: tokens.YKS,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 98,
    lpSymbol: 'BERA-BNB LP',multiplier:"0X",
    lpAddresses: {
      97: '',
      56: '0x66d83c46cEA99B361Df85B3982a374915107b57E',
    },
    token: tokens.Bera,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 99,
    lpSymbol: 'REAL-BNB LP',multiplier:"0X",
    lpAddresses: {
      97: '',
      56: '0x2Ab9727C2b0Ed72c01498B3c469964dbaba0EDDE',
    },
    token: tokens.REAL,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 100,
    lpSymbol: 'TREE-BNB LP',multiplier:"0X",
    lpAddresses: {
      97: '',
      56: '0x71Fc590900C421bC9B3590BA55056dEa9df19589',
    },
    token: tokens.TREE,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 101,
    lpSymbol: 'FLOSHIDO-BNB LP',multiplier:"0X",
    lpAddresses: {
      97: '',
      56: '0x135cCfB6Eb2C1E890F18379C104FC52cf4f0355f',
    },
    token: tokens.FLOSHIDO,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 102,
    lpSymbol: 'RFX-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x4a3D4885A82CD48C805b432E16066c1D44e1AC1C',
    },
    token: tokens.RFX,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 103,
    lpSymbol: 'MIR-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x796e3846Fe1ac6D839154737Da28110aaA9D419C',
    },
    token: tokens.MIR,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 104,
    lpSymbol: 'TFT-BNB LP',multiplier:"0X",
    lpAddresses: {
      97: '',
      56: '0x3ff4C9f2B9eF1938bEfa2Ef7BCa71A2479A08953',
    },
    token: tokens.TFT,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 105,
    lpSymbol: 'LMCSWAP-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x5EC62Eac240F3E81A397677017f866E31761264C',
    },
    token: tokens.LMCSWAP,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 106,
    lpSymbol: 'BYTC-BNB LP',multiplier:"0X",
    lpAddresses: {
      97: '',
      56: '0xf4eFCE0862E5AF477B31abd773067CC5d4FF4e4C',
    },
    token: tokens.bytc,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 107,
    lpSymbol: 'KUSH-BNB LP',multiplier:"0X",
    lpAddresses: {
      97: '',
      56: '0xe18448B931B832928D3cb709Da51DA71FADa5154',
    },
    token: tokens.KUSH,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 108,
    lpSymbol: 'SHIBACASH-BNB LP',multiplier:"0X",
    lpAddresses: {
      97: '',
      56: '0x20919173f9600be72Ba3ed09125ec682a8FcBc5E',
    },
    token: tokens.SHIBACASH,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 109,
    lpSymbol: 'RMOON-BNB LP',multiplier:"0X",
    lpAddresses: {
      97: '',
      56: '0x8Ea2Aa7e3AF826037EFa1E8F5c2AeDf6657cA83B',
    },
    token: tokens.RMOON,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 110,
    lpSymbol: 'KAREN-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x42A3c9FEd9fdD0737B9368a9f551f4aDd28f656c',
    },
    token: tokens.KAREN,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 111,
    lpSymbol: 'FRTC-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xa952FCc2cf6d82a78Fa1469aD7440C9c81b9587E',
    },
    token: tokens.FRTC,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 112,
    lpSymbol: 'EBTC-BNB LP',multiplier:"0X",
    lpAddresses: {
      97: '',
      56: '0x109fbFA9Dc5E4a81Bf68950C3ceda4eF00bE354A',
    },
    token: tokens.EBTC,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 113,
    lpSymbol: 'PHDAO-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x7bD82E397BCCB39827C675B1ef0878CAfb7AD061',
    },
    token: tokens.PHDAO,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 114,
    lpSymbol: 'UFCB-BNB LP',multiplier:"0X",
    lpAddresses: {
      97: '',
      56: '0xfFd276124d09d515f0e3948f1f6016D76ce43864',
    },
    token: tokens.UFCB,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 115,
    lpSymbol: 'UFCB-BNB LP',multiplier:"0X",
    lpAddresses: {
      97: '',
      56: '0xA5261287b07C1CE9884a20DE3548D1bC92b5a1a2',
    },
    token: tokens.UFCB,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 116,
    lpSymbol: 'NERVE-BNB LP',multiplier:"0X",
    lpAddresses: {
      97: '',
      56: '0x326Af65F7b5879d9E1c987B3792d7B54f01B5853',
    },
    token: tokens.NERVE,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 117,
    lpSymbol: 'CDIG-BNB LP',multiplier:"0X",
    lpAddresses: {
      97: '',
      56: '0xa8C3c4CD17B965593CAD379ddBCfe9c0F62C98d4',
    },
    token: tokens.CDIG,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 118,
    lpSymbol: 'Dsun-BNB LP',multiplier:"0X",
    lpAddresses: {
      97: '',
      56: '0x2b2B1cb7CEf2D72FC77bB8405D32e5Cd75f5d74A',
    },
    token: tokens.Dsun,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 119,
    lpSymbol: 'LUCK-MARCO LP',
    lpAddresses: {
      97: '',
      56: '0x119446446103a23a70Cf56b65B235cEaA0e0f0e4',
    },
    token: tokens.luck,
    quoteToken: tokens.cake,
  }
  ,
  {
    pid: 120,
    lpSymbol: 'SLR-BUSD LP',multiplier:"0X",
    lpAddresses: {
      97: '',
      56: '0xA304275faFE95C8f8aa37489508BB507BEEB71A1',
    },
    token: tokens.SLR,
    quoteToken: tokens.busd,
  }
  ,
  {
    pid: 121,
    lpSymbol: 'LIRA-USDC LP',
    lpAddresses: {
      97: '',
      56: '0x98927FaD5ae7076ddF0CD226Ca6c5EE06995784b',
    },
    token: tokens.usdc,
    quoteToken: tokens.lira,
  }
  ,
  {
    pid: 122,
    lpSymbol: 'LIRA-USDT LP',
    lpAddresses: {
      97: '',
      56: '0xA4F9cf19918aFC754F552E18e32EBBFFD5149678',
    },
    token: tokens.usdt,
    quoteToken: tokens.lira,
  }
  ,
  {
    pid: 123,
    lpSymbol: 'BNBTiger-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x7009b56DD817Df3Ca370Db3b39AE444621aA2f97',
    },
    token: tokens.BNBTiger,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 124,
    lpSymbol: 'SVR-BNB LP',multiplier:"0X",
    lpAddresses: {
      97: '',
      56: '0xed6970128aB8636050c997403C17682948C4AcF5',
    },
    token: tokens.SVR,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 125,
    lpSymbol: 'PepeBNB-BNB LP',multiplier:"0X",
    lpAddresses: {
      97: '',
      56: '0xb3B032e537c98dbD8cD0ba9ba76ECDf4B57761B9',
    },
    token: tokens.PepeBNB,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 126,
    lpSymbol: 'IFRIT-BNB LP',multiplier:"0X",
    lpAddresses: {
      97: '',
      56: '0xf02B06B11A327aAA169c2d4D6b983Bcfac49D8a7',
    },
    token: tokens.IFRIT,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 127,
    lpSymbol: 'BACD2-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x8D67E0c10Dd73c464d8649A1833a4Ba63BADb7db',
    },
    token: tokens.BACD2,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 128,
    lpSymbol: 'SHAUN-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x4921eAD48f6943161EB35319E128886ca3886296',
    },
    token: tokens.SHAUN,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 129,
    lpSymbol: 'PEPA-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xC360B51f605E0D15F1F963114F8F84bBeb4C178f',
    },
    token: tokens.PEPA,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 130,
    lpSymbol: 'BIBI-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x050e0dD04Ecc1E3010ce37ED52980560152feA46',
    },
    
    token: tokens.BIBI,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 131,
    lpSymbol: 'MEME-BNB LP',multiplier:"0X",
    lpAddresses: {
      97: '',
      56: '0x0e922779ADabB1dBA7d25353a9e17f3E14431a0b',
    },
    token: tokens.MEME,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 132,
    lpSymbol: 'XCEO-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x82218849Ec2dD3d59aeCa6b21825B08D3Fc65583',
    },
    token: tokens.XCEO,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 133,
    lpSymbol: '4RZ-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xa15d85F1026aE7d96a29955eb77dF18cA7c2bad2',
    },
    token: tokens.RZ4,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 134,
    lpSymbol: 'MongBNB-BNB LP',multiplier:"0X",
    lpAddresses: {
      97: '',
      56: '0xb245bee375A3c7fC9447546C5CD2f83307f33904',
    },
    token: tokens.MongBNB,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 135,
    lpSymbol: 'BART-BNB LP',multiplier:"0X",
    lpAddresses: {
      97: '',
      56: '0x6E98c020dB9E6B7112c91b9924D155329E3a5dBE',
    },
    token: tokens.BART,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 136,
    lpSymbol: 'EYED-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x0Ca5da766a0D95a5B16aBFB974071C29391d1581',
    },
    token: tokens.EYED,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 137,
    lpSymbol: 'PORN-BNB LP',multiplier:"0X",
    lpAddresses: {
      97: '',
      56: '0xd331a967575eeFef128CFF76291F48A5B1dFc9d4',
    },
    token: tokens.PORN,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 138,
    lpSymbol: 'SUP-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x0b42685A93B478621E4cA8D6292cff89d65C19F2',
    },
    token: tokens.SUP,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 139,
    lpSymbol: 'EDENX-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xd86B843EA186670e29b4Cd82d8A6FEf6FF841292',
    },
    token: tokens.EDENX,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 140,
    lpSymbol: 'PRP-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xA7CB0D404179d842866e25F262865390299365A6',
    },
    token: tokens.PRP,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 141,
    lpSymbol: 'HUGO-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xeF8e4491d077D5C5d5cAD5AFFF3BC0E4aA0C24B5',
    },
    token: tokens.HUGO,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 142,
    lpSymbol: 'GOGU-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x615B243FEc2EB51F53545A30433C98D2A3E79a79',
    },
    token: tokens.GOGU,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 143,
    lpSymbol: 'POP-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x57Cf74A5c7dA36501db634ba2A2E312FaCa1CfAE',
    },
    token: tokens.POP,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 144,
    lpSymbol: 'POP-MARCO LP',
    lpAddresses: {
      97: '',
      56: '0x8D53D34FB9CbE7E1C34e9B70537788699d683752',
    },
    token: tokens.POP,
    quoteToken: tokens.cake,
  }
  ,
  {
    pid: 145,
    lpSymbol: 'SUP-MARCO LP',
    lpAddresses: {
      97: '',
      56: '0xe1ac7B27398a538C20cc7e0930b4A46AAa45Aabe',
    },
    token: tokens.SUP,
    quoteToken: tokens.cake,
  }
  ,
  {
    pid: 146,
    lpSymbol: 'EYED-MARCO LP',
    lpAddresses: {
      97: '',
      56: '0x90cE2b7f74DbE3F3854B80faD4d433005cf32CBC',
    },
    token: tokens.EYED,
    quoteToken: tokens.cake,
  }
  ,
  {
    pid: 147,
    lpSymbol: 'MM72-MARCO LP',
    lpAddresses: {
      97: '',
      56: '0x01dB17c476ad6a4c119f559eAb2d1AC9e340278E',
    },
    token: tokens.mm72,
    quoteToken: tokens.cake,
  }
  ,
  {
    pid: 148,
    lpSymbol: 'BNB-JABA LP',
    lpAddresses: {
      97: '',
      56: '0xA29e5048D038A988308a6371e85ce574Ea5c43D6',
  },
    token: tokens.jaba,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 149,
    lpSymbol: 'BNB-LSPHERE LP',
    lpAddresses: {
      97: '',
      56: '0x9A6b07058A61a05027196ECC0738974c4C224C5d',
  },
    token: tokens.lsphere,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 151,
    lpSymbol: 'BNB-CUBY LP',
    lpAddresses: {
      97: '',
      56: '0x8e91C97fd7fECFD935E6916b1D94EfD6b47c088d',
  },
    token: tokens.cuby,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 152,
    lpSymbol: 'GGTKN-MARCO LP',
    lpAddresses: {
      97: '',
      56: '0x7689b49917887fB87e6125F47e1ee211773c3092',
    },
    token: tokens.ggtkn,
    quoteToken: tokens.cake,
  }
   ,
  {
    pid: 153,
    lpSymbol: 'BNB-ROCKET LP',
    lpAddresses: {
      97: '',
      56: '0xf0EC128136390a19471149b38A83168ba517Dce7',
  },
    token: tokens.rocket,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 154,
    lpSymbol: 'BNB-SKID LP',
    lpAddresses: {
      97: '',
      56: '0xeC2727785f499632c75dEfB3Adb5C08D19a19732',
  },
    token: tokens.skid,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 155,
    lpSymbol: 'BNB-AXPE LP',
    lpAddresses: {
      97: '',
      56: '0xF65fc0F8B6a7Ec6Fc20841FE626baB77A278B17c',
  },
    token: tokens.axpe,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 156,
    lpSymbol: 'BNB-FLY LP',
    lpAddresses: {
      97: '',
      56: '0xa1EB0d2aa6Aaea1dfD6A0A39e11F8B22f3723A91',
  },
    token: tokens.fly,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 157,
    lpSymbol: 'BNB-VBR LP',
    lpAddresses: {
      97: '',
      56: '0x1963d9942B3Cf54Fed6065Da7BE0df73c8ac97ba',
  },
    token: tokens.vibra,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 158,
    lpSymbol: 'BNB-BOAI LP',
    lpAddresses: {
      97: '',
      56: '0xaE8A129bEe1430b4C10F1a4471f8Aaf69ED40e3E',
  },
    token: tokens.boai,
    quoteToken: tokens.wbnb,
  }
   ,
  {
    pid: 159,
    lpSymbol: 'BNB-AARON LP',
    lpAddresses: {
      97: '',
      56: '0x14b3DE51be085Be1feE1bb924b3AC32F1d7E64c1',
  },
    token: tokens.aaron,
    quoteToken: tokens.wbnb,
  }
   ,
  {
    pid: 160,
    lpSymbol: 'MARCO-AARON LP',
    lpAddresses: {
      97: '',
      56: '0xc6f6F0A9525d43D68Ab3FC27a731c01b10F320FA',
  },
    token: tokens.aaron,
    quoteToken: tokens.cake,
  }
  ,
  {
    pid: 161,
    lpSymbol: 'BNB-PCO LP',
    lpAddresses: {
      97: '',
      56: '0xb4DC801634c6191947a43F76e9fb426D20ef9FF1',
  },
    token: tokens.pco,
    quoteToken: tokens.wbnb,
  }
   ,
  {
    pid: 162,
    lpSymbol: 'MARCO-VBR LP',
    lpAddresses: {
      97: '',
      56: '0x79492fabF7378b9Be41c6162Ea4a7C43578b0723',
  },
    token: tokens.vibra,
    quoteToken: tokens.cake,
  }
   ,
  {
    pid: 163,
    lpSymbol: 'MARCO-2GCC LP',
    lpAddresses: {
      97: '',
      56: '0x68daD1b10fbED92EDec1Afd9c5ffD7f6D78f7065',
  },
    token: tokens.gcc2,
    quoteToken: tokens.cake,
  }
  ,
  {
    pid: 164,
    lpSymbol: 'MARCO-M01 LP',
    lpAddresses: {
      97: '',
      56: '0xF04c6Ce1E2d50911dC6858f7e75b0dB4E054905e',
  },
    token: tokens.m01,
    quoteToken: tokens.cake,
  }
  ,
  {
    pid: 166,
    lpSymbol: '2GCC-M01 LP',
    lpAddresses: {
      97: '',
      56: '0x72a4BA75F297dfb1c863D6D2251e76948C9FaB60',
  },
    token: tokens.m01,
    quoteToken: tokens.gcc2,
  }
  ,
  {
    pid: 167,
    lpSymbol: '2GCC-ZLT LP',
    lpAddresses: {
      97: '',
      56: '0x06d41D06F1b3b12819D2892866390a8BF1839bab',
  },
    token: tokens.zoloto,
    quoteToken: tokens.gcc2,
  }
  ,
  {
    pid: 168,
    lpSymbol: 'BNB-MONG2.0 LP',
    lpAddresses: {
      97: '',
      56: '0x0505D5780dF245B7a7aAf44d301d55886f349bae',
  },
    token: tokens.mong2,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 169,
    lpSymbol: 'BNB-TEENY LP',
    lpAddresses: {
      97: '',
      56: '0x6b92Ebc8eFe261fA595E96d8fBE606f90f10C9dd',
  },
    token: tokens.teeny,
    quoteToken: tokens.wbnb,
  }
   ,
  {
    pid: 170,
    lpSymbol: 'BNB-Chame LP',
    lpAddresses: {
      97: '',
      56: '0xd3c32958b9A3074CDEF6365440c0ff871248C5C3',
  },
    token: tokens.chame,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 171,
    lpSymbol: 'BNB-PTC LP',
    lpAddresses: {
      97: '',
      56: '0x8091dAb42b8579322006b3C4e01743FE8319403B',
  },
    token: tokens.ptc,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 172,
    lpSymbol: 'XRP-PTC LP',
    lpAddresses: {
      97: '',
      56: '0x0a8789dfEB9948CBa455cFaeC2C26a41357B6BCf',
  },
    token: tokens.ptc,
    quoteToken: tokens.xrp,
  }
  ,
  {
    pid: 173,
    lpSymbol: 'BNB-BODE LP',
    lpAddresses: {
      97: '',
      56: '0x2602e99D3835Eadc755F904c98737B7a9c7E3BAE',
  },
    token: tokens.bode,
    quoteToken: tokens.wbnb,
  }
   ,
  {
    pid: 174,
    lpSymbol: 'BNB-WDT LP',
    lpAddresses: {
      97: '',
      56: '0xDAa8484f7189DBfBeaD170344a09818D886398f0',
  },
    token: tokens.wdt,
    quoteToken: tokens.wbnb,
  }
     ,
  {
    pid: 175,
    lpSymbol: 'BNB-YATINU LP',
    lpAddresses: {
      97: '',
      56: '0xf581012014423C332190E4777b3dEa5cFA3b34CB',
  },
    token: tokens.yatinu,
    quoteToken: tokens.wbnb,
  }
     ,
  {
    pid: 176,
    lpSymbol: 'VBR-MXMX LP',
    lpAddresses: {
      97: '',
      56: '0xc55DB48802FFF7a81188E943C16EF576dfC8ef1d',
  },
    token: tokens.mxmx,
    quoteToken: tokens.vibra,
  }
  ,
  {
    pid: 177,
    lpSymbol: 'VBR-M01 LP',
    lpAddresses: {
      97: '',
      56: '0x5C5D3410a6d9103c11c9b3e8A064e3e99DD81510',
  },
    token: tokens.m01,
    quoteToken: tokens.vibra,
  }
  ,
  {
    pid: 178,
    lpSymbol: 'VBR-2GCC LP',
    lpAddresses: {
      97: '',
      56: '0xB86e833838e27808c2aD0a49647818823863AB8F',
  },
    token: tokens.gcc2,
    quoteToken: tokens.vibra,
  }
   ,
  {
    pid: 179,
    lpSymbol: 'BEAR-2GCC LP',
    lpAddresses: {
      97: '',
      56: '0x4663212073549FD674bd588494eB06e906692fF4',
  },
    token: tokens.gcc2,
    quoteToken: tokens.bear,
  }
  ,
  {
    pid: 180,
    lpSymbol: 'BEAR-M01 LP',
    lpAddresses: {
      97: '',
      56: '0x737b674106Ce29a4604116e103eb9B6F2A289c64',
  },
    token: tokens.m01,
    quoteToken: tokens.bear,
  }
   ,
  {
    pid: 181,
    lpSymbol: 'BEAR-ZLT LP',
    lpAddresses: {
      97: '',
      56: '0xa2d78F3f9DF50adAa6F42FD9269a06a328eF94D4',
  },
    token: tokens.zoloto,
    quoteToken: tokens.bear,
  }
     ,
  {
    pid: 182,
    lpSymbol: 'BNB-RAKY LP',
    lpAddresses: {
      97: '',
      56: '0xFFaFe2103d627a056d3177E7158cb487F3A59659',
  },
    token: tokens.raky,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 183,
    lpSymbol: 'MARCO-RAKY LP',
    lpAddresses: {
      97: '',
      56: '0xF62A5c4A5eb810493261D14A971403D78403c5Ee',
  },
    token: tokens.raky,
    quoteToken: tokens.cake,
  }
    ,
  {
    pid: 184,
    lpSymbol: 'MXMX-RAKY LP',
    lpAddresses: {
      97: '',
      56: '0x6E7f53053B927cB6A04D91Eaa9F74F5E4605f410',
  },
    token: tokens.raky,
    quoteToken: tokens.mxmx,
  }
   ,
  {
    pid: 185,
    lpSymbol: 'BNB-MOB LP',
    lpAddresses: {
      97: '',
      56: '0x06B78813445592254B0dCaa7d520256b49809420',
  },
    token: tokens.mob,
    quoteToken: tokens.wbnb,
  }
    ,
  {
    pid: 186,
    lpSymbol: 'BNB-YD LP',
    lpAddresses: {
      97: '',
      56: '0x93CA9862f9fea7636B7A143E54c6CD64D9585aEf',
  },
    token: tokens.yd,
    quoteToken: tokens.wbnb,
  }
    ,
  {
    pid: 187,
    lpSymbol: 'MARCO-YD LP',
    lpAddresses: {
      97: '',
      56: '0xede506eE698acD55fB522c57772C9Db5f98cCFA2',
  },
    token: tokens.yd,
    quoteToken: tokens.cake,
  }
  ,
  {
    pid: 188,
    lpSymbol: 'MXMX-YD LP',
    lpAddresses: {
      97: '',
      56: '0x8E256EC5c3cDb1093017E4E56423EF634cA99582',
  },
    token: tokens.yd,
    quoteToken: tokens.mxmx,
  }
  ,
  {
    pid: 189,
    lpSymbol: '2GCC-YD LP',
    lpAddresses: {
      97: '',
      56: '0xAcbE58b04f976d24A0239c8D00731aae06952122',
  },
    token: tokens.yd,
    quoteToken: tokens.gcc2,
  }
   ,
  {
    pid: 190,
    lpSymbol: 'BNB-COCK LP',
    lpAddresses: {
      97: '',
      56: '0xABC12b4c866eff775EAb4E277127722086B87312',
  },
    token: tokens.cock,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 191,
    lpSymbol: 'BNB-ALTER LP',
    lpAddresses: {
      97: '',
      56: '0xe33f4665AD51308365268ED4fD48B6F5A38b6CD1',
  },
    token: tokens.alter,
    quoteToken: tokens.wbnb,
  }
   ,
  {
    pid: 192,
    lpSymbol: 'BNB-TRT LP',
    lpAddresses: {
      97: '',
      56: '0x389D2396F00880A609acebe3dC83a0ca86945F58',
  },
    token: tokens.trt,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 193,
    lpSymbol: 'BNB-APEX LP',
    lpAddresses: {
      97: '',
      56: '0xD12332B5480B5d73496795e527980a4cD57b858a',
  },
    token: tokens.apemax,
    quoteToken: tokens.wbnb,
  }
   ,
  {
    pid: 194,
    lpSymbol: 'BNB-RDRS LP',
    lpAddresses: {
      97: '',
      56: '0x91e6158B2F82A6C359B3F0d613E991D0457C41e8',
  },
    token: tokens.rdrs,
    quoteToken: tokens.wbnb,
  }
   ,
  {
    pid: 195,
    lpSymbol: 'MARCO-TRT LP',
    lpAddresses: {
      97: '',
      56: '0xdB5aEaFE874b0c1BDbAa1dfF1e7FC00479350d2E',
  },
    token: tokens.trt,
    quoteToken: tokens.cake,
  }
  ,
  {
    pid: 196,
    lpSymbol: 'BNB-PEPECB LP',
    lpAddresses: {
      97: '',
      56: '0x3a09926cD17F89ecD3523928054A238cb42450af',
  },
    token: tokens.pepecb,
    quoteToken: tokens.wbnb,
  }
    ,
  {
    pid: 197,
    lpSymbol: 'BNB-AGAPE LP',
    lpAddresses: {
      97: '',
      56: '0xa827E2CfcA2C39c8e658AA18b816B974dB260C1F',
  },
    token: tokens.agape,
    quoteToken: tokens.wbnb,
  }
    ,
  {
    pid: 198,
    lpSymbol: 'BNB-CAT LP',
    lpAddresses: {
      97: '',
      56: '0x819D850f4fE952421C28b2E4130D2650E0545dB2',
  },
    token: tokens.cat,
    quoteToken: tokens.wbnb,
  }
     ,
  {
    pid: 199,
    lpSymbol: 'BNB-ICN LP',
    lpAddresses: {
      97: '',
      56: '0xEB6c840501644561Ec0c4CF6513679545431a1F6',
  },
    token: tokens.icn,
    quoteToken: tokens.wbnb,
  }
    ,
  {
    pid: 200,
    lpSymbol: 'BNB-DOCSWAP LP',
    lpAddresses: {
      97: '',
      56: '0xF534718314f6B5ae833937B09a7a8EC03b1f7679',
  },
    token: tokens.docswap,
    quoteToken: tokens.wbnb,
  }
   ,
  {
    pid: 201,
    lpSymbol: 'BNB-SAFO LP',
    lpAddresses: {
      97: '',
      56: '0x191F29C2B4Cc69BFd73901be6D8F03BD1a26a47b',
  },
    token: tokens.safo,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 202,
    lpSymbol: 'BNB-AGAPE LP',
    lpAddresses: {
      97: '',
      56: '0xF99df4e57f84a725326e27f959A2b3D0Cf898051',
  },
    token: tokens.agapeai,
    quoteToken: tokens.wbnb,
  }
   ,
  {
    pid: 203,
    lpSymbol: 'BNB-M420 LP',
    lpAddresses: {
      97: '',
      56: '0x8De677Fab90331A930Bad1c1EBBE391dDeE1D4b0',
  },
    token: tokens.m420,
    quoteToken: tokens.wbnb,
  }
   ,
  {
    pid: 204,
    lpSymbol: 'BNB-CLAN LP',
    lpAddresses: {
      97: '',
      56: '0xE71A687231864696557EB97Dc15E077d11d52760',
  },
    token: tokens.clan,
    quoteToken: tokens.wbnb,
  }
   ,
  {
    pid: 205,
    lpSymbol: 'BNB-SHIFO LP',
    lpAddresses: {
      97: '',
      56: '0xeE2f261508968e1F78197a28EadC80f9Cd5FFcd2',
  },
    token: tokens.shifo,
    quoteToken: tokens.wbnb,
  }
   ,
  {
    pid: 206,
    lpSymbol: 'BNB-MX LP',
    lpAddresses: {
      97: '',
      56: '0x2F785D9178b7a176d602b87fd32965ffeA8b4EC7',
  },
    token: tokens.mix2,
    quoteToken: tokens.wbnb,
  }
   ,
  {
    pid: 207,
    lpSymbol: 'BNB-chc LP',
    lpAddresses: {
      97: '',
      56: '0x2A7a7763B8E2a51570a983184067e69DAc7F4dFF',
  },
    token: tokens.chc,
    quoteToken: tokens.wbnb,
  }
   ,
  {
    pid: 208,
    lpSymbol: 'BNB-RARI LP',
    lpAddresses: {
      97: '',
      56: '0x54067c068cD297EB5D1a49A7Ae90BD69d3642930',
  },
    token: tokens.rari,
    quoteToken: tokens.wbnb,
  }
     ,
  {
    pid: 209,
    lpSymbol: 'BNB-CRYSTAL STONES LP',
    lpAddresses: {
      97: '',
      56: '0x90329a5De3A4dA3FfB47f055863eEA235b1220Df',
  },
    token: tokens.crystals,
    quoteToken: tokens.wbnb,
  }
       ,
  {
    pid: 210,
    lpSymbol: 'MARCO-RARI LP',
    lpAddresses: {
      97: '',
      56: '0x7151d3368E04846b74810286A07546C18F925402',
  },
    token: tokens.rari,
    quoteToken: tokens.cake,
  }
  ,
  {
    pid: 211,
    lpSymbol: '2GCC-RARI LP',
    lpAddresses: {
      97: '',
      56: '0xDC721f2960E3e02CFe992E84E5dB91c753606bDf',
  },
    token: tokens.rari,
    quoteToken: tokens.gcc2,
  }
  ,
  {
    pid: 212,
    lpSymbol: 'YD-RARI LP',
    lpAddresses: {
      97: '',
      56: '0x9394184e315116609c0b695426AEe55FA13EE806',
  },
    token: tokens.rari,
    quoteToken: tokens.yd,
  }
  ,
  {
    pid: 213,
    lpSymbol: 'RAKY-RARI LP',
    lpAddresses: {
      97: '',
      56: '0x4fc9e4Ef689DaA58d995583B3eF1CE4eD0DDc0C4',
  },
    token: tokens.rari,
    quoteToken: tokens.raky,
  }
   ,
  {
    pid: 214,
    lpSymbol: 'AARON-RARI LP',
    lpAddresses: {
      97: '',
      56: '0xe9A5F443985411B3b1272E5b82eba26F143bb475',
  },
    token: tokens.rari,
    quoteToken: tokens.aaron,
  }
   ,
  {
    pid: 215,
    lpSymbol: 'EYED-RARI LP',
    lpAddresses: {
      97: '',
      56: '0xb2AFe2D0Bf0643Df05460843b5690E500dc47837',
  },
    token: tokens.rari,
    quoteToken: tokens.EYED,
  }
   ,
  {
    pid: 216,
    lpSymbol: 'BUSD-chc LP',
    lpAddresses: {
      97: '',
      56: '0xfBF01243e6601E2bb125cD5dd86Fd07de33733a3',
  },
    token: tokens.chc,
    quoteToken: tokens.busd,
  }
  ,
  {
    pid: 217,
    lpSymbol: 'BNB-DRAI LP',
    lpAddresses: {
      97: '',
      56: '0x56A2679C4Ad7d4BB2c35aC7C44987Eb466915667',
  },
    token: tokens.drai,
    quoteToken: tokens.wbnb,
  }
    ,
  {
    pid: 218,
    lpSymbol: 'USDT-ALT LP',
    lpAddresses: {
      97: '',
      56: '0x53782EbbA7372abFA2317024De1047823d9A6715',
    },
    token: tokens.usdt,
    quoteToken: tokens.alt,
  }
   ,
  {
    pid: 219,
    lpSymbol: 'M01-RARI LP',
    lpAddresses: {
      97: '',
      56: '0x6Ae03646a058EFb5f70f263bBE61EFFe12a9a522',
    },
    token: tokens.rari,
    quoteToken: tokens.m01,
  }
  ,
  {
    pid: 220,
    lpSymbol: 'M01-YD LP',
    lpAddresses: {
      97: '',
      56: '0x49312412A36098031510a51562B1Fee61B44800c',
    },
    token: tokens.yd,
    quoteToken: tokens.m01,
  }
  ,
  {
    pid: 221,
    lpSymbol: 'M01-POP LP',
    lpAddresses: {
      97: '',
      56: '0x93c9F5840A0DD27045Cae6417fCDff44FE3c2a66',
    },
    token: tokens.POP,
    quoteToken: tokens.m01,
  }
  ,
  {
    pid: 222,
    lpSymbol: 'M01-EYED LP',
    lpAddresses: {
      97: '',
      56: '0x8AdCD965d4a4c929979AA204C787A5f27ab58097',
    },
    token: tokens.EYED,
    quoteToken: tokens.m01,
  }
   ,
  {
    pid: 223,
    lpSymbol: 'PSPAY-USDT LP',
    lpAddresses: {
      97: '',
      56: '0xAe2f0EF36A1B4B35021499B51aB2b43fb8b209d3',
    },
    token: tokens.usdt,
    quoteToken: tokens.pspay,
  }
  ,
  {
    pid: 224,
    lpSymbol: 'BNB-PSPAY LP',
    lpAddresses: {
      97: '',
      56: '0xF44E7658EC7A76442f3509D19a86B64273EEd516',
    },
    token: tokens.pspay,
    quoteToken: tokens.wbnb,
  }
   ,
  {
    pid: 225,
    lpSymbol: 'BNB-CLOWNS LP',
    lpAddresses: {
      97: '',
      56: '0x44B4c8CCbF43B42e7C61A6e317b5DE66f31b2E56',
    },
    token: tokens.clowns,
    quoteToken: tokens.wbnb,
  }
    ,
  {
    pid: 226,
    lpSymbol: 'BNB-HADA LP',
    lpAddresses: {
      97: '',
      56: '0xba431279Cce9bF8A23f53389b7437312ecdEF1FC',
    },
    token: tokens.hada,
    quoteToken: tokens.wbnb,
  }
    ,
  {
    pid: 227,
    lpSymbol: 'BNB-CBNB LP',
    lpAddresses: {
      97: '',
      56: '0xE13945b4FeB4Bd8d88824e99c9cC445A09FaF737',
    },
    token: tokens.cbnb,
    quoteToken: tokens.wbnb,
  }
    ,
  {
    pid: 228,
    lpSymbol: 'MARCO-CBNB LP',
    lpAddresses: {
      97: '',
      56: '0x07F05b4920D4d71535a8513ebD9b6dB93Af8F16E',
    },
    token: tokens.cbnb,
    quoteToken: tokens.cake,
  }
    ,
  {
    pid: 229,
    lpSymbol: '2GCC-CBNB LP',
    lpAddresses: {
      97: '',
      56: '0x368D0E621eaE27daFC5Cfef671628F57EB9a0db3',
    },
    token: tokens.cbnb,
    quoteToken: tokens.gcc2,
  }
    ,
  {
    pid: 230,
    lpSymbol: 'VBR-CBNB LP',
    lpAddresses: {
      97: '',
      56: '0xE1265B313bac5f23A1282F8F47A65F40994f882E',
    },
    token: tokens.cbnb,
    quoteToken: tokens.vibra,
  }
  ,
  {
    pid: 231,
    lpSymbol: 'ZLT-CBNB LP',
    lpAddresses: {
      97: '',
      56: '0x7F499850650c82B845A75C2f45DFdCcB47A4F6C8',
    },
    token: tokens.cbnb,
    quoteToken: tokens.zoloto,
  }
   ,
  {
    pid: 232,
    lpSymbol: 'LUCK-CBNB LP',
    lpAddresses: {
      97: '',
      56: '0x872cd1745b30dDE8d48DC74881ED3941E7dbD11f',
    },
    token: tokens.cbnb,
    quoteToken: tokens.luck,
  }
    ,
  {
    pid: 233,
    lpSymbol: 'BNB-GECK LP',
    lpAddresses: {
      97: '',
      56: '0x887511653AAe22AE8B691Eaead7aeC064B7C62A9',
    },
    token: tokens.geck,
    quoteToken: tokens.wbnb,
  }
     ,
  {
    pid: 234,
    lpSymbol: 'BNB-NGD LP',
    lpAddresses: {
      97: '',
      56: '0xAba36eA0a9A49B612e6ab40e359b3B1A0bca2280',
    },
    token: tokens.ngd,
    quoteToken: tokens.wbnb,
  }
   ,
  {
    pid: 235,
    lpSymbol: 'BNB-CMC LP',
    lpAddresses: {
      97: '',
      56: '0xDD429C5ADd745169122D1b9Ce78439A9C4E5eCd6',
    },
    token: tokens.cmc,
    quoteToken: tokens.wbnb,
  }
   ,
  {
    pid: 236,
    lpSymbol: 'BNB-WFX LP',
    lpAddresses: {
      97: '',
      56: '0x1E197b2B29185b776a5eeE5899585f9fCf9B0780',
    },
    token: tokens.wfx,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 237,
    lpSymbol: 'BNB-VOC LP',
    lpAddresses: {
      97: '',
      56: '0x41170cf829502FcFcD81E4159a0ec2ac127Be315',
    },
    token: tokens.voc,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 238,
    lpSymbol: 'BNB-CAVEA LP',
    lpAddresses: {
      97: '',
      56: '0xAdd77e7ef791dB42fF7C251cE91247E90b981860',
    },
    token: tokens.cavea,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 239,
    lpSymbol: 'MARCO-CAVEA LP',
    lpAddresses: {
      97: '',
      56: '0x685257D081D8477C2F82d550D389F6407A8f299C',
    },
    token: tokens.cavea,
    quoteToken: tokens.cake,
  }
   ,
  {
    pid: 240,
    lpSymbol: 'BNB-XRPGROW LP',
    lpAddresses: {
      97: '',
      56: '0x7C143B03A618F2b3e815d35D5EA81B75958d7788',
    },
    token: tokens.xrpgrow,
    quoteToken: tokens.wbnb,
  }
   ,
  {
    pid: 241,
    lpSymbol: 'RARI-CBNB LP',
    lpAddresses: {
      97: '',
      56: '0xD117b631525595c54E97Cd41bF6C3E49a7a8465A',
    },
    token: tokens.cbnb,
    quoteToken: tokens.rari,
  }
   ,
  {
    pid: 242,
    lpSymbol: 'YD-CBNB LP',
    lpAddresses: {
      97: '',
      56: '0x76215405bbD3Fa981629f112229bD9c7f77c6e29',
    },
    token: tokens.cbnb,
    quoteToken: tokens.yd,
  }
  ,
  {
    pid: 243,
    lpSymbol: 'CAVEA-CBNB LP',
    lpAddresses: {
      97: '',
      56: '0x54c8ebE5e68Dc2A031e2AaDA58dFf0886Fc5602c',
    },
    token: tokens.cbnb,
    quoteToken: tokens.cavea,
  }
  ,
  {
    pid: 244,
    lpSymbol: 'BNB-rickinu LP',
    lpAddresses: {
      97: '',
      56: '0xB42ae12eA1E9b147CAd10431a3AcC7681b24779a',
    },
    token: tokens.rickinu,
    quoteToken: tokens.wbnb,
  }
   ,
  {
    pid: 245,
    lpSymbol: 'BNB-CPEPE LP',
    lpAddresses: {
      97: '',
      56: '0x34b34ea0C32eC0bA4B13962EbD774C7a1FEB03C2',
    },
    token: tokens.cpepe,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 246,
    lpSymbol: 'BNB-ESSO LP',
    lpAddresses: {
      97: '',
      56: '0x3271bbE432559412472492DbA66D2bc4f48A8e5b',
    },
    token: tokens.esso,
    quoteToken: tokens.wbnb,
  }
   ,
  {
    pid: 247,
    lpSymbol: 'CBNB-ESSO LP',
    lpAddresses: {
      97: '',
      56: '0x8880a9be8b152C80fFB7E372c701EC4EA6AD5507',
    },
    token: tokens.esso,
    quoteToken: tokens.cbnb,
  }
   ,
  {
    pid: 248,
    lpSymbol: '2GCC-ESSO LP',
    lpAddresses: {
      97: '',
      56: '0xB36dD313486379B1DeBa55b8Df985C92FBd842D2',
    },
    token: tokens.esso,
    quoteToken: tokens.gcc2,
  }
  ,
  {
    pid: 249,
    lpSymbol: 'MARCO-ESSO LP',
    lpAddresses: {
      97: '',
      56: '0x71E071e5dD20222BC530A827a411199E3BC8649F',
    },
    token: tokens.esso,
    quoteToken: tokens.cake,
  }
  ,
  {
    pid: 250,
    lpSymbol: 'ZLT-ESSO LP',
    lpAddresses: {
      97: '',
      56: '0x5eD9fa9aDde28b987D76083E630B88Add42de699',
    },
    token: tokens.esso,
    quoteToken: tokens.zoloto,
  }
  ,
  {
    pid: 251,
    lpSymbol: 'BNB-CUSDT LP',
    lpAddresses: {
      97: '',
      56: '0x8D499Dd632Dc17dCB1460Cc80AB4CC9B2b47c0f3',
    },
    token: tokens.cusdt,
    quoteToken: tokens.wbnb,
  }
   ,
  {
    pid: 252,
    lpSymbol: 'CBNB-CUSDT LP',
    lpAddresses: {
      97: '',
      56: '0xab661bBcf1196E6aF311Fd1FC30572BcEd31907B',
    },
    token: tokens.cusdt,
    quoteToken: tokens.cbnb,
  }
   ,
  {
    pid: 253,
    lpSymbol: '2GCC-CUSDT LP',
    lpAddresses: {
      97: '',
      56: '0xB68E1d3d544e46a67f53261a2ebfD7E7447C9836',
    },
    token: tokens.cusdt,
    quoteToken: tokens.gcc2,
  }
    ,
  {
    pid: 254,
    lpSymbol: 'BNB-CXRP LP',
    lpAddresses: {
      97: '',
      56: '0xd9379cD8E18EbE165A80B539bB0b2EF92F648E14',
    },
    token: tokens.cxrp,
    quoteToken: tokens.wbnb,
  }
   ,
  {
    pid: 255,
    lpSymbol: 'CUSDT-CXRP LP',
    lpAddresses: {
      97: '',
      56: '0x8f2a185c19093eaaCd8F1110472e155375532510',
    },
    token: tokens.cxrp,
    quoteToken: tokens.cusdt,
  }
   ,
  {
    pid: 256,
    lpSymbol: 'CBNB-CXRP LP',
    lpAddresses: {
      97: '',
      56: '0xc4F34B446d3212910ff2aa0C25106dD497ebfeF3',
    },
    token: tokens.cxrp,
    quoteToken: tokens.cbnb,
  }
   ,
  {
    pid: 257,
    lpSymbol: 'VBR-ZLT LP',
    lpAddresses: {
      97: '',
      56: '0x5b1405A8157285aB1f5912A05B5Fc8023a666346',
    },
    token: tokens.zoloto,
    quoteToken: tokens.vibra,
  }
   ,
  {
    pid: 258,
    lpSymbol: 'CUSDT-YD LP',
    lpAddresses: {
      97: '',
      56: '0xDCbE3E20afB1fBA62972EC5875e59616DaFc04d9',
    },
    token: tokens.yd,
    quoteToken: tokens.cusdt,
  }
  ,
  {
    pid: 259,
    lpSymbol: 'BNB-BULX LP',
    lpAddresses: {
      97: '',
      56: '0xD33a0C69394C00770fb810a1155A1F38EcACBc20',
    },
    token: tokens.bulx,
    quoteToken: tokens.wbnb,
  }
    ,
  {
    pid: 260,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xA9B056a74400F8Fc892fB714f6973763806A5127',
    },
    token: tokens.busdx,
    quoteToken: tokens.wbnb,
  }
    ,
  {
    pid: 261,
    lpSymbol: 'BUSD-BULX LP',
    lpAddresses: {
      97: '',
      56: '0x5Bb69B61b9c005a0dcA67A9A0AE1b6e6EE71A1B9',
    },
    token: tokens.bulx,
    quoteToken: tokens.busdx,
  }
    ,
  {
    pid: 262,
    lpSymbol: 'BNB-PIPI LP',
    lpAddresses: {
      97: '',
      56: '0x8AeD8e89F54942b3C4165197Bf06229C7FE8F219',
    },
    token: tokens.pipi,
    quoteToken: tokens.wbnb,
  }
    ,
  {
    pid: 263,
    lpSymbol: 'BNB-BGCAT LP',
    lpAddresses: {
      97: '',
      56: '0xD4A736028D94233C380fc377d56966F57348A4e0',
    },
    token: tokens.bgcat,
    quoteToken: tokens.wbnb,
  }
    ,
  {
    pid: 264,
    lpSymbol: 'BNB-TOTO LP',
    lpAddresses: {
      97: '',
      56: '0xDDe5A48aEf42c81AdB544868979D390F2e60C5f3',
    },
    token: tokens.toto,
    quoteToken: tokens.wbnb,
  }
    ,
  {
    pid: 265,
    lpSymbol: 'CUSDT-ZLT LP',
    lpAddresses: {
      97: '',
      56: '0xE69b45A33419a5456Ea8dB9533224d0fc98fAAe3',
    },
    token: tokens.zoloto,
    quoteToken: tokens.cusdt,
  }
    ,
  {
    pid: 266,
    lpSymbol: 'CXRP-ZLT LP',
    lpAddresses: {
      97: '',
      56: '0x1Db96E2C7D7b286048983089392977B6B52a507a',
    },
    token: tokens.zoloto,
    quoteToken: tokens.cxrp,
  }
    ,
  {
    pid: 267,
    lpSymbol: '2GCC-CXRP LP',
    lpAddresses: {
      97: '',
      56: '0xCA2ADb98258a89f3D47338300D55640C170ba987',
    },
    token: tokens.cxrp,
    quoteToken: tokens.gcc2,
  }
    ,
  {
    pid: 268,
    lpSymbol: 'MARCO-CUSDT LP',
    lpAddresses: {
      97: '',
      56: '0x7B98603A5e64fB529ccbeeFE04FA9c7D09550b57',
    },
    token: tokens.cusdt,
    quoteToken: tokens.cake,
  }
    ,
  {
    pid: 269,
    lpSymbol: 'MARCO-ZLT LP',
    lpAddresses: {
      97: '',
      56: '0x2261F5434dd3e352563B09C9E462956082606f5a',
    },
    token: tokens.zoloto,
    quoteToken: tokens.cake,
  }
    ,
  {
    pid: 270,
    lpSymbol: 'MARCO-CXRP LP',
    lpAddresses: {
      97: '',
      56: '0xce023980F5F205B77E6F01e2E78f84D5460318Dc',
    },
    token: tokens.cxrp,
    quoteToken: tokens.cake,
  }
      ,
  {
    pid: 271,
    lpSymbol: 'BNB-PEPEBURN LP',
    lpAddresses: {
      97: '',
      56: '0xBaB19D8A69Ca5b4A442205B475C10CF7b9bB317B',
    },
    token: tokens.pepeburnv2,
    quoteToken: tokens.wbnb,
  }
   ,
  {
    pid: 272,
    lpSymbol: 'BNB-$CHONKY LP',
    lpAddresses: {
      97: '',
      56: '0xe4B3B4f73B950c0779b56a64B24DfCD8c1275738',
    },
    token: tokens.chonky,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 273,
    lpSymbol: 'BNB-BKP LP',
    lpAddresses: {
      97: '',
      56: '0xB500028dE9cfE3b8D7B238d3ea4fbe36e3b27CB7',
    },
    token: tokens.bkp,
    quoteToken: tokens.wbnb,
  }
   ,
  {
    pid: 274,
    lpSymbol: 'MARCO-chc LP',
    lpAddresses: {
      97: '',
      56: '0xBeF081c5e47AFf93350A85B36818268774Ef3341',
    },
    token: tokens.chc,
    quoteToken: tokens.cake,
  }
  ,
  {
    pid: 275,
    lpSymbol: 'BNB-DXR LP',
    lpAddresses: {
      97: '',
      56: '0xe4C685cE1d17B79B7ca1EEaCB1e5335bF6Dcd5f6',
    },
    token: tokens.dxr,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 276,
    lpSymbol: 'BNB-DBU LP',
    lpAddresses: {
      97: '',
      56: '0xFb0addC13cbdfCabB6F9e7e2fC1a3eA5917f4fa6',
    },
    token: tokens.dbu,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 277,
    lpSymbol: 'MARCO-PEPEBURN LP',
    lpAddresses: {
      97: '',
      56: '0x5ceC1fa67c791fE5Df396816BbC9f6029eAdA060',
    },
    token: tokens.pepeburnv2,
    quoteToken: tokens.cake,
  }
  ,
  {
    pid: 278,
    lpSymbol: 'BNB-LONE LP',
    lpAddresses: {
      97: '',
      56: '0xcF17b134b3f83eb02DF1223E2f5E4de6859c701a',
    },
    token: tokens.lone,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 279,
    lpSymbol: 'BNB-SlaFac LP',
    lpAddresses: {
      97: '',
      56: '0x1473D65F95C13c0d0bd2dD576EAF60CEf96dE945',
    },
    token: tokens.slafac,
    quoteToken: tokens.wbnb,
  }
   ,
  {
    pid: 280,
    lpSymbol: 'BNB-OTL LP',
    lpAddresses: {
      97: '',
      56: '0x8c9f3b747664B17b85114CBdA080DFBfa5b5aa36',
    },
    token: tokens.otl,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 281,
    lpSymbol: 'BNB-GXM LP',
    lpAddresses: {
      97: '',
      56: '0x205e7e472B2e34F7c627cd5d2EF229e6C9f439B2',
    },
    token: tokens.gxm,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 282,
    lpSymbol: 'BNB-7NODES LP',
    lpAddresses: {
      97: '',
      56: '0xA5871AC864A8521D867FE4720e5E528eC2dc458f',
    },
    token: tokens.nodes7,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 283,
    lpSymbol: 'BNB-HAAGA420 LP',
    lpAddresses: {
      97: '',
      56: '0x846bc386De1f0768cc5333eB4d6F8f063f69157A',
    },
    token: tokens.haaga420,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 284,
    lpSymbol: 'BNB-EFCR LP',
    lpAddresses: {
      97: '',
      56: '0x82b2B5dBC64613a26553f2c8de86B2b5Da2e3B39',
    },
    token: tokens.efcr,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 285,
    lpSymbol: 'BNB-TAH LP',
    lpAddresses: {
      97: '',
      56: '0x6a7580BDCF2E6e1073170007E6b3c73e20f28aDa',
    },
    token: tokens.tah,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 286,
    lpSymbol: 'BNB-BBUCK LP',
    lpAddresses: {
      97: '',
      56: '0x30aDcA9D282A1F98AA92f7FD50E2e5eCEAEE0281',
    },
    token: tokens.bbuck,
    quoteToken: tokens.wbnb,
  }
   ,
  {
    pid: 287,
    lpSymbol: 'BNB-GrokLabs LP',
    lpAddresses: {
      97: '',
      56: '0x6575d67C22245ac5Ded37141A9D846304bc9B324',
    },
    token: tokens.groklabs,
    quoteToken: tokens.wbnb,
  }
   ,
  {
    pid: 288,
    lpSymbol: 'BNB-WZM LP',
    lpAddresses: {
      97: '',
      56: '0x4e1A315Bd0DAF7D26Cb2b510Dd360a6F87134298',
    },
    token: tokens.wzm,
    quoteToken: tokens.wbnb,
  }
   ,
  {
    pid: 289,
    lpSymbol: 'BNB-MEMEMINT LP',
    lpAddresses: {
      97: '',
      56: '0x7629290019628cF64b6037cBF0C123660B1ab7aA',
    },
    token: tokens.mememint,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 290,
    lpSymbol: 'BNB-MLB LP',
    lpAddresses: {
      97: '',
      56: '0xd77210Dd5D5b0A5cBd16d8FEC96eCE5aad4964E0',
    },
    token: tokens.mlb,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 291,
    lpSymbol: 'BNB-NBD LP',
    lpAddresses: {
      97: '',
      56: '0x70092cD26D6590F334D8C7D13CdC11aD350DE493',
    },
    token: tokens.nbd,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 292,
    lpSymbol: 'BNB-Tor LP',
    lpAddresses: {
      97: '',
      56: '0x2dDec90FF8f7D6F8a900E341e64c4Dd7096b1c39',
    },
    token: tokens.tor,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 293,
    lpSymbol: 'BNB-love69 LP',
    lpAddresses: {
      97: '',
      56: '0x38781022A9d36Fcb1C42ca81843ba34F4dCF83f7',
    },
    token: tokens.love69,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 294,
    lpSymbol: 'BNB-SGROK LP',
    lpAddresses: {
      97: '',
      56: '0x02f3D38410843b78c56a86326199775edfc3e631',
    },
    token: tokens.sgrok,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 295,
    lpSymbol: 'BNB-GrokLabs LP',
    lpAddresses: {
      97: '',
      56: '0xC3199E3069b381eBcF50F0766999E4F1835ee4A3',
    },
    token: tokens.groklabs2,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 296,
    lpSymbol: 'BNB-RAO LP',
    lpAddresses: {
      97: '',
      56: '0x42a142D122855ED11c3d20b29a36b7A55e2ce026',
    },
    token: tokens.rao,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 297,
    lpSymbol: 'BNB-4DC LP',
    lpAddresses: {
      97: '',
      56: '0x3c12EbDBA5F17CF0C93B3555fd48F780eB206e11',
    },
    token: tokens.dc4,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 298,
    lpSymbol: 'BNB-XEX LP',
    lpAddresses: {
      97: '',
      56: '0xdD1032a68E413b824134f4d2cDbEbc8340f5aFE7',
    },
    token: tokens.xex,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 299,
    lpSymbol: 'BNB-NYNYC LP',
    lpAddresses: {
      97: '',
      56: '0x6075075ccE50004495AC2Cdc513a56C424093Ab3',
    },
    token: tokens.nynyc,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 300,
    lpSymbol: 'BNB-FR LP',
    lpAddresses: {
      97: '',
      56: '0xFA52bc3716E5AB020f20d30B3773cfB32Ba0e574',
    },
    token: tokens.fr,
    quoteToken: tokens.wbnb,
  }
  ,
  {
    pid: 301,
    lpSymbol: 'BNB-FARM LP',
    lpAddresses: {
      97: '',
      56: '0xE50E4bb7420fC3C079C5AF7Fa0A9cBA0551d3d2c',
    },
    token: tokens.farm,
    quoteToken: tokens.wbnb,
  }
]

export default farms
