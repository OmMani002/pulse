import Dashboard from "@/components/Dashboard"
import { db } from "@/db"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { redirect } from "next/navigation"

//used async and await here

const UserProfile = async () => {
	const { getUser, isAuthenticated } = getKindeServerSession();
    const user = await getUser();

	return (
		
        (await isAuthenticated()) &&
            <Dashboard/>
	)
};

export default UserProfile