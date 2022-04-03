
import './App.css';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

// import React from 'react';
import { MovieList } from "./MovieList.js";   



// import Counter from "./Counter";  //default import and export 
export default function App(){
 
const INITIAL_MOVIES = [
                {poster:"https://m.media-amazon.com/images/M/MV5BMjgwMjVkNzUtMWZjNS00M2U4LTkzM2QtMzEwYmNlY2JmZDk5XkEyXkFqcGdeQXVyMjc2Nzg5OTQ@._V1_.jpg",
                name:"Death Note",
                rating:"8.9",
                summary:"Death Note (stylized as DEATH NOTE) is a Japanese manga series written by Tsugumi Ohba and illustrated by Takeshi Obata. The story follows Light Yagami, a teen genius who discovers a mysterious notebook: the Death Note, which belonged to the Shinigami Ryuk, and grants the user the supernatural ability to kill anyone whose name is written in its pages."},
                {poster:"https://flxt.tmsimg.com/assets/p3547340_p_v10_an.jpg",
                name:"Sherloc Halomes",
                rating:"8.5",
                summary:"Sherlock Holmes (/ˈʃɜːrlɒk ˈhoʊmz/) is a fictional detective created by British author Sir Arthur Conan Doyle. Referring to himself as a consulting detective in the stories, Holmes is known for his proficiency with observation, deduction, forensic science, and logical reasoning that borders on the fantastic, which he employs when investigating cases for a wide variety of clients, including Scotland Yard."},
                {poster:"https://upload.wikimedia.org/wikipedia/en/1/18/Inception_OST.jpg",
                name:"Inception",
                rating:"7",
                summary:"According to Zimmer, the soundtrack for Inception is a very electronic score.[1] Nolan asked Zimmer to compose and finish the score as he was shooting the film. The composer said, He wanted to unleash my imagination in the best possible way.[2] At one point, while composing the score, Zimmer incorporated a guitar sound reminiscent of Ennio Morricone"},
                {poster:"https://i.scdn.co/image/ab67616d0000b2737dfe9ccf550e7654715b20ae",
                name:"Age of Tomarrow",
                rating:"8.8",
                summary:"Critics fell over themselves to praise the film, lavishing it with a 90% score on Rotten Tomatoes, but that appreciation didn't carry over to the box office. Edge of Tomorrow grossed only $100.2M on a production budget of $178M"},
                {poster:"https://lumiere-a.akamaihd.net/v1/images/4_highlight_pandorarising_8692fb7f.jpeg?region=0,0,640,360",
                name:"Avatar",
                rating:"9.2",
                summary:"Avatar is a 2009 American epic science fiction film directed, written, produced, and co-edited by James Cameron and starring Sam Worthington, Zoe Saldana, ..."},
                { poster:"https://i0.wp.com/batman-news.com/wp-content/uploads/2021/03/Hot-Toys-Batman-Begins-Batman-and-Batmobile-01.jpg?fit=1685%2C1185&quality=80&strip=info&ssl=1",
                  name:"Batman",
                  rating:"8.4",
                  summary:"After witnessing his parents' death, Bruce learns the art of fighting to confront injustice. When he returns to Gotham as Batman, he must stop a secret society that intends to destroy the city."},
                {poster:"https://assets.mycast.io/posters/zack-snyder-s-justice-league-part-2-fan-casting-poster-67002-large.jpg?1605998911",
                name:"Justice League",
                rating:"8.7",
                summary:"Darkseid is a supervillain who appears in American comic books published by DC Comics. Created by writer-artist Jack Kirby, the character first appeared in a cameo in Superman's Pal, Jimmy "},
                {poster:"https://phantom-marca.unidadeditorial.es/1e29d3682f8d15fcdd98292515a73422/resize/1320/f/jpg/assets/multimedia/imagenes/2021/10/06/16335292043489.jpg",
                name:"Squig Game",
                rating:"8.8",
                summary:"The series revolves around a contest where 456 players, all of whom are in deep financial debt, risk their lives to play a series of deadly children's games for the chance to win a ₩45.6 billion[a] prize. The title of the series draws from a similarly named Korean children's game. "}
              ];

              const [movies,setMovies]=useState(INITIAL_MOVIES);
               
              return(
                <div className="App">
               <AddMovie movies={movies} setMovies={setMovies} /> 
              <MovieList movies={movies} />
                {/* <AddColor/>
                <ColorBox/>   */}
              </div>
              );     
   }



   function AddMovie({movies,setMovies}){
    const [name,setName]=useState("");
    const [poster,setPoster]=useState("");
    const [rating,setRating]=useState("");
    const [summary,setSummary]=useState("");

    const addMovie = ()=>{
      const newMovie ={
        name,
        poster,
        rating,
        summary
      };
       console.log(newMovie);
       setMovies([...movies,newMovie]);
      };
        
    return        <div className="add-movie-form">
    <TextField 
       value={name}
       onChange={(event)=>setName(event.target.value)}
       placeholder="Enter a movie Name"
       label="Name"
    />
    <TextField 
       value={poster}
       onChange={(event)=>setPoster(event.target.value)}
       placeholder="Enter a movie Poster"
       label="Poster"

    />
    <TextField 
       value={rating}
       onChange={(event)=>setRating(event.target.value)}
       placeholder="Enter a movie Rating"
       label="Rating"
    />
    <TextField 
       value={summary}
       onChange={(event)=>setSummary(event.target.value)}
       placeholder="Enter a movie Summary"
       label="Summary"
    />
    
    <Button 
    onClick={addMovie}>
    Add Movie
    </Button>
  </div>
   }

  function AddColor(){
    const [color, setColor] = useState("aqua");
    const styles = { backgroundColor:color};
    // const color = ["teal","orange","lavender"]
     const [colors,setColors]=useState(["teal","orange","lavender"]);
    return(
      <div className="add-color-form">
        <TextField
         value={color} 
        style={styles} 
        onChange={(event)=>setColor(event.target.value)} 
         label="Enter a color" variant="standard" />
     <Button 
     onClick={()=>setColors([...colors,color])} 
     variant="outlined">
     Add color
     </Button>
{colors.map((clr,index)=>(<ColorBox key={index} color={clr}/>))}
     
       
     </div>
    );
  }    

  function ColorBox ({color}){
    const styles = 
    {backgroundColor:color,height:"25px",width:"200px" ,marginTop:"10px"};
    return <div style={styles}></div>
  }