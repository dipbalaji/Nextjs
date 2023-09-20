import { NextRequest, NextResponse } from "next/server"

export function GET(request){
  
    const users =   [
        {
            name:'durgesh tiwari',
            phone:12345,
            course:'java'
        },
        {
            name:'Balaji Pandagale',
            phone:7218328,
            course:'full stack'
        }
    ]
    return NextResponse.json(users)

}


export function POST(){
    
}

export function DELETE(request){
    console.log("Deleted api called");
    return NextResponse.json({
        message:"deleted",
        status:true
    },{status:201,statusText:"status text"})
}

export function PUT(){
    
}