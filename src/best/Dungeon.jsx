import { useEffect, useState } from "react"

const DungeonInfo = {
    "north": "Dungeon/window.jpg",
    "east": "Dungeon/monitor.jpg",
    "west": "Dungeon/book.jpg",
    "south": "Dungeon/door.jpg"
}


const DungeonPictures = {
    "east": {
        pic: "Dungeon/tj.jpg",
        x: "25%",
        y: "25%",
        url: "https://tj401.com"
    },
    "west": {
        pic: "Dungeon/sw.jpg",
        x: "10%",
        y: "20%",
        url: "https://sierrawang.github.io"
    },
    "north": {
        pic: "Dungeon/jw.jpg",
        x: "75%",
        y: "25%",
        url: "https://juliettewoodrow.github.io"
    },
    "south": {
        pic: ""
    }
}




export const Dungeon = ({setIsDungeon}) => {
    const [direction, setDirection] = useState("north")
    const [image, setImage] = useState(DungeonInfo[direction])

    useEffect(() => {
        setImage(DungeonInfo[direction])
    }, [direction])

    const goRight = () => {
        if(direction === "north") {
            setDirection("east")
        } else if (direction === "west") {
            setDirection("north")
        } else if (direction === "east") {
            setDirection("south")
        } else if (direction === "south") {
            setDirection("west")
        }
    }

    const goLeft = () => {
        if(direction === "north") {
            setDirection("west")
        } else if (direction === "east") {
            setDirection("north")
        } else if (direction === "west") {
            setDirection("south")
        } else if (direction === "south") {
            setDirection("east")
        }
    }

    console.log(DungeonInfo[direction])



    return <div className="dungeon">
        <img src={DungeonInfo[direction]} alt="Dungeon"  width="100%" height={"100%"} />
       {DungeonPictures[direction].pic ?  <a href={DungeonPictures[direction].url}><img src={DungeonPictures[direction].pic} width="15%" alt="picture of someone"  style={{position: "absolute", top:DungeonPictures[direction].y, left:DungeonPictures[direction].x }} /></a> : null}
       <button onClick={goLeft} style={{position: "absolute", left: "20%", top: "50%" }}>Go Left</button>
        <button onClick={goRight} style={{position: "absolute", right: "20%", top: "50%" }}>Go Right</button>


    </div>


}