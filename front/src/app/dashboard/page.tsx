import DashNav from '@/src/components/dashboard/DashNav'
import { authOptions, CustomSession } from '../api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth'
import CreateChat from '@/src/components/groupChat/CreateChat'
import { fetchChatGroups } from '@/src/fetch/groupFetch'
import GroupChatCard from '@/src/components/groupChat/GroupChatCard'

export default async function dashboard(){
    const session: CustomSession | null = await getServerSession(authOptions)
    const groups: Array<ChatGroupType> | [] = await fetchChatGroups(session!.user!.token!)
    console.log("The groups are ", groups)
    
    return(
        <div>
            <DashNav name={session?.user?.name ?? "User"} image={session?.user?.image ?? undefined}/>
            <div className="container">
            <div className="flex justify-end mt-10"><CreateChat user = {session!.user!} /></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {groups.length > 0 &&
            groups.map((item, index) => (
              <GroupChatCard group={item} key={index} user={session!.user!} />
            ))}
        </div>
        </div>
    )
}