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
    tokenPerBlock: '0.000564',
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
    sousId: 14,
    stakingToken: tokens.cake,
    earningToken: tokens.mxmx,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x99a44d26defb3f0a5b4e306ce45538c66c05b69e',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.003298611',
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
    sousId: 15,
    stakingToken: tokens.cake,
    earningToken: tokens.gitto,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x967a3feafdc737a5c40b3fa5ec6df954eb557ae6',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.00625',
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
    tokenPerBlock: '0.00335',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 16,
    stakingToken: tokens.cake,
    earningToken: tokens.gcc2,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x826c774c8f1f52ea466e54d0bd8668808f5db4af',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.00000277778',
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
    tokenPerBlock: '15975000',
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
    sousId: 17,
    stakingToken: tokens.mxmx,
    earningToken: tokens.cake,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xd06c84a7e10c2227105cbe0eb21511f18ab0f331',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.000520833',
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
    sousId: 18,
    stakingToken: tokens.gitto,
    earningToken: tokens.cake,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x49e5bf17cff1e2a3c17989dcec954eba5753b3e7',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.000520833',
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
  },{
    sousId: 19,
    stakingToken: tokens.gcc2,
    earningToken: tokens.cake,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xa569e9aece7991199eda4246f7efcf1e92f2c5f6',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.000520833',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 10,
    stakingToken: tokens.mm72,
    earningToken: tokens.cake,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xe3d665bb601af0cd777442d706bc1c8f34b642a7',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.00069',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 11,
    stakingToken: tokens.marcobnb,
    earningToken: tokens.cake,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x19817977a4061626ac41e58de84328a037a93a26',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.00076',
    sortOrder: 1,
    isFinished: true,
  }
  ,
  {
    sousId: 12,
    stakingToken: tokens.mxmxbnb,
    earningToken: tokens.mxmx,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x98eb6124b5edf5d2489db1f53c5b115ef5b69706',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.00076',
    sortOrder: 1,
    isFinished: true,
  }
  ,
  {
    sousId: 13,
    stakingToken: tokens.mm72bnb,
    earningToken: tokens.mm72,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x8fd9952d676c4288b4783668fe4c1c0e7464b6ca',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.00076',
    sortOrder: 1,
    isFinished: true,
  }
  ,
  {
    sousId: 20,
    stakingToken: tokens.cake,
    earningToken: tokens.bear,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x1ea5c2f8fe1da2e1a45b780f7a95ab94c0d3a00d',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '9',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 21,
    stakingToken: tokens.cake,
    earningToken: tokens.volt,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x247d01695158024521ae06be2bf881de71545320',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '2700',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 22,
    stakingToken: tokens.cake,
    earningToken: tokens.gcc2,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xcffd535ac335593ae328351b40215d39edc4d37b',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.000008',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 23,
    stakingToken: tokens.cake,
    earningToken: tokens.mxmx,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x320b013b2816a631522a2fee074d3b27db25d6ba',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.01',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 24,
    stakingToken: tokens.cake,
    earningToken: tokens.fbtc,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xa0d13b9e05434b620072625f49fdec7b87142173',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '500',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 25,
    stakingToken: tokens.cake,
    earningToken: tokens.gwt,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xc3a9c6679f9b095d1ce7398a032728543b5193a9',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '13',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 26,
    stakingToken: tokens.cake,
    earningToken: tokens.qcwc,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x5d2a3bd3dd873eadc314e119e622b74ecf7d7684',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '20',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 27,
    stakingToken: tokens.cake,
    earningToken: tokens.ostrich,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xeb0dd96bb5ba9b50798ebbe19c67a406204cb555',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '26000',
    sortOrder: 1,
    isFinished: true,
  },
  {
    sousId: 28,
    stakingToken: tokens.cake,
    earningToken: tokens.koala,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x57d755a995e578a9c21cf351af870b996f236e15',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '690',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 29,
    stakingToken: tokens.cake,
    earningToken: tokens.froge,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xb1c70b1b38b5b7043c36e250fd7b3a609e66b863',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '114',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 30,
    stakingToken: tokens.cake,
    earningToken: tokens.rotto,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xcfdc0d9e517299609588f860781f8341eff56f2c',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '65',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 31,
    stakingToken: tokens.cake,
    earningToken: tokens.gpay,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x15dbba718836b77bcc082bc3ced44c0c390975a5',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.024',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 32,
    stakingToken: tokens.cake,
    earningToken: tokens.ggw,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x875ad0536575073422ceb75783fd66a22ca0d166',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '1750000',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 33,
    stakingToken: tokens.cake,
    earningToken: tokens.hbit,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x4a63ca4ca57cf839e7579c8364403783a5a51043',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '17',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 34,
    stakingToken: tokens.cake,
    earningToken: tokens.lira,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xc1617a487c3eae543fc33d5cade9b68727108ba1',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '26',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 35,
    stakingToken: tokens.cake,
    earningToken: tokens.spx,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x5c4212d2bd21fe612ab10cb37c7a2303d378e638',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.16',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 36,
    stakingToken: tokens.cake,
    earningToken: tokens.lois,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xec817f9a473f5b9298d433898115ce03a07db1ee',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.00043',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 37,
    stakingToken: tokens.cake,
    earningToken: tokens.dogebit,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xc0398c4b2e7d6433720cddbbc457021f606b1252',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '277',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 38,
    stakingToken: tokens.cake,
    earningToken: tokens.C4Cv2,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xd3231fd78bc70a86ec6d26d40eb2a79c4da6b71c',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.032',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 39,
    stakingToken: tokens.cake,
    earningToken: tokens.sfe,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x2dcb57c1745bd8cf62c518f9e8bcfc18c11d1e12',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '150',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 40,
    stakingToken: tokens.cake,
    earningToken: tokens.befxold,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xbd6051ea98d2994d45fdf0063a18e66bd6df8874',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '6.7',
    sortOrder: 1,
    isFinished: true,
  }
  ,
  {
    sousId: 41,
    stakingToken: tokens.cake,
    earningToken: tokens.fwc,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x3a70bb76689178935d312be75439307ff24cf56c',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '3500000',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 42,
    stakingToken: tokens.cake,
    earningToken: tokens.borz,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xbcf70c81781eb67cbfadfa540be1467d7be9d651',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.5',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 43,
    stakingToken: tokens.cake,
    earningToken: tokens.fas,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x41b30962bb6ece9113ee9821a683017006752575',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.012',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 44,
    stakingToken: tokens.cake,
    earningToken: tokens.cti,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x0199109a91f0fca4823c26e329f8078fb6f20c4d',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.0027',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 45,
    stakingToken: tokens.cake,
    earningToken: tokens.cvl,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x2f2a708c0a1a3278027dea3857210e7a0cf3607e',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.1',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 46,
    stakingToken: tokens.cake,
    earningToken: tokens.poop,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xba8dd258ac024565ad01c050d5d1b616374f3ec4',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '4',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 47,
    stakingToken: tokens.cake,
    earningToken: tokens.luck,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x46d2f9a96cbbddc7e73678c716a088fe5714a19a',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 48,
    stakingToken: tokens.cake,
    earningToken: tokens.hse,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xaba37bddaddb4fae848af30c5301447374ec10ac',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.03425',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 49,
    stakingToken: tokens.cake,
    earningToken: tokens.tpcv3,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xd45e37b639a47e2add0a66eae47f38dad78aa01e',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '3200000',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 50,
    stakingToken: tokens.cake,
    earningToken: tokens.spaceape,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xf260db49626479221da872e1dc28c12dcc39d448',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.005',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 51,
    stakingToken: tokens.cake,
    earningToken: tokens.sfea,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xf5ac208e0ffe1c5baed43efe7df04ca3d7e12cd1',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '18',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 52,
    stakingToken: tokens.cake,
    earningToken: tokens.ggtkn,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xb9cc48147aeb9476bd76a8f0f6123a0d99ae382c',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.1',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 53,
    stakingToken: tokens.cake,
    earningToken: tokens.sbdex,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x57e5740ffdc74e321c527d97a52ebeec532ed834',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.86',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 54,
    stakingToken: tokens.cake,
    earningToken: tokens.rug,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x462872ec9598c68726dc785abd858ee43b85c303',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '347',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 55,
    stakingToken: tokens.cake,
    earningToken: tokens.lcsc,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xbf3cdc01ddf8c56b45da7083d46be30b6e4fbccb',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '50',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 56,
    stakingToken: tokens.cake,
    earningToken: tokens.dyn,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x42cd340b1ef8d28af6367dcacc20384084dfe82d',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '12.75',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 57,
    stakingToken: tokens.cake,
    earningToken: tokens.ipl,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x1eca1e9038b2358dbee979cc4571d72adf042572',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '30',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 58,
    stakingToken: tokens.cake,
    earningToken: tokens.susu,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x8bc9cb5811932f019e7a64c4119426ac16bc65a6',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '1',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 59,
    stakingToken: tokens.cake,
    earningToken: tokens.WHEXDAO,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x10d9e0d332e8c61c2878bdc88063d16110cad99d',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '168',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 60,
    stakingToken: tokens.cake,
    earningToken: tokens.diga,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x878538ae593619c49f50e73ebf434561d6285836',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '800',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 61,
    stakingToken: tokens.cake,
    earningToken: tokens.sweep,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xeb5a73d1b98095f71ca8c8ef4ee573c377c34fd4',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '52000000',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 62,
    stakingToken: tokens.cake,
    earningToken: tokens.XPHX,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x234f56b68506e554814fc1cc4234c0778d98c181',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.0112',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 63,
    stakingToken: tokens.cake,
    earningToken: tokens.HYPEC,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xe88f9d118ae5d41abca7a6be8d44463bdc7ab7ba',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '8.5',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 64,
    stakingToken: tokens.cake,
    earningToken: tokens.DOGEUM,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xbe9fc3b86d4ea4f8ae0a8966639c655912bdbe84',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '30000',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 65,
    stakingToken: tokens.cake,
    earningToken: tokens.help,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xfb04bb27faa88372832f584cb9d914f55a943b9c',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '10.41',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 66,
    stakingToken: tokens.cake,
    earningToken: tokens.alt,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x7fed37a509396f7125043fe430829d306bb42559',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '18',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 67,
    stakingToken: tokens.cake,
    earningToken: tokens.BEP40,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x460ba6ac88ec0d74cc916012db79591f81f99be9',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '1.775',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 68,
    stakingToken: tokens.cake,
    earningToken: tokens.WHEX,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xbfc35b0cc6aa7cdfa015a16ffa4b46a46acd8d6c',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '3700000000000',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 69,
    stakingToken: tokens.cake,
    earningToken: tokens.BTCF,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x2591afb4996b12395a7c2ee69363d8c7608355a3',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.00156',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 70,
    stakingToken: tokens.cake,
    earningToken: tokens.DOWA,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x61831a7ec4b7b15d7522d7755b61809af7d6f212',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '39000',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 71,
    stakingToken: tokens.cake,
    earningToken: tokens.befx,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x71d252fe7d8235e3b63f2205e5f9f1ea0088d306',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.35',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 72,
    stakingToken: tokens.cake,
    earningToken: tokens.MRABBIT,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xb13eb366302fdffad5aead875261a21624a2f339',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.0023',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 73,
    stakingToken: tokens.cake,
    earningToken: tokens.FNT,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x688bc48e778ab97770b1fe43891f319549e3e49d',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '1100',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 74,
    stakingToken: tokens.cake,
    earningToken: tokens.wCHK,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xac55bb789b13f001bb46e979ea048a52b8a66f72',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '4630',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 75,
    stakingToken: tokens.cake,
    earningToken: tokens.YKS,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x8300d80942aedbea1e181bf9c514c3143794124b',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '23500000',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 76,
    stakingToken: tokens.cake,
    earningToken: tokens.Bera,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xdc194d4ece77e95ad959a35d2b6c55c7869f1b19',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '4.5',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 77,
    stakingToken: tokens.cake,
    earningToken: tokens.REAL,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xbd7dd09903a332e48208bbf96dc70c99c761c123',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '1300',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 78,
    stakingToken: tokens.cake,
    earningToken: tokens.TREE,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xfede4b8fe58ead2be54e6b1384586b205e99ab88',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '252',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 79,
    stakingToken: tokens.cake,
    earningToken: tokens.FLOSHIDO,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xe0118e07082945ffbd2cbedc0360325e6f1c4efa',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '119',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 80,
    stakingToken: tokens.cake,
    earningToken: tokens.RFX,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x0b1e667ae07193f8099d7f638cfce33d5e03d638',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '1.98',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 81,
    stakingToken: tokens.cake,
    earningToken: tokens.MIR,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xa8f37842912eae4d1744cd9cefff4da19fcf2195',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 82,
    stakingToken: tokens.cake,
    earningToken: tokens.TFT,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x31d764d47d8a50c6a354b1449f5927888c2525dc',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.015',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 83,
    stakingToken: tokens.cake,
    earningToken: tokens.LMCSWAP,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xc096c2c66e4ff53dd98b271d85735111b93b827b',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '3.5',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 84,
    stakingToken: tokens.cake,
    earningToken: tokens.bytc,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x359086ac3c48c33695ecf3bb4b09c710a5e7eedb',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '165',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 85,
    stakingToken: tokens.cake,
    earningToken: tokens.KUSH,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xb4ffa0c8c6e72a4350d1269c7247ece807431586',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '2675',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 86,
    stakingToken: tokens.cake,
    earningToken: tokens.FRTC,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x9ac1e5f33b3a65891f54d5c1ed710a35870182d5',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '23000',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 87,
    stakingToken: tokens.cake,
    earningToken: tokens.EBTC,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xa3089227570d577955634d03472f5fb178f0558b',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '38000',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 88,
    stakingToken: tokens.cake,
    earningToken: tokens.PHDAO,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x6513f1352b16c3c3d198b50201f5b34081a82577',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.00018',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 89,
    stakingToken: tokens.cake,
    earningToken: tokens.UFCB,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x6735c359b040a58feceb0f8b9f8b96b62d7f3784',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '7990000',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 90,
    stakingToken: tokens.cake,
    earningToken: tokens.NERVE,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x464260ff2f9d8f726439700afed6d4e0746812d8',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.12',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 91,
    stakingToken: tokens.cake,
    earningToken: tokens.CDIG,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xe529f63c9fe81af259e0d7d35dc95391e1cc7efd',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.21',
    sortOrder: 1,
    isFinished: false,
  }
]

export default pools
