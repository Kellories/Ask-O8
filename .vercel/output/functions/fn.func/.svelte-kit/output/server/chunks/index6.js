import { d as db, p as profileTable } from "./index4.js";
import { e as error } from "./index2.js";
import { eq } from "drizzle-orm";
const getOrCreateUserProfile = async (locals) => {
  const { user } = await locals.safeGetSession();
  if (!user) {
    return null;
  }
  const curProfile = await db.query.profileTable.findFirst({
    where: eq(profileTable.id, user.id)
  });
  if (curProfile) {
    return curProfile;
  }
  await db.insert(profileTable).values({
    id: user.id,
    firstName: "",
    lastName: "",
    email: user.email ?? ""
  });
  const newProfile = await db.query.profileTable.findFirst({
    where: eq(profileTable.id, user.id)
  });
  if (!newProfile) {
    error(500, "Could not create profile");
  }
  return newProfile;
};
export {
  getOrCreateUserProfile as g
};
