import {GoogleGenerativeAI} from '@google/generative-ai';
import { GEMINI_API } from '../constants';


    

    const Gemini = new GoogleGenerativeAI(GEMINI_API);


    export default Gemini