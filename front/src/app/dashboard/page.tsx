import DashNav from '@/src/components/dashboard/DashNav'
import { authOptions, CustomSession } from '../api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth'

export default async function dashboard(){
    const session: CustomSession | null = await getServerSession(authOptions)

    return(
        <div>
            <DashNav name={session?.user?.name ?? "User"} image={session?.user?.image ?? undefined}/>
        </div>
    )
}