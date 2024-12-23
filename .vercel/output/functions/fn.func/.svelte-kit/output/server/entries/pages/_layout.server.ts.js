import "../../chunks/client.js";
const load = async ({ locals: { session } }) => {
  return {
    session
  };
};
export {
  load
};
