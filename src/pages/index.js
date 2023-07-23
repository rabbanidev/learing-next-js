import Head from "next/head";
import dynamic from 'next/dynamic'
import RootLayout from "@/components/Layouts/RootLayout";
// import Banner from "@/components/UI/Banner";
import AllNews from "@/components/UI/AllNews";



const HomePage = ({ allNews }) => {

  const DynamicBanner = dynamic(() => import('@/components/UI/Banner'), {
    loading: () => <p style={{color:"red", fontSize:"100px", textAlign:"center", marginTop:"75px"}}>Loading......</p>,
  })

  return (
    <>
      <Head>
        <title>PH-News Portal</title>
        <meta
          name="description"
          content="This is news portal of programming hero made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DynamicBanner />
      <AllNews allNews={allNews} />
    </>
  );
};
export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

// SSG
// export const getStaticProps = async () => {
//   const res = await fetch("http://localhost:5000/news");
//   const allNews = await res.json();

//   return {
//     props: {
//       allNews,
//     },
//     revalidate: 5,
//   };
// };

// SSR
export const getServerSideProps = async ()=>{
  const res = await fetch("http://localhost:5000/news");
  const allNews = await res.json();

  return{
    props:{
      allNews
    }
  }
}