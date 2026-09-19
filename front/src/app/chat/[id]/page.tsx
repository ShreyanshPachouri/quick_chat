import ChatBase from '@/src/components/chat/ChatBase'

export default function chat ({ params }: { params: { id: string }}){
    console.log("The group id is: ", params.id)

    return(
        <div>
            <h1>Hello, I am chat</h1>
            <ChatBase groupId = { params.id } />
        </div>
    )
}
