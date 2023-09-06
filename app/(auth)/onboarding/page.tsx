import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { fetchUser } from "@/lib/actions/user.actions";
import AccountProfile from "@/components/forms/AccountProfile";

async function Page() {
  const user = await currentUser();
  if (!user) return null; // to avoid typescript warnings

  const userInfo = await fetchUser(user.id);
  if (userInfo?.onboarded) redirect("/dashboard");


  const userData = {
    id: user.id,
    objectId: userInfo?._id,
    vechile_number: userInfo ? userInfo?.vechile_number : "",
    vechileName: userInfo ? userInfo?.vechileName :  "",
    vechileType: userInfo ? userInfo?.vechileType : "",
    vechileImage: userInfo ? userInfo?.vechileImage : "",
    userImage: userInfo ? userInfo?.image : user.imageUrl,
    email: userInfo ? userInfo?.email : user.emailAddresses[0].emailAddress,
    userName: userInfo ? userInfo?.name : user.firstName 
    ,
  };

  return (
    <main className='mx-auto flex max-w-3xl flex-col justify-start px-10 py-20'>
      <h1 className='head-text'>Onboarding</h1>
      <p className=' text-base-regular text-black'>
        Complete your profile now, to move forward
      </p>

      <section className='mt-9 bg-[#fdfdfd] p-10'>
        <AccountProfile user={userData} btnTitle='Continue' />
      </section>
    </main>
  );
}

export default Page;