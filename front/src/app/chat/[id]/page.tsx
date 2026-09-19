import ChatBase from '@/src/components/chat/ChatBase'
import { fetchChatGroup } from '@/src/fetch/groupFetch'
import { notFound } from 'next/navigation'

export default async function chat ({ params }: { params: { id: string }}){
    const { id } = await params
    console.log("The group id is: ", id)

    if(id.length !== 36){
        return notFound()
    }

    const group: ChatGroupType | null  = await fetchChatGroup(id)

    if(group == null){
        return notFound()
    }

    return(
        <div>
            <ChatBase groupId = { id } />
        </div>
    )
}
