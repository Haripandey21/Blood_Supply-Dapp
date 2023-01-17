from web3 import Web3
import sys
import json


def latestTokens():
    fileName = "app/javascript/abi/Nft-Collectible.json"
    file = open(fileName,"r")
    abiJson= json.load(file)

    # connecting to node provider
    alchemy_url = "https://eth-goerli.g.alchemy.com/v2/BRFbeldVpylZGileOsiNtxF5KWtE0MmZ"
    w3 = Web3(Web3.HTTPProvider(alchemy_url))
  
    # recieving contract address
    contractAddress,totalRow = str(sys.argv[1]),str(sys.argv[2])

    # connecting to contract abi
    NFTContract =  w3.eth.contract(address=contractAddress,abi=abiJson)
    tokensSupply = NFTContract.functions.totalSupply().call()
    latestTokenCount = tokensSupply-int(totalRow)
    tokenList = []
    if latestTokenCount>0 :
        for i in range(int(totalRow)+1,tokensSupply+1) :
            tokenURI = NFTContract.functions.tokenURI(i).call()
            soleTokenTuple = (i,tokenURI)
            tokenList.append(soleTokenTuple)
    print ((json.dumps(tokenList)))

latestTokens()

 