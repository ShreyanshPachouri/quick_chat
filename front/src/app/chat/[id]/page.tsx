import ChatBase from '@/src/components/chat/ChatBase'
import { fetchChatGroup, fetchChatUsers } from '@/src/fetch/groupFetch'
import { notFound } from 'next/navigation'

export default async function chat ({ params }: { params: { id: string }}){
    const { id } = await params
    console.log("The group id is: ", id)

    if(id.length !== 36){
        return notFound()
    }

    const group: ChatGroupType | null  = await fetchChatGroup(id)
    const users: Array<GroupChatUserType> | [] = await fetchChatUsers(id)

    if(group == null){
        return notFound()
    }

    return(
        <div>
            <ChatBase group = {group} users = {users}/>
        </div>
    )
}
