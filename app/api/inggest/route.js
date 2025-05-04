import { serve } from "inngest/next";
import { inngest, syncUserCreation, syncUserDelete, syncUserUpdation } from "@/config/inngest";

// Create an API that serves the required functions
export const { GET, POST, PUT } = serve({
  client: inngest,  // Use the configured inngest client
  functions: [
    syncUserCreation,  // Function for user creation
    syncUserUpdation,  // Function for user updation
    syncUserDelete     // Function for user deletio
  ],
});

// You can add other handlers if necessary, such as DELETE, PATCH, etc.
