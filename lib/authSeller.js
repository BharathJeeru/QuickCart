import { clerkClient } from "@clerk/nextjs/server";

const authSeller = async (userId) => {
  try {
    const user = await clerkClient.users.getUser(userId);
    return user.publicMetadata?.role === "seller";
  } catch (error) {
    return false;
  }
};

export default authSeller;
