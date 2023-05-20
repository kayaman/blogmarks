import Bookmark from "@/types/Bookmark"
import Link from "next/link"

interface Props {
    bookmark: Partial<Bookmark>
}

const CreatePage = (props: Props) => {
    function eventHandler() {
        console.log("event:" )
    }

    return (
        <button onClick={eventHandler}>Criar</button> 
    )

}

export default CreatePage