import { g as getOrCreateUserProfile } from "../../chunks/index6.js";
import { d as db, p as profileTable } from "../../chunks/index4.js";
import { e as error } from "../../chunks/index2.js";
import { eq } from "drizzle-orm";
import { zfd } from "zod-form-data";
const load = async ({ locals }) => {
  const userProfile = await getOrCreateUserProfile(locals);
  return {
    userProfile
  };
};
const actions = {
  default: async ({ request, locals }) => {
    const userProfile = await getOrCreateUserProfile(locals);
    if (!userProfile) {
      error(401, "You need to be logged in!");
    }
    const schema = zfd.formData({
      firstName: zfd.text(),
      lastName: zfd.text(),
      email: zfd.text()
    });
    const { data } = schema.safeParse(await request.formData());
    if (!data) {
      error(400, "Invalid form data");
    }
    await db.update(profileTable).set({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email
    }).where(eq(profileTable.id, userProfile.id));
    return { success: true };
  }
};
export {
  actions,
  load
};
