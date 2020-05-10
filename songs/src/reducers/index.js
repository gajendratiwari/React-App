import { combineReducers } from 'redux';

const songsReducer =()=>{
return [
    { title:'No Scrubs',duration:'4:05'},
    {title:'Macerana', duration:'4:00'},
    {title:'All Star',duration:'5:00'},
    {title:'malai bhanna audaina',duration:'2:00'}
];
};

const selectedSongReducer = (selectedSong=null, action)=>{
    if(action.type==='SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;

};

export default combineReducers({
    songs :songsReducer,
    selectedSong:selectedSongReducer
})