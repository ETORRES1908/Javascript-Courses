import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'
export function App() {
    const users = [
        {
            userName: "midudev",
            name: "Miguel Angel Duran",
            isFollowing: true
        },
        {
            userName: "pheralb",
            name: "Pablo Hernandez",
            isFollowing: false
        },
        {
            userName: "elonmusk",
            name: "Elon Musk",
            isFollowing: true
        },
        {
            userName: "sofnito",
            name: "Sofnito",
            isFollowing: false
        }
    ]
    return (
        <section className='App'>
            {
                users.map(({userName,name,isFollowing}, index) =>(
                    <TwitterFollowCard key={index} userName={userName} name={name} initialIsFollowing={isFollowing} />
                ))
            }
        </section>
        )
}