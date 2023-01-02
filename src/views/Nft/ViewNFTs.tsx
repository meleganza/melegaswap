import { Button, Card, Flex, Heading, Text, useModal } from '@pancakeswap/uikit'
import { useWeb3React } from '@web3-react/core'
import axios from 'axios'

import BigNumber from 'bignumber.js'
import Page from 'components/Layout/Page'
import PageHeader from 'components/PageHeader'
import { useTranslation } from 'contexts/Localization'
import { useDNFTContract } from 'hooks/useContract'
import useToast from 'hooks/useToast'
import React, { useEffect, useCallback, useState, useMemo, useRef } from 'react'
import { Route, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { getDNFTAddress } from 'utils/addressHelpers'
import { getDNFTContract } from 'utils/contractHelpers'
import SellModal from './sell/SellModal'

const StyledCard = styled(Card)`
  align-self: center;
  display:block;
  width:360px;
  margin:10px;
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
class NFTModal{
	image="";

	description="";

	name="";

	id="";
}

const ViewNFTs: React.FC = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const { toastError, toastSuccess } = useToast()
  const [mystate, setMystate] = useState<any>()
  const [sellPrice, setSellPrice] = useState(0);
  const hist=useHistory();

  

  useEffect(()=>{
    
      

    async function loadData(){
      const contract = getDNFTContract(getDNFTAddress());
      if(account)
      {
        const nftsids=await contract.walletOfOwner(account);
        const len=nftsids.length;
        
        const alldata=[];
        for(let i=0;i<len;i++)
        {
            const uri=await contract.tokenURI(nftsids[i]);
            
            try{
              const resp= await axios.get(uri,{
                headers: {
                    'content-type': 'application/json'
                }
            });
            alldata.push(<StyledCard key={i} isActive={!false}>
              <FarmCardInnerContainer>
                
              
                <Flex justifyContent="space-between">
                  <Text>NFT Id:</Text>
                  <Text bold>{resp.data.name}</Text>
                </Flex>
                <br/>
                <Flex justifyContent="space-between">
                  <Text>Desc:</Text>
                  <Text bold>{resp.data.description.substring(8)}</Text>
                </Flex>
                <br/>
                <img alt="nft" src={"https://red-wonderful-stork-305.mypinata.cloud/ipfs/Qmc3ED4CJoqJiWPS1Nmt8r6JR8vCQWLHGRifZkHDrCKNTD/nft.png".concat(nftsids[i]).concat(".png")} onError={err=>{err.currentTarget.src="/logo.png"}}/>
                <br/>
                
                <Flex justifyContent="center">
                <Button onClick={
                  ()=>hist.push('/sellNFT?tid='.concat(Number(nftsids[i]).toString()))
                }>View</Button>
                  
                </Flex>
                
              </FarmCardInnerContainer>
        
              
            </StyledCard>);
          }
          catch(e){
            const resp={nam:"N/A",desc:"N/A",img:"N/A"};
            alldata.push(<StyledCard key={i} isActive={!false}>
              <FarmCardInnerContainer>
                
              
                <Flex justifyContent="space-between">
                  <Text>NFT Id:</Text>
                  <Text bold>{resp.nam}</Text>
                </Flex>
                <br/>
                <Flex justifyContent="space-between">
                  <Text>Desc:</Text>
                  <Text bold>{resp.desc}</Text>
                </Flex>
                <br/>
                <img alt="nft" src={"https://red-wonderful-stork-305.mypinata.cloud/ipfs/Qmc3ED4CJoqJiWPS1Nmt8r6JR8vCQWLHGRifZkHDrCKNTD/nft.png".concat(nftsids[i]).concat(".png")} onError={err=>{err.currentTarget.src="/logo.png"}}/>
        <br/>
                
                <Flex justifyContent="center">
                <Button onClick={
                  ()=>hist.push('/sellNFT?tid='.concat(Number(nftsids[i]).toString()))
                  }>View</Button>
                 
                </Flex>
              </FarmCardInnerContainer>
        
              
            </StyledCard>);
          }
            
            
        }
         setMystate(alldata);
      }
    }
    if(account)
    loadData();
  },[account])

 

  

  return (
    <>
      <PageHeader>
        <Heading as="h1" scale="xxl" color="secondary" mb="24px">
          {t('NFTs')}
        </Heading>
        <Heading scale="lg" color="text">
          {t('All your NFTs')}
        </Heading>
        
      </PageHeader>
      <Page style={{textAlign:"center",display:"flex",flexWrap:"wrap"}}>
      
        {mystate}
        
      </Page>
    </>
  )
}

export default ViewNFTs
