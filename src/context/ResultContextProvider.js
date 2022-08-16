import React , {createContext , useContext , useState} from 'react';

const ResultContext =  createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';

export const ResultContextProvider = ({ children }) => {
      // initialzing states
       
       const [results, setResults] = useState([]);
       const [isLoading, setIsLoding] = useState(false);
       const [searchTerm , setSearchTerm] = useState('');
        
       const getResults = async(type) => {
             setIsLoding(true);

             const response = await fetch( `${baseUrl}${type}`, {
                method : 'GET',
                headers: {
                  'X-User-Agent': 'desktop',
                  'X-Proxy-Location': 'EU',
                  'X-RapidAPI-Key': 'ecace8bea8mshd74609b49de2c48p17fc0cjsnec5c257e0f08',
                  'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
            }
             });
             const data = await response.json();
             console.log(data);
             setResults(data);
             setIsLoding(false);
             
       }
       const value = {
            getResults , 
            results , 
            searchTerm , 
            setSearchTerm , 
            isLoading
       }
       return(
      <ResultContext.Provider value={value}>
            <>{children}</>
      </ResultContext.Provider>
       )

};

export const useResultContext = () => useContext(ResultContext)
