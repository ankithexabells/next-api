import main from "@/server/db"
import User from "@/server/models/User"
import { NextResponse } from "next/server"
main()

export const GET = async(req,res) =>{
    try {
        const users = await User.findAll()
        return NextResponse.json({success:true,users})
    } catch (error) {   
        console.error(error);
        return NextResponse.error({success:false,error:error})
    }
}