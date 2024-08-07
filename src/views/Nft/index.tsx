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
import { getBep20Contract, getDNFTContract } from 'utils/contractHelpers'
import MintModal from './MintModal'
import Timer from './Timer'

const StyledCard = styled(Card)`
  align-self: center;
  
  @media screen and (min-width: 700px) {
    margin-top:2%;
  margin-bottom:2%;
  margin-left:20%;
  margin-right:20%;
  }
  
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
  const { account } = useWeb3React()
  const [costMint, setCostMint] = useState("0");
  const [maxmint, setMaxmint] = useState("0");
  const [isdisable, setIsdisable] = useState(true);

  useEffect(()=>{
    async function loadData(){
      const contract = getDNFTContract(getDNFTAddress());
      const ispause=await contract.paused.call();
      const cost=await contract.costPublic.call();
      const max=await contract.maxMintAmount.call();
      
      setCostMint("".concat(cost))
      setMaxmint("".concat(max))
      
      if(account)
      {
        const uquota=await contract.userquota(account);
      setUserquota(uquota)
  const currencyETH=getBep20Contract(tokens.babymarco.address[56]);
      const mybal=await currencyETH.balanceOf(account)
      console.log(max-uquota!==0,!ispause,account,mybal.toString(),costMint,amountMint)
      
      if(max-uquota!==0&&!ispause&&mybal>=new BigNumber(costMint).multipliedBy(amountMint))
      setIsdisable(false);
      else
      setIsdisable(true);
      }
    }
        loadData();
     
    
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
    <img alt="topbanner" src="/1920640.png"/>
    <div style={{display:"flex",margin:"1rem", float:"right"}}>
      <a href="https://www.melegaswap.finance/babymarco"><img alt="ins" style={{width:"30px",height:"30px",margin:"1rem"}} src='./webicon.png'/></a>
      <a href="https://t.me/melegacommunity"><img alt="ins" style={{width:"30px",height:"30px",margin:"1rem"}} src='./teleicon.png'/></a>
      <a href="https://twitter.com/meleganza"><img alt="ins" style={{width:"30px",height:"30px",margin:"1rem"}} src='./twiticon.png'/></a>
      <a href="https://www.instagram.com/melega.finance/"><img alt="ins" style={{width:"30px",height:"30px",margin:"1rem"}} src='./instaicon.png'/></a>
    </div>
      <PageHeader >
        <Heading style={{textAlign:"left"}} as="h1" scale="xxl" color="secondary" m="24px">
          {t('BabyMarco NFT Minting Page')}
        </Heading>
        <br/>
        <p style={{"color":"#fff" , margin:"24px"}}>Mint and collect the BabyMarco NFTs. The first collection is limited to 1,000 pieces and is FREE ROYALTIES. It is characterized by rarity. You can find NORMAL, RARE, SUPER RARE or SUPER SUPER RARE pieces.</p>
        <p style={{"color":"#fff", margin:"24px"}}>Ownership of BabyMarco NFT will entitle you to priority participation in $BabyMarco&apos;s Airdrops as well as voting rights in the Melega DAO.</p>
        <br/>
        <p style={{"color":"#fff", margin:"24px"}}>Note: To Purchase BabyMarco NFT Directly, there will be two transaction confirmations that you will need to approve on Metamask. Once these transactions are Approved, the deal will be completed. Thank you and Welcome to BabyMarco Town!</p>
      
      </PageHeader>
      <Page style={{textAlign:"center"}}>
        <StyledCard isActive={!false}>
      <FarmCardInnerContainer>
      <img alt="banner" src="/nftbanner.gif"/>
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
        <div style={{ width:"100%",textAlign:"center"}}>
                   <div style={{display:"flex",justifyContent:"center"}}>
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
