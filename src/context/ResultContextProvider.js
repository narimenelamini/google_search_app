import React , {createContext , useContext , useState} from 'react';
const resultContext =  createContext();

const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1/search/q=elon+musk'