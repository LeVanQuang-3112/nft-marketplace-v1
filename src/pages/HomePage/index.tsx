import HeaderApp from '../../components/HeaderApp';
import NFTGrid from '../../components/NFT/NFTGrid';

const HomePage = () => {
  return (
    <div>
      <HeaderApp />
      <NFTGrid
        data={[]}
        isLoading={false}
        // emptyText={
        //   "Looks like there are no NFTs in this collection. Did you import your contract on the thirdweb dashboard? https://thirdweb.com/dashboard"
        // }
      />
    </div>
  );
};

export default HomePage;
