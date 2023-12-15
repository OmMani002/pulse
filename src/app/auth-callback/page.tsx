import { useRouter, useSearchParams } from "next/navigation"
import { trpc } from "../_trpc/client"

const Page = async () => {
    const router = useRouter()

    const serachParams = useSearchParams()
    const origin = serachParams.get('origin')      //origin is taken from dashboard page.tsx from redirect line


    {/* using tRPC here */} 

    const {data, isLoading} = trpc.authCallback.useQuery(undefined, {
        onSuccess: ({success}) => {
            if(success) {
                //user is synced to db
                router.push(origin ? `/$(origin)` : '/dashboard')
            }
        }
    })
    
}

export default Page