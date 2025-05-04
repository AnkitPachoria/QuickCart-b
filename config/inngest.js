import { Inngest } from "inngest";
import connectDB from "./db";
import User from "@/models/User";

// Create a client to send and receive events
export const inngest = new Inngest({ 
    id: 'signkey-prod-85c41f90f2d083a799241900cdb8e522af838bba074e5bec23ff289c4936c598',
    // id: "quickcart-next" 
});


// inngest Function to save user data to a databse 
 export const syncUserCreation = inngest.createFunction(
    {
        if:'sync-user-from-clerk'
    },
    {
        event:'clerk/user.create'
    },async({event}) => {
        const { id, first_name, last_name, email_addresses,image_url
        } = event.data
        const userData ={
            _id:id,
            email:email_addresses[0].email_address,
            name: first_name + ' ' + last_name,
            imageUrl:image_url
        }
        await connectDB()
        await User.create(userData)
    }
    
 )

// ###########  # update 

export const syncUserUpdation = inggest.createFunction(
    {
        id: 'update-user-from-clerk'
    },
    { event : 'clerk/user.update'},
    async ({event})=>{
        const userData ={
            _id:id,
            email:email_addresses[0].email_address,
            name: first_name + ' ' + last_name,
            imageUrl:image_url
        }
        await connectDB()
        await User.findByIdAndUpdate(id,userData)
    }
)

// Deleet functon to user from database

export const syncUserDelete = inggest.createFunction(
    {
        id: 'delete-user-with-clerk'
    },
    { event : 'clerk/user.deleted'},
    async ({event}) => {
        const {id } = event.data

        await connectDB()
        await User.findByIdAndDelete(id)
    }
)