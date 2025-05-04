import { Inngest } from "inngest";

// Create inngest client
export const inngest = new Inngest({ name: "QuickCart" });

// Define functions
export const syncUserCreation = inngest.createFunction(
  { id: "user-created" },
  { event: "user/created" },
  async ({ event }) => {
    // your logic
    return { message: "User created synced" };
  }
);

export const syncUserUpdation = inngest.createFunction(
  { id: "user-updated" },
  { event: "user/updated" },
  async ({ event }) => {
    // your logic
    return { message: "User updated synced" };
  }
);

export const syncUserDelete = inngest.createFunction(
  { id: "user-deleted" },
  { event: "user/deleted" },
  async ({ event }) => {
    // your logic
    return { message: "User deleted synced" };
  }
);
