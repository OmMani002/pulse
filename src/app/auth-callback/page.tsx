import { useRouter, useSearchParams } from "next/navigation"

const Page = async () => {
    const router = useRouter()

    const serachParams = useSearchParams()
    const origin = serachParams.get('origin')      //origin is taken from dashboard page.tsx from redirect line


    {/* using tRPC here */} 
    const apiResponse = await fetch('/api/whatever')

    const data = await apiResponse.json()
    
}

export default Page