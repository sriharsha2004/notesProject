import { useState , useEffect } from "react";
import NoteList from "./Components/NoteList";

const useFetch = (url,shouldFetch) => {
    const [ispending,setispending] = useState(true);
    const [err,seterr] = useState(false);
    const [notes,setnotes] = useState(null);

    useEffect(()=>{
        setTimeout(()=>{
            if(shouldFetch){
                fetch(url)
                .then((data)=>{
                    setnotes(data);
                    setispending(true);
                    seterr(false);
                })
                .catch((err)=>{
                    setispending(false);
                    seterr(true);
                    console.log(err);
                })
            }
        } , 1000)
    } , [url,shouldFetch])


    return (
        <div className='fetching'>
            {notes && <NoteList/>}
            { err && <div>Could not Load the data from the server</div>}
            { ispending && <img src="https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/200w.gif?cid=6c09b952kwfxo4r4rnyhikmirqdemf0r6cxltx7fnntvilnn&ep=v1_gifs_search&rid=200w.gif&ct=g" alt="" />}
        </div>
    );

    return [notes,ispending,err]
}

export default useFetch;
