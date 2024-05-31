// create a variable to hold your NFTs
let Election_NFTs = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name, gender, state, district, eligibility) {
    const candidate = {
        name: name,
        gender: gender,
        state: state,
        district: district,
        eligibility: eligibility
    };
    Election_NFTs.push(candidate);
    console.log("Minted: " + name);
}

// create a "loop" that will go through an "array" of NFTs
// and print their metadata with console.log()
function listNFTs() {
    console.log("\n");
    for (let i = 0; i < Election_NFTs.length; i++) {
        const nft = Election_NFTs[i];
        console.log(`Name: ${nft.name}`);
        console.log(`Gender: ${nft.gender}`);
        console.log(`State: ${nft.state}`);
        console.log(`District: ${nft.district}`);
        console.log(`Eligibility: ${nft.eligibility}`);
        console.log("\n");
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return Election_NFTs.length;
}

// call functions

mintNFT("Prince", "Male", "Bihar", "Madhubani", "22");
mintNFT("Naina", "Female", "Bihar", "Madhubani", "22");
mintNFT("Kundan", "Male", "Bihar", "Darbhanga", "26");
mintNFT("Sumit", "Male", "Bihar", "Madhubani", "19");

listNFTs();

const totalNFTs = getTotalSupply();
console.log("Total No of Voters: " + totalNFTs);
