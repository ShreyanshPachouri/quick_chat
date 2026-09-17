import DashNav from '@/src/components/dashboard/DashNav'
import { authOptions, CustomSession } from '../api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth'
import CreateChat from '@/src/components/groupChat/CreateChat'

export default async function dashboard(){
    const session: CustomSession | null = await getServerSession(authOptions)

    return(
        <div>
            <DashNav name={session?.user?.name ?? "User"} image={session?.user?.image ?? undefined}/>
            <div className="container">
            <div className="flex justify-end mt-10"><CreateChat user = {session!.user!} /></div>
            </div>
        </div>
    )
}