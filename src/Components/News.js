import React , {useState,useEffect} from 'react'
import '../App.css';


import Loader from './Loader';
import NewsItem from './NewsItem';

export default function News(props) {
  const [isLoading,setIsLoading]=useState(true);
  const [data, setData] = useState([]);
  const [page, setpage] = useState("");
  const [totalResults, settotalResults] = useState(0);
  const apiKey='pub_20229d5fff304e4d4e672c69d6b4c23c69f31';
  // eslint-disable-next-line
  var {category , setProgress } = props;

  const FetchData=async()=>{
    setProgress(30)
    const url = `https://newsdata.io/api/1/news?apikey=${apiKey}&country=in&category=${category}`;
    var response = await fetch(url);
    setProgress(50)
    var parsedData = await response.json();
    setProgress(70)
    setData(parsedData.results);
    setProgress(100)
    // console.log(parsedData.results)
    setpage(parsedData.nextPage);
    settotalResults(parsedData.totalResults);
  }

  const FetchMoreData=async()=>{
    setProgress(30)
    const url = `https://newsdata.io/api/1/news?apikey=${apiKey}&country=in&category=${category}&page=${page}`;
    var response = await fetch(url);
    setProgress(50)
    var parsedData = await response.json();
    setProgress(70)
    setData(data.concat(parsedData.results));
    setProgress(100)
    console.log(parsedData.results)
    setpage(parsedData.nextPage);
  }

  useEffect(()=>{
    setIsLoading(true)
    FetchData()
    // FetchMoreData()
    setIsLoading(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[category])
  
  
  document.title=`NewsMan - ${category.charAt(0).toUpperCase()}${category.slice(1)} News`;
  return (
    <><div className="row">
      {
        isLoading?<Loader/>
        :
        
        data.map((news)=>(
          <NewsItem title={news.title} key={news.link} description={news.description} url={news.image_url} source={news.link} author={news.source_id} creator={news.creator} date={news.pubDate}/>
        ))
      }
    </div>
    <div className="prev-next text-center">
    <button type="button" className="btn btn-dark " onClick={FetchMoreData} disabled={data.length===totalResults}>Load More</button>
    </div>
    </>
  )
}
