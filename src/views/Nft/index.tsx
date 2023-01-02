import { Button, Card, Flex, Heading, Text, useModal } from '@pancakeswap/uikit'
import { useWeb3React } from '@web3-react/core'
import BigNumber from 'bignumber.js'
import ConnectWalletButton from 'components/ConnectWalletButton'
import Page from 'components/Layout/Page'
import PageHeader from 'components/PageHeader'
import tokens from 'config/constants/tokens'
import { useTranslation } from 'contexts/Localization'
import { useDNFTContract, useERC20 } from 'hooks/useContract'
import useToast from 'hooks/useToast'
import React, { useEffect, useCallback, useState, useMemo, useRef } from 'react'
import styled from 'styled-components'
import { getDNFTAddress } from 'utils/addressHelpers'
import { getDNFTContract } from 'utils/contractHelpers'
import MintModal from './MintModal'
import Timer from './Timer'

const StyledCard = styled(Card)`
  align-self: center;
  width:300px;
`

const FarmCardInnerContainer = styled(Flex)`
  flex-direction: column;
  justify-content: space-around;
  
  padding: 24px;
`

const ExpandingWrapper = styled.div`
  padding: 24px;
  border-top: 2px solid ${({ theme }) => theme.colors.cardBorder};
  overflow: hidden;
`

const Nft: React.FC = () => {
  const { t } = useTranslation()
  const [amountMint, setAmountMint] = useState(1);
  const [userquota, setUserquota] = useState(0);
  const { toastError, toastSuccess } = useToast()
  const writeContract=useDNFTContract(getDNFTAddress());
  const currencyETH=useERC20(tokens.cake.address[97]);
  const { account } = useWeb3React()
  const [costMint, setCostMint] = useState("0");
  const [maxmint, setMaxmint] = useState("0");
  const [ispaused, setIspaused] = useState(true);
  const [isdisable, setIsdisable] = useState(true);

  useEffect(()=>{
    async function loadData(){
      const contract = getDNFTContract(getDNFTAddress());
      const ispause=await contract.paused.call();
      const cost=await contract.costPublic.call();
      const max=await contract.maxMintAmount.call();
      
     setIspaused(ispause);
      setCostMint("".concat(cost))
      setMaxmint("".concat(max))
      
      
    }
    async function loadData2()
    {
      const contract = getDNFTContract(getDNFTAddress());
      const uquota=await contract.userquota(account);
      setUserquota(uquota)
      if(Number(maxmint)-uquota!==0&&!ispaused&&await currencyETH.balanceOf(account)<new BigNumber(costMint).multipliedBy(amountMint))
      setIsdisable(false);
      else
      setIsdisable(true);
    }
    loadData();
    if(account)
    loadData2();
  },[account])

  const handleContributeSuccess = async (amount: BigNumber) => {
  
    toastSuccess(
      t('Success!'),
      t('You have contributed to this IFO!'),
    )
  }

  const [onPresentContributeModal] = useModal(
    <MintModal
    costMint={costMint}
      qty={amountMint}
      onSuccess={handleContributeSuccess}
    />,
    false,
  )

  return (
    <>
      <PageHeader>
        <Heading as="h1" scale="xxl" color="secondary" mb="24px">
          {t('NFTs')}
        </Heading>
        <Heading scale="lg" color="text">
          {t('Mint your new NFT')}
        </Heading>
        
      </PageHeader>
      <Page style={{textAlign:"center",width:"300px"}}>
      <StyledCard isActive={!false}>
      <FarmCardInnerContainer>
        
        <Timer msg={isdisable?"false":"true"}/>
        <br/>
        <Flex justifyContent="space-between">
          <Text>{t('1 NFT')}:</Text>
          <Text bold>{new BigNumber(costMint).div(1000000000000000000).toNumber()} BABYMARCO</Text>
        </Flex>
        <br/>
        <Flex justifyContent="space-between">
          <Text>{t('Max mint amount')}:</Text>
          <Text bold>{maxmint} NFT</Text>
        </Flex>
        <br/>
        <Flex justifyContent="space-between">
          <Text>{t('Quota Left:')}:</Text>
          <Text bold>{Number(maxmint)- userquota} NFT</Text>
        </Flex>
        <br/>
        <div style={{display:"block", width:"300px",textAlign:"center"}}>
                   <div style={{display:"flex", width:"260px",marginLeft:"30px",textAlign:"center"}}>
                    <button  type='button' style={{marginLeft:"30px",marginRight:"30px",borderRadius:"10px",width:"30px",height:"30px",borderColor:"#fff", fontSize:"15px",fontWeight:"bolder"}} onClick={()=>{
                      if(amountMint>1)
                      setAmountMint(amountMint-1)
                    }}>-</button>
                   
                    <p style={{ fontSize:"15px",marginRight:"30px",fontWeight:"bolder",lineHeight:"2"}}>{amountMint}</p>
                 
                    <button style={{borderRadius:"10px",width:"30px",height:"30px",marginRight:"30px",borderColor:"#fff", fontSize:"15px",fontWeight:"bolder"}} type='button' onClick={()=>{
                      if(amountMint<(Number(maxmint)- userquota))
                      setAmountMint(amountMint+1)
                    }}>+</button>
                </div>
                </div>
        <br/>
        {account?<Button disabled={isdisable}  onClick={onPresentContributeModal}>Mint</Button>:<ConnectWalletButton/>}
        
      </FarmCardInnerContainer>

      
    </StyledCard>
        
      </Page>
    </>
  )
}

export default Nft
